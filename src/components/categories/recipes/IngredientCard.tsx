import { Ingredient, ingredientAsString } from "@/content/recipes/recipes";
import Image from "next/image";
import RecommendationStar from "./RecommendationStar";

type IngredientCardProps = {
    ingredient: Ingredient,
    numberOfPortions: number
}

export default function IngredientCard(props: IngredientCardProps) {
    const ingredientString = ingredientAsString(props.ingredient, props.numberOfPortions);

    return (
        <div className={`
                w-56 h-52
                bg-zinc-200 dark:bg-zinc-800
                border
                border-zinc-400 dark:border-zinc-700
                rounded-2xl
                flex flex-col
                relative
                >overflow-hidden
            `}
        >
            <Image
                src={props.ingredient.image}
                alt={props.ingredient.name}
                className={`
                    ${props.ingredient.customImagePadding ?? "p-1.5"}
                    h-2/3 object-contain select-none rounded-xl drop-shadow-md
                `}
                draggable="false"
                placeholder="blur"
            />

            {
                props.ingredient.productRecommendation &&
                <RecommendationStar content={props.ingredient.productRecommendation}/>
            }

            <div className={`
                    mx-2 mb-2
                    rounded-xl
                    dark:bg-zinc-900 bg-zinc-300
                    overflow-hidden
                    h-16 flex flex-row items-center
                `}
            >
                <div className="h-full w-24 flex justify-center items-center bg-zinc-350 dark:bg-zinc-950">
                    {ingredientString.amount}
                </div>

                <div className="h-fit w-full text-center p-1 leading-tight">
                    {ingredientString.name}
                </div>
            </div>

        </div>
    );
}