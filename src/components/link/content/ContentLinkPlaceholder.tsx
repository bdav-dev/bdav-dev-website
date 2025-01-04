import React, { CSSProperties } from "react";

export type ContentLinkPlaceholderProps = {
    className?: string,
    children?: React.ReactNode,
    style?: CSSProperties,
    fill?: boolean
}

export default function ContentLinkPlaceholder(props: ContentLinkPlaceholderProps) {
    return (
        <div style={props.style}
             className={`
                border border-zinc-500
                flex justify-center items-center
                text-zinc-600 dark:text-zinc-400
                text-center
                p-1.5
                ${props.fill ? 'bg-zinc-200 dark:bg-zinc-925' : 'border-dashed'}
                ${props.className}
             `}
        >
            {props.children}
        </div>
    );
}
