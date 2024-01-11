import BlenderIcon from "@/icons/BlenderIcon";
import Category from "./Category";
import CodeIcon from "@/icons/CodeIcon";
import AboutIcon from "@/icons/AboutIcon";
import RecipiesIcon from "@/icons/RecipiesIcon";
import Link from "next/link";
import DropdownMenu from "./DropdownMenu";
import InstagramIcon from "@/icons/InstagramIcon";
import { codeProjects } from "@/content/code/codeProjects";
import { recipes } from "@/content/recipes/recipes";
import GitHubIcon from "@/icons/GitHubIcon";
import VerticalRuler from "@/components/pageElements/VerticalRuler";
import DarkModeToggle from "@/components/theme/DarkModeToggle";

export type Categories = "Code" | "3D" | "Recipes" | "About";

type HeaderProps = {
    selected?: Categories
}

function mapCodeProjectsToDropdownItems() {
    return Object.values(codeProjects).map(codeProject => {
        return {
            href: codeProject.path,
            text: codeProject.customDropdownText ?? codeProject.title
        }
    });
}

function mapRecipesToDropdownItems() {
    return Object.values(recipes).map(recipe => {
        return {
            href: recipe.path,
            text: recipe.customDropdownText ?? recipe.title
        }
    });
}

export default function Header(props: HeaderProps) {

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

                    <Link href="/" className="pr-3.5 mt-0.5 mb-0.5" draggable="false">
                        <h1 className="text-xl">bdav.dev</h1>
                    </Link>

                    <div className="xs:ml-auto flex flex-row h-fit">
                        <Category
                            icon={<CodeIcon className="dark:stroke-white stroke-black stroke-[5] h-fit w-7" />}
                            text="Code"
                            link="/code/"
                            selected={props.selected == "Code"}
                            dropdownMenu={
                                <DropdownMenu
                                    dropdownMenuGroups={[
                                        [
                                            {
                                                href: "https://github.com/bdav-dev",
                                                text: (
                                                    <>
                                                        GitHub
                                                        <GitHubIcon className="h-4 inline dark:fill-white fill-black ml-1 mb-0.5" />
                                                    </>
                                                ),
                                                inNewTab: true
                                            }
                                        ],
                                        mapCodeProjectsToDropdownItems()
                                    ]}
                                />
                            }
                        />

                        <Category
                            icon={<BlenderIcon className="dark:stroke-white stroke-black stroke-[5] h-fit w-7" />}
                            text="3D"
                            link="/3d/"
                            selected={props.selected == "3D"}
                            dropdownMenu={
                                <DropdownMenu
                                    dropdownMenuGroups={[
                                        [
                                            {
                                                href: "https://www.instagram.com/davidb.3d/",
                                                text: (
                                                    <>
                                                        Instagram
                                                        <InstagramIcon className="h-4 inline dark:fill-white fill-black ml-1" />
                                                    </>
                                                ),
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

                        <Category
                            icon={<RecipiesIcon className="dark:stroke-white stroke-black stroke-[5] h-fit w-7" />}
                            text="Recipes"
                            link="/recipes"
                            selected={props.selected == "Recipes"}
                            dropdownMenu={
                                <DropdownMenu
                                    dropdownMenuGroups={[
                                        mapRecipesToDropdownItems()
                                    ]}
                                />
                            }

                        />

                        <Category
                            icon={<AboutIcon className="dark:stroke-white stroke-black stroke-[5] h-fit w-7" />}
                            text="About"
                            link="/about"
                            selected={props.selected == "About"}
                        />

                        <VerticalRuler className="ml-1 mr-1 h-auto" />

                        <DarkModeToggle />

                    </div>

                </nav>
            </div>

            <div className="xs:mb-20 mb-28"></div>
        </>
    );

}