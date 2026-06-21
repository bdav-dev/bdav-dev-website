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
            <div className={'flex flex-col xl:flex-row gap-gutter mb-8'}>
                <SkeletonLoadingCloudinaryImage
                    preload
                    image={props.recipe.image}
                    alt={props.recipe.title}
                    draggable={false}
                    className={`
                        w-full    xl:w-1/2
                        max-w-160 xl:max-w-175 3xl:max-w-240
                        self-center xl:self-auto 
                        shrink-0
                        rounded-tile
                        object-contain
                    `}
                    loadedClassName={'drop-shadow-lg'}
                />

                <div className={"grow flex flex-col gap-2.5"}>
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
