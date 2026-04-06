'use client';

import { ReactNode } from "react";


type TerminalProps = {
    children?: ReactNode,
    user: string,
    hostname: string,
    currentDirectory: string,
    command: string
}

export default function Terminal(props: TerminalProps) {
    return (
        <div className={`py-2 px-2.5 rounded-xl flex-1 bg-tile dark:bg-zinc-950 font-mono`}>
            <div>
                <span className={"text-emerald-500 dark:text-green-400 font-bold"}>
                    {props.user}@{props.hostname}
                </span>
                :
                <Path>
                    {props.currentDirectory}
                </Path>
                $ {props.command}
            </div>
            {props.children}
        </div>
    );
}

export function Path({ children }: { children?: ReactNode }) {
    return <span className={"text-sky-500 dark:text-blue-400 font-bold"}>{children}</span>
}
