import { Fragment, ReactNode } from "react";
import { createIsLast } from "@/utilities/array";
import Link from "next/link";


type SiteCategoryDropdownMenuProps = {
    groups: SiteCategoryMenuItemProps[][]
}

export function SiteCategoryDropdownMenu(props: SiteCategoryDropdownMenuProps) {
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
                                group.map((item, itemIndex) => <MenuItem key={`group-${groupIndex},item-${itemIndex}`} {...item}/>)
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


export type SiteCategoryMenuItemProps = {
    icon?: ReactNode,
    text: ReactNode,
    href: string
}

function MenuItem(props: SiteCategoryMenuItemProps) {
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
