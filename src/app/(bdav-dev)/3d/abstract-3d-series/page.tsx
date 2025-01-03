import { defaultMetadata } from "@/metadata";
import Abstract3DList from "@/components/categories/3d/a3ds/Abstract3DList";
import { Abstract3DSeries } from "@/content/3d/a3ds/abstract3dSeries";
import Section from "@/components/document/Section";
import Abstract3DCollections from "@/components/categories/3d/a3ds/Abstract3DCollections";
import Article from "@/components/document/Article";

export default function Abstract3DSeriesPage() {
    return (
        <Article headline={'Abstract3D Series'}>
            <Abstract3DList
                abstract3Ds={Object.values(Abstract3DSeries)}
                className={'mt-3 mb-7'}
            />

            <Section headline="Collections">
                <Abstract3DCollections/>
            </Section>
        </Article>
    );
}

export const metadata = {
    title: "bdav.dev – Abstract3D Series",
    description: "Abstract3D Series from David Berezowski.",
    ...defaultMetadata(["Abstract3D Series", "Abstract3DSeries", "a3ds", "Blender", "3D", "abstract"])
}
