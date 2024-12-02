import HyperLink from "./HyperLink";
import React from "react";

type SmallInternalLinkProps = {
    href: string,
    children?: React.ReactNode
}

export default function SmallInternalLink(props: SmallInternalLinkProps) {

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
                {props.children}
            </span>
        </HyperLink>
    );
}
