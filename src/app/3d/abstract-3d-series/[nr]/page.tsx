import { defaultMetadata } from "@/app/layout";
import Abstract3DSeries from "@/components/categories/3d/Abstract3DSeries";
import Code from "@/components/pageElements/Code";
import HyperLink from "@/components/links/HyperLink";
import Tile from "@/components/pageElements/Tile";
import Article from "@/components/pageStructure/Article";
import Section from "@/components/pageStructure/Section";
import SubSection from "@/components/pageStructure/SubSection";
import { Abstract3dSeriesImage, ImageDownload, abstract3dSeriesImages } from "@/content/3d/abstract3dSeries";
import Image from "next/image";
import { notFound } from "next/navigation";


function imageDownloadsToTable(imageDownloads: ImageDownload[]) {
    let anyDescriptionPresent = imageDownloads.find(image => image.description != undefined) != undefined;

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
                                        ? <td className="pr-1 break-all xs:break-normal">{image.description}</td>
                                        : <td className="w-0 p-0"></td>
                                }

                                <td className={`
                                        ${image.description ? "px-1" : "pr-1 break-all xs:break-normal w-[45%]"}
                                        ${anyDescriptionPresent ? "text-center" : ""}
                                    `}>
                                    <Code noMono largePadding>
                                        <span className={image.description ? "hidden sm:inline" : ""}>
                                            {image.fileName}
                                        </span>
                                        .{image.fileFormat}
                                    </Code>
                                </td>

                                <td className={image.description ? "hidden xs:block" : ""}>
                                    <Code noMono largePadding>
                                        {image.aspectRatio}
                                    </Code>
                                </td>

                                <td className="px-1 text-center">
                                    <Code noMono largePadding>
                                        {`${image.width}x${image.height}`}
                                    </Code>
                                </td>

                                <td className="pl-1 text-right">
                                    <HyperLink href={image.downloadURL}>
                                        Download
                                    </HyperLink>
                                </td>

                            </tr>
                        )
                    )
                }
            </tbody>
        </table >
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
                        w-full self-center max-w-xl
                        sm:w-2/3 sm:min-w-0
                        md:w-[60%]
                        lg:w-1/2 lg:self-auto lg:max-w-3xl
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
                                            ? <SubSection headline="Image">
                                                <Tile className="p-1.5" customPadding>
                                                    {imageDownloadsToTable(abstract3dSeriesImage.downloads?.imageDownloads!)}
                                                </Tile>
                                            </SubSection>
                                            : <></>
                                    }

                                    {
                                        abstract3dSeriesImage.downloads.wallpaperDownloads
                                            ? <SubSection headline="Wallpapers">
                                                <Tile className="p-1.5" customPadding>
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

export const metadata = {
    title: `bdav.dev – Abstract3D Series Image`,
    description: "Abstract3D Series Image from David Berezowski",
    ...defaultMetadata(["Abstract3D Series", "Abstract3DSeries", "a3ds", "Blender", "3D", "abstract"])
}