"use client";

import useIsMobile from "@/hooks/UseIsMobile";
import Link from "next/link";

type HyperLinkProps = {
    href: string
    children?: React.ReactNode
    noNewTab?: boolean,
    className?: string,
    noMobileStyle?: boolean,
    noUnderline?: boolean
};

export default function HyperLink(props: HyperLinkProps) {
    let isMobile = useIsMobile();

    return (
        <Link
            href={props.href}
            className={`
                ${
                    isMobile && !props.noMobileStyle
                        ? "dark:text-sky-400 text-sky-700 dark:stroke-sky-400 stroke-sky-700"
                        : "dark:hover:text-sky-400 hover:text-sky-700 dark:hover:stroke-sky-400 hover:stroke-sky-700"
                }
                ${
                    props.noUnderline
                        ? ""
                        : isMobile ? "underline" : "hover:underline"
                }
                ${props.className}
            `}
            target={props.noNewTab ? "_self" : "_blank"}
            rel="noopener noreferrer"
        >
            {props.children ?? props.href}
        </Link>
    );
}