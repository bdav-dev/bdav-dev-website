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
            className={`
                flex flex-row items-center justify-center
                w-11 h-11
                rounded-xl hover:rounded-3xl
                bg-tile hover:bg-transparent dark:hover:bg-transparent
                transition-[border-radius, background-color] ease-linear duration-100
            `}
        >
            {props.children}
        </Link>
    );
}
