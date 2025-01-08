'use client';

import Image from "next/image";
import Article from "@/components/document/Article";
import Section from "@/components/document/Section";
import SubSection from "@/components/document/SubSection";
import Tile from "@/components/Tile";
import Abstract3DDownloadTable from "@/components/categories/3d/a3ds/Abstract3DDownloadTable";
import { Abstract3D } from "@/content/3d/a3ds/abstract3dSeries";
import { Space } from "@/components/format/Space";
import Mono from "@/components/Mono";
import { useContext, useState } from "react";
import { Abstract3DCollectionsContext } from "@/contexts/Abstract3DCollectionsContext";
import StarIcon from "@/icons/StarIcon";
import Table from "@/components/Table";
import { formatDmyString } from "@/utils/DateUtils";
import Abstract3DDialog from "@/components/categories/3d/a3ds/Abstract3DDialog";


type Abstract3DViewProps = {
    abstract3D: Abstract3D
}

export default function Abstract3DView({ abstract3D }: Abstract3DViewProps) {
    const { favorites } = useContext(Abstract3DCollectionsContext);
    const [isDialogVisible, setIsDialogVisible] = useState(false);

    const amountOfImageDownloads = abstract3D.downloads?.imageDownloads?.length ?? 0;
    const amountOfWallpaperDownloads = abstract3D.downloads?.wallpaperDownloads?.length ?? 0;

    return (
        <div className="flex flex-col lg:flex-row gap-5">
            <Image
                src={abstract3D.image}
                alt={`Abstract3DSeries #${abstract3D.nr}`}
                onClick={() => setIsDialogVisible(true)}
                className={`
                    cursor-pointer
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

            <Article
                trailingComponent={
                    <button onClick={() => favorites.toggleFavorite(abstract3D)}>
                        <StarIcon
                            className={`
                                ml-1
                                w-9 h-9 stroke-yellow-500 stroke-[60]
                                active:scale-110
                                transition-transform duration-75
                                ${favorites.isFavorite(abstract3D) ? 'fill-yellow-500' : 'fill-transparent'}
                            `}
                        />
                    </button>
                }
                headline={`Abstract3D Series #${abstract3D.nr}`}
                className="flex-grow"
            >
                <Table
                    data={
                        [
                            abstract3D.description
                                ? [abstract3D.description]
                                : [],
                            [formatDmyString(abstract3D.releaseDate)],
                            abstract3D.adventCalendar
                                ? [
                                    <>
                                        <Mono>#{abstract3D.adventCalendar.nr}</Mono>
                                        <Space/>in Advent Calendar {abstract3D.adventCalendar.year}
                                    </>
                                ]
                                : []
                        ]
                    }
                />
                {
                    abstract3D.downloads &&
                    <Section headline="Downloads" className="mt-4">
                        { /* Image Downloads */
                            abstract3D.downloads.imageDownloads &&
                            <SubSection headline={amountOfImageDownloads > 1 ? "Images" : "Image"}>
                                <Tile className="py-1 px-2" customPadding>
                                    <Abstract3DDownloadTable
                                        downloads={abstract3D.downloads?.imageDownloads}
                                    />
                                </Tile>
                            </SubSection>
                        }

                        { /* Wallpaper Downloads */
                            abstract3D.downloads.wallpaperDownloads &&
                            <SubSection headline={amountOfWallpaperDownloads > 1 ? "Wallpapers" : "Wallpaper"}>
                                <Tile className="py-1 px-2" customPadding>
                                    <Abstract3DDownloadTable
                                        downloads={abstract3D.downloads?.wallpaperDownloads}
                                    />
                                </Tile>
                            </SubSection>
                        }
                    </Section>
                }
            </Article>

            <Abstract3DDialog
                abstract3D={abstract3D}
                isVisible={isDialogVisible}
                onCloseRequest={() => setIsDialogVisible(false)}
            />

        </div>
    );
}
