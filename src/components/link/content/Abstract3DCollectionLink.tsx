import { default as NextImage } from "next/image";
import { Abstract3DCollection } from "@/content/3d/a3ds/abstract3dCollections";
import Link from "next/link";
import { Abstract3D } from "@/content/3d/a3ds/abstract3dSeries";
import { isEven } from "@/utils/MathUtils";
import { Route } from "@/utils/RouteUtils";
import React, { CSSProperties } from "react";
import { Abstract3DLinkPlaceholder, Abstract3DLinkPlaceholderProps } from "@/components/link/content/Abstract3DLink";


type Abstract3DCollectionLinkProps = {
    collection: Abstract3DCollection,
    noMargin?: boolean,
    className?: string,
    small?: boolean
};

const size = (small?: boolean) => small ? '8.5rem' : '13.25rem';

export function Abstract3DCollectionLink(props: Abstract3DCollectionLinkProps) {
    const collection = props.collection;
    const [first, second, third] = collection.abstract3Ds;
    const amountOfImages = collection.abstract3Ds.length;

    const sizeStyle: CSSProperties = {
        width: size(props.small),
        height: size(props.small),
    }

    const marginClassName = props.small ? 'my-2 mx-4' : 'my-4 mx-6';

    const sharedClassNames = `
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
        <div className={`w-fit flex flex-col items-center ${props.noMargin ? '' : marginClassName} ${props.className}`}>
            <Link href={Route.abstract3dCollection(collection)} className={'block relative group rounded-2xl'}>
                {
                    amountOfImages == 0 &&
                    <Abstract3DCollectionLinkPlaceholder small={props.small}>
                        Empty collection
                    </Abstract3DCollectionLinkPlaceholder>
                }
                {
                    first &&
                    <Image
                        abstract3D={first}
                        collection={collection}
                        style={sizeStyle}
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
                        style={sizeStyle}
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
                        style={sizeStyle}
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

type ImageProps = {
    abstract3D: Abstract3D,
    collection: Abstract3DCollection
    className?: string,
    style?: CSSProperties
}

function Image(props: ImageProps) {
    return (
        <NextImage
            style={props.style}
            src={props.abstract3D.image}
            alt={props.collection.name}
            className={props.className}
            draggable={false}
            placeholder="blur"
        />
    );
}


export function Abstract3DCollectionLinkPlaceholder(props: Abstract3DLinkPlaceholderProps) {
    return <Abstract3DLinkPlaceholder {...props}/>
}
