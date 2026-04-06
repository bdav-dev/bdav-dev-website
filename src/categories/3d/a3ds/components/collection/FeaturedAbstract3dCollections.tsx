'use client';

import Abstract3dCollectionLinks from "@/categories/3d/a3ds/components/collection/Abstract3dCollectionLinks";
import Link from "next/link";
import { Abstract3dImageLinkPlaceholder } from "@/categories/3d/a3ds/components/Abstract3dImageLink";
import { BdavDev } from "@/routing";
import { useContext } from "react";
import { Abstract3dCollectionsContext } from "@/categories/3d/a3ds/contexts/Abstract3dCollectionsContext";
import { Abstract3dCollection, StaticAbstract3dCollections } from "@/categories/3d/a3ds/content/staticAbstract3dCollections";
import { getLatestAdventCalendarCollection, getLatestYearCollection } from "@/categories/3d/a3ds/utilities/abstract3dSeriesCollectionsUtilities";


export default function FeaturedAbstract3dCollections() {
    const { favorites } = useContext(Abstract3dCollectionsContext);

    const featuredCollections =
        [
            favorites.collection,
            StaticAbstract3dCollections["wallpapers"],
            StaticAbstract3dCollections["creatorsFavorites"],
            getLatestYearCollection(),
            getLatestAdventCalendarCollection()
        ]
            .filter((collection): collection is Abstract3dCollection => collection != undefined);

    return (
        <Abstract3dCollectionLinks
            collections={featuredCollections}
            small
            trailingComponent={
                <Link className={'group m-3 rounded-2xl'} href={BdavDev.blender.abstract3dSeries.collections.getRoute()}>
                    <Abstract3dImageLinkPlaceholder small fill>
                        <div className={'text-xl text-accent group-hover:underline'}>
                            View all
                        </div>
                    </Abstract3dImageLinkPlaceholder>
                </Link>
            }
        />
    );
}


