'use client';

import CubeIcon from "@/icons/CubeIcon";
import CategoryLink from "./CategoryLink";
import CodeIcon from "@/icons/deprecated/CodeIcon";
import DropdownMenu from "./DropdownMenu";
import InstagramIcon from "@/icons/deprecated/InstagramIcon";
import { CodeProject, CodeProjects } from "@/categories/code/content/codeProjects";
import { recipes } from "@/categories/recipes/recipes";
import GitHubIcon from "@/icons/logos/GitHubIcon";
import VerticalRuler from "@/components/library/VerticalRuler";
import ThemeToggle from "@/components/theme/ThemeToggle";
import { usePathname } from "next/navigation";
import BdavDevHomeLink from "@/components/layout/header/BdavDevHomeLink";
import { BdavDev } from "@/routing";


export default function Header() {
    const categoryRoute = getCategoryRoute(usePathname());

    return (
        <>
            <div className="fixed top-0 w-full z-50">
                <nav className={`
                    flex flex-col xs:flex-row
                    items-center justify-center gap-0.5
                    h-[5.75rem] xs:h-[3.75rem]
                    p-2.5 pl-3.5 m-4 mb-0
                    rounded-[1.25rem]
                    bg-zinc-300 dark:bg-zinc-700
                    bg-opacity-60 dark:bg-opacity-50
                    backdrop-blur-md
                    select-none
                `}>
                    <BdavDevHomeLink/>

                    <div className="flex flex-row xs:ml-auto justify-center items-center gap-1">
                        <CategoryLink
                            icon={<CodeIcon weight={300} className={'text-[1.05em]'}/>}
                            text={"Code"}
                            href={BdavDev.code.getRoute()}
                            selected={categoryRoute === BdavDev.code.getRoute()}
                            dropdownMenu={
                                <DropdownMenu
                                    groups={
                                        [
                                            [
                                                {
                                                    href: "https://github.com/bdav-dev",
                                                    icon: <GitHubIcon/>,
                                                    text: 'GitHub'
                                                }
                                            ],
                                            (Object.values(CodeProjects) as CodeProject[]).map(
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
                            }
                        />

                        <CategoryLink
                            icon={<CubeIcon weight={300} className={'text-[1.05em]'}/>}
                            text={"3D"}
                            href={BdavDev.blender.getRoute()}
                            selected={categoryRoute === BdavDev.blender.getRoute()}
                            dropdownMenu={
                                <DropdownMenu
                                    groups={
                                        [
                                            [
                                                {
                                                    href: "https://www.instagram.com/davidb.3d/",
                                                    icon: <InstagramIcon className={'w-5'}/>,
                                                    text: 'Instagram'
                                                }
                                            ],
                                            [
                                                {
                                                    href: "/3d/abstract-3d-series/",
                                                    text: <span className="whitespace-nowrap">Abstract3D Series</span>
                                                }
                                            ]
                                        ]
                                    }
                                />
                            }
                        />

                        <CategoryLink
                            icon={<></>}
                            text={"Recipes"}
                            href={BdavDev.recipes.getRoute()}
                            selected={categoryRoute === BdavDev.recipes.getRoute()}
                            dropdownMenu={
                                <DropdownMenu
                                    groups={
                                        [
                                            Object.values(recipes).map(
                                                recipe => (
                                                    {
                                                        href: BdavDev.recipes.$recipe.getRoute({ recipe }),
                                                        text: recipe.customDropdownText ?? recipe.title
                                                    }
                                                )
                                            )
                                        ]
                                    }
                                />
                            }
                        />

                        <CategoryLink
                            icon={<></>}
                            text={"About"}
                            href={BdavDev.about.getRoute()}
                            selected={categoryRoute === BdavDev.about.getRoute()}
                        />

                        <VerticalRuler className="mx-1 h-9"/>

                        <ThemeToggle/>
                    </div>
                </nav>
            </div>

            <div className="h-[7.25rem] xs:h-[5.25rem]"/>
        </>
    );
}

function getCategoryRoute(pathName: string) {
    let categoryRoute = pathName.split("/")[1] || undefined;
    if (categoryRoute != undefined) {
        categoryRoute = "/" + categoryRoute;
    }

    return categoryRoute;
}
