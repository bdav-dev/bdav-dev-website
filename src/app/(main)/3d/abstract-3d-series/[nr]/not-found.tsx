'use client';

import HyperLink from "@/components/library/link/HyperLink";
import { BdavDev } from "@/library/routing";
import { usePathname } from "next/navigation";


export default function Abstract3dImageNotFound() {
    const pathname = usePathname();

    const unknownImage = pathname.split("/").pop();

    return (
        <div className={'flex-1 flex flex-col items-center justify-center gap-0.5'}>
            <span>
                Abstract3D Series does not contain image "{unknownImage}".
            </span>
            <HyperLink href={BdavDev.blender.abstract3dSeries.getRoute()}>
                View Abstract3D Series
            </HyperLink>
        </div>
    );
}
