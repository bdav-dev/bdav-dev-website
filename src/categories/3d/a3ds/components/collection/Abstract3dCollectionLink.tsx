import { Abstract3dCollection } from "@/categories/3d/a3ds/content/staticAbstract3dCollections";
import Link from "next/link";
import { isEven } from "@/library/math";
import { Abstract3dImageLinkPlaceholder, Abstract3dImageLinkPlaceholderProps } from "@/categories/3d/a3ds/components/Abstract3dImageLink";
import { BdavDev } from "@/library/routing";
import Abstract3dImageThumbnail from "@/categories/3d/a3ds/components/Abstract3dImageThumbnail";
import { compareAbstract3dImages } from "@/categories/3d/a3ds/utilities/abstract3dSeriesUtilities";


type Abstract3DCollectionLinkProps = {
    collection: Abstract3dCollection,
    small?: boolean
};

export function Abstract3dCollectionLink(props: Abstract3DCollectionLinkProps) {
    const collection = props.collection;
    const collectionSize = collection.images.length;
    const [first, second, third] = collection.images.toSorted(compareAbstract3dImages);

    const classNames = 'rounded-xl transition-all ease-out';
    const classNamesForObstructedImages = 'absolute top-0 z-10 duration-100';
    const skeletonClassNames = 'border border-zinc-300 dark:border-zinc-600';

    return (
        <div className={`w-fit flex flex-col items-center ${props.small ? 'my-2 mx-4' : 'my-4 mx-6'}`}>
            <Link className={'block relative group rounded-2xl'} href={BdavDev.blender.abstract3dSeries.collections.$collection.getRoute({ collection })}>
                {
                    collectionSize == 0 &&
                    <Abstract3dImageCollectionPlaceholder small={props.small}>
                        Empty collection
                    </Abstract3dImageCollectionPlaceholder>
                }
                {
                    first &&
                    <Abstract3dImageThumbnail
                        image={first}
                        alt={collection.name}
                        small={props.small}
                        skeletonClassName={skeletonClassNames}
                        className={
                            `
                            ${classNames}
                            ${
                                isEven(first.nr)
                                    ? collectionSize == 1 ? 'group-hover:-rotate-2' : 'group-hover:-rotate-1'
                                    : collectionSize == 1 ? 'group-hover:rotate-2' : 'group-hover:rotate-1'
                            }
                            relative z-20 group-hover:scale-[1.035] duration-125
                            `
                        }
                    />
                }
                {
                    second &&
                    <Abstract3dImageThumbnail
                        image={second}
                        alt={collection.name}
                        small={props.small}
                        skeletonClassName={skeletonClassNames}
                        className={`
                            ${classNames}
                            ${classNamesForObstructedImages}
                            ${collectionSize == 2 ? 'rotate-6 group-hover:rotate-12' : '-translate-x-3 -rotate-3 group-hover:-translate-x-6 group-hover:-rotate-6'}
                        `}
                    />
                }
                {
                    third &&
                    <Abstract3dImageThumbnail
                        image={third}
                        alt={collection.name}
                        small={props.small}
                        skeletonClassName={skeletonClassNames}
                        className={`
                            ${classNames}
                            ${classNamesForObstructedImages}
                            translate-x-3 rotate-3 group-hover:translate-x-6 group-hover:rotate-6
                        `}
                    />
                }
            </Link>
            {
                props.collection?.name &&
                <div className={'text-center mt-1.5'}>
                    {props.collection.name}
                </div>
            }
        </div>
    );
}

type Abstract3dImageCollectionPlaceholderProps = Abstract3dImageLinkPlaceholderProps;

function Abstract3dImageCollectionPlaceholder(props: Abstract3dImageCollectionPlaceholderProps) {
    return <Abstract3dImageLinkPlaceholder {...props}/>
}
