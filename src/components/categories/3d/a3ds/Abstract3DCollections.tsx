'use client';

import { Abstract3DCollectionLink } from "@/components/link/content/Abstract3DCollectionLink";
import { Abstract3DCollectionsContext } from "@/contexts/Abstract3DCollectionsContext";
import React, { useContext } from "react";

type Abstract3DCollectionsProps = {
    small?: boolean,
    trailingComponent?: React.ReactNode,
    limit?: number
}

export default function Abstract3DCollections(props: Abstract3DCollectionsProps) {
    const { collections } = useContext(Abstract3DCollectionsContext);

    return (
        <div className="flex flex-row flex-wrap gap-0 sm:gap-4 justify-center sm:justify-normal">
            {
                [...collections]
                    .reverse()
                    .slice(-1 * (props.limit ?? 0))
                    .reverse()
                    .map(
                        (collection, index) => <Abstract3DCollectionLink key={index} collection={collection} small={props.small}/>
                    )
            }
            {props.trailingComponent}
        </div>
    );
}
