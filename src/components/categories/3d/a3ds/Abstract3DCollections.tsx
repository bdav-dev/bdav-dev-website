'use client';

import { A3dsCollectionLink } from "@/components/link/content/A3dsCollectionLink";
import { Abstract3DCollectionsContext } from "@/contexts/Abstract3DCollectionsContext";
import { useContext } from "react";

export default function Abstract3DCollections() {
    const { collections } = useContext(Abstract3DCollectionsContext);

    return (
        <div className="flex flex-row flex-wrap gap-0 sm:gap-4 justify-center sm:justify-normal">
            {
                collections
                    .map((image, index) => <A3dsCollectionLink key={index} collection={image}/>)
            }
        </div>
    );
}
