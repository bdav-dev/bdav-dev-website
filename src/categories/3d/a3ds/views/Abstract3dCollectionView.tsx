'use client';

import Article from "@/components/library/document/Article";
import Abstract3dImageLinks from "@/categories/3d/a3ds/components/Abstract3dImageLinks";
import { Abstract3dImageLinkPlaceholder } from "@/categories/3d/a3ds/components/Abstract3dImageLink";
import Section from "@/components/library/document/Section";
import { Abstract3dCollection } from "@/categories/3d/a3ds/content/staticAbstract3dCollections";


type Abstract3dCollectionViewProps = {
    collection: Abstract3dCollection
}

export default function Abstract3dCollectionView(props: Abstract3dCollectionViewProps) {
    return (
        <Article headline={props.collection.name}>
            <Section headline={'Abstract3D Series Collection'}>
                <div className={'mt-4'}>
                    {
                        props.collection.images.length == 0
                            ? <Abstract3dImageLinkPlaceholder>Empty collection</Abstract3dImageLinkPlaceholder>
                            : <Abstract3dImageLinks collection={props.collection}/>
                    }
                </div>
            </Section>
        </Article>
    );
}
