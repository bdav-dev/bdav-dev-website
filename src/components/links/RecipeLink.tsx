import { Recipe } from "@/content/recipes";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

type RecipeLinkProps = {
    recipe: Recipe
}

export default function RecipeLink(props: RecipeLinkProps) {
    return (
        <Link className="inline-block w-fit rounded-full" href={props.recipe.path} draggable="false">

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
                    {props.recipe.badgeHoverText ?? props.recipe.title}
                </div>

                <Image
                    src={props.recipe.image}
                    alt="TODO"
                    className="transition-all duration-300 group-hover:blur-md p-3.5"
                    draggable="false"
                    placeholder="blur"
                />
            </div>

        </Link>
    );
}