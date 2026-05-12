import { ReactNode } from "react";


type PopoverProps = {
    className?: string,
    children?: ReactNode
}

export default function Popover(props: PopoverProps) {
    return (
        <div
            className={`
                p-1.5 rounded-xl
                bg-zinc-100 dark:bg-zinc-900
                bg-opacity-90 dark:bg-opacity-90
                border dark:border-zinc-800 border-zinc-200
                backdrop-blur-sm
                drop-shadow-md
                ${props.className}
            `}
        >
            {props.children}
        </div>
    );
}

