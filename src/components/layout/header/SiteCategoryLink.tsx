'use client';

import Link from "next/link";
import { getBaseOfRoute } from "@/library/routing";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";


export type SiteCategoryLinkProps = {
    href: string,
    icon: ReactNode,
    label: string
}

export default function SiteCategoryLink(props: SiteCategoryLinkProps) {
    const currentCategoryRoute = getBaseOfRoute(usePathname());

    return (
        <Link
            href={props.href}
            className={`
                flex flex-row items-center gap-0.5
                h-10 p-1.5
                select-none
                rounded-lg
                transition-colors duration-200
                ${props.href === currentCategoryRoute ? variants.selected : variants.default}
            `}
            draggable={false}
        >
            {props.icon}
            <span className={'hidden sm:inline-flex'}>{props.label}</span>
        </Link>
    );
}

const variants = {
    default: 'hover:bg-zinc-300/95 dark:hover:bg-zinc-700/90',
    selected: 'bg-zinc-350/80 dark:bg-zinc-925/80'
};
