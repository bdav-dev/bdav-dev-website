import { ReactNode } from "react";


export type HeadlineProps = {
    className?: string,
    children?: ReactNode
}

export default function H1(props: HeadlineProps) {
    return (
        <h1 className={`text-5xl font-extrabold text-zinc-950 dark:text-zinc-50 ${props.className}`}>
            {props.children}
        </h1>
    );
}
