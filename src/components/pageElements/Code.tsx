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
                px-1 rounded-lg
                ${props.noMono ? "" : spaceMono}
                ${props.largePadding ? "py-0.5" : ""}
                ${props.customColor ? props.customColor : "dark:bg-zinc-950 bg-zinc-300"}
            `}
        >
            {props.children}
        </span>
    );

}