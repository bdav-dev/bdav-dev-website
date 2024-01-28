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
            <div className="relative -left-1/2 pt-1 group-hover:pointer-events-auto">
                <ul className={`
                    p-1.5
                    flex flex-col items-center
                    rounded-xl
                    bg-opacity-90 dark:bg-opacity-80
                    backdrop-blur-sm
                    drop-shadow-sm
                    bg-zinc-100 dark:bg-zinc-900
                    border dark:border-zinc-800 border-zinc-200
                    transition-all
                    opacity-0 scale-90
                    group-hover:opacity-100 group-hover:scale-100
                `}>
                    {
                        props.dropdownMenuGroups?.map(
                            (dropDownGroup, i) => {
                                let array = dropDownGroup.map(
                                    (dropDownItem, index) => (
                                        <DropdownItem dropdownItem={dropDownItem} key={`${i}${index}`} />
                                    )
                                );

                                if (props.dropdownMenuGroups && i != props.dropdownMenuGroups.length - 1) {
                                    array.push(<hr className="w-[90%] m-0.5 border-zinc-300 dark:border-zinc-700" key={i} />);
                                }

                                return array;
                            }
                        )
                    }
                </ul>
            </div>
        </div>

    );

}