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
        <div className="relative group h-10">
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
                    h-10
                    ${props.selected
                        ? "bg-zinc-400 dark:bg-zinc-950"
                        : "hover:bg-zinc-300 dark:hover:bg-zinc-700 hover:bg-opacity-95 hover:dark:bg-opacity-90"}
                `}
            >
                {props.icon}
                <span className="sm:inline-flex hidden ml-1 h-10 items-center">{props.text}</span>
            </Link>
            {props.dropdownMenu}
        </div>
    );
}