"use client";

import LargeLink from "@/components/link/LargeLink";
import Abstract3DLink, { Abstract3DLinkPlaceholder } from "@/components/link/content/Abstract3DLink";
import CodeProjectLink, { CodeProjectLinkPlaceholder } from "@/components/link/content/CodeProjectLink";
import RecipeLink, { RecipeLinkPlaceholder } from "@/components/link/content/RecipeLink";
import GitHubLink from "@/components/link/social/GitHubLink";
import InstagramLink from "@/components/link/social/InstagramLink";
import LinkedInLink from "@/components/link/social/LinkedInLink";
import BdavDev from "@/components/misc/BdavDev";
import VerticalSpacer from "@/components/format/VerticalSpacer";
import Tile from "@/components/Tile";
import HStack from "@/components/layout/stacks/HStack";
import VStack from "@/components/layout/stacks/VStack";
import { Abstract3D, Abstract3DSeries } from "@/content/3d/a3ds/abstract3dSeries";
import { CodeProject, CodeProjects } from "@/content/code/codeProjects";
import { Recipe, recipes } from "@/content/recipes/recipes";
import AboutIcon from "@/icons/AboutIcon";
import BlenderIcon from "@/icons/BlenderIcon";
import CodeIcon from "@/icons/CodeIcon";
import RecipesIcon from "@/icons/RecipiesIcon";
import { useEffect, useState } from "react";
import { chooseRandom } from "@/utils/RandomUtils";
import { Route } from "@/utils/RouteUtils";

export default function HomePage() {
    let [featuredCodeProject, setFeaturedCodeProject] = useState<CodeProject>();
    let [featuredA3D, setFeaturedA3D] = useState<Abstract3D>();
    let [featuredRecipe, setFeaturedRecipe] = useState<Recipe>();

    useEffect(() => {
        setFeaturedCodeProject(() => chooseRandom(Object.values(CodeProjects)));
        setFeaturedA3D(() => chooseRandom(Object.values(Abstract3DSeries)));
        setFeaturedRecipe(() => chooseRandom(Object.values(recipes)));
    }, []);

    return (
        <>
            <h1 className="text-4xl w-fit mx-auto text-center my-12">
                Welcome to <BdavDev/>
            </h1>

            <VStack className="gap-5">
                <div className="flex flex-col md:flex-row gap-4">
                    <div className={`
                            min-w-0
                            flex flex-row gap-4
                            justify-center w-full
                            md:ml-auto md:w-fit
                        `}>

                        <LargeLink
                            href={Route.code}
                            icon={CodeIcon}
                            text="Code"
                        />

                        <LargeLink
                            href={Route.blender}
                            icon={BlenderIcon}
                            text="3D"
                        />

                    </div>

                    <div className={`
                            flex flex-row gap-4
                            justify-center w-full
                            md:mr-auto md:w-fit
                        `}>

                        <LargeLink
                            href={Route.recipes}
                            icon={RecipesIcon}
                            text="Recipes"
                        />

                        <LargeLink
                            href={Route.about}
                            icon={AboutIcon}
                            text="About"
                        />

                    </div>

                </div>

                <VerticalSpacer height='1.25rem'/>

                <HStack className="gap-5">
                    <div className="flex flex-col grow">
                        <span className="pl-0.5">Featured Code Project</span>

                        <Tile
                            className="p-5 grow"
                            customPadding
                        >
                            <div
                                className="flex justify-center items-center h-full drop-shadow-sm dark:drop-shadow-md">
                                {
                                    featuredCodeProject
                                        ? <CodeProjectLink codeProject={featuredCodeProject}/>
                                        : <CodeProjectLinkPlaceholder/>
                                }
                            </div>
                        </Tile>
                    </div>

                    <div className="flex flex-col grow">
                        <span className="pl-0.5">Featured Abstract3D Series Image</span>
                        <Tile
                            className="p-5 grow"
                            customPadding
                        >
                            <div className="flex justify-center items-center h-full">
                                {
                                    featuredA3D
                                        ? <Abstract3DLink abstract3D={featuredA3D}/>
                                        : <Abstract3DLinkPlaceholder/>
                                }
                            </div>
                        </Tile>
                    </div>

                    <div className="flex flex-col grow">
                        <span className="pl-0.5">Featured Recipe</span>

                        <Tile
                            className="p-5 grow"
                            customPadding
                        >
                            <div
                                className="flex justify-center items-center h-full drop-shadow-sm dark:drop-shadow-md">
                                {
                                    featuredRecipe
                                        ? <RecipeLink recipe={featuredRecipe}/>
                                        : <RecipeLinkPlaceholder/>
                                }
                            </div>
                        </Tile>
                    </div>
                </HStack>

                <Tile className="text-center mb-3">

                    <div className="my-1.5 text-lg">
                        Visit me on
                    </div>

                    <div className={`
                            flex
                            flex-col justify-center
                            sm:flex-row
                            items-center
                            sm:gap-2
                        `}>
                        <GitHubLink/>
                        <InstagramLink/>
                        <LinkedInLink/>
                    </div>

                </Tile>
            </VStack>
        </>
    );
}
