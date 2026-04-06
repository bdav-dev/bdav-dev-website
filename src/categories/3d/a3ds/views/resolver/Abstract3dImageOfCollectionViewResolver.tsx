'use client';

import { useContext, useEffect } from "react";
import { Abstract3dCollectionsContext } from "@/categories/3d/a3ds/contexts/Abstract3dCollectionsContext";
import { notFound, useRouter } from "next/navigation";
import { BdavDev } from "@/routing";
import Abstract3dImageView from "@/categories/3d/a3ds/views/Abstract3dImageView";


type Abstract3dImageOfCollectionViewResolverProps = {
    routeSegmentOfCollection: string,
    abstract3dImageNumber: number
}

export default function Abstract3dImageOfCollectionViewResolver(props: Abstract3dImageOfCollectionViewResolverProps) {
    const router = useRouter();
    const { collections } = useContext(Abstract3dCollectionsContext);

    const collection = collections.find(collection => collection.routeSegment === props.routeSegmentOfCollection);
    const abstract3dImage = collection?.images.find(image => image.nr === props.abstract3dImageNumber);

    useEffect(() => {
        if (!abstract3dImage && collection) {
            router.replace(BdavDev.blender.abstract3dSeries.collections.$collection.getRoute({ collection }));
        }
    });

    if (!collection) {
        notFound();
    }

    if (!abstract3dImage) {
        return;
    }

    return <Abstract3dImageView image={abstract3dImage}/>;
}