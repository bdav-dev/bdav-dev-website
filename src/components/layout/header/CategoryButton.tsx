import Link from "next/link";
import React from "react";
import { IconProps } from "@/icons/IconProps";

type CategoryButtonProps = {
    icon: (props: IconProps) => React.ReactNode,
    text: string,
    link?: string,
    selected?: boolean,
    dropdownMenu?: React.ReactNode
};

export default function CategoryButton(props: CategoryButtonProps) {
    const iconProps: IconProps = { className: "dark:stroke-white stroke-black stroke-[5] h-10 w-7" }

    return (
        <div className="relative group h-10">
            <Link
                href={props.link ?? ""}
                draggable="false"
                className={
                    `
                    p-1.5 mx-0.5
                    select-none
                    rounded-lg
                    transition-colors duration-200
                    flex flex-row items-center
                    bg-opacity-80 dark:bg-opacity-80
                    h-10
                    ${
                        props.selected
                            ? "bg-zinc-350 dark:bg-zinc-925"
                            : "hover:bg-zinc-300 dark:hover:bg-zinc-700 hover:bg-opacity-95 hover:dark:bg-opacity-90"
                    }
                    `
                }
            >
                {props.icon(iconProps)}
                <span className="sm:inline-flex hidden ml-1 h-10 items-center">{props.text}</span>
            </Link>
            {
                props.dropdownMenu &&
                <div className="absolute left-1/2 invisible group-hover:visible pointer-events-none">
                    <div className="relative -left-1/2 pt-1 group-hover:pointer-events-auto">
                        {props.dropdownMenu}
                    </div>
                </div>
            }
        </div>
    );
}