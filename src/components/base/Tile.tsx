
type TileProps = {
    title?: string,
    className?: string,
    children?: React.ReactNode
}

export default function Tile(props: TileProps) {

    return (
        <div
            className={"bg-zinc-100 dark:bg-zinc-900 border-zinc-200 dark:border border dark:drop-shadow-none dark:border-zinc-800 rounded-xl p-3 relative " + (props.title ? "pt-9 " : "") + props.className ?? ""}
        >
            {props.title && (
                <div className="absolute -top-0.5 left-0 m-3 text-zinc-600 dark:text-zinc-500 font-semibold">
                    {props.title}
                </div>)}
            {props.children}
        </div>
    );

}