type TileProps = {
    title?: string,
    className?: string,
    children?: React.ReactNode,
    customPadding?: boolean,
    childrenClassName?: string
}

export default function Tile(props: TileProps) {

    return (
        <div className={`
                relative flex-1
                bg-zinc-100 dark:bg-zinc-900
                border border-zinc-200 dark:border-zinc-800
                rounded-xl
                ${props.customPadding ? "" : "p-2.5"}
                ${props.className ?? ""}
            `}
        >
            {
                props.title && (
                    <h4 className="font-semibold text-zinc-600 dark:text-zinc-500">
                        {props.title}
                    </h4>
                )
            }

            <div className={props.childrenClassName}>
                {props.children}
            </div>
        </div>
    );

}