import Abstract3DInCollectionView from "@/views/3d/Abstract3DInCollectionView";
import { Metadata } from "next";
import { defaultMetadata } from "@/metadata";
import { formatAbstract3DCollectionRouteSegment } from "@/utils/StringUtils";

type Abstract3DSeriesCollectionImagePageProps = {
    params: Promise<{ collection: string, nr: string }>
}

export default async function Abstract3DSeriesCollectionImagePage(props: Abstract3DSeriesCollectionImagePageProps) {
    const params = await props.params;

    return <Abstract3DInCollectionView {...params}/>;
}

export async function generateMetadata(props: { params: Promise<{ collection: string, nr: string }> }): Promise<Metadata> {
    const params = await props.params;
    const collection = formatAbstract3DCollectionRouteSegment(params.collection);
    const nr = params.nr;

    return {
        title: `bdav.dev – Abstract3D #${nr} in ${collection}`,
        description: `Abstract3D Series #${nr} Collection „${collection}“.`,
        ...defaultMetadata()
    }
}