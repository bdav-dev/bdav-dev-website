import React from "react";
import { createIsLast } from "@/utils/ArrayUtils";
import DropdownMenuItem, { DropdownItem } from "./DropdownMenuItem";


type DropdownMenuProps = {
    groups: DropdownItem[][]
}

export default function DropdownMenu(props: DropdownMenuProps) {
    const isLast = createIsLast(props.groups);

    return (
        <ul className={`
                p-1.5
                flex flex-col items-center
                rounded-xl
                bg-opacity-90 dark:bg-opacity-90
                backdrop-blur-sm
                drop-shadow-sm
                bg-zinc-100 dark:bg-zinc-900
                border dark:border-zinc-800 border-zinc-200
                transition-all
                opacity-0 scale-90
                group-hover:opacity-100 group-hover:scale-100
            `}
        >
            {
                props.groups.map(
                    (group, i) => {
                        let array = group.map(
                            (item, index) => (
                                <DropdownMenuItem {...item} key={`${i}${index}`}/>
                            )
                        );

                        if (!isLast(i)) {
                            array.push(
                                <hr key={i}
                                    className="w-[90%] m-0.5 border-zinc-300 dark:border-zinc-700"
                                />
                            );
                        }

                        return array;
                    }
                )
            }
        </ul>
    );
}
