import Link from "next/link";
import { ReactNode } from "react";
import InjectWordBreaks from "@/components/library/utility/InjectWordBreaks";


export type HyperLinkProps = {
    href: string
    children?: ReactNode
    icon?: ReactNode,
    largerIconGap?: boolean
    discreet?: boolean
};

export default function HyperLink(props: HyperLinkProps) {
    return (
        <Link
            className={`
                group
                inline-flex items-center ${props.largerIconGap ? 'gap-1' : 'gap-0.5'}
                ${props.discreet ? "hover:text-accent" : "text-accent"}
            `}
            href={props.href}
            rel="noopener noreferrer"
        >
            {props.icon}
            <span className={'group-hover:underline self-baseline'}>
                {props.children ?? <InjectWordBreaks text={props.href}/>}
            </span>
        </Link>
    );
}
