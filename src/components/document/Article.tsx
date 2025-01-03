import PageTitle from "./headlines/PageTitle";
import React from "react";

type ArticleProps = {
    headline: string | React.ReactNode,
    children?: React.ReactNode,
    className?: string
};

export default function Article(props: ArticleProps) {
    return (
        <article className={props.className + " leading-[1.55rem]"}>
            <PageTitle className="mb-1.5">{props.headline}</PageTitle>
            {props.children}
        </article>
    );
}