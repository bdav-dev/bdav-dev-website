'use client';

import { Abstract3dCollectionLink } from "@/categories/3d/a3ds/components/collection/Abstract3dCollectionLink";
import React, { ReactNode, useContext } from "react";
import { Abstract3dCollection } from "@/categories/3d/a3ds/content/staticAbstract3dCollections";
import { Abstract3dCollectionsContext } from "@/categories/3d/a3ds/contexts/Abstract3dCollectionsContext";


type Abstract3dCollectionLinksProps = {
    collections?: Abstract3dCollection[],
    small?: boolean,
    trailingComponent?: ReactNode
}

export default function Abstract3dCollectionLinks(props: Abstract3dCollectionLinksProps) {
    const { collections } = useContext(Abstract3dCollectionsContext);

    return (
        <div className={"flex flex-row flex-wrap gap-x-5 justify-center sm:justify-normal"}>
            {
                (props.collections ?? collections).map((collection, index) => <Abstract3dCollectionLink key={index} collection={collection} small={props.small}/>)
            }
            {props.trailingComponent}
        </div>
    );
}
