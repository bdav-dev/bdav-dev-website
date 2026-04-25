import { CodeProjects } from "@/categories/code/content/codeProjects";
import CodeProjectLayout from "@/categories/code/components/layout/CodeProjectLayout";
import ReadingLayout from "@/layout/ReadingLayout";
import Tile from "@/components/library/Tile";
import React from "react";
import SkeletonLoadingCloudinaryImage from "@/components/SkeletonLoadingCloudinaryImage";
import Phone from "@/components/library/Phone";
import { ThemeSwitch } from "@/contexts/ThemeContext";
import { CloudinaryImage } from "@/cloudinary";


export default function RecipeHavenPage() {
    const project = CodeProjects.RecipeHaven;
    const phoneSize = "18.25rem";

    return (
        <CodeProjectLayout
            project={project}
            banner={{ image: images.banner, className: 'dark:brightness-75' }}
        >
            <ReadingLayout>
                <div className={'flex flex-col gap-5'}>
                    <Tile className={"text-center"}>
                        <RecipeHavenTitle/> is a mobile app for collecting your recipes and organizing your shopping list.
                    </Tile>

                    <div className={'flex justify-center'}>
                        <Phone
                            size={phoneSize}
                            screen={
                                <SkeletonLoadingCloudinaryImage
                                    alt={'Ingredients'}
                                    image={images.ingredients}
                                    sharedClassName={'w-full h-full object-cover'}
                                />
                            }
                        />
                    </div>

                    <Tile>
                        Create and manage all your ingredients in one place. Each ingredient includes a name, image, unit (grams, liters, pieces) and optional nutritional information,
                        forming the foundation for building recipes.
                    </Tile>

                    <div className={'flex flex-row justify-center gap-5 flex-wrap'}>
                        <Phone
                            size={phoneSize}
                            screen={
                                <SkeletonLoadingCloudinaryImage
                                    alt={'Recipes'}
                                    image={images.recipes}
                                    sharedClassName={'w-full h-full object-cover'}
                                />
                            }
                        />
                        <Phone
                            size={phoneSize}
                            screen={
                                <SkeletonLoadingCloudinaryImage
                                    alt={'Cheeseburger recipe'}
                                    image={images.cheeseburgerRecipe}
                                    sharedClassName={'w-full h-full object-cover'}
                                />
                            }
                        />
                        <Phone
                            size={phoneSize}
                            screen={
                                <SkeletonLoadingCloudinaryImage
                                    alt={'Edit recipe'}
                                    image={images.editRecipe}
                                    sharedClassName={'w-full h-full object-cover'}
                                />
                            }
                        />
                    </div>

                    <div className={'grid grid-cols-1 md:grid-cols-2 gap-5'}>
                        <Tile>
                            Build detailed recipes with ingredients, quantities, preparation steps, difficulty and cooking time.
                        </Tile>
                        <Tile>
                            Recipes support tags, favorites, and automatic calorie calculation (if data is available) and can dynamically adjust ingredient amounts based on serving size.
                        </Tile>
                    </div>

                    <div className={'flex flex-row justify-center gap-5 flex-wrap'}>
                        <Phone
                            size={phoneSize}
                            screen={
                                <SkeletonLoadingCloudinaryImage
                                    alt={'Shopping list'}
                                    image={images.shoppingList}
                                    sharedClassName={'w-full h-full object-cover'}
                                />
                            }
                        />
                        <Phone
                            size={phoneSize}
                            screen={
                                <SkeletonLoadingCloudinaryImage
                                    alt={'Checked off shopping list'}
                                    image={images.checkedOffShoppingList}
                                    sharedClassName={'w-full h-full object-cover'}
                                />
                            }
                        />
                    </div>

                    <Tile>
                        Organize your shopping by adding ingredients or custom items.
                        Automatically import recipe ingredients in the correct quantities, check off purchased items and manage completed entries separately.
                    </Tile>
                </div>
            </ReadingLayout>
        </CodeProjectLayout>
    );
}

function RecipeHavenTitle() {
    return (
        <span className={'text-xl font-semibold text-[#20B858] dark:text-[#4ade80]'}>
            Recipe Haven
        </span>
    );
}

const images = {
    banner: {
        light: { src: `/code/recipe-haven/banner/banner-light.png`, width: 3500, height: 1440 },
        dark: { src: `/code/recipe-haven/banner/banner-dark.png`, width: 3500, height: 1440 }
    },
    shoppingList: {
        light: { src: `/code/recipe-haven/shopping-list-light.png`, width: 828, height: 1792 },
        dark: { src: `/code/recipe-haven/shopping-list-dark.png`, width: 828, height: 1792 }
    },
    checkedOffShoppingList: {
        light: { src: `/code/recipe-haven/checked-off-shopping-list-light.png`, width: 828, height: 1792 },
        dark: { src: `/code/recipe-haven/checked-off-shopping-list-dark.png`, width: 828, height: 1792 }
    },
    recipes: {
        light: { src: `/code/recipe-haven/recipes-light.png`, width: 828, height: 1792 },
        dark: { src: `/code/recipe-haven/recipes-dark.png`, width: 828, height: 1792 }
    },
    cheeseburgerRecipe: {
        light: { src: `/code/recipe-haven/cheeseburger-recipe-light.png`, width: 828, height: 1792 },
        dark: { src: `/code/recipe-haven/cheeseburger-recipe-dark.png`, width: 828, height: 1792 }
    },
    editRecipe: {
        light: { src: `/code/recipe-haven/edit-recipe-light.png`, width: 828, height: 1792 },
        dark: { src: `/code/recipe-haven/edit-recipe-dark.png`, width: 828, height: 1792 }
    },
    ingredients: {
        light: { src: `/code/recipe-haven/ingredients-light.png`, width: 828, height: 1792 },
        dark: { src: `/code/recipe-haven/ingredients-dark.png`, width: 828, height: 1792 }
    }
} as const satisfies Record<string, ThemeSwitch<CloudinaryImage>>;
