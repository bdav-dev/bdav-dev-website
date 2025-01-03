import React from "react";

type HighlightProps = {
    children?: React.ReactNode,
    small?: boolean
};

export default function Highlight(props: HighlightProps) {
    return (
        <span
            className={`
                px-1.5 dark:bg-neutral-950 bg-neutral-250
                ${props.small ? "rounded-full" : "rounded-lg py-[0.09rem]"}
            `}
        >
            {props.children}
        </span>
    );
}
