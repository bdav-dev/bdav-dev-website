import Link from "next/link";

type SocialLinkProps = {
    children?: React.ReactNode,
    href: string,
    className?: string,
    useCustomColor?: boolean,
    useCustomPadding?: boolean
}

export default function SocialLink(props: SocialLinkProps) {

    return (
        <Link
            href={props.href}
            target="_blank"
            rel="noopener noreferrer"
            draggable="false"
        >
            <div
                className={`
                    w-28 h-12
                    m-1
                    rounded-xl
                    flex flex-row items-center justify-center
                    border border-zinc-600 dark:border-zinc-800
                    transition-all ease-linear hover:rounded-3xl
                    drop-shadow-sm
                    ${!props.useCustomPadding ? "p-2" : ""}
                    ${!props.useCustomColor ? "bg-zinc-800 hover:bg-zinc-700 dark:bg-black  dark:hover:bg-zinc-900" : ""}
                    ${props.className}
                `}
            >
                {props.children}
            </div>
        </Link>
    );

}