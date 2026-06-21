import { notFound } from "next/navigation";
import { Metadata } from "next";
import Abstract3dImageView from "@/categories/3d/a3ds/views/Abstract3dImageView";
import { Abstract3dImage, Abstract3dSeries } from "@/categories/3d/a3ds/content/abstract3dSeries";


export async function generateMetadata(props: { params: Promise<{ nr: string }> }): Promise<Metadata> {
    const parameters = await props.params;

    return {
        title: `Abstract3D Series #${parameters.nr} – bdav.dev`,
        description: "Abstract3D Series #" + parameters.nr + " Image from David Berezowski.",
        keywords: ["Abstract 3D Series " + parameters.nr, "Abstract 3D Series #" + parameters.nr, "a3ds-" + parameters.nr, "a3ds " + parameters.nr, parameters.nr]
    }
}

export default async function Abstract3dImagePage(props: { params: Promise<{ nr: string }> }) {
    const parameters = await props.params;

    const abstract3dSeriesImage: Abstract3dImage | undefined = Abstract3dSeries[+parameters.nr];
    if (!abstract3dSeriesImage) {
        notFound();
    }

    return <Abstract3dImageView image={abstract3dSeriesImage}/>;
}
