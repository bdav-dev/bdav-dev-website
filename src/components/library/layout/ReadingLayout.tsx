import { ReactNode } from "react";


export default function ReadingLayout(props: { children?: ReactNode }) {
    return (
        <div className={"mx-auto max-w-360"}>
            {props.children}
        </div>
    );
}
