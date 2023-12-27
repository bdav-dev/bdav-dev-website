import Link from "next/link";
import { DropdownItem } from "./DropdownMenu";

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
                target={props.dropdownItem.inNewTab ? "_blank" : "_self"}
            >
                {props.dropdownItem.text}
            </Link>
        </span>
    );

}