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
                rounded-lg px-1
                ${props.noMono ? "" : spaceMono}
                ${props.largePadding ? "py-[0.09rem]" : ""}
                ${props.customColor ? props.customColor : "dark:bg-zinc-950 bg-zinc-300"}
            `}
        >
            {props.children}
        </span>
    );

}