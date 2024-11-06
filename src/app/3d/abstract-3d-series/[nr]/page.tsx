import { defaultMetadata } from "@/metadata";
import Tile from "@/components/pageElements/Tile";
import Article from "@/components/pageStructure/Article";
import Section from "@/components/pageStructure/Section";
import SubSection from "@/components/pageStructure/SubSection";
import {
    Abstract3dSeriesImage as Abstract3dSeriesImageType,
    abstract3dSeriesImages
} from "@/content/3d/abstract3dSeries";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import A3dsImageDownloadTable from "@/components/categories/3d/A3dsImageDownloadTable";
import Abstract3DSeries from "@/components/categories/3d/Abstract3DSeries";

export default function Abstract3dSeriesImage({ params }: { params: { nr: string } }) {
    const abstract3dSeriesImage: Abstract3dSeriesImageType | undefined = (
        Object.values(abstract3dSeriesImages).find(
            image => image.nr.toString() === params.nr
        )
    );

    if (!abstract3dSeriesImage) {
        notFound();
    }

    const amountOfImageDownloads = abstract3dSeriesImage.downloads?.imageDownloads?.length ?? 0;
    const amountOfWallpaperDownloads = abstract3dSeriesImage.downloads?.wallpaperDownloads?.length ?? 0;

    return (
        <Abstract3DSeries imageNr={abstract3dSeriesImage.nr}>

            <div className="flex flex-col lg:flex-row gap-5">

                <Image
                    src={abstract3dSeriesImage.image}
                    alt={`Abstract3DSeries #${abstract3dSeriesImage.nr}`}
                    className={`
                        w-full self-center
                        max-w-xl lg:max-w-3xl 3xl:max-w-[60rem]
                        sm:w-2/3 sm:min-w-0
                        md:w-[60%]
                        lg:w-1/2 lg:self-auto 
                        rounded-2xl
                        flex-shrink-0
                        border border-zinc-300 dark:border-zinc-800
                    `}
                    quality={100}
                    placeholder="blur"
                    draggable={false}
                />

                <Article headline={`Abstract3D Series #${params.nr}`} className="flex-grow">
                    {abstract3dSeriesImage.description}

                    {
                        abstract3dSeriesImage.downloads &&
                        <Section headline="Downloads" className="mt-4">
                            { /* Image Downloads */
                                abstract3dSeriesImage.downloads.imageDownloads &&
                                <SubSection headline={amountOfImageDownloads > 1 ? "Images" : "Image"}>
                                    <Tile className="py-1 px-2" customPadding>
                                        <A3dsImageDownloadTable
                                            downloads={abstract3dSeriesImage.downloads?.imageDownloads!}
                                        />
                                    </Tile>
                                </SubSection>
                            }

                            { /* Wallpaper Downloads */
                                abstract3dSeriesImage.downloads.wallpaperDownloads &&
                                <SubSection headline={amountOfWallpaperDownloads > 1 ? "Wallpapers" : "Wallpaper"}>
                                    <Tile className="py-1 px-2" customPadding>
                                        <A3dsImageDownloadTable
                                            downloads={abstract3dSeriesImage.downloads?.wallpaperDownloads!}
                                        />
                                    </Tile>
                                </SubSection>
                            }
                        </Section>
                    }

                </Article>

            </div>

        </Abstract3DSeries>
    );

}

export async function generateMetadata({ params }: { params: { nr: string } }): Promise<Metadata> {
    return {
        title: "bdav.dev – Abstract3D Series #" + params.nr,
        description: "Abstract3D Series #" + params.nr + " Image from David Berezowski.",
        ...defaultMetadata(
            [
                "Abstract 3D Series " + params.nr,
                "Abstract 3D Series #" + params.nr,
                "a3ds-" + params.nr,
                "a3ds " + params.nr,
                params.nr
            ]
        )
    }
}
