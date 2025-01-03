import { Recipe } from "@/content/recipes/recipes";
import Image from "next/image";
import Link from "next/link";
import ContentLinkPlaceholder from "@/components/link/content/ContentLinkPlaceholder";
import { Route } from "@/utils/RouteUtils";

type RecipeLinkProps = {
    recipe: Recipe
}

export default function RecipeLink({ recipe }: RecipeLinkProps) {
    return (
        <Link className="w-fit rounded-full drop-shadow-sm" href={Route.recipe(recipe)} draggable="false">

            <div className={`
                border dark:border-zinc-800 border-zinc-400
                w-56 h-56
                overflow-hidden
                flex items-center relative
                rounded-full
                group
                bg-zinc-100 dark:bg-zinc-900
            `}>
                <div className={`
                    text-2xl text-center select-none
                    absolute
                    transition-all opacity-0 group-hover:opacity-100 -translate-y-32 ease-out duration-300 group-hover:translate-y-0
                    z-10 left-0 right-0
                    ml-auto mr-auto w-fit
                `}>
                    {recipe.badgeHoverText ?? recipe.title}
                </div>

                <Image
                    src={recipe.image}
                    alt={recipe.title}
                    className="transition-all duration-300 group-hover:blur-md p-3.5"
                    draggable="false"
                    placeholder="blur"
                />
            </div>

        </Link>
    );
}


export function RecipeLinkPlaceholder() {
    return <ContentLinkPlaceholder className={'rounded-full w-56 h-56'}/>;
}