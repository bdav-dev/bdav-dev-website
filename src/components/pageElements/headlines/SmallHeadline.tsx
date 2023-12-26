type HeadlineProps = {
    className?: string,
    children?: React.ReactNode
}

export default function SmallHeadline(props: HeadlineProps) {

    return (
        <h3 className={"text-xl text-zinc-900 dark:text-zinc-50 " + props.className}>
            {props.children}
        </h3>
    );

}