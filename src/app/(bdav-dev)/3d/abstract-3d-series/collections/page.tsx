import Article from "@/components/layout/document/Article";
import Abstract3dCollectionLinks from "@/categories/3d/a3ds/components/collection/Abstract3dCollectionLinks";
import { Metadata } from "next";
import Section from "@/components/layout/document/Section";

export const metadata: Metadata = {
    title: "bdav.dev – Abstract3D Collections",
    description: "Abstract3D Series Collections from David Berezowski.",
    keywords: ["Blender projects", "3D projects", "Project", "Blender", "3D"]
}

export default function Abstract3dCollectionsPage() {
    return (
        <Article headline={'Abstract3D Series'}>
            <Section headline={'Collections'}>
                <Abstract3dCollectionLinks/>
            </Section>
        </Article>
    );
}
