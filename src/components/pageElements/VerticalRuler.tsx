type VerticalRulerProps = {
    className?: string
}

export default function VerticalRuler(props: VerticalRulerProps) {
    return (
        <div className={"border-zinc-500 dark:border-zinc-600 border-l " + props.className}>
        </div>
    );
}