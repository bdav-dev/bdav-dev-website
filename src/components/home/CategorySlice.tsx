import { CloudinaryImage } from "@/library/cloudinary";
import { ComponentType, ReactNode } from "react";
import { WeightableIconProps } from "@/icons/WeightableIcon";
import Link from "next/link";
import Tile from "@/components/library/Tile";
import NewBadge from "@/components/library/NewBadge";
import SkeletonLoadingCloudinaryImage from "@/components/image/SkeletonLoadingCloudinaryImage";
import { ThemeSwitch } from "@/library/theme";


type CategorySliceProps = CategoryLinkProps & {
    backgroundImage: ThemeSwitch<CloudinaryImage> | undefined,
    featuredContent?: FeaturedContentLinkProps,
    className?: string
}

export default function CategorySlice(props: CategorySliceProps) {
    return (
        <div
            className={`
                flex-1
                relative overflow-clip
                flex items-center justify-center
                bg-tile
                group
                hover:py-3 lg:hover:px-5
                transition-all
                ${props.className}
            `}
        >
            <CategoryLink {...props}/>
            {
                props.featuredContent &&
                <FeaturedContentLink {...props.featuredContent}/>
            }
            {
                props.backgroundImage &&
                <SkeletonLoadingCloudinaryImage
                    preload
                    image={props.backgroundImage}
                    alt={''}
                    className={`
                        absolute inset-0 h-full w-full
                        [--blur:var(--blur-md)]
                        [--brightness:75%]
                        filter-[blur(var(--blur))_brightness(var(--brightness))]
                        group-hover:[--blur:0px]
                        peer-hover:[--brightness:90%]
                        scale-110 object-cover transition-[filter] ease-out duration-250
                    `}
                    draggable={false}
                />
            }
        </div>
    );
}


type CategoryLinkProps = {
    name: string,
    icon: ComponentType<WeightableIconProps>,
    href: string
}

function CategoryLink(props: CategoryLinkProps) {
    return (
        <Link
            href={props.href}
            className={'block relative z-10 peer hover:-translate-y-2 transition-transform ease-out duration-250'}
        >
            <Tile
                customPadding
                className={`
                    m-1.5
                    flex items-center justify-center
                    flex-row lg:flex-col
                    gap-0.5  lg:gap-0
                    p-1      lg:p-2.5
                    shadow-2xl shadow-zinc-600 dark:shadow-zinc-950
                `}
            >
                <props.icon
                    className={`
                        text-[1.5em] xs:text-[2.75em] md:text-[3em] lg:text-[4.5em] 2xl:text-[6em] 3xl:text-[7.5em]
                        mx-0                                        lg:mx-3         2xl:mx-3       3xl:mx-3.5
                    `}
                    weight={200}
                />
                <div
                    className={`
                        w-full text-center bg-tile rounded-full px-1.5
                        text-base 3xl:text-xl
                    `}
                >
                    {props.name}
                </div>
            </Tile>
        </Link>
    );
}


type FeaturedContentLinkProps = {
    name: string,
    thumbnail: ReactNode,
    href: string,
    new?: boolean
}

function FeaturedContentLink(props: FeaturedContentLinkProps) {
    return (
        <Link
            href={props.href}
            className={'peer absolute z-10 bottom-0 left-0 lg:left-auto mx-1.5 mb-1.5 lg:mb-4'}
        >
            <Tile customPadding className={'drop-shadow-md flex flex-col p-1.5 lg:p-2'}>
                <div className={'flex flex-row items-center gap-1.5 text-sm lg:text-base'}>
                    <div>
                        {props.thumbnail}
                    </div>
                    <div>
                        {props.name}
                    </div>
                    {
                        props.new &&
                        <NewBadge small/>
                    }
                </div>
            </Tile>
        </Link>
    )
}
