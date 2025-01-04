'use client';

import { useContext, useEffect } from "react";
import { Abstract3DCollectionsContext } from "@/contexts/Abstract3DCollectionsContext";
import { notFound, useRouter } from "next/navigation";
import Abstract3DView from "@/views/3d/Abstract3DView";
import { Route } from "@/utils/RouteUtils";

type Abstract3DInCollectionViewProps = {
    collection: string,
    nr: string
}

export default function Abstract3DInCollectionView(props: Abstract3DInCollectionViewProps) {
    const router = useRouter();
    const { collections } = useContext(Abstract3DCollectionsContext);

    const collection = collections.find(collection => collection.routeSegment === props.collection);
    const abstract3d = collection?.abstract3Ds.find(a3d => a3d.nr.toString() === props.nr);

    if (!collection) {
        notFound();
    }

    useEffect(() => {
        if (!abstract3d) {
            router.replace(Route.abstract3dCollection(collection));
        }
    });

    return (
        abstract3d
            ? <Abstract3DView abstract3D={abstract3d}/>
            : <></>
    );
}
