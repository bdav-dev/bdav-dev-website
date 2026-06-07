import { Fragment, ReactNode } from "react";
import { createIsLast } from "@/utils/ArrayUtils";
import Link from "next/link";


export type DropdownItem = {
    icon?: ReactNode,
    text: ReactNode,
    href: string
}

type DropdownMenuProps = {
    groups: DropdownItem[][]
}

export default function DropdownMenu(props: DropdownMenuProps) {
    const isLastGroup = createIsLast(props.groups);

    return (
        <ul
            className={`
                flex flex-col items-center
                p-1.5
                rounded-xl
                bg-opacity-90 dark:bg-opacity-90
                backdrop-blur-sm
                drop-shadow-sm
                bg-zinc-100 dark:bg-zinc-900
                border dark:border-zinc-800 border-zinc-200
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
                                group.map((item, itemIndex) => <Item key={`group-${groupIndex},item-${itemIndex}`} {...item}/>)
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

type ItemProps = DropdownItem;

function Item(props: ItemProps) {
    return (
        <span
            className={`
                p-0.5 px-1
                w-full
                text-center rounded-md
                transition-colors hover:bg-zinc-300 dark:hover:bg-zinc-600
                break-keep
            `}
        >
            <Link
                href={props.href}
                className={"flex justify-center items-center gap-1 w-full"}
                draggable={false}
            >
                {props.icon} {props.text}
            </Link>
        </span>
    );
}
