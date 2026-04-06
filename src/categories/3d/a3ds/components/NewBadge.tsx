import React from "react";


export default function NewBadge(props: { shadow?: boolean }) {
    return (
        <div className={`font-semibold bg-rose-600 text-white rounded-full px-2 w-fit ${props.shadow && 'shadow-zinc-950/.5 shadow-lg'}`}>
            New
        </div>
    );
}
