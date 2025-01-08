'use client';

import React, { useMemo } from "react";
import { Abstract3D, Abstract3DSeries } from "@/content/3d/a3ds/abstract3dSeries";
import { Abstract3DCollection, Abstract3DCollections, Abstract3DStaticCollections } from "@/content/3d/a3ds/abstract3dCollections";
import useLocalStorage from "@/hooks/UseLocalStorage";
import { Abstract3DSeriesSort } from "@/utils/SortUtils";

type Abstract3DCollectionsContextType = {
    favorites: {
        favoritesCollection: Abstract3DCollection,
        setFavorite: (a3d: Abstract3D, favorite: boolean) => void,
        toggleFavorite: (a3d: Abstract3D) => void,
        isFavorite: (a3d: Abstract3D) => boolean
    },
    collections: Abstract3DCollections
}

export const Abstract3DCollectionsContext = React.createContext<Abstract3DCollectionsContextType>({
    collections: [],
    favorites: {
        favoritesCollection: { routeSegment: '', name: '', abstract3Ds: [] },
        setFavorite: () => {},
        toggleFavorite: () => {},
        isFavorite: () => false
    }
});

type Abstract3DCollectionsProviderProps = {
    children?: React.ReactNode
}

export function Abstract3DCollectionsProvider(props: Abstract3DCollectionsProviderProps) {
    const [favoritesNr, setFavoritesNr] = useLocalStorage<number[]>("abstract3dfavorites", []);
    const favoritesCollection = useMemo(
        () => createFavoritesCollection(favoritesNr),
        [favoritesNr]
    );
    const collections = useMemo<Abstract3DCollections>(
        () => [favoritesCollection, ...Object.values(Abstract3DStaticCollections)],
        [favoritesCollection]
    );

    function setFavorite(abstract3D: Abstract3D, favorite: boolean) {
        setFavoritesNr(
            favsNr => favorite
                ? favsNr.includes(abstract3D.nr) ? favsNr : [...favsNr, abstract3D.nr]
                : favsNr.filter(favNr => favNr != abstract3D.nr)
        );
    }

    function isFavorite(abstract3D: Abstract3D) {
        return favoritesCollection.abstract3Ds.some(a3d => a3d.nr == abstract3D.nr);
    }

    function toggleFavorite(abstract3D: Abstract3D) {
        setFavorite(abstract3D, !isFavorite(abstract3D));
    }

    return (
        <Abstract3DCollectionsContext.Provider
            value={
                { collections, favorites: { favoritesCollection, setFavorite, isFavorite, toggleFavorite } }
            }
        >
            {props.children}
        </Abstract3DCollectionsContext.Provider>
    );
}

function mapFavoritesNr(favoritesNr: number[]) {
    return Object.values(Abstract3DSeries)
        .filter(a3d => favoritesNr.includes(a3d.nr))
        .sort(Abstract3DSeriesSort);
}

function createFavoritesCollection(favoritesNr: number[]): Abstract3DCollection {
    return {
        routeSegment: 'favorites',
        name: 'My Favorites',
        abstract3Ds: mapFavoritesNr(favoritesNr)
    }
}






