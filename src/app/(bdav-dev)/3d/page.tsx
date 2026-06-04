import Tile from "@/components/library/Tile";
import Section from "@/components/layout/document/Section";
import { Abstract3dImageLinkPlaceholder } from "@/categories/3d/a3ds/components/Abstract3dImageLink";
import Link from "next/link";
import InternalLink from "@/components/library/link/InternalLink";
import { StaticAbstract3dCollections } from "@/categories/3d/a3ds/content/staticAbstract3dCollections";
import Abstract3dImageLinks from "@/categories/3d/a3ds/components/Abstract3dImageLinks";
import { Metadata } from "next";
import Phone from "@/components/library/Phone";
import ExternalLink from "@/components/library/link/ExternalLink";
import { BdavDev } from "@/routing";
import Article from "@/components/layout/document/Article";
import { Abstract3dSeries } from "@/categories/3d/a3ds/content/abstract3dSeries";
import SkeletonLoadingCloudinaryImage from "@/components/SkeletonLoadingCloudinaryImage";
import React from "react";
import { CloudinaryImage } from "@/cloudinary";
import { ThemeSwitch } from "@/contexts/ThemeContext";
import InstagramGlyph from "@/icons/logo/InstagramGlyph";


export const metadata: Metadata = {
    title: "3D – bdav.dev",
    description: "3D projects from David Berezowski.",
    keywords: ["Blender projects", "3D projects", "Project", "Blender", "3D"]
}

export default function BlenderPage() {
    const amountOfAbstract3dImages = Object.keys(Abstract3dSeries).length;
    const abstract3dPreviewImages = Object.values(Abstract3dSeries).slice(-7);

    return (
        <>
            <Tile className={'flex justify-center p-5'} customPadding>
                <Link href={'https://www.instagram.com/davidb.3d/'} className={'group w-fit flex flex-row gap-10 items-center'}>
                    <Phone
                        size={'13.5rem'}
                        className={'rotate-3 group-hover:rotate-0 transition-transform'}
                        screen={
                            <SkeletonLoadingCloudinaryImage
                                alt={'Ingredients'}
                                image={images.davidb3dInstagram}
                                sharedClassName={'w-full h-full object-cover'}
                                draggable={false}
                            />
                        }
                    />
                    <div className={'text-2xl leading-9'}>
                        <span>
                            Follow me on
                        </span>
                        <br/>
                        <span className={'inline-flex items-center gap-1.5'}>
                            <InstagramGlyph className={'text-[0.8em]'}/>
                            Instagram
                        </span>
                    </div>
                </Link>
            </Tile>

            <Article headline={'Projects'} className={'mt-8'}>
                <Section headline={'Abstract3D Series'}>
                    <Tile>
                        <InternalLink href={BdavDev.blender.abstract3dSeries.getRoute()}>Abstract3D Series</InternalLink> is a collection
                        of {amountOfAbstract3dImages} abstract square-format images,
                        created since 2021 using the 3D software <ExternalLink href={"https://www.blender.org/"}>Blender</ExternalLink>.
                        While images are always presented in a square format, some are also available
                        as <InternalLink href={BdavDev.blender.abstract3dSeries.collections.$collection.getRoute({ collection: StaticAbstract3dCollections["wallpapers"] })}>
                        downloadable wallpapers</InternalLink>.

                        <div className={'mt-1.5 p-3'}>
                            <Abstract3dImageLinks
                                images={abstract3dPreviewImages}
                                trailingComponent={
                                    <Link className={'group rounded-2xl'} href={BdavDev.blender.abstract3dSeries.getRoute()} draggable={false}>
                                        <Abstract3dImageLinkPlaceholder fill>
                                            <div className={'text-xl text-accent group-hover:underline'}>
                                                View all
                                            </div>
                                        </Abstract3dImageLinkPlaceholder>
                                    </Link>
                                }
                            />
                        </div>
                    </Tile>
                </Section>
            </Article>
        </>
    );
}

const images = {
    davidb3dInstagram: {
        light: { src: '/3d/davidb.3d-instagram-light.png', width: 1206, height: 2622 },
        dark: { src: '/3d/davidb.3d-instagram-dark.png', width: 1206, height: 2622 }
    }
} as const satisfies Record<string, ThemeSwitch<CloudinaryImage>>;
