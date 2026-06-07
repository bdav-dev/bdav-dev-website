import H2 from "@/components/library/headlines/H2";
import { ReactNode } from "react";


type SectionProps = {
    headline: string | ReactNode,
    children?: ReactNode,
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