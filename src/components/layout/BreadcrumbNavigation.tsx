'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import { isEmpty } from "@/library/array";
import { BdavDev } from "@/library/routing";
import { ReactNode } from "react";


export default function BreadcrumbNavigation() {
    const route = usePathname()
        .split('/')
        .filter(segment => segment != '');

    if (isEmpty(route)) {
        return null;
    }

    return (
        <div className={'flex flex-row flex-wrap items-center'}>
            <Segment href={BdavDev.getRoute()}>
                bdav.dev
            </Segment>
            {
                route.map(
                    (segment, index) => (
                        <div key={index} className={'flex flex-row flex-nowrap items-center'}>
                            <SegmentDivider/>
                            <Segment href={'/' + route.slice(0, index + 1).join('/')}>
                                {segment}
                            </Segment>
                        </div>
                    )
                )
            }
        </div>
    );
}

function Segment(props: { href: string, children?: ReactNode }) {
    return (
        <Link
            href={props.href}
            className={`
                px-1.5 py-0.5
                whitespace-nowrap
                select-none
                rounded-md
                transition-colors duration-200
                hover:bg-zinc-200 dark:hover:bg-zinc-700
            `}
            draggable={false}
        >
            {props.children}
        </Link>
    );
}

function SegmentDivider() {
    return <div className={'px-1.5 select-none dark:text-zinc-500 text-zinc-400'}>/</div>;
}
