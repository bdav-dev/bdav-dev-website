import PageTitle from "./headlines/PageTitle";

type ArticleProps = {
    pageTitle: string | React.ReactNode,
    children?: React.ReactNode
};

export default function MainPageContent(props: ArticleProps) {
    return (
        <article>
            <PageTitle className="mb-1.5">{props.pageTitle}</PageTitle>
            {props.children}
        </article>
    );
}