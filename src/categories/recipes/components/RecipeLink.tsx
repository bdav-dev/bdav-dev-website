import { Recipe } from "@/categories/recipes/content/recipes";
import Link from "next/link";
import ContentLinkPlaceholder from "@/components/link/content/ContentLinkPlaceholder";
import { BdavDev } from "@/routing";
import SkeletonLoadingCloudinaryImage from "@/components/SkeletonLoadingCloudinaryImage";


type RecipeLinkProps = {
    recipe: Recipe
}

export default function RecipeLink({ recipe }: RecipeLinkProps) {
    return (
        <Link
            href={BdavDev.recipes.$recipe.getRoute({ recipe })}
            className={`
                flex items-center justify-center relative
                w-56 h-56 rounded-full
                bg-tile overflow-clip
                group
            `}
        >
            <div
                className={`
                    absolute z-10
                    text-2xl text-center select-none
                    transition-all ease-out duration-300
                    opacity-0 group-hover:opacity-100
                    -translate-y-32  group-hover:translate-y-0
                    text-white
                `}
            >
                {recipe.title}
            </div>

            <SkeletonLoadingCloudinaryImage
                alt={recipe.title}
                image={recipe.image}
                sharedClassName={"w-full h-full transition-all duration-300 group-hover:blur-md group-hover:brightness-90 select-none"}
                imageClassName={'p-4 object-contain'}
            />
        </Link>
    );
}

export function RecipeLinkPlaceholder() {
    return <ContentLinkPlaceholder className={'rounded-full w-56 h-56'}/>;
}
