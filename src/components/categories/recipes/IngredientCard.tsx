import { getFormattedIngredientAmount, MeasuredIngredient } from "@/categories/recipes/content/recipes";
import RecommendationStar from "./RecommendationStar";


type IngredientCardProps = {
    ingredient: MeasuredIngredient
}

export default function IngredientCard(props: IngredientCardProps) {
    const formattedIngredientAmount = getFormattedIngredientAmount(props.ingredient);

    return (
        <div
            className={`
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
            { /* Placeholder */ }
            <div className={'skeleton p-1.5 h-2/3 object-contain select-none rounded-xl drop-shadow-md'}/>

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
                    {formattedIngredientAmount.amount}
                </div>

                <div className="h-fit w-full text-center p-1 leading-tight">
                    {formattedIngredientAmount.name}
                </div>
            </div>
        </div>
    );
}
