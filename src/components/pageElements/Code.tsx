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
                ${props.largePadding ? "py-[0.115rem]" : ""}
                ${props.customColor ? props.customColor : "dark:bg-zinc-950 bg-zinc-300"}
            `}
        >
            {props.children}
        </span>
    );

}

// rounded-lg inline-block my-[0.0625rem]
//                 ${props.noMono ? "" : spaceMono}
//                 ${props.largePadding ? ">py-0.5 px-1" : "px-1"}