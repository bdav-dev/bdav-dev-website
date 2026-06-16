import { Metadata } from "next";
import { capitalizeFirstLetter } from "@/utilities/string";
import Abstract3dImageOfCollectionViewResolver from "@/categories/3d/a3ds/views/resolver/Abstract3dImageOfCollectionViewResolver";


export async function generateMetadata(props: { params: Promise<{ collection: string, nr: string }> }): Promise<Metadata> {
    const parameters = await props.params;
    const collection = parameters.collection
        .split('-')
        .map(capitalizeFirstLetter)
        .join(' ');

    return {
        title: `Abstract3D #${parameters.nr} in ${collection} – bdav.dev`,
        description: `Abstract3D Series #${parameters.nr} Collection „${collection}“.`
    }
}

type Abstract3dImageOfCollectionPageProps = {
    params: Promise<{ collection: string, nr: string }>
}

export default async function Abstract3dImageOfCollectionPage(props: Abstract3dImageOfCollectionPageProps) {
    const parameters = await props.params;
    return <Abstract3dImageOfCollectionViewResolver abstract3dImageNumber={+parameters.nr} routeSegmentOfCollection={parameters.collection}/>;
}
