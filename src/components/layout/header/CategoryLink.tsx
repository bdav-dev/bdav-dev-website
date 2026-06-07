import Link from "next/link";
import { ReactNode } from "react";


type CategoryButtonProps = {
    icon: ReactNode,
    text: ReactNode,
    href: string,
    selected?: boolean,
    dropdownMenu?: ReactNode
};

export default function CategoryLink(props: CategoryButtonProps) {
    return (
        <div className="relative group h-10">
            <Link
                href={props.href}
                className={`
                    flex flex-row items-center gap-0.5
                    h-10 p-1.5
                    select-none
                    rounded-lg
                    transition-colors duration-200
                    bg-opacity-80 dark:bg-opacity-80
                    ${props.selected ? "bg-zinc-350 dark:bg-zinc-925" : "hover:bg-zinc-300 dark:hover:bg-zinc-700 hover:bg-opacity-95 hover:dark:bg-opacity-90"}
                `}
                draggable={false}
            >
                {props.icon}
                <span className="hidden sm:inline-flex">{props.text}</span>
            </Link>
            {
                props.dropdownMenu &&
                <div className="absolute left-1/2 invisible group-hover:visible pointer-events-none">
                    <div className="relative -left-1/2 pt-1 group-hover:pointer-events-auto">
                        {props.dropdownMenu}
                    </div>
                </div>
            }
        </div>
    );
}