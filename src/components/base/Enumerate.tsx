type TitledItem = {
    title: string | React.ReactNode,
    text: string | React.ReactNode
}

type EnumerateProps = {
    symbol?: string | React.ReactNode,
    symbolWidthClassName?: string,
    items: (string | React.ReactNode | TitledItem)[],
    className?: string,
    seperateItems?: boolean
};

function itemToJsx(item: (TitledItem | string | React.ReactNode)) {
    const itemAsTitledItem = item as TitledItem;

    if (itemAsTitledItem.title == undefined) {
        return <>{item}</>;

    } else {
        return (
            <>
                <span className="font-semibold">
                    {itemAsTitledItem.title}
                </span>
                <br />
                {itemAsTitledItem.text}
            </>
        )
    }
}

export default function Enumerate(props: EnumerateProps) {

    return (
        <ol className={"w-full " + props.className}>
            {
                props.items.map((listItem, index) => {
                    return (
                        <li
                            className={
                                "flex flex-row flex-nowrap " +
                                (props.seperateItems && index < props.items.length - 1 ? "mb-1" : "")
                            }
                            key={index}
                        >
                            <div className={props.symbolWidthClassName ?? "w-5"}>
                                {props.symbol ?? `${index + 1}.`}
                            </div>

                            <div className="w-full">
                                {itemToJsx(listItem)}
                            </div>
                        </li>
                    );
                })
            }
        </ol>
    );

}