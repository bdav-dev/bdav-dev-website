import { mono } from "@/fonts";
import React from "react";


type MonoSpanProps = {
    children: React.ReactNode
}

export default function MonoSpan(props: MonoSpanProps) {

    return (
        <span className={mono}>
            {props.children}
        </span>
    );

}
