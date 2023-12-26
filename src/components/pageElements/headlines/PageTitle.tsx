type PageTitleProps = {
    className?: string,
    children?: React.ReactNode
}

export default function PageTitle(props: PageTitleProps) {

    return (
        <h1 className={"text-3xl font-semibold " + props.className}>
            {props.children}
        </h1>
    );

}