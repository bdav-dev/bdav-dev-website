import HyperLink from "@/components/links/HyperLink";
import { ImageDownload } from "@/content/3d/abstract3dSeries";
import DownloadIcon from "@/icons/DownloadIcon";
import Highlight from "@/components/pageElements/Highlight";
import { CSSProperties } from "react";

type A3dsImageDownloadTableProps = {
    downloads: ImageDownload[]
}

export default function A3dsImageDownloadTable(props: A3dsImageDownloadTableProps) {
    const isAnyDescriptionPresent = props.downloads.some(image => image.description);

    const yPadding = "0.35rem";
    const cellWidth = isAnyDescriptionPresent ? "20%" : "25%";
    const cellStyle: CSSProperties = {
        width: cellWidth,
        paddingTop: yPadding,
        paddingBottom: yPadding
    };

    return (
        <table className="w-full">
            <tbody>
            {
                props.downloads.map(
                    (image, index) => (
                        <tr key={index}
                            className={index != 0 ? "border-t border-zinc-300 dark:border-zinc-800" : ""}
                        >
                            {/* Description */}
                            {
                                image.description
                                    ? <td style={cellStyle}
                                          className={`
                                                break-all mxs:break-keep
                                                whitespace-normal mxs:whitespace-nowrap
                                            `}
                                    >
                                        {image.description}
                                    </td>
                                    : <td className="w-0"/>
                            }

                            {/* File name */}
                            <td style={cellStyle}
                                className={`
                                    ${image.description ? "px-1" : "pr-1"}
                                    ${isAnyDescriptionPresent ? "text-center" : ""}
                                    break-all mxs:break-keep
                                    whitespace-normal mxs:whitespace-nowrap
                                `}
                            >
                                <Highlight>
                                    {
                                        !image.description &&
                                        <span>{image.fileName}</span>
                                    }
                                    .{image.fileFormat}
                                </Highlight>
                            </td>

                            {/* Aspect ratio */}
                            <td style={cellStyle}
                                className={`
                                    px-1 text-center
                                    ${image.description ? "hidden sm:table-cell" : ""}
                                `}
                            >
                                <Highlight>
                                    {image.aspectRatio}
                                </Highlight>
                            </td>

                            {/* Resolution */}
                            <td style={cellStyle} className="px-1 text-center">
                                <Highlight>
                                    {`${image.width}x${image.height}`}
                                </Highlight>
                            </td>

                            {/* Download button */}
                            <td style={cellStyle} className="pl-1 text-right">
                                <HyperLink
                                    noUnderline
                                    href={image.downloadURL}
                                    className="flex gap-1.5 w-fit ml-auto items-center stroke-black dark:stroke-white"
                                >
                                    <DownloadIcon className="w-5 h-5 ml-auto stroke-[6]"/>

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
