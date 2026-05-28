'use client';


import { useContext } from "react";
import { Abstract3dCollectionsContext } from "@/categories/3d/a3ds/contexts/Abstract3dCollectionsContext";
import { Abstract3dImage } from "@/categories/3d/a3ds/content/abstract3dSeries";
import StarIcon from "@/icons/app/StarIcon";

type Abstract3dImageFavoriteButtonProps = {
    image: Abstract3dImage
}

export default function Abstract3dImageFavoriteButton(props: Abstract3dImageFavoriteButtonProps) {
    const { favorites } = useContext(Abstract3dCollectionsContext);

    const isFavorite = favorites.isFavorite(props.image);

    return (
        <button
            className={`
                flex items-center gap-[0.08rem]
                py-1 px-1
                border border-warning rounded-full 
                group
                transition-colors
                ${isFavorite ? 'pr-[0.55rem] border-solid bg-warning text-white dark:text-black' : 'border-dashed hover:bg-warning text-warning hover:text-white hover:dark:text-black'}
            `}
            onClick={() => favorites.toggleFavorite(props.image)}
        >
            <StarIcon weight={300} className={`transition-colors ${isFavorite ? 'fill-white stroke-white dark:fill-black dark:stroke-black' : 'fill-transparent group-hover:fill-current'}`}/>
            {
                isFavorite &&
                <>Favorite</>
            }
        </button>
    );
}