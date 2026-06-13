import { Recipe } from "@/categories/recipes/content/recipes";
import H1 from "@/components/library/headlines/H1";
import RecipeIngredients from "@/categories/recipes/components/RecipeIngredients";
import { ReactNode } from "react";
import RecipeCategoryTag from "@/categories/recipes/components/RecipeCategoryTag";
import Tile from "@/components/library/Tile";
import SkeletonLoadingCloudinaryImage from "@/components/image/SkeletonLoadingCloudinaryImage";
import ReadingLayout from "@/components/library/layout/ReadingLayout";


type RecipeLayoutProps = {
    recipe: Recipe
    children?: ReactNode
}

export default function RecipeLayout(props: RecipeLayoutProps) {
    return (
        <>
            <div className="flex flex-col xl:flex-row gap-4 mb-8">
                <SkeletonLoadingCloudinaryImage
                    alt={props.recipe.title}
                    image={props.recipe.image}
                    draggable={false}
                    sharedClassName={`
                        w-full sm:w-2/3 md:w-[60%] lg:w-1/2
                        max-w-xl lg:max-w-3xl 3xl:max-w-[57.5rem]
                        sm:min-w-0
                        self-center xl:self-auto 
                        flex-shrink-0
                        rounded-tile
                    `}
                    imageClassName={'object-contain drop-shadow-lg'}
                />

                <div className={"flex-grow flex flex-col gap-2.5"}>
                    <div className={'flex flex-col gap-0.5'}>
                        <H1>{props.recipe.title}</H1>

                        <div className={"flex flex-row gap-1.5"}>
                            <RecipeCategoryTag category={props.recipe.category}/>
                            {props.recipe.tagline}
                        </div>
                    </div>

                    <Tile customPadding className={'p-8 flex-1 flex items-center justify-center'}>
                        <RecipeIngredients recipe={props.recipe}/>
                    </Tile>
                </div>
            </div>
            <ReadingLayout>
                {props.children}
            </ReadingLayout>
        </>
    );
}
