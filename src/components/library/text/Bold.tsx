import React from "react";


export default function Bold({ children }: { children?: React.ReactNode }) {
    return (
        <span className={'font-bold'}>{children}</span>
    );
}