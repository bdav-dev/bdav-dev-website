import HyperLink from "./HyperLink";
import React from "react";
import { IconProps } from "@/icons/IconProps";

type SmallInternalLinkProps = {
    href: string,
    children?: React.ReactNode,
    icon?: (props: IconProps) => React.ReactNode,
}

export default function InternalLink(props: SmallInternalLinkProps) {

    const iconProps: IconProps = { className: 'h-5 inline stroke-[6] pb-0.5 self-center mr-1' }

    return (
        <HyperLink
            href={props.href}
            className="rounded-md stroke-black dark:stroke-white"
            noNewTab
            noUnderline
            noMobileStyle
        >
            <span className={`
                py-0.5 px-1
                my-0.5
                rounded-lg
                inline-block
                dark:bg-zinc-950 bg-zinc-300
            `}
            >
                {props.icon && props.icon(iconProps)}
                {props.children}
            </span>
        </HyperLink>
    );
}
