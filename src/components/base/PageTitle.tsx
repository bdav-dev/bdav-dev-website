
type PageTitleProps = {
    children?: React.ReactNode
}

export default function PageTitle(props: PageTitleProps) {

    return (
        <h1 className="text-3xl mb-3">
            {props.children}
        </h1>
    );

}