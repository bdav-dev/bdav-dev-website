import { Space_Mono } from "next/font/google";

type CodeProps = {
    children?: React.ReactNode,
    noMono?: boolean
};

const spaceMono = Space_Mono({subsets: ['latin'], weight: "400"});

export default function Code(props: CodeProps) {

    return (
        <span className={"dark:bg-zinc-950 bg-zinc-300 pr-1 pl-1 rounded-lg " + (props.noMono || spaceMono.className)}>
            {props.children}
        </span>
    );

}