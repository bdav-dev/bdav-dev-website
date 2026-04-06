'use client';

import { useContext } from "react";
import { Abstract3dCollectionsContext } from "@/categories/3d/a3ds/contexts/Abstract3dCollectionsContext";
import { notFound } from "next/navigation";
import Abstract3dCollectionView from "@/categories/3d/a3ds/views/Abstract3dCollectionView";


type Abstract3dCollectionViewResolverProps = {
    routeSegmentOfCollection: string
}

export default function Abstract3dCollectionViewResolver(props: Abstract3dCollectionViewResolverProps) {
    const { collections } = useContext(Abstract3dCollectionsContext);

    const collection = collections.find(collection => collection.routeSegment === props.routeSegmentOfCollection);
    if (!collection) {
        notFound();
    }

    return <Abstract3dCollectionView collection={collection}/>;
}
