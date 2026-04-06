import H1 from "@/components/library/headlines/H1";
import React, { ReactNode } from "react";

type ArticleProps = {
    headline: ReactNode,
    children?: ReactNode,
    className?: string,
};

export default function Article(props: ArticleProps) {
    return (
        <article className={`${props.className}`}>
            <H1 className={'pb-2.5'}>{props.headline}</H1>
            {props.children}
        </article>
    );
}