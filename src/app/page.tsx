"use client";

import LargeLink from "@/components/links/LargeLink";
import Abstract3dSeriesLink from "@/components/links/content/Abstract3dSeriesLink";
import CodeProjectLink from "@/components/links/content/CodeProjectLink";
import RecipeLink from "@/components/links/content/RecipeLink";
import GitHubLink from "@/components/links/social/GitHubLink";
import InstagramLink from "@/components/links/social/InstagramLink";
import LinkedInLink from "@/components/links/social/LinkedInLink";
import BdavDev from "@/components/misc/BdavDev";
import Spacer from "@/components/pageElements/Spacer";
import Tile from "@/components/pageElements/Tile";
import PageBody from "@/components/pageLayout/PageBody";
import HStack from "@/components/pageStructure/stacks/HStack";
import VStack from "@/components/pageStructure/stacks/VStack";
import { abstract3dSeriesImages } from "@/content/3d/abstract3dSeries";
import { codeProjects } from "@/content/code/codeProjects";
import { recipes } from "@/content/recipes/recipes";
import AboutIcon from "@/icons/AboutIcon";
import BlenderIcon from "@/icons/BlenderIcon";
import CodeIcon from "@/icons/CodeIcon";
import RecipesIcon from "@/icons/RecipiesIcon";
import { useEffect, useState } from "react";


function chooseRandom<T>(array: T[]): T {
    return array.at(getRandomInteger(array.length))!;
}

function getRandomInteger(upperBoundExclusive: number) {
    return Math.floor(Math.random() * upperBoundExclusive);
}

export default function Home() {
    let [randomCodeProject, setRandomCodeProject] = useState(codeProjects.timecoder);
    let [randomA3dsImage, setRandomA3dsImage] = useState(abstract3dSeriesImages["19"]);
    let [randomRecipe, setRandomRecipe] = useState(recipes.cheeseburger);

    useEffect(() => {
        setRandomCodeProject(() => chooseRandom(Object.values(codeProjects)));
        setRandomA3dsImage(() => chooseRandom(Object.values(abstract3dSeriesImages)));
        setRandomRecipe(() => chooseRandom(Object.values(recipes)));
    }, []);

    return (
        <PageBody sitePath={"/"} hidePathBar>

            <div className="flex flex-col h-full my-auto">

                <h1 className="text-4xl w-fit mx-auto text-center my-12">
                    Welcome to <BdavDev />
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
                                href="/code/"
                                icon={<CodeIcon className="stroke-black dark:stroke-white stroke-[3.25] pb-2" />}
                                text="Code"
                            />

                            <LargeLink
                                href="/3d/"
                                icon={<BlenderIcon className="stroke-black dark:stroke-white stroke-[3.25] pb-2" />}
                                text="3D"
                            />

                        </div>

                        <div className={`
                            flex flex-row gap-4
                            justify-center w-full
                            md:mr-auto md:w-fit
                        `}>

                            <LargeLink
                                href="/recipes/"
                                icon={<RecipesIcon className="stroke-black dark:stroke-white stroke-[3.25] pb-2" />}
                                text="Recipes"
                            />

                            <LargeLink
                                href="/about/"
                                icon={<AboutIcon className="stroke-black dark:stroke-white stroke-[3.25] pb-2" />}
                                text="About"
                            />

                        </div>

                    </div>


                    <Spacer className="my-5" />


                    <HStack className="gap-5">
                        <div className="flex flex-col grow">
                            <span className="pl-0.5">Featured Code Project</span>

                            <Tile
                                className="p-5 grow"
                                customPadding
                            >
                                <div className="flex justify-center items-center h-full drop-shadow-sm dark:drop-shadow-md">
                                    <CodeProjectLink codeProject={randomCodeProject} />
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
                                    <Abstract3dSeriesLink abstract3dSeriesImage={randomA3dsImage} />
                                </div>
                            </Tile>
                        </div>

                        <div className="flex flex-col grow">
                            <span className="pl-0.5">Featured Recipe</span>

                            <Tile
                                className="p-5 grow"
                                customPadding
                            >
                                <div className="flex justify-center items-center h-full drop-shadow-sm dark:drop-shadow-md">
                                    <RecipeLink recipe={randomRecipe} />
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
                            <GitHubLink />
                            <InstagramLink />
                            <LinkedInLink />
                        </div>

                    </Tile>

                </VStack>

            </div >

        </PageBody >
    );
}
