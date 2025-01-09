"use client";

import LargeLink from "@/components/link/LargeLink";
import Abstract3DLink, { Abstract3DLinkPlaceholder } from "@/components/link/content/Abstract3DLink";
import CodeProjectLink, { CodeProjectLinkPlaceholder } from "@/components/link/content/CodeProjectLink";
import RecipeLink, { RecipeLinkPlaceholder } from "@/components/link/content/RecipeLink";
import GitHubLink from "@/components/link/social/GitHubLink";
import InstagramLink from "@/components/link/social/InstagramLink";
import LinkedInLink from "@/components/link/social/LinkedInLink";
import WelcomeToBdavDevHeadline from "@/components/misc/WelcomeToBdavDevHeadline";
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
import { isNew } from "@/utils/categories/Abstract3DSeriesUtils";
import { Abstract3DSeriesSort } from "@/utils/SortUtils";
import { isEmpty } from "@/utils/ArrayUtils";

export default function HomePage() {
    let [featuredCodeProject, setFeaturedCodeProject] = useState<CodeProject>();
    let [featuredRecipe, setFeaturedRecipe] = useState<Recipe>();
    let [featuredAbstract3D, setFeaturedAbstract3D] = useState<Abstract3D>();
    let [isNewAbstract3D, setIsNewAbstract3D] = useState(false);

    function setAbstract3D() {
        const newAbstract3Ds = Object.values(Abstract3DSeries)
            .filter(isNew)
            .sort(Abstract3DSeriesSort);
        const areNewAbstract3DsPresent = !isEmpty(newAbstract3Ds);

        setIsNewAbstract3D(areNewAbstract3DsPresent);
        setFeaturedAbstract3D(
            areNewAbstract3DsPresent
                ? newAbstract3Ds[0]
                : chooseRandom(Object.values(Abstract3DSeries))
        );
    }

    useEffect(() => {
        setFeaturedCodeProject(chooseRandom(Object.values(CodeProjects)));
        setFeaturedRecipe(chooseRandom(Object.values(recipes)));
        setAbstract3D();
    }, []);

    return (
        <>
            <WelcomeToBdavDevHeadline/>

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
                        <span className="pl-0.5">
                            {isNewAbstract3D ? 'New' : 'Featured'} Abstract3D Series Image
                        </span>
                        <Tile
                            className="p-5 grow"
                            customPadding
                        >
                            <div className="flex justify-center items-center h-full">
                                {
                                    featuredAbstract3D
                                        ? <Abstract3DLink abstract3D={featuredAbstract3D}/>
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
