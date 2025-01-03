import { mono } from "@/fonts";
import React from "react";

type CodeProps = {
    children?: React.ReactNode,
    customColor?: string
};

export default function Code(props: CodeProps) {

    return (
        <span
            className={`
                rounded-lg px-1.5 py-[0.0625rem]
                ${mono}
                ${props.customColor ?? "dark:bg-neutral-950 bg-neutral-250"}
            `}
        >
            {props.children}
        </span>
    );

}