import { Abstract3D } from "@/content/3d/a3ds/abstract3dSeries";
import { Abstract3DSeriesSort } from "@/utils/SortUtils";
import Abstract3DLink from "@/components/link/content/Abstract3DLink";
import React from "react";
import { Abstract3DCollection } from "@/content/3d/a3ds/abstract3dCollections";


type Abstract3DListProps = {
    className?: string,
    trailingComponent?: React.ReactNode
} & (
    | { abstract3Ds: Abstract3D[], collection?: never }
    | { abstract3Ds?: never, collection: Abstract3DCollection }
    );

export default function Abstract3DList(props: Abstract3DListProps) {
    const abstract3Ds = props.abstract3Ds ?? props.collection.abstract3Ds;

    return (
        <div className={`flex flex-row flex-wrap gap-4 justify-center sm:justify-normal ${props.className}`}>
            {
                abstract3Ds
                    .sort(Abstract3DSeriesSort)
                    .map(
                        (image, index) => <Abstract3DLink abstract3D={image} key={index} collection={props.collection}/>
                    )
            }
            {props.trailingComponent}
        </div>
    );
}
