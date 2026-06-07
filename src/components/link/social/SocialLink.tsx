import Link from "next/link";
import { ReactNode } from "react";

type SocialLinkProps = {
    href: string
    children?: ReactNode,
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
                    w-12 h-12
                    m-1
                    rounded-xl hover:rounded-3xl
                    flex flex-row items-center justify-center
                    transition-all ease-linear 
                    drop-shadow-sm
                    p-2
                    bg-zinc-800 hover:bg-zinc-700 
                    dark:bg-zinc-950 dark:hover:bg-transparent
                `}
            >
                {props.children}
            </div>
        </Link>
    );

}