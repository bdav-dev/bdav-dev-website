import Headline from "./headlines/Headline";

type SectionProps = {
    headline: string | React.ReactNode,
    children?: React.ReactNode,
    className?: string
};

export default function Section(props: SectionProps) {
    return (
        <section className={"mt-1 mb-3.5 " + props.className}>
            <Headline>{props.headline}</Headline>
            {props.children}
        </section>
    );
}