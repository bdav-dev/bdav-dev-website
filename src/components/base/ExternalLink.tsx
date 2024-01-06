import Link from "next/link";

type HyperLinkProps = {
    href: string
    children?: React.ReactNode
    noNewTab?: boolean,
    className?: string
};

export default function HyperLink(props: HyperLinkProps) {
    return (
        <Link
            href={props.href}
            className={`
                dark:hover:text-sky-400 hover:text-sky-700
                hover:underline
                ${props.className}
            `}
            target={props.noNewTab ? "_self" : "_blank"}
            rel="noopener noreferrer"
        >
            {props.children ?? props.href}
        </Link>
    );
}