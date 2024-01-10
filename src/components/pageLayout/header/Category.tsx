import { Url } from "next/dist/shared/lib/router/router";
import Link from "next/link";

type CategoryProps = {
    icon?: React.ReactNode,
    text: string,
    link?: string,
    selected?: boolean,
    dropdownMenu?: React.ReactNode
};

export default function Category(props: CategoryProps) {

    return (
        <div className="relative group">
            <Link
                href={props.link ?? ""}
                draggable="false"
                className={`
                    p-1.5 mx-0.5
                    select-none
                    rounded-lg
                    transition-colors duration-200
                    flex flex-row items-center
                    bg-opacity-80 dark:bg-opacity-80
                    ${props.selected
                        ? "bg-zinc-400 dark:bg-zinc-950"
                        : "hover:bg-zinc-300 dark:hover:bg-zinc-700 hover:bg-opacity-95 hover:dark:bg-opacity-90"}
                `}
            >
                {props.icon}
                <span className="sm:block hidden ml-1">{props.text}</span>
            </Link>
            {props.dropdownMenu}
        </div>
    );
}