"use client";

import LargeLink from "@/components/library/link/LargeLink";
import Abstract3dImageLink, { Abstract3dImageLinkPlaceholder } from "@/categories/3d/a3ds/components/Abstract3dImageLink";
import CodeProjectLink, { CodeProjectLinkPlaceholder } from "@/categories/code/components/CodeProjectLink";
import GitHubLink from "@/components/link/social/GitHubLink";
import InstagramLink from "@/components/link/social/InstagramLink";
import LinkedInLink from "@/components/link/social/LinkedInLink";
import WelcomeToBdavDevHeadline from "@/components/misc/WelcomeToBdavDevHeadline";
import VerticalSpace from "@/components/library/spacing/VerticalSpace";
import Tile from "@/components/library/Tile";
import DEPRECATED_HStack from "@/components/library/stacks/DEPRECATED_HStack";
import DEPRECATED_VStack from "@/components/library/stacks/DEPRECATED_VStack";
import { Abstract3dImage, Abstract3dSeries } from "@/categories/3d/a3ds/content/abstract3dSeries";
import { CodeProject, CodeProjects } from "@/categories/code/content/codeProjects";
import CubeIcon from "@/icons/app/CubeIcon";
import CodeIcon from "@/icons/app/CodeIcon";
import ChefHatIcon from "@/icons/app/ChefHatIcon";
import { useEffect, useState } from "react";
import { chooseRandom } from "@/utils/RandomUtils";
import { isNew } from "@/categories/3d/a3ds/utilities/abstract3dSeriesUtilities";
import { isEmpty } from "@/utils/ArrayUtils";
import { BdavDev } from "@/routing";


export default function HomePage() {
    let [featuredCodeProject, setFeaturedCodeProject] = useState<CodeProject>();
    let [featuredAbstract3D, setFeaturedAbstract3D] = useState<Abstract3dImage>();
    let [isNewAbstract3D, setIsNewAbstract3D] = useState(false);

    function setAbstract3D() {
        const newAbstract3Ds = Object.values(Abstract3dSeries).filter(isNew);
        const areNewAbstract3DsPresent = !isEmpty(newAbstract3Ds);

        setIsNewAbstract3D(areNewAbstract3DsPresent);
        setFeaturedAbstract3D(
            areNewAbstract3DsPresent
                ? newAbstract3Ds[0]
                : chooseRandom(Object.values(Abstract3dSeries))
        );
    }

    useEffect(() => {
        setFeaturedCodeProject(chooseRandom(Object.values(CodeProjects)));
        setAbstract3D();
    }, []);

    return (
        <>
            <WelcomeToBdavDevHeadline/>

            <DEPRECATED_VStack className="gap-5">
                <div className="flex flex-col md:flex-row gap-4">
                    <div className={`
                            min-w-0
                            flex flex-row gap-4
                            justify-center w-full
                            md:ml-auto md:w-fit
                        `}>

                        <LargeLink
                            href={BdavDev.code.getRoute()}
                            icon={CodeIcon}
                            text="Code"
                        />

                        <LargeLink
                            href={BdavDev.blender.getRoute()}
                            icon={CubeIcon}
                            text="3D"
                        />

                    </div>

                    <div className={`
                            flex flex-row gap-4
                            justify-center w-full
                            md:mr-auto md:w-fit
                        `}>

                        <LargeLink
                            href={BdavDev.recipes.getRoute()}
                            icon={ChefHatIcon}
                            text="Recipes"
                        />

                    </div>

                </div>

                <VerticalSpace height='1.25rem'/>

                <DEPRECATED_HStack className="gap-5">
                    <div className="flex flex-col grow">
                        <span className="pl-0.5">Featured Code Project</span>

                        <Tile
                            className="p-5 grow"
                            customPadding
                        >
                            <div
                                className="flex justify-center items-center h-full">
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
                                        ? <Abstract3dImageLink image={featuredAbstract3D}/>
                                        : <Abstract3dImageLinkPlaceholder/>
                                }
                            </div>
                        </Tile>
                    </div>

                    <div className="flex flex-col grow">
                        <span className="pl-0.5">Featured Recipe</span>
                    </div>
                </DEPRECATED_HStack>

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

            </DEPRECATED_VStack>
        </>
    );
}
