import PageBody from '@/components/pageLayout/PageBody';
import PageTitle from '@/components/pageStructure/headlines/PageTitle';
import { Recipe as RecipeType } from '@/content/recipes/recipes';
import Image from "next/image";
import IngredientList from './IngredientList';

type RecipeProps = {
    recipe: RecipeType
    children?: React.ReactNode
}

export default function Recipe(props: RecipeProps) {
    return (
        <PageBody
            category="Recipes"
            sitePath={props.recipe.path}
        >
            <div className="flex flex-col lg:flex-row gap-5 mb-8 lg:mb-20">

                <Image
                    src={props.recipe.image}
                    alt={props.recipe.title}
                    className={`
                        w-full self-center max-w-xl
                        sm:w-2/3 sm:min-w-0
                        md:w-[60%]
                        lg:w-1/2 lg:self-auto lg:max-w-3xl 3xl:max-w-[55rem]
                        flex-shrink-0
                        object-contain
                        drop-shadow-lg
                        select-none
                    `}
                    quality={100}
                    placeholder="empty"
                    draggable={false}
                />

                <div className="flex-grow">
                    <PageTitle>{props.recipe.title}</PageTitle>
                    <IngredientList recipe={props.recipe} />
                </div>

            </div>

            {props.children}
        </PageBody>
    );
}