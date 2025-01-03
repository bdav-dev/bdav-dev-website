"use client";

import useIsMobile from "@/hooks/UseIsMobile";
import Link from "next/link";
import React from "react";
import InjectWordBreaks from "@/components/format/InjectWordBreaks";

type HyperLinkProps = {
    href: string
    children?: React.ReactNode
    className?: string,
    noNewTab?: boolean,
    noMobileStyle?: boolean,
    noUnderline?: boolean
};

export default function HyperLink(props: HyperLinkProps) {
    let isMobile = useIsMobile();

    return (
        <Link
            href={props.href}
            className={
                `
                ${
                    isMobile && !props.noMobileStyle
                        ? "text-sky-700 dark:text-sky-400 !stroke-sky-700 dark:!stroke-sky-400"
                        : "hover:text-sky-700 dark:hover:text-sky-400 hover:!stroke-sky-700 dark:hover:!stroke-sky-400"
                }
                ${
                    props.noUnderline
                        ? ""
                        : `
                            underline
                            hover:decoration-inherit dark:hover:decoration-inherit
                            ${isMobile ? "" : "decoration-neutral-500 dark:decoration-neutral-300"}
                        `
                }
                ${props.className}
                `
            }
            target={props.noNewTab ? "_self" : "_blank"}
            rel="noopener noreferrer"
        >
            {props.children ?? <InjectWordBreaks text={props.href}/>}
        </Link>
    );
}
