import React from "react";

type FlipProps = {
    switch?: boolean
    first: React.ReactNode,
    second: React.ReactNode,
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
