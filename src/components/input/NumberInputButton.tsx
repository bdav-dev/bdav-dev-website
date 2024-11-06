import React from "react";

type NumberInputButtonProps = {
    onClick: () => void,
    children?: React.ReactNode
}

export default function NumberInputButton(props: NumberInputButtonProps) {

    return (
        <button
            onClick={props.onClick}
            className={`
                bg-zinc-200 dark:bg-zinc-950
                h-full
                rounded-md
                border
                border-zinc-400 dark:border-zinc-800
                hover:bg-zinc-300 hover:dark:bg-zinc-900
                active:bg-zinc-400 dark:active:bg-zinc-800
                transition-colors duration-75
                select-none
                flex justify-center items-center
            `}
        >
            {props.children}
        </button>
    );
}