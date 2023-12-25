
type HeadlineProps = {
    className?: string,
    children?: React.ReactNode
}

export default function Headline(props: HeadlineProps) {

    return (
        <div className={"mb-2 " + props.className}>
            <h2 className="text-lg text-zinc-900 dark:text-zinc-50">{props.children}</h2>
            <hr className="border-zinc-500 dark:border-zinc-400"/>
        </div>
    );
}