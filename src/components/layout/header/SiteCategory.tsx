import SiteCategoryLink, { SiteCategoryLinkProps } from "@/components/layout/header/SiteCategoryLink";
import { createIsLast } from "@/library/array";
import { Fragment, ReactNode } from "react";
import Link from "next/link";


type SiteCategoryMenuItem = {
    icon?: ReactNode,
    text: ReactNode,
    href: string
}

type SiteCategoryProps = SiteCategoryLinkProps & {
    menu?: SiteCategoryMenuItem[][]
}

export function SiteCategory({ menu, ...siteCategoryLinkProps }: SiteCategoryProps) {
    return (
        <div className={'relative group h-10'}>
            <SiteCategoryLink {...siteCategoryLinkProps}/>
            {
                menu &&
                <div className={'absolute left-1/2 invisible group-hover:visible pointer-events-none'}>
                    <div className={'relative -left-1/2 pt-1 group-hover:pointer-events-auto'}>
                        <DropdownMenu groups={menu}/>
                    </div>
                </div>
            }
        </div>
    );
}

function DropdownMenu(props: { groups: SiteCategoryMenuItem[][] }) {
    const isLastGroup = createIsLast(props.groups);

    return (
        <ul
            className={`
                flex flex-col items-center
                popover
                transition-all
                opacity-0 group-hover:opacity-100
                scale-90 group-hover:scale-100
                gap-0.5
            `}
        >
            {
                props.groups.map(
                    (group, groupIndex) => (
                        <Fragment key={`group-${groupIndex}`}>
                            {
                                group.map((item, itemIndex) => <DropdownMenuItem key={`group-${groupIndex},item-${itemIndex}`} {...item}/>)
                            }
                            {
                                !isLastGroup(groupIndex) &&
                                <hr key={groupIndex} className="w-[90%] my-0.5 border-zinc-300 dark:border-zinc-700"/>
                            }
                        </Fragment>
                    )
                )
            }
        </ul>
    );
}

function DropdownMenuItem(props: SiteCategoryMenuItem) {
    return (
        <Link
            href={props.href}
            className={`
                flex justify-center items-center gap-1
                w-full
                px-1 py-0.5 rounded-md
                text-center whitespace-nowrap
                hover:bg-zinc-300 dark:hover:bg-zinc-600
                transition-colors
            `}
        >
            {props.icon} {props.text}
        </Link>
    );
}
