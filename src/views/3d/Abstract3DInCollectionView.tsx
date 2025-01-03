'use client';

import { useContext } from "react";
import { Abstract3DCollectionsContext } from "@/contexts/Abstract3DCollectionsContext";
import { notFound } from "next/navigation";
import Abstract3DView from "@/views/3d/Abstract3DView";

type Abstract3DInCollectionViewProps = {
    collection: string,
    nr: string
}

export default function Abstract3DInCollectionView(props: Abstract3DInCollectionViewProps) {
    const { collections } = useContext(Abstract3DCollectionsContext);
    const collection = collections.find(collection => collection.routeSegment === props.collection);
    const abstract3d = collection?.abstract3Ds.find(a3d => a3d.nr.toString() === props.nr);

    if (!abstract3d || !collection) {
        notFound();
    }

    return (
        <Abstract3DView abstract3dSeriesImage={abstract3d}/>
    );
}
