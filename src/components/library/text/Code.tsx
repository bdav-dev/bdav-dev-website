import React, { ReactNode } from "react";
import Highlight from "@/components/library/text/Highlight";

export default function Code(props: { children?: ReactNode, className?: string }) {

    return (
        <Highlight className={`font-mono ${props.className}`}>
            {props.children}
        </Highlight>
    );

}