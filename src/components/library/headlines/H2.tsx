import React from "react";

export type HeadlineProps = {
    className?: string,
    children?: React.ReactNode
}

export default function H2(props: HeadlineProps) {

    return (
        <h2 className={`text-3xl font-bold text-zinc-900 dark:text-zinc-100 ${props.className}`}>
            {props.children}
        </h2>
    );

}