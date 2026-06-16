import Abstract3dImageLinks from "@/categories/3d/a3ds/components/Abstract3dImageLinks";
import Article from "@/components/library/document/Article";
import Section from "@/components/library/document/Section";
import { Metadata } from "next";
import FeaturedAbstract3dCollections from "@/categories/3d/a3ds/components/collection/FeaturedAbstract3dCollections";
import Tile from "@/components/library/Tile";


export const metadata: Metadata = {
    title: "bdav.dev – Abstract3D Series",
    description: "Abstract3D Series from David Berezowski.",
    keywords: ["Abstract3D Series", "Abstract3DSeries", "a3ds", "Blender", "3D", "abstract"]
}

export default function Abstract3DSeriesPage() {
    return (
        <Article headline={'Abstract3D Series'}>
            <Section headline={'Featured Collections'}>
                <Tile className={"px-5 py-2.5"} customPadding>
                    <FeaturedAbstract3dCollections/>
                </Tile>
            </Section>

            <Section headline={'All Images'}>
                <div className={'mt-1'}>
                    <Abstract3dImageLinks/>
                </div>
            </Section>
        </Article>
    );
}
