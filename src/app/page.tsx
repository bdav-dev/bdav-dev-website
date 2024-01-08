import Abstract3dSeriesLink from "@/components/links/Abstract3dSeriesLink";
import CodeProjectLink from "@/components/links/CodeProjectLink";
import RecipeLink from "@/components/links/RecipeLink";
import GitHubLink from "@/components/links/social/GitHubLink";
import InstagramLink from "@/components/links/social/InstagramLink";
import LinkedInLink from "@/components/links/social/LinkedInLink";
import Code from "@/components/pageElements/Code";
import Spacer from "@/components/pageElements/Spacer";
import Tile from "@/components/pageElements/Tile";
import PageBody from "@/components/pageLayout/PageBody";
import HStack from "@/components/pageStructure/stacks/HStack";
import VStack from "@/components/pageStructure/stacks/VStack";
import { abstract3dSeriesImages } from "@/content/3d/abstract3dSeries";
import { codeProjects } from "@/content/code/codeProjects";
import { recipes } from "@/content/recipes/recipes";
import { spaceMonoBold } from "@/fonts";
import AboutIcon from "@/icons/AboutIcon";
import BlenderIcon from "@/icons/BlenderIcon";
import CodeIcon from "@/icons/CodeIcon";
import RecipesIcon from "@/icons/RecipiesIcon";
import Link from "next/link";


function chooseRandom<T>(array: T[]): T {
    return array.at(getRandomInteger(array.length))!;
}

function getRandomInteger(upperBoundExclusive: number) {
    return Math.floor(Math.random() * upperBoundExclusive);
}

export default function Home() {

    return (
        <PageBody sitePath={"/"} hidePathBar>

            <div className="flex flex-col h-full my-auto">

                <h1 className="text-4xl w-fit mx-auto text-center my-12">
                    Welcome to <span className={spaceMonoBold}>bdav.dev</span>
                </h1>

                <VStack className="gap-5">

                    <div className="flex flex-col md:flex-row gap-4">

                        <div className={`
                            min-w-0
                            flex flex-row gap-4
                            justify-center w-full
                            md:ml-auto md:w-fit
                        `}>

                            <Link href={"/code/"} className="hover:scale-105 transition-all drop-shadow-sm">
                                <Tile childrenClassName="h-32 w-32 flex flex-col justify-center text-center">
                                    <CodeIcon className="stroke-black dark:stroke-white stroke-[2.5] pb-2" />
                                    <Code>Code</Code>
                                </Tile>
                            </Link>

                            <Link href={"/3d/"} className="hover:scale-105 transition-all drop-shadow-sm">
                                <Tile childrenClassName="h-32 w-32 flex flex-col justify-center text-center">
                                    <BlenderIcon className="stroke-black dark:stroke-white stroke-[2.5] pb-2" />
                                    <Code>3D</Code>
                                </Tile>
                            </Link>
                        </div>

                        <div className={`
                            flex flex-row gap-4
                            justify-center w-full
                            md:mr-auto md:w-fit
                        `}>

                            <Link href={"/recipes/"} className="hover:scale-105 transition-all drop-shadow-sm">
                                <Tile childrenClassName="h-32 w-32 flex flex-col justify-center text-center">
                                    <RecipesIcon className="stroke-black dark:stroke-white stroke stroke-[2.5] pb-2" />
                                    <Code>Recipes</Code>
                                </Tile>
                            </Link>

                            <Link href={"/about/"} className="hover:scale-105 transition-all drop-shadow-sm">
                                <Tile childrenClassName="h-32 w-32 flex flex-col justify-center text-center">
                                    <AboutIcon className="stroke-black dark:stroke-white stroke-[2.5] pb-2" />
                                    <Code>About</Code>
                                </Tile>
                            </Link>

                        </div>

                    </div>


                    <Spacer className="my-5"/>


                    <HStack className="gap-5">

                        <div className="flex flex-col grow">
                            Random Code Project
                            <Tile
                                childrenClassName="flex justify-center items-center h-full"
                                className="p-5"
                                customPadding
                            >
                                <div className="drop-shadow-sm dark:drop-shadow-md">
                                    <CodeProjectLink codeProject={chooseRandom(Object.values(codeProjects))} />
                                </div>
                            </Tile>
                        </div>

                        <div className="flex flex-col grow">
                            Random Abstract3D Series image
                            <Tile
                                childrenClassName="flex justify-center items-center h-full"
                                className="p-5"
                                customPadding
                            >
                                <Abstract3dSeriesLink abstract3dSeriesImage={chooseRandom(Object.values(abstract3dSeriesImages))} />
                            </Tile>
                        </div>
                        <div className="flex flex-col grow">
                            Random Recipe

                            <Tile
                                childrenClassName="flex justify-center items-center h-full"
                                className="p-5"
                                customPadding
                            >
                                <div className="drop-shadow-sm dark:drop-shadow-md">
                                    <RecipeLink recipe={chooseRandom(Object.values(recipes))} />
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
