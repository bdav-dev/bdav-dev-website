type EnumerateProps = {
    symbol?: string | React.ReactNode,
    symbolWidthClassName?: string,
    items: (string | React.ReactNode)[],
    className?: string
};

export default function Enumerate(props: EnumerateProps) {

    return (
        <ol className={"w-full " + props.className}>
            {
                props.items.map((listItem, index) => {
                    return (
                        <li className="flex flex-row flex-nowrap" key={index}>
                            <div className={props.symbolWidthClassName ?? "w-5"}>
                                {props.symbol ?? `${index + 1}.`}
                            </div>

                            <div className="w-full">
                                {listItem}
                            </div>
                        </li>
                    );
                })
            }
        </ol>
    );

}