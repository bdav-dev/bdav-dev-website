import CodeIcon from "@/icons/CodeIcon";
import Link from "next/link";
import Code from "../pageElements/Code";
import Tile from "../pageElements/Tile";


type LargeLinkProps = {
    href: string,
    icon: React.ReactNode,
    text: string | React.ReactNode,
    inNewTab?: boolean
}

export default function LargeLink(props: LargeLinkProps) {
    return (
        <Link
            href={props.href}
            className="hover:scale-105 transition-all"
            target={props.inNewTab ? "_blank" : "_self"}
            rel="noopener noreferrer"
        >
            <Tile>
                <div className="h-32 w-32 flex flex-col justify-center text-center select-none">
                    {props.icon}
                    <Code>{props.text}</Code>
                </div>
            </Tile>
        </Link >
    );
}