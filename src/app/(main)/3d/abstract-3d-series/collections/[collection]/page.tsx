import { Metadata } from "next";
import Abstract3dCollectionViewResolver from "@/categories/3d/a3ds/views/resolver/Abstract3dCollectionViewResolver";
import { capitalizeFirstLetter } from "@/library/string";


export async function generateMetadata(props: { params: Promise<{ collection: string }> }): Promise<Metadata> {
    const collection = (await props.params).collection
        .split('-')
        .map(capitalizeFirstLetter)
        .join(' ');

    return {
        title: collection + " – bdav.dev",
        description: `Abstract3D Series Collection „${collection}“.`,
        keywords: [`Abstract3D Series Collection „${collection}“`, collection]
    }
}

export default async function Abstract3dCollectionPage(props: { params: Promise<{ collection: string }> }) {
    return <Abstract3dCollectionViewResolver routeSegmentOfCollection={(await props.params).collection}/>;
}
