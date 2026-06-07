import H3 from "@/components/library/headlines/H3";
import { ReactNode } from "react";


type SectionProps = {
    headline: string | ReactNode,
    children?: ReactNode,
    className?: string
};

export default function SubSection(props: SectionProps) {
    return (
        <section className={`pb-2.5 pt-1.5 ${props.className}`}>
            <H3 className={'pb-0.5'}>{props.headline}</H3>
            {props.children}
        </section>
    );
}