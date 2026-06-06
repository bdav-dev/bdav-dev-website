import Link from "next/link";
import Phone from "@/components/library/Phone";
import SkeletonLoadingCloudinaryImage from "@/components/SkeletonLoadingCloudinaryImage";
import InstagramGlyph from "@/icons/logo/InstagramGlyph";


export default function FollowMeOnInstagramLink() {
    const instagramHref = 'https://www.instagram.com/davidb.3d/';

    return (
        <div className={'flex flex-col md:flex-row items-center w-fit max-w-full gap-4 md:gap-6'}>
            <Link
                href={instagramHref}
                className={'block w-fit max-w-full'}
            >
                <Phone
                    size={'13.5rem'}
                    className={'transition-transform max-w-full'}
                    screen={
                        <SkeletonLoadingCloudinaryImage
                            alt={'Instagram page of davidb.3d'}
                            image={
                                {
                                    light: { src: '/3d/davidb.3d-instagram-light.png', width: 1206, height: 2622 },
                                    dark: { src: '/3d/davidb.3d-instagram-dark.png', width: 1206, height: 2622 }
                                }
                            }
                            sharedClassName={'w-full h-full object-cover'}
                            draggable={false}
                        />
                    }
                />
            </Link>

            <div className={'flex flex-col gap-1'}>
                <div className={'text-sm text-center md:text-left text-neutral-700 dark:text-neutral-200'}>
                    follow me on
                </div>
                <Link
                    href={instagramHref}
                    className={'w-fit text-3xl font-semibold flex flex-row gap-1.5'}
                >
                    <InstagramGlyph className={'text-[0.85em]'}/>
                    Instagram
                </Link>
            </div>
        </div>
    );
}
