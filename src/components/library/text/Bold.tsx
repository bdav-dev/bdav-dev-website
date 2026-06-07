import { ReactNode } from "react";


export default function Bold({ children }: { children?: ReactNode }) {
    return (
        <span className={'font-bold'}>{children}</span>
    );
}