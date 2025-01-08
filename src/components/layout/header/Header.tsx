'use client';

import BlenderIcon from "@/icons/BlenderIcon";
import CategoryButton from "./CategoryButton";
import CodeIcon from "@/icons/CodeIcon";
import AboutIcon from "@/icons/AboutIcon";
import DropdownMenu from "./DropdownMenu";
import InstagramIcon from "@/icons/InstagramIcon";
import { CodeProjects } from "@/content/code/codeProjects";
import { recipes } from "@/content/recipes/recipes";
import GitHubIcon from "@/icons/GitHubIcon";
import VerticalRuler from "@/components/VerticalRuler";
import ThemeToggle from "@/components/theme/ThemeToggle";
import RecipesIcon from "@/icons/RecipiesIcon";
import { usePathname } from "next/navigation";
import { Route } from "@/utils/RouteUtils";
import BdavDevHome from "@/components/layout/header/BdavDevHome";

type Category = "code" | "3d" | "recipes" | "about" | string | undefined;


function mapCodeProjectsToDropdownItems() {
    return Object.values(CodeProjects).map(codeProject => (
        {
            href: Route.codeProject(codeProject),
            text: codeProject.customDropdownText ?? codeProject.title
        }
    ));
}

function mapRecipesToDropdownItems() {
    return Object.values(recipes).map(recipe => (
        {
            href: Route.recipe(recipe),
            text: recipe.customDropdownText ?? recipe.title
        }
    ));
}

export default function Header() {
    const category: Category = usePathname().split("/")[1] || undefined;

    return (
        <>
            <div className="fixed top-0 w-full z-50">
                <nav className={`
                    flex flex-col xs:flex-row items-center justify-center
                    p-2.5 pl-3.5 m-2
                    rounded-2xl
                    bg-zinc-300 dark:bg-zinc-700
                    bg-opacity-60 dark:bg-opacity-60
                    backdrop-blur-md
                    select-none
                    h-[5.75rem] xs:h-[3.75rem]
                `}>
                    <BdavDevHome className={'mr-3.5'}/>

                    <div className="xs:ml-auto flex flex-row h-11 justify-center items-center">
                        <CategoryButton
                            icon={CodeIcon}
                            text="Code"
                            link={Route.code}
                            selected={category == "code"}
                            dropdownMenu={
                                <DropdownMenu
                                    groups={[
                                        [
                                            {
                                                href: "https://github.com/bdav-dev",
                                                icon: GitHubIcon,
                                                text: 'GitHub',
                                                inNewTab: true
                                            }
                                        ],
                                        mapCodeProjectsToDropdownItems()
                                    ]}
                                />
                            }
                        />

                        <CategoryButton
                            icon={BlenderIcon}
                            text="3D"
                            link={Route.blender}
                            selected={category == "3d"}
                            dropdownMenu={
                                <DropdownMenu
                                    groups={[
                                        [
                                            {
                                                href: "https://www.instagram.com/davidb.3d/",
                                                icon: InstagramIcon,
                                                text: 'Instagram',
                                                inNewTab: true
                                            }
                                        ],
                                        [
                                            {
                                                href: "/3d/abstract-3d-series/",
                                                text: <span className="whitespace-nowrap">Abstract3D Series</span>,
                                                inNewTab: false
                                            }
                                        ]
                                    ]}
                                />
                            }
                        />

                        <CategoryButton
                            icon={RecipesIcon}
                            text="Recipes"
                            link={Route.recipes}
                            selected={category == "recipes"}
                            dropdownMenu={
                                <DropdownMenu groups={[mapRecipesToDropdownItems()]}/>
                            }
                        />

                        <CategoryButton
                            icon={AboutIcon}
                            text="About"
                            link={Route.about}
                            selected={category == "about"}
                        />

                        <VerticalRuler className="ml-1 mr-1 h-9"/>

                        <ThemeToggle/>
                    </div>
                </nav>
            </div>

            <div className="xs:mb-20 mb-28"/>
        </>
    );

}