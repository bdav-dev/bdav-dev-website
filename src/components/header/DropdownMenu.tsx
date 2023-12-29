import DropdownItem from "./DropdownItem";


export type DropdownItem = {
    text: string | React.ReactNode,
    href: string,
    inNewTab?: boolean
}

type DropdownMenuProps = {
    dropdownMenuGroups?: DropdownItem[][]
}

export default function DropdownMenu(props: DropdownMenuProps) {
    
    return (
        <div className="absolute left-1/2 invisible group-hover:visible pointer-events-none">
            <div className="relative -left-1/2 pt-1 pointer-events-auto">
                <ul className="drop-shadow-sm p-1.5 flex flex-col rounded-xl items-center border dark:border-zinc-800 border-zinc-200 bg-zinc-100 dark:bg-zinc-900 dark:bg-opacity-90 bg-opacity-75 backdrop-blur-sm opacity-0 group-hover:opacity-100 scale-90 group-hover:scale-100 transition-all">
                    {props.dropdownMenuGroups?.map((dropDownGroup, i) => {
                        let array = dropDownGroup.map(dropDownItem => {
                            return <DropdownItem dropdownItem={dropDownItem} />
                        });

                        if (props.dropdownMenuGroups &&
                            i != props.dropdownMenuGroups.length - 1) {
                            array.push(<hr className="w-[90%] m-0.5 border-zinc-300 dark:border-zinc-700" />);
                        }

                        return array;
                    })}
                </ul>
            </div>
        </div>

    );

}