'use client';

import { createContext, ReactNode, useMemo } from "react";
import { Abstract3dImage } from "@/categories/3d/a3ds/content/abstract3dSeries";
import { Abstract3dCollection, StaticAbstract3dCollections } from "@/categories/3d/a3ds/content/staticAbstract3dCollections";
import useLocalStorage from "@/hooks/UseLocalStorage";
import { createFavoritesCollection } from "@/categories/3d/a3ds/utilities/abstract3dSeriesCollectionsUtilities";


type Abstract3dCollectionsContextType = {
    favorites: {
        collection: Abstract3dCollection,
        setFavorite: (image: Abstract3dImage, isFavorite: boolean) => void,
        toggleFavorite: (image: Abstract3dImage) => void,
        isFavorite: (image: Abstract3dImage) => boolean
    },
    collections: Abstract3dCollection[]
}

export const Abstract3dCollectionsContext = createContext<Abstract3dCollectionsContextType>({
    collections: [],
    favorites: { collection: { routeSegment: '', name: '', images: [] }, setFavorite: () => {}, toggleFavorite: () => {}, isFavorite: () => false }
});

export function Abstract3dCollectionsProvider({ children }: { children?: ReactNode }) {
    const [numbersOfFavoriteAbstract3dImages, setNumbersOfFavoriteAbstract3dImages] = useLocalStorage<number[]>("abstract3dfavorites", []);

    const favoritesCollection = useMemo(
        () => createFavoritesCollection(numbersOfFavoriteAbstract3dImages),
        [numbersOfFavoriteAbstract3dImages]
    );

    const collections = useMemo<Abstract3dCollection[]>(
        () => [favoritesCollection, ...Object.values(StaticAbstract3dCollections)],
        [favoritesCollection]
    );

    function setFavorite(image: Abstract3dImage, isFavorite: boolean) {
        setNumbersOfFavoriteAbstract3dImages(
            favorites => isFavorite
                ? favorites.includes(image.nr) ? favorites : [...favorites, image.nr]
                : favorites.filter(number => number !== image.nr)
        );
    }

    function isFavorite(abstract3dImage: Abstract3dImage) {
        return favoritesCollection.images.some(image => image.nr === abstract3dImage.nr);
    }

    function toggleFavorite(image: Abstract3dImage) {
        setFavorite(image, !isFavorite(image));
    }

    return (
        <Abstract3dCollectionsContext.Provider value={{ collections, favorites: { collection: favoritesCollection, setFavorite, isFavorite, toggleFavorite } }}>
            {children}
        </Abstract3dCollectionsContext.Provider>
    );
}
