'use client';

import { Recipe, toAppliedServings } from "@/categories/recipes/content/recipes";
import { useState } from "react";
import IngredientCard from "@/categories/recipes/components/IngredientCard";
import NumberPicker from "@/components/library/input/NumberPicker";


type RecipeIngredientsProps = {
    recipe: Recipe
}

export default function RecipeIngredients(props: RecipeIngredientsProps) {
    const [servings, setServings] = useState(props.recipe.servings);

    return (
        <div className="flex flex-col justify-center gap-7">
            <div className="flex flex-row justify-center items-center gap-2">
                Ingredients for
                <NumberPicker
                    value={servings}
                    onValueChange={setServings}
                    min={1}
                    max={99}
                    className={'h-14'}
                />
                serving(s)
            </div>

            <div className="flex flex-row justify-center flex-wrap gap-4">
                {
                    props.recipe.ingredients
                        .map(
                            (ingredient, index) =>
                                <IngredientCard
                                    ingredient={toAppliedServings({ ingredient, forServings: props.recipe.servings }, servings)}
                                    key={index}
                                />
                        )
                }
            </div>
        </div>
    );
}
