import { Space_Mono } from "next/font/google";

type CodeProps = {
    children?: React.ReactNode,
    noMono?: boolean,
    largePadding?: boolean,
    customColor?: string
};

const spaceMono = Space_Mono({ subsets: ['latin'], weight: "400" });

export default function Code(props: CodeProps) {    

    return (
        <span
            className={
                "rounded-lg "
                + (props.noMono ? "" : spaceMono.className) + " "
                + (props.largePadding ? "px-1.5 py-1" : "px-1") + " "
                + (props.customColor ? props.customColor : "dark:bg-zinc-950 bg-zinc-300")
            }
        >
            {props.children}
        </span>
    );

}