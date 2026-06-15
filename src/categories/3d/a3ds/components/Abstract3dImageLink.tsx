import { Abstract3dImage } from "@/categories/3d/a3ds/content/abstract3dSeries";
import { Abstract3dCollection } from "@/categories/3d/a3ds/content/staticAbstract3dCollections";
import { ReactNode } from "react";
import NewBadge from "@/components/library/NewBadge";
import { isNew } from "@/categories/3d/a3ds/utilities/abstract3dSeriesUtilities";
import { BdavDev } from "@/utilities/routing";
import Link from "next/link";
import Abstract3dImageThumbnail, { getThumbnailSizeInPixels } from "@/categories/3d/a3ds/components/Abstract3dImageThumbnail";


type Abstract3dImageLinkProps = {
    image: Abstract3dImage,
    inCollection?: Abstract3dCollection
}

export default function Abstract3dImageLink(props: Abstract3dImageLinkProps) {
    return (
        <Link
            className={"group rounded-2xl"}
            href={
                props.inCollection
                    ? BdavDev.blender.abstract3dSeries.collections.$collection.$image.getRoute({ collection: props.inCollection, image: props.image })
                    : BdavDev.blender.abstract3dSeries.$image.getRoute({ image: props.image })
            }
        >
            <div className={'relative transition-transform group-hover:scale-[1.02] ease-out duration-100'}>
                <div className={'relative z-20'}>
                    <Abstract3dImageThumbnail
                        image={props.image}
                        alt={`Abstract3DSeries #${props.image.nr}`}
                        sharedClassName={`rounded-2xl`}
                    />
                </div>

                <div className={'absolute top-0 z-10 transition-all group-hover:saturate-200 group-hover:blur-[20px] ease-out duration-250'}>
                    <Abstract3dImageThumbnail
                        image={props.image}
                        alt={`Abstract3DSeries #${props.image.nr}`}
                        sharedClassName={'rounded-2xl select-none'}
                    />
                </div>

                <div className={'absolute bottom-0 right-0 z-30 m-1.5 px-1.5 py-0.5 rounded-full backdrop-blur-lg text-xs text-white opacity-0 group-hover:opacity-100 transition-opacity'}>
                    #{props.image.nr}
                </div>

                {
                    isNew(props.image) &&
                    <div className={'absolute top-0 left-0 z-30 -translate-x-3 -translate-y-2'}>
                        <NewBadge shadow={true}/>
                    </div>
                }
            </div>
        </Link>
    );
}

export type Abstract3dImageLinkPlaceholderProps = {
    small?: boolean,
    fill?: boolean,
    children?: ReactNode
}

export function Abstract3dImageLinkPlaceholder(props: Abstract3dImageLinkPlaceholderProps) {
    return (
        <div
            style={{ width: `${getThumbnailSizeInPixels(props.small ?? false)}px` }}
            className={`
                flex justify-center items-center
                p-1.5 max-w-full rounded-2xl aspect-square
                text-center text-zinc-600 dark:text-zinc-400
                ${props.fill ? 'bg-tile' : 'border border-zinc-500 border-dashed'}
            `}
        >
            {props.children}
        </div>
    );
}
