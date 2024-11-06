import Headline from "./headlines/Headline";
import React from "react";

type SectionProps = {
    headline: string | React.ReactNode,
    children?: React.ReactNode,
    className?: string
};

export default function Section(props: SectionProps) {
    return (
        <section className={"mt-2.5 mb-5 leading-[1.55rem] " + props.className}>
            <Headline>{props.headline}</Headline>
            {props.children}
        </section>
    );
}