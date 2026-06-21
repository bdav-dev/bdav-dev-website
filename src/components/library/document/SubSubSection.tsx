import H4 from "@/components/library/headlines/H4";
import { ReactNode } from "react";


type SubSubSectionProps = {
    headline: string | ReactNode,
    children?: ReactNode,
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
