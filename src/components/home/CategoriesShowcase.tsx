'use client';

import { Abstract3dImage, Abstract3dSeries } from "@/categories/3d/a3ds/content/abstract3dSeries";
import { CodeProject, CodeProjects } from "@/categories/code/content/codeProjects";
import { useEffect, useState } from "react";
import { chooseRandom } from "@/utilities/random";
import SkeletonLoadingCloudinaryImage from "@/components/image/SkeletonLoadingCloudinaryImage";
import { Recipe, Recipes } from "@/categories/recipes/content/recipes";
import CodeIcon from "@/icons/app/CodeIcon";
import { BdavDev } from "@/utilities/routing";
import CubeIcon from "@/icons/app/CubeIcon";
import ChefHatIcon from "@/icons/app/ChefHatIcon";
import { getLatestNewAbstract3dImage, isNew } from "@/categories/3d/a3ds/utilities/abstract3dSeriesUtilities";
import CodeProjectAppIcon from "@/categories/code/components/icon/CodeProjectAppIcon";
import CategorySlice from "@/components/home/CategorySlice";


export default function CategoriesShowcase({ className }: { className?: string }) {
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
        <div className={`flex flex-col lg:flex-row gap-2 xs:gap-3 ${className}`}>
            <CategorySlice
                name={'Code'}
                icon={CodeIcon}
                href={BdavDev.code.getRoute()}
                backgroundImage={featuredCodeProject?.banner}
                featuredContent={
                    featuredCodeProject &&
                    {
                        name: featuredCodeProject.title,
                        thumbnail: <CodeProjectAppIcon project={featuredCodeProject} className={'w-6 h-6 lg:w-8 lg:h-8'}/>,
                        href: BdavDev.code.$project.getRoute({ project: featuredCodeProject })
                    }
                }
                className={`
                    rounded-t-3xl rounded-b-lg
                    lg:rounded-l-3xl lg:rounded-r-lg
                `}
            />

            <CategorySlice
                name={'3D'}
                icon={CubeIcon}
                href={BdavDev.blender.getRoute()}
                backgroundImage={featuredAbstract3dImage?.image}
                featuredContent={
                    featuredAbstract3dImage &&
                    {
                        name: `Abstract3D Series #${featuredAbstract3dImage.nr}`,
                        thumbnail: <SkeletonLoadingCloudinaryImage
                            alt={''}
                            image={featuredAbstract3dImage.image}
                            sharedClassName={'w-6 h-6 lg:w-8 lg:h-8 rounded-md'}
                            imageClassName={'object-contain'}
                            draggable={false}
                        />,
                        href: BdavDev.blender.abstract3dSeries.$image.getRoute({ image: featuredAbstract3dImage }),
                        new: isFeaturedAbstract3dImageNew
                    }
                }
                className={'rounded-lg'}
            />

            <CategorySlice
                name={'Recipes'}
                icon={ChefHatIcon}
                href={BdavDev.recipes.getRoute()}
                backgroundImage={Recipes.Cheeseburger.image}
                featuredContent={
                    featuredRecipe &&
                    {
                        name: featuredRecipe.title,
                        thumbnail: <SkeletonLoadingCloudinaryImage
                            alt={''}
                            sharedClassName={'h-6 lg:h-8 w-fit rounded-md'}
                            imageClassName={'object-contain'}
                            image={featuredRecipe.image}
                            draggable={false}
                        />,
                        href: BdavDev.recipes.$recipe.getRoute({ recipe: featuredRecipe })
                    }
                }
                className={`
                    rounded-t-lg rounded-b-3xl
                    lg:rounded-l-lg lg:rounded-r-3xl
                `}
            />
        </div>
    );
}
