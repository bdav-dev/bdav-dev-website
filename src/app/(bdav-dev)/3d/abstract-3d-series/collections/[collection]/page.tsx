import Abstract3DCollectionView from "@/views/3d/Abstract3DCollectionView";
import { Metadata } from "next";
import { defaultMetadata } from "@/metadata";
import { formatAbstract3DCollectionRouteSegment } from "@/utils/StringUtils";


type Abstract3DSeriesCollectionProps = {
    params: Promise<{ collection: string }>
}

export default async function Abstract3DCollectionPage(props: Abstract3DSeriesCollectionProps) {
    const params = await props.params;
    return <Abstract3DCollectionView collectionRoute={params.collection}/>;
}

export async function generateMetadata(props: { params: Promise<{ collection: string }> }): Promise<Metadata> {
    const collection = formatAbstract3DCollectionRouteSegment(
        (await props.params).collection
    );

    return {
        title: "bdav.dev – " + collection,
        description: `Abstract3D Series Collection „${collection}“.`,
        ...defaultMetadata(
            [
                `Abstract 3D Series Collection „${collection}“`,
                collection
            ]
        )
    }
}
