import H2 from "@/components/library/headlines/H2";
import React from "react";

type SectionProps = {
    headline: string | React.ReactNode,
    children?: React.ReactNode,
    className?: string
};

export default function Section(props: SectionProps) {
    return (
        <section className={`pb-3 pt-2 ${props.className}`}>
            <H2 className={'pb-1'}>{props.headline}</H2>
            {props.children}
        </section>
    );
}