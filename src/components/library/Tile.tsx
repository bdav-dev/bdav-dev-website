import React, { CSSProperties } from "react";


type TileProps = {
    title?: string | React.ReactNode,
    className?: string,
    children?: React.ReactNode,
    customPadding?: boolean,
    style?: CSSProperties
}

export default function Tile(props: TileProps) {
    return (
        <div className={`bg-tile rounded-xl ${!props.customPadding && 'p-2.5'} ${props.className}`} style={props.style}>
            {
                props.title &&
                <h5 className={"font-bold"}>{props.title}</h5>
            }
            {props.children}
        </div>
    );
}
