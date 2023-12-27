import Link from "next/link";

type ExternalLinkProps = {
    href: string
    children?: React.ReactNode
    noNewTab?: boolean
};

export default function ExternalLink(props: ExternalLinkProps) {
    return (
        <Link
            href={props.href}
            className="dark:hover:text-sky-400 hover:text-sky-700 hover:underline"
            target={props.noNewTab ? "_self" : "_blank"}
            rel="noopener noreferrer"
        >
            {props.children ?? props.href}
        </Link>
    );
}