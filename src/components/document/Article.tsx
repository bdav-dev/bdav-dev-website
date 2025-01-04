import PageTitle from "./headlines/PageTitle";
import React from "react";

type ArticleProps = {
    headline: string | React.ReactNode,
    children?: React.ReactNode,
    className?: string,
    leadingComponent?: React.ReactNode,
    trailingComponent?: React.ReactNode
};

export default function Article(props: ArticleProps) {
    return (
        <article className={props.className + " leading-[1.55rem]"}>
            <div className={'mb-1.5 flex flex-row items-end gap-1.5'}>
                {props.leadingComponent}
                <PageTitle>{props.headline}</PageTitle>
                {props.trailingComponent}
            </div>
            {props.children}
        </article>
    );
}