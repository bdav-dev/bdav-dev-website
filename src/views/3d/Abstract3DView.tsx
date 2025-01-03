import Image from "next/image";
import Article from "@/components/document/Article";
import Section from "@/components/document/Section";
import SubSection from "@/components/document/SubSection";
import Tile from "@/components/Tile";
import Abstract3DDownloadTable from "@/components/categories/3d/a3ds/Abstract3DDownloadTable";
import { Abstract3D } from "@/content/3d/a3ds/abstract3dSeries";
import { Space } from "@/components/format/Space";
import Mono from "@/components/Mono";


type Abstract3DViewProps = {
    abstract3dSeriesImage: Abstract3D
}

export default function Abstract3DView({ abstract3dSeriesImage }: Abstract3DViewProps) {
    const amountOfImageDownloads = abstract3dSeriesImage.downloads?.imageDownloads?.length ?? 0;
    const amountOfWallpaperDownloads = abstract3dSeriesImage.downloads?.wallpaperDownloads?.length ?? 0;

    return (
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

            <Article headline={`Abstract3D Series #${abstract3dSeriesImage.nr}`} className="flex-grow">
                {
                    abstract3dSeriesImage.description
                }
                {
                    abstract3dSeriesImage.adventCalendar &&
                    <>
                        <Mono>#{abstract3dSeriesImage.adventCalendar.nr}</Mono>
                        <Space/>in Advent Calendar {abstract3dSeriesImage.adventCalendar.year}
                    </>
                }
                {
                    abstract3dSeriesImage.downloads &&
                    <Section headline="Downloads" className="mt-4">
                        { /* Image Downloads */
                            abstract3dSeriesImage.downloads.imageDownloads &&
                            <SubSection headline={amountOfImageDownloads > 1 ? "Images" : "Image"}>
                                <Tile className="py-1 px-2" customPadding>
                                    <Abstract3DDownloadTable
                                        downloads={abstract3dSeriesImage.downloads?.imageDownloads}
                                    />
                                </Tile>
                            </SubSection>
                        }

                        { /* Wallpaper Downloads */
                            abstract3dSeriesImage.downloads.wallpaperDownloads &&
                            <SubSection headline={amountOfWallpaperDownloads > 1 ? "Wallpapers" : "Wallpaper"}>
                                <Tile className="py-1 px-2" customPadding>
                                    <Abstract3DDownloadTable
                                        downloads={abstract3dSeriesImage.downloads?.wallpaperDownloads}
                                    />
                                </Tile>
                            </SubSection>
                        }
                    </Section>
                }
            </Article>
        </div>
    );
}
