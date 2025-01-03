'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import { isEmpty } from "@/utils/ArrayUtils";
import { Route } from "@/utils/RouteUtils";

type Segment = {
    node: string,
    href: string
}

export default function BreadcrumbNavigation() {
    const route = usePathname()
        .split("/")
        .filter(e => e != "");

    if (isEmpty(route)) {
        return <></>;
    }

    let segments: Segment[] = [];
    for (let i = 0; i < route.length; i++) {
        segments.push({
            node: route[i],
            href: "/" + route.slice(0, i + 1).join("/")
        });
    }

    return (
        <div className="m-2 ml-4 mb-6">
            <Link
                href={Route.root}
                className="select-none p-1 pl-1.5 pr-1.5 rounded-md transition-colors duration-200 hover:bg-zinc-200 dark:hover:bg-zinc-700"
                draggable="false"
            >
                bdav.dev
            </Link>

            {
                segments.map(
                    (node, i) => (
                        <span key={i}>
                            <span className="ml-1.5 mr-1.5 select-none dark:text-zinc-500 text-zinc-400">/</span>
                            <Link
                                href={node.href}
                                className={`
                                    p-1 px-1.5
                                    whitespace-nowrap
                                    select-none
                                    rounded-md
                                    transition-colors duration-200
                                    hover:bg-zinc-200 dark:hover:bg-zinc-700
                                `}
                                draggable="false"
                            >
                                {node.node}
                            </Link>
                        </span>
                    )
                )
            }
        </div>
    );
}
