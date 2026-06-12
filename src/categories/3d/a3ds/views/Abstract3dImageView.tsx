'use client';

import Article from "@/components/layout/document/Article";
import Section from "@/components/layout/document/Section";
import SubSection from "@/components/layout/document/SubSection";
import Abstract3dImageDownloadTable from "@/categories/3d/a3ds/components/Abstract3dImageDownloadTable";
import { Abstract3dImage } from "@/categories/3d/a3ds/content/abstract3dSeries";
import { useState } from "react";
import Table from "@/components/library/Table";
import Abstract3dImageDialog from "@/categories/3d/a3ds/components/Abstract3dImageDialog";
import { formatDmyString } from "@/utils/DateUtils";
import NewBadge from "@/categories/3d/a3ds/components/NewBadge";
import { isNew } from "@/categories/3d/a3ds/utilities/abstract3dSeriesUtilities";
import Abstract3dImageFavoriteButton from "@/categories/3d/a3ds/components/Abstract3dImageFavoriteButton";
import SkeletonLoadingCloudinaryImage from "@/components/SkeletonLoadingCloudinaryImage";


type Abstract3dImageViewProps = {
    image: Abstract3dImage
}

export default function Abstract3dImageView({ image }: Abstract3dImageViewProps) {
    const [isDialogVisible, setIsDialogVisible] = useState(false);

    const hasMultipleImageDownloads = (image.downloads?.image?.length ?? 0) > 1;
    const hasMultipleWallpaperDownloads = (image.downloads?.wallpaper?.length ?? 0) > 1;

    return (
        <div className="flex flex-col lg:flex-row gap-5">
            <SkeletonLoadingCloudinaryImage
                alt={`Abstract3DSeries #${image.nr}`}
                image={image.image}
                sharedClassName={`
                    w-full sm:w-2/3 md:w-[67%] lg:w-1/2
                    max-w-xl lg:max-w-[50rem] 3xl:max-w-[77rem]
                    self-center lg:self-start
                    flex-shrink-0
                    rounded-2xl
                `}
                imageClassName={'select-none cursor-pointer'}
                quality={95}
                loading={'eager'}
                draggable={false}
                onClick={() => setIsDialogVisible(true)}
            />

            <Article
                headline={
                    <div>
                        <span className={'align-middle'}>
                            Abstract3D Series #{image.nr}
                        </span>
                        {
                            isNew(image) &&
                            <span className={'inline-block align-middle ml-3 text-xl'}>
                                <NewBadge/>
                            </span>
                        }
                    </div>
                }
                className={'flex-grow min-w-0'}
            >
                <div className={'flex flex-col items-start gap-4'}>
                    <Table
                        className={'-mt-1'}
                        data={
                            [
                                image.description ? [image.description] : [],
                                [formatDmyString(image.releaseDate)],
                                image.adventCalendar ? [<><span className={'font-mono'}>#{image.adventCalendar.nr}</span> in Advent Calendar {image.adventCalendar.year}</>] : []
                            ]
                        }
                    />

                    <Abstract3dImageFavoriteButton image={image}/>

                    {
                        image.downloads &&
                        <Section headline={"Downloads"} className={"w-full -mt-2"}>
                            {
                                image.downloads.image &&
                                <SubSection headline={hasMultipleImageDownloads ? "Images" : "Image"}>
                                    <Abstract3dImageDownloadTable downloads={image.downloads.image}/>
                                </SubSection>
                            }
                            {
                                image.downloads.wallpaper &&
                                <SubSection headline={hasMultipleWallpaperDownloads ? "Wallpapers" : "Wallpaper"}>
                                    <Abstract3dImageDownloadTable downloads={image.downloads?.wallpaper}/>
                                </SubSection>
                            }
                        </Section>
                    }
                </div>
            </Article>

            <Abstract3dImageDialog
                image={image}
                isOpen={isDialogVisible}
                onCloseRequest={() => setIsDialogVisible(false)}
            />
        </div>
    );
}
