import SmallHeadline from "./headlines/SmallHeadline";

type SectionProps = {
    headline: string | React.ReactNode,
    children?: React.ReactNode,
    className?: string
};

export default function SubSection(props: SectionProps) {
    return (
        <section className={"mt-2 mb-3.5 ml-2 leading-[1.55rem] " + props.className}>
            <SmallHeadline>{props.headline}</SmallHeadline>
            {props.children}
        </section>
    );
}