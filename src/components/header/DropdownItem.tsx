import Link from "next/link";
import { DropdownItem, DropdownItem as DropdownItemData } from "./DropdownMenu";

type DropdownItemProps = {
    dropdownItem: DropdownItem
}

export default function DropdownItem(props: DropdownItemProps) {

    return (

        <span className="m-0.5 p-0.5 pl-1 pr-1 leading-6 w-full text-center hover:bg-zinc-300 dark:hover:bg-zinc-600 rounded-md transition-colors">
            <Link
                href={props.dropdownItem.href}
                draggable="false"
                className="inline-block w-fit"
                rel={props.dropdownItem.inNewTab ? "noopener noreferrer" : ""}
                target={props.dropdownItem.inNewTab ? "_blank" : ""}
            >
                {props.dropdownItem.text}
            </Link>
        </span>


    );

}

/*
<Link
            href={props.dropdownItem.href}
            draggable="false"
            className="m-0.5 inline-block w-fit"
        >
            <span className="p-1 w-full text-center hover:bg-zinc-300 dark:hover:bg-zinc-600 rounded-md transition-colors">
                {props.dropdownItem.text}
            </span>
        </Link>
*/


/*
<Link
            href={props.dropdownItem.href}
            draggable="false"
            className="w-full"
        >
            <span className="m-0.5 p-1 text-center hover:bg-zinc-300 dark:hover:bg-zinc-600 rounded-md transition-colors">
                {props.dropdownItem.text}
            </span>
        </Link>
*/