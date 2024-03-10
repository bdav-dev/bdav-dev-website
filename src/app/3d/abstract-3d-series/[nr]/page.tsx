import { defaultMetadata } from "@/metadata";
import Abstract3DSeries from "@/components/categories/3d/Abstract3DSeries";
import HyperLink from "@/components/links/HyperLink";
import Tile from "@/components/pageElements/Tile";
import Article from "@/components/pageStructure/Article";
import Section from "@/components/pageStructure/Section";
import SubSection from "@/components/pageStructure/SubSection";
import { Abstract3dSeriesImage, ImageDownload, abstract3dSeriesImages } from "@/content/3d/abstract3dSeries";
import Image from "next/image";
import { notFound } from "next/navigation";
import Highlight from "@/components/pageElements/Highlight";
import { Metadata } from "next";
import DownloadIcon from "@/icons/DownloadIcon";


function imageDownloadsToTable(imageDownloads: ImageDownload[]) {
    let anyDescriptionPresent = imageDownloads.find(image => image.description != undefined) != undefined;

    const yPadding = "py-[0.35rem]";

    const cellWidth = anyDescriptionPresent
        ? "w-1/5"
        : "w-1/4";

    return (
        <table className="w-full">
            <tbody>
                {
                    imageDownloads.map(
                        (image, index) => (
                            <tr key={index}
                                className={
                                    index != 0
                                        ? "border-t border-zinc-300 dark:border-zinc-800"
                                        : ""
                                }
                            >
                                {
                                    image.description
                                        ? <td className={`
                                            ${cellWidth} ${yPadding}
                                            break-all mxs:break-keep
                                            whitespace-normal mxs:whitespace-nowrap
                                        `}>{image.description}</td>
                                        : <td className="w-0"></td>
                                }

                                <td className={`
                                        ${image.description ? "px-1" : "pr-1"}
                                        ${anyDescriptionPresent ? "text-center" : ""}
                                        ${yPadding}
                                        ${cellWidth}
                                        break-all mxs:break-keep
                                        whitespace-normal mxs:whitespace-nowrap 
                                `}>
                                    <Highlight>
                                        <span className={image.description ? "hidden" : "inline"}>
                                            {image.fileName}
                                        </span>
                                        .{image.fileFormat}
                                    </Highlight>
                                </td>

                                <td className={`
                                    px-1 ${yPadding}
                                    ${image.description ? "hidden sm:table-cell" : ""}
                                    ${cellWidth} text-center
                                `}>
                                    <Highlight>
                                        {image.aspectRatio}
                                    </Highlight>
                                </td>

                                <td className={`px-1 ${cellWidth} text-center ${yPadding}`}>
                                    <Highlight>
                                        {`${image.width}x${image.height}`}
                                    </Highlight>
                                </td>

                                <td className={`pl-1 ${cellWidth} text-right ${yPadding}`}>
                                    <HyperLink href={image.downloadURL} className="flex gap-1.5 w-fit ml-auto items-center stroke-white">

                                        <DownloadIcon className="w-5 h-5 ml-auto stroke-[6]" />

                                        <span className="hidden sm:inline">
                                            Download
                                        </span>

                                    </HyperLink>
                                </td>

                            </tr>
                        )
                    )
                }
            </tbody>
        </table>
    );
}

export default function Abstract3dSeriesImage({ params }: { params: { nr: string } }) {

    let abstract3dSeriesImage: Abstract3dSeriesImage | undefined;

    abstract3dSeriesImage = Object.values(abstract3dSeriesImages).find(
        image => image.nr.toString() === params.nr
    );

    if (abstract3dSeriesImage == undefined)
        notFound();

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

                <div className="flex-grow">

                    <Article headline={`Abstract3D Series #${params.nr}`}>
                        {abstract3dSeriesImage.description}

                        {
                            abstract3dSeriesImage.downloads
                                ? <Section headline="Downloads" className="mt-4">

                                    {
                                        abstract3dSeriesImage.downloads.imageDownloads
                                            ? <SubSection headline={
                                                abstract3dSeriesImage.downloads.imageDownloads.length > 1
                                                    ? "Images"
                                                    : "Image"
                                            }>
                                                <Tile className="py-1 px-2" customPadding>
                                                    {imageDownloadsToTable(abstract3dSeriesImage.downloads?.imageDownloads!)}
                                                </Tile>
                                            </SubSection>
                                            : <></>
                                    }

                                    {
                                        abstract3dSeriesImage.downloads.wallpaperDownloads
                                            ? <SubSection headline={
                                                abstract3dSeriesImage.downloads.wallpaperDownloads.length > 1
                                                    ? "Wallpapers"
                                                    : "Wallpaper"
                                            }>
                                                <Tile className="py-1 px-2" customPadding>
                                                    {imageDownloadsToTable(abstract3dSeriesImage.downloads?.wallpaperDownloads!)}
                                                </Tile>
                                            </SubSection>
                                            : <></>
                                    }

                                </Section>
                                : <></>
                        }

                    </Article>

                </div>

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