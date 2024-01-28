import { spaceMono } from "@/fonts";

type CodeProps = {
    children?: React.ReactNode,
    customColor?: string
};

export default function Code(props: CodeProps) {    

    return (
        <span
            className={`
                rounded-lg px-1
                ${spaceMono}
                ${props.customColor ? props.customColor : "dark:bg-zinc-950 bg-zinc-300"}
            `}
        >
            {props.children}
        </span>
    );

}