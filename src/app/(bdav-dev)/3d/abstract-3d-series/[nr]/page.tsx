import { defaultMetadata } from "@/metadata";
import { Abstract3D as Abstract3dSeriesImageType, Abstract3DSeriesValues } from "@/content/3d/a3ds/abstract3dSeries";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import Abstract3DView from "@/views/3d/Abstract3DView";

type Abstract3DPageProps = {
    params: Promise<{ nr: string }>
}

export default async function Abstract3DPage(props: Abstract3DPageProps) {
    const params = await props.params;

    const abstract3dSeriesImage: Abstract3dSeriesImageType | undefined = (
        Abstract3DSeriesValues.find(
            image => image.nr.toString() === params.nr
        )
    );

    if (!abstract3dSeriesImage) {
        notFound();
    }

    return <Abstract3DView abstract3D={abstract3dSeriesImage}/>;
}

export async function generateMetadata(props: { params: Promise<{ nr: string }> }): Promise<Metadata> {
    const params = await props.params;

    return {
        title: "bdav.dev – Abstract3D Series #" + params.nr,
        description: "Abstract3D Series #" + params.nr + " Image from David Berezowski.",
        ...defaultMetadata(
            [
                "Abstract 3D Series " + params.nr,
                "Abstract 3D Series #" + params.nr,
                "a3ds-" + params.nr,
                "a3ds " + params.nr,
                params.nr
            ]
        )
    }
}
