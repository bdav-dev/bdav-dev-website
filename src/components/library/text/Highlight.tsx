import { ReactNode } from "react";

export default function Highlight(props: { children?: ReactNode, className?: string }) {
    return (
        <span className={`px-[0.275rem] py-[0.0625rem] bg-tile rounded-lg ${props.className}`}>
            {props.children}
        </span>
    );
}
