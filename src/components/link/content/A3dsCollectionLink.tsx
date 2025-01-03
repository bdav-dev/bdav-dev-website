import { default as NextImage } from "next/image";
import { Abstract3DCollection } from "@/content/3d/a3ds/abstract3dCollections";
import Link from "next/link";
import { Abstract3D } from "@/content/3d/a3ds/abstract3dSeries";
import { isEven } from "@/utils/MathUtils";
import { Route } from "@/utils/RouteUtils";


type A3dsCollectionLinkProps = {
    noMargin?: boolean,
    className?: string,
    collection: Abstract3DCollection
};

export function A3dsCollectionLink(props: A3dsCollectionLinkProps) {
    const collection = props.collection;
    const [first, second, third] = collection.abstract3Ds;
    const amountOfImages = collection.abstract3Ds.length;

    const sharedClassNames = `
        w-[13.25rem] h-[13.25rem]
        border rounded-2xl
    `;
    const imageClassNames = `
        ${sharedClassNames}
        transition-all ease-out
        border-zinc-500 dark:border-zinc-800
    `;
    const obstructedImageClassNames = `
        ${imageClassNames}
        absolute top-0 z-10 duration-100
    `;
    const secondImageClassNamesAddition = amountOfImages == 2
        ? 'rotate-6 group-hover:rotate-12'
        : '-translate-x-3 -rotate-3 group-hover:-translate-x-6 group-hover:-rotate-6';

    return (
        <div className={`w-fit ${props.noMargin ? '' : 'my-4 mx-6'} ${props.className}`}>
            <Link href={Route.abstract3dCollection(collection)} className={'block relative group rounded-2xl'}>
                {
                    amountOfImages == 0 &&
                    <div
                        className={`
                        ${sharedClassNames}
                        border-zinc-800 dark:border-zinc-400 border-dashed
                        text-zinc-800 dark:text-zinc-400
                        text-center content-center
                        select-none
                    `}
                    >
                        Empty Collection
                    </div>
                }
                {
                    first &&
                    <Image
                        abstract3D={first}
                        collection={collection}
                        className={
                            `
                            ${imageClassNames}
                            z-20
                            ${
                                isEven(first.nr)
                                    ? amountOfImages == 1 ? 'group-hover:-rotate-2' : 'group-hover:-rotate-1'
                                    : amountOfImages == 1 ? 'group-hover:rotate-2' : 'group-hover:rotate-1'
                            }
                            relative group-hover:scale-[1.035] duration-[125ms]
                            `
                        }
                    />
                }
                {
                    second &&
                    <Image
                        abstract3D={second}
                        collection={collection}
                        className={`
                            ${obstructedImageClassNames}
                            ${secondImageClassNamesAddition}
                        `}
                    />
                }
                {
                    third &&
                    <Image
                        abstract3D={third}
                        collection={props.collection}
                        className={`
                            ${obstructedImageClassNames}
                            translate-x-3 rotate-3 group-hover:translate-x-6 group-hover:rotate-6
                        `}
                    />
                }
            </Link>
            {
                props.collection?.name &&
                <div className={'text-center mt-1.5'}>{props.collection.name}</div>
            }
        </div>
    );
}

function Image(
    props: {
        abstract3D: Abstract3D,
        collection: Abstract3DCollection
        className?: string
    }
) {
    return (
        <NextImage
            src={props.abstract3D.image}
            alt={props.collection.name}
            className={props.className}
            draggable={false}
            placeholder="blur"
        />
    );
}
