import React from "react";

type HStackProps = {
    className?: string,
    children?: React.ReactNode
};


export default function DEPRECATED_HStack(props: HStackProps) {

    return (
        <div className={"flex flex-row flex-wrap gap-1.5 " + props.className}>
            {props.children}
        </div>
    );

}