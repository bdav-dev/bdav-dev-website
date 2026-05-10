import { Recipe } from "@/categories/recipes/content/recipes";
import H1 from "@/components/library/headlines/H1";
import RecipeIngredients from "@/categories/recipes/components/RecipeIngredients";
import { ReactNode } from "react";
import RecipeCategoryTag from "@/categories/recipes/components/RecipeCategoryTag";
import Tile from "@/components/library/Tile";


type RecipeLayoutProps = {
    recipe: Recipe
    children?: ReactNode
}

export default function RecipeLayout(props: RecipeLayoutProps) {
    return (
        <>
            <div className="flex flex-col lg:flex-row gap-4 mb-8">
                { /* Placeholder */ }
                <div
                    className={`
                        skeleton
                        w-full self-center max-w-xl
                        sm:w-2/3 sm:min-w-0
                        md:w-[60%]
                        lg:w-1/2 lg:self-auto lg:max-w-3xl 3xl:max-w-[55rem]
                        flex-shrink-0
                        object-contain
                        drop-shadow-lg
                        select-none
                    `}
                />

                <div className={"flex-grow flex flex-col gap-4"}>
                    <div className={'flex flex-col gap-0.5'}>
                        <H1>{props.recipe.title}</H1>
                        <div className={"flex flex-row gap-1.5"}>
                            <RecipeCategoryTag category={props.recipe.category}/>
                            {props.recipe.tagline}
                        </div>
                    </div>
                    <Tile customPadding className={'p-8'}>
                        <RecipeIngredients recipe={props.recipe}/>
                    </Tile>
                </div>
            </div>
            {props.children}
        </>
    );
}
