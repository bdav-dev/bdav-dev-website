export default function NewBadge(props: { shadow?: boolean, small?: boolean }) {
    return (
        <div
            className={`
                bg-rose-600 text-white
                rounded-full w-fit
                ${props.small ? 'text-xs px-1' : 'font-semibold px-2'}
                ${props.shadow && 'shadow-zinc-950/.5 shadow-lg'}
            `}
        >
            New
        </div>
    );
}
