
type BlockQuoteProps = {
    children?: React.ReactNode
}

export default function BlockQuote(props: BlockQuoteProps) {

    return (
        <div
            className={`
                bg-neutral-250 dark:bg-neutral-950
                border-neutral-400 dark:border-neutral-700
                w-fit
                p-2.5
                rounded-lg
                border-l-4
            `}
        >
            {props.children}
        </div>
    );

}