'use client';

import { useContext } from "react";
import { Abstract3DCollectionsContext } from "@/contexts/Abstract3DCollectionsContext";
import { notFound } from "next/navigation";
import Article from "@/components/document/Article";
import Abstract3DList from "@/components/categories/3d/a3ds/Abstract3DList";
import { Abstract3DLinkPlaceholder } from "@/components/link/content/Abstract3DLink";

type Abstract3DCollectionViewProps = {
    collectionRoute: string
}

export default function Abstract3DCollectionView(props: Abstract3DCollectionViewProps) {
    const { collections } = useContext(Abstract3DCollectionsContext);

    const collection = collections.find(collection => collection.routeSegment === props.collectionRoute);
    if (!collection) {
        notFound();
    }

    return (
        <Article headline={collection.name}>
            <div className={'text-lg'}>Abstract3D Series Collection</div>
            {
                collection.abstract3Ds.length == 0
                    ? <Abstract3DLinkPlaceholder className={'mt-3'}>
                        Empty collection
                    </Abstract3DLinkPlaceholder>
                    : <Abstract3DList collection={collection} className={'mt-3'}/>
            }
        </Article>
    );
}
