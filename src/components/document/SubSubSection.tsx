import VerySmallHeadline from "./headlines/VerySmallHeadline";
import React from "react";

type SubSubSectionProps = {
    headline: string | React.ReactNode,
    children?: React.ReactNode,
    className?: string
}

export default function SubSubSection(props: SubSubSectionProps) {
    return (
        <section className={"mt-1 mb-2 ml-2 " + props.className}>
            <VerySmallHeadline>{props.headline}</VerySmallHeadline>
            {props.children}
        </section>
    );
}