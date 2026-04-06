import React, { ReactNode } from "react";

export default function CompactMono(props: { children?: ReactNode }) {
    return (
        <span className={'font-mono'} style={{ wordSpacing: "-0.2em" }}>
            {props.children}
        </span>
    );
}

