import React from "react";
import { splitWithoutRemoving } from "@/utils/StringUtils";
import { createIsLast } from "@/utils/ArrayUtils";

type InjectWordBreaksProps = {
    text: string,
    augment?: string[],
    at?: string[]
}

export default function InjectWordBreaks(props: InjectWordBreaksProps) {
    const chunks = splitWithoutRemoving(
        props.text,
        props.at ?? ['/', '-', '&', '?', '#', '=', ...props.augment ?? []]
    );
    const isLast = createIsLast(chunks);

    return (
        <span>
            {chunks.map((chunk, i) => <span key={i}>{chunk}{!isLast(i) && <wbr/>}</span>)}
        </span>
    );
}