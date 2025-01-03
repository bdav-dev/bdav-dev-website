import Tile from "@/components/Tile";
import CutleryIcon from "@/icons/CutleryIcon";
import React from "react";

type BonAppetitMessageProps = {
    children: React.ReactNode
}

export default function BonAppetitMessage(props: BonAppetitMessageProps) {
    return (
        <Tile className="text-center font-semibold">
            {props.children}
            <br/>
            <span className="italic">
                Guten&nbsp;Appetit!
            </span>
            &nbsp;
            <CutleryIcon className="fill-black dark:fill-white w-7 h-7 inline"/>
        </Tile>
    );
}
