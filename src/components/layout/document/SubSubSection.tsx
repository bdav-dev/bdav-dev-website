import H4 from "@/components/library/headlines/H4";
import React from "react";

type SubSubSectionProps = {
    headline: string | React.ReactNode,
    children?: React.ReactNode,
    className?: string
}

export default function SubSubSection(props: SubSubSectionProps) {
    return (
        <section className={`pb-2 pt-0.5 ${props.className}`}>
            <H4>{props.headline}</H4>
            {props.children}
        </section>
    );
}