import { Abstract3dImage, Abstract3dSeries } from "@/categories/3d/a3ds/content/abstract3dSeries";
import Abstract3dImageLink from "@/categories/3d/a3ds/components/Abstract3dImageLink";
import { ReactNode } from "react";
import { Abstract3dCollection } from "@/categories/3d/a3ds/content/staticAbstract3dCollections";
import { compareAbstract3dImages } from "@/categories/3d/a3ds/utilities/abstract3dSeriesUtilities";


type Abstract3dImageLinksProps =
    {
        trailingComponent?: ReactNode
    }
    & ({ images?: Abstract3dImage[], collection?: never } | { images?: never, collection: Abstract3dCollection });

export default function Abstract3dImageLinks(props: Abstract3dImageLinksProps) {
    const images = (props.images ?? props.collection?.images ?? Object.values(Abstract3dSeries)).toSorted(compareAbstract3dImages);

    return (
        <div className={'flex flex-row flex-wrap gap-6 justify-center sm:justify-normal'}>
            {
                images.map((image, index) => <Abstract3dImageLink image={image} inCollection={props.collection} key={index}/>)
            }
            {props.trailingComponent}
        </div>
    );
}
