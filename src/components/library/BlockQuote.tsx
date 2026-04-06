import React from "react";

type BlockQuoteProps = {
    children?: React.ReactNode
}

export default function BlockQuote(props: BlockQuoteProps) {
    return (
        <div className={'flex items-stretch gap-1.5'}>
            <div className={'w-2 rounded-full bg-zinc-350 dark:bg-zinc-600'}/>
            <div className={'p-1'}>
                {props.children}
            </div>
        </div>
    );
}
