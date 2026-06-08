'use client';

import { Abstract3dImage, Abstract3dSeries } from "@/categories/3d/a3ds/content/abstract3dSeries";
import { CodeProject, CodeProjects } from "@/categories/code/content/codeProjects";
import { ComponentType, ReactNode, useEffect, useState } from "react";
import { chooseRandom } from "@/utils/RandomUtils";
import SkeletonLoadingCloudinaryImage from "@/components/SkeletonLoadingCloudinaryImage";
import { Recipe, Recipes } from "@/categories/recipes/content/recipes";
import { ThemeSwitch } from "@/contexts/ThemeContext";
import { CloudinaryImage } from "@/cloudinary";
import Tile from "@/components/library/Tile";
import CodeIcon from "@/icons/app/CodeIcon";
import Link from "next/link";
import { WeightableIconProps } from "@/icons/WeightableIcon";
import { BdavDev } from "@/routing";
import CubeIcon from "@/icons/app/CubeIcon";
import ChefHatIcon from "@/icons/app/ChefHatIcon";
import WelcomeToBdavDevHeadline from "@/components/misc/WelcomeToBdavDevHeadline";
import { getLatestNewAbstract3dImage, isNew } from "@/categories/3d/a3ds/utilities/abstract3dSeriesUtilities";
import CodeProjectAppIcon from "@/categories/code/components/icon/CodeProjectAppIcon";
import NewBadge from "@/categories/3d/a3ds/components/NewBadge";


export default function HomePage() {
    const [featuredCodeProject, setFeaturedCodeProject] = useState<CodeProject>();
    const [featuredAbstract3dImage, setFeaturedAbstract3dImage] = useState<Abstract3dImage>();
    const [featuredRecipe, setFeaturedRecipe] = useState<Recipe>();

    useEffect(() => {
        setFeaturedCodeProject(chooseRandom(Object.values(CodeProjects)));
        setFeaturedAbstract3dImage(getLatestNewAbstract3dImage() ?? chooseRandom(Object.values(Abstract3dSeries)));
        setFeaturedRecipe(chooseRandom(Object.values(Recipes)));
    }, []);

    const isFeaturedAbstract3dImageNew = !!featuredAbstract3dImage && isNew(featuredAbstract3dImage);

    return (
        <>
            <div className={'ml-3 mb-3 md:mb-7'}>
                <WelcomeToBdavDevHeadline/>
            </div>

            <div className={'flex-1 flex flex-col lg:flex-row gap-2 xs:gap-3'}>
                <CategorySlice
                    tag={'Code'}
                    icon={CodeIcon}
                    href={BdavDev.code.getRoute()}
                    className={`
                        rounded-t-3xl rounded-b-lg
                        lg:rounded-l-3xl lg:rounded-r-lg
                    `}
                    image={featuredCodeProject?.banner}
                    featured={
                        featuredCodeProject &&
                        {
                            name: featuredCodeProject.title,
                            href: BdavDev.code.$project.getRoute({ project: featuredCodeProject }),
                            component: <CodeProjectAppIcon project={featuredCodeProject} className={'w-6 h-6 lg:w-8 lg:h-8'}/>
                        }
                    }
                />

                <CategorySlice
                    tag={'3D'}
                    icon={CubeIcon}
                    href={BdavDev.blender.getRoute()}
                    className={'rounded-lg'}
                    image={featuredAbstract3dImage?.image}
                    featured={
                        featuredAbstract3dImage &&
                        {
                            name: `Abstract3D Series #${featuredAbstract3dImage.nr}`,
                            href: BdavDev.blender.abstract3dSeries.$image.getRoute({ image: featuredAbstract3dImage }),
                            component: <SkeletonLoadingCloudinaryImage
                                alt={''}
                                image={featuredAbstract3dImage.image}
                                sharedClassName={'w-6 h-6 lg:w-8 lg:h-8 rounded-md'}
                                imageClassName={'object-contain'}
                                draggable={false}
                            />,
                            isNew: isFeaturedAbstract3dImageNew
                        }
                    }
                />

                <CategorySlice
                    tag={'Recipes'}
                    icon={ChefHatIcon}
                    href={BdavDev.recipes.getRoute()}
                    className={`
                        rounded-t-lg rounded-b-3xl
                        lg:rounded-l-lg lg:rounded-r-3xl
                    `}
                    image={Recipes.Cheeseburger.image}
                    featured={
                        featuredRecipe &&
                        {
                            name: featuredRecipe.title,
                            href: BdavDev.recipes.$recipe.getRoute({ recipe: featuredRecipe }),
                            component: <SkeletonLoadingCloudinaryImage
                                alt={''}
                                sharedClassName={'w-6 lg:h-8 w-fit rounded-md'}
                                imageClassName={'object-contain'}
                                image={featuredRecipe.image}
                                draggable={false}
                            />
                        }
                    }
                />
            </div>
        </>
    );
}


type CategorySliceProps = {
    className?: string,
    image: ThemeSwitch<CloudinaryImage> | undefined,
    icon: ComponentType<WeightableIconProps>,
    tag: string,
    href: string,
    featured: undefined | {
        component: ReactNode,
        href: string,
        name: string,
        isNew?: boolean
    }
}

function CategorySlice(props: CategorySliceProps) {
    return (
        <div
            className={`
                flex-1
                relative overflow-clip
                flex items-center justify-center
                bg-tile
                group
                hover:py-3 lg:hover:px-5
                transition-all
                ${props.className}
            `}
        >
            <Link
                href={props.href}
                className={'block relative z-10 peer hover:-translate-y-2 transition-transform ease-out duration-[250ms]'}
            >
                <Tile
                    className={`
                        flex items-center justify-center
                        flex-row                   lg:flex-col
                        gap-0.5                    lg:gap-0
                        p-1      xs:p-1.5 sm:p-2.5
                        shadow-2xl shadow-zinc-600 dark:shadow-zinc-950
                    `}
                    customPadding
                >
                    <props.icon
                        className={`
                            text-[1.5em] xs:text-[2.75em] lg:text-[4.5em] 2xl:text-[6em] 3xl:text-[8em]
                            mx-0                          lg:mx-5         2xl:mx-6       3xl:mx-7
                        `}
                        weight={200}
                    />
                    <div
                        className={`
                            w-full text-center bg-tile rounded-full px-1.5
                            text-base 3xl:text-xl
                        `}
                    >
                        {props.tag}
                    </div>
                </Tile>
            </Link>

            {
                props.featured &&
                <Link
                    href={props.featured.href}
                    className={'peer absolute z-10 bottom-0 mx-2 mb-1 lg:mb-5'}
                >
                    <Tile className={'drop-shadow-md flex flex-col p-1.5 lg:p-2'} customPadding>
                        <div className={'flex flex-row items-center gap-1.5 text-sm lg:text-base'}>
                            <div>
                                {props.featured.component}
                            </div>
                            <div>
                                {props.featured.name}
                            </div>
                            {
                                props.featured.isNew &&
                                <NewBadge small/>
                            }
                        </div>
                    </Tile>
                </Link>
            }
            {
                <SkeletonLoadingCloudinaryImage
                    alt={''}
                    sharedClassName={'absolute inset-0 h-full w-full'}
                    imageClassName={'scale-110 object-cover blur-md group-hover:blur-none brightness-75 peer-hover:brightness-90 transition-all ease-out duration-[250ms]'}
                    image={props.image}
                    draggable={false}
                />
            }
        </div>
    );
}
