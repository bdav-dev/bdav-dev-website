import React from "react";

type BlockQuoteProps = {
    children?: React.ReactNode
}

export default function BlockQuote(props: BlockQuoteProps) {
    return (
        <div className={`
                bg-neutral-225 dark:bg-zinc-800
                border-neutral-350 dark:border-neutral-725
                w-fit
                p-2.5
                rounded-lg
                border-l-8
            `}
        >
            {props.children}
        </div>
    );
}