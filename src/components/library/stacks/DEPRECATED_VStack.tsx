import { ReactNode } from "react";

type VStackProps = {
    className?: string,
    children: ReactNode
};


export default function DEPRECATED_VStack(props: VStackProps) {

    return (
        <div className={"flex flex-col flex-wrap gap-1.5 " + props.className}>
            {props.children}
        </div>
    );

}