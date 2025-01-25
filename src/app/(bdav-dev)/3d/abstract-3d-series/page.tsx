import { defaultMetadata } from "@/metadata";
import Abstract3DList from "@/components/categories/3d/a3ds/Abstract3DList";
import { Abstract3DSeriesValues } from "@/content/3d/a3ds/abstract3dSeries";
import Article from "@/components/document/Article";
import Section from "@/components/document/Section";
import PinnedAbstract3DCollections from "@/views/3d/PinnedAbstract3DCollections";

export default function Abstract3DSeriesPage() {

    return (
        <Article headline={'Abstract3D Series'}>
            <PinnedAbstract3DCollections/>
            <Section headline={'All Images'}>
                <Abstract3DList
                    abstract3Ds={Abstract3DSeriesValues}
                    className={'mt-3 mb-2'}
                />
            </Section>
        </Article>
    );
}

export const metadata = {
    title: "bdav.dev – Abstract3D Series",
    description: "Abstract3D Series from David Berezowski.",
    ...defaultMetadata(["Abstract3D Series", "Abstract3DSeries", "a3ds", "Blender", "3D", "abstract"])
}
