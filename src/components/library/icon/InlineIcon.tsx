import { ReactNode } from "react";


type InlineIconProps = {
    icon: ReactNode,
    children?: ReactNode
}

export default function InlineIcon(props: InlineIconProps) {
    return (
        <span className={"inline-flex gap-0.5 items-center"}>
            {props.icon}
            <span className={"self-baseline"}>
                {props.children}
            </span>
        </span>
    );
}
