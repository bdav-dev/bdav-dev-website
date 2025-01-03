import React from "react";
import { createIsLast } from "@/utils/ArrayUtils";

type TitledItem = {
    title: string | React.ReactNode,
    text: string | React.ReactNode
}

type EnumerateProps = {
    items: (string | React.ReactNode | TitledItem)[],
    numbered?: boolean
    bulletSymbol?: string | React.ReactNode,
    bulletWidth?: string,
    className?: string,
    spaceBetween?: boolean | string,
    indent?: boolean | string
};

export default function Enumerate(props: EnumerateProps) {
    const List = props.numbered ? 'ol' : 'ul';
    const symbol = props.bulletSymbol ?? '–';
    const digits = props.items.length.toString().length;
    const bulletWidth = props.bulletWidth ?? (props.numbered ? `${digits * 0.5 + 0.6}rem` : '0.75rem');

    const separate = typeof (props.spaceBetween) === "boolean"
        ? '0.25rem'
        : props.spaceBetween;

    const marginLeft = typeof (props.indent) === "boolean"
        ? '0.5rem'
        : props.indent;

    const isLast = createIsLast(props.items);

    return (
        <List className={`w-full ${props.className}`} style={{ marginLeft }}>
            {
                props.items.map(
                    (listItem, index) => (
                        <li key={index}
                            className={'flex flex-row flex-nowrap'}
                            style={{ marginBottom: !isLast(index) ? separate : undefined }}
                        >
                            <div
                                className="select-none text-neutral-500 mr-1"
                                style={{ width: bulletWidth }}
                            >
                                {
                                    props.numbered
                                        ? `${index + 1}.`
                                        : symbol
                                }
                            </div>

                            <div className="w-full">
                                <Item content={listItem}/>
                            </div>
                        </li>
                    )
                )
            }
        </List>
    );
}

function Item({ content }: { content: (TitledItem | string | React.ReactNode) }) {
    const contentAsTitledItem = content as TitledItem;

    return contentAsTitledItem.title != undefined
        ? <>
            <span className="font-semibold">{contentAsTitledItem.title}</span>
            <br/>
            {contentAsTitledItem.text}
        </>
        : <>{content}</>;
}