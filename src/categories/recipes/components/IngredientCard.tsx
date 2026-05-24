import { getFormattedIngredientAmount, MeasuredIngredient } from "@/categories/recipes/content/recipes";
import Popover from "@/components/Popover";
import { ReactNode } from "react";
import SkeletonLoadingCloudinaryImage from "@/components/SkeletonLoadingCloudinaryImage";


type IngredientCardProps = {
    ingredient: MeasuredIngredient
}

export default function IngredientCard(props: IngredientCardProps) {
    const formattedIngredientAmount = getFormattedIngredientAmount(props.ingredient);

    return (
        <div
            className={`
                flex flex-col relative
                w-56 rounded-2xl
                bg-tile
                p-2
                gap-2
            `}
        >
            <SkeletonLoadingCloudinaryImage
                alt={props.ingredient.name}
                image={props.ingredient.image}
                sharedClassName={'h-[8.4rem] w-full select-none'}
                imageClassName={'object-contain drop-shadow-md'}
                skeletonClassName={'rounded-xl'}
                imageStyle={{ transform: `scale(${props.ingredient.displayOptions?.size ?? 1})` }}
                draggable={false}
            />

            {
                props.ingredient.productRecommendation &&
                <ProductRecommendation>
                    {props.ingredient.productRecommendation}
                </ProductRecommendation>
            }

            <div
                className={`
                    flex-1
                    flex flex-row items-center gap-1.5
                    w-full
                    rounded-xl overflow-clip    
                    leading-tight
                `}
            >
                <div
                    className={`
                        flex items-center justify-center
                        w-20 h-full min-h-[2.6rem] rounded-xl
                        bg-zinc-350 dark:bg-zinc-950
                    `}
                >
                    {formattedIngredientAmount.amount}
                </div>

                <div className={'flex-1'}>
                    {formattedIngredientAmount.name}
                </div>
            </div>
        </div>
    );
}

function ProductRecommendation(props: { children?: ReactNode }) {
    return (
        <div
            className={`
                w-8 h-8
                absolute top-0 right-0
                flex items-center justify-center
                dark:bg-yellow-700 dark:hover:bg-yellow-600
                bg-yellow-600 hover:bg-yellow-700
                transition-color
                rounded-sm rounded-bl-md rounded-tr-2xl
                group
            `}
        >
            { /* Placeholder */ }
            <div>P</div>

            <div
                className={`
                    absolute -right-4 bottom-0
                    w-64 pb-9
                    invisible group-hover:visible
                    opacity-25 group-hover:opacity-100
                    scale-[0.97] group-hover:scale-100
                    transition-all
                `}
            >
                <ProductRecommendationPopover>
                    {props.children}
                </ProductRecommendationPopover>
            </div>
        </div>
    );
}

function ProductRecommendationPopover(props: { children?: ReactNode }) {
    return (
        <Popover className={'flex flex-col gap-0.5 text-center'}>
            <div className={'flex-1 px-0.5 rounded-full bg-zinc-300 dark:bg-zinc-950 text-s font-semibold'}>
                Product recommendation
            </div>
            <div>
                {props.children}
            </div>
        </Popover>
    );
}
