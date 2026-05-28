import Tile from "@/components/library/Tile";
import { ReactNode } from "react";

type EnjoyYourMealMessageProps = {
    children?: ReactNode
}

export default function EnjoyYourMealMessage(props: EnjoyYourMealMessageProps) {
    // TODO: Refactor; Add big image
    return (
        <Tile className="text-center font-semibold">
            {props.children}
            <br/>
            <span className="italic">
                Guten&nbsp;Appetit!
            </span>
        </Tile>
    );
}
