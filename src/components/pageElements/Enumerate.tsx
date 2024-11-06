import React from "react";

type TitledItem = {
    title: string | React.ReactNode,
    text: string | React.ReactNode
}

type EnumerateProps = {
    symbol?: string | React.ReactNode,
    symbolWidth?: string,
    items: (string | React.ReactNode | TitledItem)[],
    className?: string,
    separateItems?: boolean,
    indent?: boolean
};

function itemToJsx(item: (TitledItem | string | React.ReactNode)) {
    const itemAsTitledItem = item as TitledItem;

    return itemAsTitledItem.title != undefined
        ? <>
            <span className="font-semibold">
                {itemAsTitledItem.title}
            </span>
            <br/>
            {itemAsTitledItem.text}
        </>
        : <>{item}</>;
}

export default function Enumerate(props: EnumerateProps) {

    return (
        <ol className={`
            w-full
            ${props.indent ? "ml-2" : ""}
            ${props.className}
        `}>
            {
                props.items.map(
                    (listItem, index) => (
                        <li key={index}
                            className={`
                                flex flex-row flex-nowrap
                                ${props.separateItems && index < props.items.length - 1 ? "mb-1" : ""}
                            `}
                        >
                            <div
                                className={"select-none"}
                                style={{ width: props.symbolWidth ?? "1.25rem" }}
                            >
                                {props.symbol ?? `${index + 1}.`}
                            </div>

                            <div className="w-full">
                                {itemToJsx(listItem)}
                            </div>
                        </li>
                    )
                )
            }
        </ol>
    );

}