import Link from "next/link";
import Code from "../Code";
import Tile from "../Tile";
import React from "react";
import { IconProps } from "@/icons/IconProps";


type LargeLinkProps = {
    href: string,
    icon: (props: IconProps) => React.ReactNode,
    text: string | React.ReactNode,
    inNewTab?: boolean
}

export default function LargeLink(props: LargeLinkProps) {
    const iconProps: IconProps = { className: 'stroke-black dark:stroke-white stroke-[3.25] pb-2' };

    return (
        <Link
            href={props.href}
            className="hover:scale-105 transition-all"
            target={props.inNewTab ? "_blank" : "_self"}
            rel="noopener noreferrer"
        >
            <Tile>
                <div className="h-32 w-32 flex flex-col justify-center text-center select-none">
                    {props.icon(iconProps)}
                    <Code>{props.text}</Code>
                </div>
            </Tile>
        </Link>
    );
}
