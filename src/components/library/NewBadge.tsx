export default function NewBadge(props: { shadow?: boolean, small?: boolean, className?: string }) {
    return (
        <div
            className={`
                bg-rose-600 text-white
                rounded-full w-fit
                ${props.small ? 'text-xs px-1' : 'px-2'}
                ${props.shadow && 'shadow-zinc-950/.5 shadow-lg'}
                ${props.className}
            `}
        >
            New
        </div>
    );
}
