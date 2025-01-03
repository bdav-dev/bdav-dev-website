import { Abstract3D } from "@/content/3d/a3ds/abstract3dSeries";
import Image from "next/image";
import Link from "next/link";
import ContentLinkPlaceholder from "@/components/link/content/ContentLinkPlaceholder";
import { Abstract3DCollection } from "@/content/3d/a3ds/abstract3dCollections";
import { Route } from "@/utils/RouteUtils";
import React from "react";

type Abstract3DLinkProps = {
    abstract3D: Abstract3D,
    collection?: Abstract3DCollection
}

export default function Abstract3DLink(props: Abstract3DLinkProps) {
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
            <div className={`
                    w-[13.25rem] h-[13.25rem] z-10
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

            <div className={`
                    w-[13.25rem] h-[13.25rem] z-20
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

export function Abstract3DSeriesLinkPlaceholder({ className, children }: { className?: string, children?: React.ReactNode }) {
    return <ContentLinkPlaceholder className={`w-[13.25rem] h-[13.25rem] rounded-2xl ${className}`}>{children}</ContentLinkPlaceholder>;
}
