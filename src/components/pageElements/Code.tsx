import { spaceMono } from "@/fonts";

type CodeProps = {
    children?: React.ReactNode,
    noMono?: boolean,
    largePadding?: boolean,
    customColor?: string
};

export default function Code(props: CodeProps) {    

    return (
        <span
            className={`
                rounded-lg
                ${props.noMono ? "" : spaceMono}
                ${props.largePadding ? "px-1 py-0.5" : "px-1"}
                ${props.customColor ? props.customColor : "dark:bg-zinc-950 bg-zinc-300"}
            `}
        >
            {props.children}
        </span>
    );

}