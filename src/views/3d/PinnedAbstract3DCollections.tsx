'use client';

import Abstract3DCollections from "@/components/categories/3d/a3ds/Abstract3DCollections";
import Link from "next/link";
import { Route } from "@/utils/RouteUtils";
import { Abstract3DLinkPlaceholder } from "@/components/link/content/Abstract3DLink";
import Tile from "@/components/Tile";
import useIsMobile from "@/hooks/UseIsMobile";


export default function PinnedAbstract3DCollections() {
    const isMobile = useIsMobile();

    return (
        <Tile title={'Pinned Collections'} className={'mt-2.5'}>
            <Abstract3DCollections
                small
                limit={isMobile ? 3 : 5}
                trailingComponent={
                    <Link href={Route.abstract3dCollections} className={'group'}>
                        <Abstract3DLinkPlaceholder small fill className={'my-3 mx-4'}>
                            <div className={'text-lg group-hover:scale-105 transition-transform ease-out'}>
                                View all
                            </div>
                        </Abstract3DLinkPlaceholder>
                    </Link>
                }
            />
        </Tile>
    );
}
