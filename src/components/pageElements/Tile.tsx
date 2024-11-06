import React from "react";

type TileProps = {
    title?: string | React.ReactNode,
    className?: string,
    children?: React.ReactNode,
    customPadding?: boolean,
}

export default function Tile(props: TileProps) {

    return (
        <div className={`
                bg-zinc-100 dark:bg-zinc-900
                border border-zinc-200 dark:border-zinc-800
                rounded-xl
                ${props.className ?? ""}
            `}
        >
            {
                props.title && (
                    <h4 className={`
                            bg-zinc-200 dark:bg-zinc-800
                            text-zinc-700 dark:text-zinc-250
                            px-2.5 py-1.5
                            font-semibold
                            rounded-t-[0.65rem]
                            w-full
                        `}
                    >
                        {props.title}
                    </h4>
                )
            }

            <div
                className={`
                    ${props.customPadding ? "" : "p-2.5"}
                    w-full
                    h-full
                `}
            >
                {props.children}
            </div>
        </div>
    );

}