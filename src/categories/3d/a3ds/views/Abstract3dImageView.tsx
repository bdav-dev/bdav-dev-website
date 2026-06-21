import Article from "@/components/library/document/Article";
import Section from "@/components/library/document/Section";
import SubSection from "@/components/library/document/SubSection";
import Abstract3dImageDownloadTable from "@/categories/3d/a3ds/components/Abstract3dImageDownloadTable";
import { Abstract3dImage } from "@/categories/3d/a3ds/content/abstract3dSeries";
import Table from "@/components/library/Table";
import { formatDmyString } from "@/library/date";
import NewBadge from "@/components/library/NewBadge";
import { isNew } from "@/categories/3d/a3ds/utilities/abstract3dSeriesUtilities";
import Abstract3dImageFavoriteButton from "@/categories/3d/a3ds/components/Abstract3dImageFavoriteButton";
import Abstract3dImageHeroWithDialog from "@/categories/3d/a3ds/components/Abstract3dImageHeroWithDialog";


type Abstract3dImageViewProps = {
    image: Abstract3dImage
}

export default function Abstract3dImageView({ image }: Abstract3dImageViewProps) {
    const hasMultipleImageDownloads = (image.downloads?.image?.length ?? 0) > 1;
    const hasMultipleWallpaperDownloads = (image.downloads?.wallpaper?.length ?? 0) > 1;

    return (
        <div className={'flex flex-col xl:flex-row gap-5'}>
            <Abstract3dImageHeroWithDialog image={image}/>

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
                className={'grow min-w-0'}
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
        </div>
    );
}
