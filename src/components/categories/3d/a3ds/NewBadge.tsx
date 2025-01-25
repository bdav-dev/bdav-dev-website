import React from "react";


type NewBadgeProps = {
    className?: string;
}

export default function NewBadge(props: NewBadgeProps) {
    return (
        <span className={`bg-rose-600 text-white rounded-full px-1.5 w-fit ${props.className}`}>
            New
        </span>
    );
}
