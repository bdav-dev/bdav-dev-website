'use client';

import HyperLink from "@/components/library/link/HyperLink";
import { BdavDev } from "@/library/routing";
import { usePathname } from "next/navigation";


export default function Abstract3dCollectionNotFound() {
    const pathname = usePathname();

    const unknownCollection = pathname.split("/").pop();

    return (
        <div className={'flex-1 flex flex-col items-center justify-center gap-0.5'}>
            <span>
                Abstract3D Series does not contain collection "{unknownCollection}".
            </span>
            <HyperLink href={BdavDev.blender.abstract3dSeries.collections.getRoute()}>
                View collections
            </HyperLink>
        </div>
    );
}
