import { ReactNode } from "react";

type FlipProps = {
    switch?: boolean
    first: ReactNode,
    second: ReactNode,
}

export default function Switch(props: FlipProps) {
    return (
        <>
            {
                props.switch
                    ? <>{props.second}{props.first}</>
                    : <>{props.first}{props.second}</>
            }
        </>
    );
}
