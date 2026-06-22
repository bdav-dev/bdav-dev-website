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
                flex flex-row items-center justify-center gap-0.5
                p-1.5 h-10 w-10 sm:w-auto
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
    default: 'group-hover:bg-zinc-950/10 dark:group-hover:bg-zinc-950/35',
    selected: 'bg-zinc-950/15 dark:bg-zinc-950/60'
};
