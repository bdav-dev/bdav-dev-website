import PageBody from "@/components/pageLayout/PageBody";
import React from "react";

type Abstract3DSeriesProps = {
    children?: React.ReactNode,
    imageNr?: number
}

export default function Abstract3DSeries(props: Abstract3DSeriesProps) {
    return (
        <PageBody
            category={"3D"}
            sitePath={`/3d/abstract-3d-series/${props.imageNr ?? ""}`}
        >
            {props.children}
        </PageBody>
    );
}