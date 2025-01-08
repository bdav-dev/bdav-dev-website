import Article from "@/components/document/Article";
import Abstract3DCollections from "@/components/categories/3d/a3ds/Abstract3DCollections";
import { defaultMetadata } from "@/metadata";

export default function Abstract3DCollectionsPage() {
    return (
        <Article headline={'Abstract3D Series'}>
            <div className={'text-xl'}>Collections</div>
            <Abstract3DCollections/>
        </Article>
    );
}

export const metadata = {
    title: "bdav.dev – Abstract3D Collections",
    description: "Abstract3D Series Collections from David Berezowski.",
    ...defaultMetadata(["Blender projects", "3D projects", "Project", "Blender", "3D"])
}