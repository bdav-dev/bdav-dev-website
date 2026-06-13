import { ReactNode } from "react";


export default function ReadingLayout(props: { children?: ReactNode }) {
    return (
        <div className={"mx-auto max-w-[90rem]"}>
            {props.children}
        </div>
    );
}
