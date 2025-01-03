'use client';

import React, { useMemo, useState } from "react";
import { Abstract3D } from "@/content/3d/a3ds/abstract3dSeries";
import { Abstract3DCollection, Abstract3DCollections, Abstract3DStaticCollections } from "@/content/3d/a3ds/abstract3dCollections";

type Abstract3DCollectionsContextType = {
    setFavorite: (a3d: Abstract3D, favorite: boolean) => void,
    collections: Abstract3DCollections
}

export const Abstract3DCollectionsContext = React.createContext<Abstract3DCollectionsContextType>({
    collections: [],
    setFavorite: () => {}
});

type A3dsCollectionsProviderProps = {
    children?: React.ReactNode
}

export function Abstract3DCollectionsProvider(props: A3dsCollectionsProviderProps) {
    const [favorites, setFavorites] = useState<Abstract3DCollection>(
        { routeSegment: 'favorites', name: 'My Favorites', abstract3Ds: [] }
    );
    const collections = useMemo<Abstract3DCollections>(() => [...Object.values(Abstract3DStaticCollections), favorites], [favorites]);

    function setFavorite(abstract3D: Abstract3D, favorite: boolean) {
        //TODO
    }

    return (
        <Abstract3DCollectionsContext.Provider value={{ collections, setFavorite }}>
            {props.children}
        </Abstract3DCollectionsContext.Provider>
    );
}