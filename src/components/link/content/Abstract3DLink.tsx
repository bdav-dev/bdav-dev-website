import { Abstract3D } from "@/content/3d/a3ds/abstract3dSeries";
import Image from "next/image";
import Link from "next/link";
import ContentLinkPlaceholder from "@/components/link/content/ContentLinkPlaceholder";
import { Abstract3DCollection } from "@/content/3d/a3ds/abstract3dCollections";
import { Route } from "@/utils/RouteUtils";
import React, { CSSProperties } from "react";

type Abstract3DLinkProps = {
    abstract3D: Abstract3D,
    collection?: Abstract3DCollection
}

const size = (small?: boolean) => small ? '8.5rem' : '13.25rem';

export default function Abstract3DLink(props: Abstract3DLinkProps) {
    const sizeStyle: CSSProperties = { width: size(), height: size() };

    return (
        <Link
            className="inline-block w-fit group rounded-2xl"
            href={
                props.collection
                    ? Route.abstract3dInCollection(props.collection, props.abstract3D)
                    : Route.abstract3d(props.abstract3D)
            }
            draggable="false"
        >
            <div
                style={sizeStyle}
                className={`
                    z-10
                    absolute flex items-center
                    rounded-2xl overflow-hidden
                    transition-all
                    group-hover:saturate-200 dark:group-hover:saturate-200
                    group-hover:blur-[20px] group-hover:scale-105 ease-in duration-75
                `}
            >
                <Image
                    src={props.abstract3D.image}
                    alt={''}
                    draggable={false}
                    placeholder="blur"
                />
            </div>

            <div
                style={sizeStyle}
                className={`
                    z-20
                    relative flex items-center
                    border border-zinc-500 dark:border-zinc-800
                    rounded-2xl overflow-hidden
                    transition-all group-hover:scale-105 ease-in duration-100
                `}
            >
                <Image
                    src={props.abstract3D.image}
                    alt={`Abstract3DSeries #${props.abstract3D.nr}`}
                    draggable={false}
                    placeholder="blur"
                />
            </div>
        </Link>
    );
}

export type Abstract3DLinkPlaceholderProps = {
    className?: string,
    children?: React.ReactNode
    small?: boolean,
    fill?: boolean
}

export function Abstract3DLinkPlaceholder(props: Abstract3DLinkPlaceholderProps) {
    const sizeStyle: CSSProperties = { width: size(props.small), height: size(props.small) };

    return (
        <ContentLinkPlaceholder
            fill={props.fill}
            style={sizeStyle}
            className={`rounded-2xl ${props.className}`}
        >
            {props.children}
        </ContentLinkPlaceholder>
    );
}
