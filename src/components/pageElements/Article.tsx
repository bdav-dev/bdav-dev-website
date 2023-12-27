import PageTitle from "./headlines/PageTitle";

type ArticleProps = {
    pageTitle: string | React.ReactNode,
    children?: React.ReactNode,
    className?: string
};

export default function MainPageContent(props: ArticleProps) {
    return (
        <article className={props.className}>
            <PageTitle className="mb-1.5">{props.pageTitle}</PageTitle>
            {props.children}
        </article>
    );
}