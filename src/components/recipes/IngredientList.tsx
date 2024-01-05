'use client';

import { Ingredient, Recipe, ingredientAsString } from "@/content/recipes"
import Image from "next/image";
import Code from "../base/Code";
import { useState } from "react";

type IngredientListProps = {
    recipe: Recipe
}

function ingredientStringToJsx(ingredient: Ingredient, numberOfPortions: number) {
    const ingredientString = ingredientAsString(ingredient, numberOfPortions);

    return (
        <>
            {ingredientString.amount}
            <br />
            <span className="whitespace-nowrap">{ingredientString.name}</span>
        </>
    )
}

export default function IngredientList(props: IngredientListProps) {
    let [numberOfPortions, setNumberOfPortions] = useState(1);

    let ingredients = [...props.recipe.ingredients];

    function onInc() {
        setNumberOfPortions(curr => {
            if (curr >= 99)
                return 99;

            return curr + 1;
        });
    }

    function onDec() {
        setNumberOfPortions(curr => {
            if (curr <= 1)
                return 1;

            return curr - 1;
        });
    }

    return (
        <div className={`
            flex flex-col justify-center
            h-full mt-1
            bg-zinc-100 dark:bg-zinc-900
            border border-zinc-300 dark:border-zinc-800
            rounded-2xl  
        `}>

            <div className="h-16 flex flex-row justify-center items-center m-3 mt-5">

                <span className="text-center">
                    Ingredients for
                </span>

                <div
                    className={`
                        h-full w-20 rounded-md ml-3 text-xl
                        bg-zinc-200 dark:bg-zinc-950 
                        flex items-center justify-center
                        border
                        border-zinc-400 dark:border-zinc-800
                    `}
                >
                    {numberOfPortions}
                </div>

                <div className="flex flex-col w-10 h-full justify-between ml-0.5 mr-3 gap-0.5">
                    <button
                        className={`
                            bg-zinc-200 dark:bg-zinc-950
                            h-full
                            rounded-md
                            border
                            border-zinc-400 dark:border-zinc-800
                            hover:bg-zinc-300 hover:dark:bg-zinc-900
                            active:bg-zinc-400 dark:active:bg-zinc-800
                            transition-colors duration-75
                        `}
                        onClick={onInc}
                    >
                        +
                    </button>
                    <button
                        className={`
                            bg-zinc-200 dark:bg-zinc-950
                            h-full
                            rounded-md
                            border
                            border-zinc-400 dark:border-zinc-800
                            hover:bg-zinc-300 hover:dark:bg-zinc-900
                            active:bg-zinc-400 dark:active:bg-zinc-800
                            transition-colors duration-75
                        `}
                        onClick={onDec}
                    >
                        -
                    </button>
                </div>

                portion(s)
            </div>

            <hr className="mx-8 border-zinc-400 dark:border-zinc-700 my-2" />

            <div className="flex flex-row flex-wrap gap-3 p-4 justify-center mb-2">
                {
                    ingredients.map(
                        (ingredient, index) => (
                            <div className={`
                                    w-52 h-48
                                    bg-zinc-200 dark:bg-zinc-800
                                    border
                                    border-zinc-400 dark:border-zinc-700
                                    rounded-2xl
                                    flex flex-col
                                `}
                                key={index}
                            >
                                <Image
                                    src={ingredient.image}
                                    alt={ingredient.name}
                                    className="h-2/3 object-contain p-1.5 select-none rounded-xl drop-shadow-md"
                                    draggable="false"
                                    placeholder="blur"
                                />

                                <div className={`
                                    w-full text-center mt-auto flex flex-col px-2.5 pb-2
                                `}>

                                    <Code noMono largePadding>
                                        {ingredientStringToJsx(ingredient, numberOfPortions)}
                                    </Code>

                                </div>
                            </div>
                        )
                    )
                }
            </div>
        </div >
    );
}