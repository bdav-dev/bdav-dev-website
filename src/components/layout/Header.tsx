'use client';

import CubeIcon from "@/icons/app/CubeIcon";
import CodeIcon from "@/icons/app/CodeIcon";
import { CodeProjects } from "@/categories/code/content/codeProjects";
import GitHubInvertocat from "@/icons/logo/GitHubInvertocat";
import VerticalRuler from "@/components/library/VerticalRuler";
import ThemeToggle from "@/components/theme/ThemeToggle";
import { usePathname } from "next/navigation";
import { BdavDev, getBaseOfRoute, SocialMedia } from "@/utilities/routing";
import { Recipes } from "@/categories/recipes/content/recipes";
import ChefHatIcon from "@/icons/app/ChefHatIcon";
import InstagramGlyph from "@/icons/logo/InstagramGlyph";
import { Fragment, ReactNode } from "react";
import Link from "next/link";
import { createIsLast } from "@/utilities/array";


export default function Header() {
    const categoryRoute = getBaseOfRoute(usePathname());

    return (
        <nav className={'header'}>
            <BdavDevHomeLink/>

            <div className="flex flex-row xs:ml-auto justify-center items-center gap-1">
                <CategoryLink
                    icon={<CodeIcon weight={300} className={'text-[1.05em]'}/>}
                    text={'Code'}
                    href={BdavDev.code.getRoute()}
                    selected={categoryRoute === BdavDev.code.getRoute()}
                    menu={
                        [
                            [
                                {
                                    href: SocialMedia.gitHub.bdavDev.href,
                                    icon: <GitHubInvertocat className={'text-[0.8em]'}/>,
                                    text: 'GitHub'
                                }
                            ],
                            Object.values(CodeProjects).map(
                                codeProject => (
                                    {
                                        href: BdavDev.code.$project.getRoute({ project: codeProject }),
                                        text: codeProject.title
                                    }
                                )
                            )
                        ]
                    }
                />

                <CategoryLink
                    icon={<CubeIcon weight={300} className={'text-[1.05em]'}/>}
                    text={'3D'}
                    href={BdavDev.blender.getRoute()}
                    selected={categoryRoute === BdavDev.blender.getRoute()}
                    menu={
                        [
                            [
                                {
                                    href: SocialMedia.instagram.davidb3d.href,
                                    icon: <InstagramGlyph className={'text-[0.8em]'}/>,
                                    text: 'Instagram'
                                }
                            ],
                            [
                                {
                                    href: BdavDev.blender.abstract3dSeries.getRoute(),
                                    text: 'Abstract3D Series'
                                }
                            ]
                        ]
                    }
                />

                <CategoryLink
                    icon={<ChefHatIcon weight={300} className={'text-[1.05em]'}/>}
                    text={'Recipes'}
                    href={BdavDev.recipes.getRoute()}
                    selected={categoryRoute === BdavDev.recipes.getRoute()}
                    menu={
                        [
                            Object.values(Recipes).map(
                                recipe => (
                                    {
                                        href: BdavDev.recipes.$recipe.getRoute({ recipe }),
                                        text: recipe.title
                                    }
                                )
                            )
                        ]
                    }
                />

                <VerticalRuler className="mx-0.5 h-9"/>

                <ThemeToggle/>
            </div>
        </nav>
    );
}


function BdavDevHomeLink() {
    return (
        <Link
            href={BdavDev.getRoute()}
            className={'bdav-dev-home-link py-0.5 px-1 rounded-md'}
            draggable={false}
        >
            bdav.dev
        </Link>
    );
}


type CategoryLinkProps = {
    icon: ReactNode,
    text: ReactNode,
    href: string,
    selected?: boolean,
    menu?: MenuItem[][]
};

function CategoryLink(props: CategoryLinkProps) {
    return (
        <div className={'relative group h-10'}>
            <Link
                href={props.href}
                className={`
                    flex flex-row items-center gap-0.5
                    h-10 p-1.5
                    select-none
                    rounded-lg
                    transition-colors duration-200
                    ${props.selected ? "bg-zinc-350/80 dark:bg-zinc-925/80" : "hover:bg-zinc-300/95 dark:hover:bg-zinc-700/90"}
                `}
                draggable={false}
            >
                {props.icon}
                <span className={'hidden sm:inline-flex'}>{props.text}</span>
            </Link>
            {
                props.menu &&
                <div className={'absolute left-1/2 invisible group-hover:visible pointer-events-none'}>
                    <div className={'relative -left-1/2 pt-1 group-hover:pointer-events-auto'}>
                        <DropdownMenu groups={props.menu}/>
                    </div>
                </div>
            }
        </div>
    );
}


type MenuItem = {
    icon?: ReactNode,
    text: ReactNode,
    href: string
}

function DropdownMenu(props: { groups: MenuItem[][] }) {
    const isLastGroup = createIsLast(props.groups);

    return (
        <ul
            className={`
                flex flex-col items-center
                popover
                transition-all
                opacity-0 group-hover:opacity-100
                scale-90 group-hover:scale-100
                gap-0.5
            `}
        >
            {
                props.groups.map(
                    (group, groupIndex) => (
                        <Fragment key={`group-${groupIndex}`}>
                            {
                                group.map((item, itemIndex) => <DropdownItem key={`group-${groupIndex},item-${itemIndex}`} {...item}/>)
                            }
                            {
                                !isLastGroup(groupIndex) &&
                                <hr key={groupIndex} className="w-[90%] my-0.5 border-zinc-300 dark:border-zinc-700"/>
                            }
                        </Fragment>
                    )
                )
            }
        </ul>
    );
}


function DropdownItem(props: MenuItem) {
    return (
        <Link
            href={props.href}
            className={`
                flex justify-center items-center gap-1
                w-full
                px-1 py-0.5 rounded-md
                text-center whitespace-nowrap
                hover:bg-zinc-300 dark:hover:bg-zinc-600
                transition-colors
            `}
        >
            {props.icon} {props.text}
        </Link>
    );
}
