type TileProps = {
    title?: string,
    className?: string,
    children?: React.ReactNode
}

export default function Tile(props: TileProps) {

    return (
        <div
            className={"bg-zinc-100 dark:bg-zinc-900 border-zinc-200 dark:border border dark:drop-shadow-none dark:border-zinc-800 rounded-xl p-3 relative flex-1 " + props.className ?? ""}
        >
            {
                props.title && (
                    <h4 className="text-zinc-600 dark:text-zinc-500 font-semibold">
                        {props.title}
                    </h4>
                )
            }

            {props.children}
        </div>
    );

}