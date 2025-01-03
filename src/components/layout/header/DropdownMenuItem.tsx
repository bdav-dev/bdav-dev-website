import Link from "next/link";
import React from "react";
import { IconProps } from "@/icons/IconProps";

export type DropdownItem = {
    icon?: (props: IconProps) => React.ReactNode,
    text: string | React.ReactNode,
    href: string,
    inNewTab?: boolean
}

type DropdownItemProps = DropdownItem;
export default function DropdownMenuItem(props: DropdownItemProps) {
    const iconProps: IconProps = { className: 'h-4 inline dark:fill-white fill-black mb-0.5 mt-0.5' };

    return (
        <span
            className={`
                m-0.5 p-0.5 px-1
                w-full
                text-center rounded-md
                transition-colors hover:bg-zinc-300 dark:hover:bg-zinc-600
            `}
        >
            <Link
                href={props.href}
                draggable="false"
                className="inline-flex justify-center items-center gap-1 w-full"
                rel={props.inNewTab ? "noopener noreferrer" : ""}
                target={props.inNewTab ? "_blank" : "_self"}
            >
                {
                    props.icon && props.icon(iconProps)
                }
                {props.text}
            </Link>
        </span>
    );

}