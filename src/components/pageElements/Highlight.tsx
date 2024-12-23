import React from "react";

type HighlightProps = {
    children?: React.ReactNode,
    small?: boolean,
    customColor?: string
};

export default function Highlight(props: HighlightProps) {

    return (
        <span
            className={`
                rounded-lg px-1
                ${props.small ? "" : "py-[0.09rem]"}
                ${props.customColor ? props.customColor : "dark:bg-neutral-950 bg-neutral-250"}
            `}
        >
            {props.children}
        </span>
    );

}