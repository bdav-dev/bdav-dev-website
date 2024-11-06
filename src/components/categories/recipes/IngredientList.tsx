'use client';

import Tile from "@/components/pageElements/Tile";
import { Recipe } from "@/content/recipes/recipes";
import { useState } from "react";
import IngredientCard from "./IngredientCard";
import NumberInput from "@/components/input/NumberInput";

type IngredientListProps = {
    recipe: Recipe
}

export default function IngredientList(props: IngredientListProps) {
    let [numberOfPortions, setNumberOfPortions] = useState(1);

    let ingredients = [...props.recipe.ingredients];

    return (
        <Tile className="h-full mt-1">

            <div className="flex flex-col justify-center h-full">

                <div className="h-16 flex flex-row justify-center items-center m-3 mt-5">
                    Ingredients for
                    <NumberInput onValueChanged={setNumberOfPortions} initial={1} min={1} max={99}/>
                    portion(s)
                </div>

                <hr className="mx-8 border-zinc-400 dark:border-zinc-700 my-2"/>

                <div className="flex flex-row flex-wrap gap-3 p-4 justify-center mb-2">
                    {
                        ingredients.map(
                            (ingredient, index) => (
                                <IngredientCard
                                    ingredient={ingredient}
                                    numberOfPortions={numberOfPortions}
                                    key={index}
                                />
                            )
                        )
                    }
                </div>
            </div>
        </Tile>
    );
}