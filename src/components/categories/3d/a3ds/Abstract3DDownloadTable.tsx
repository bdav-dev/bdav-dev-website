import HyperLink from "@/components/link/HyperLink";
import { ImageDownload } from "@/content/3d/a3ds/abstract3dSeries";
import DownloadIcon from "@/icons/DownloadIcon";
import Highlight from "@/components/Highlight";
import { CSSProperties } from "react";

type Abstract3DDownloadTableProps = {
    downloads: ImageDownload[]
}

export default function Abstract3DDownloadTable(props: Abstract3DDownloadTableProps) {
    const isAnyDescriptionPresent = props.downloads.some(download => download.description);

    const yPadding = "0.35rem";
    const style: CSSProperties = {
        width: isAnyDescriptionPresent ? "20%" : "25%",
        paddingTop: yPadding,
        paddingBottom: yPadding
    };

    return (
        <table className="w-full">
            <tbody>
            {
                props.downloads.map(
                    (download, index) => (
                        <tr key={index} className={index != 0 ? "border-t border-zinc-300 dark:border-zinc-800" : ""}>
                            <Description download={download} style={style}/>
                            <FileName download={download} style={style} isAnyDescriptionPresent={isAnyDescriptionPresent}/>
                            <AspectRatio download={download} style={style}/>
                            <Resolution download={download} style={style}/>
                            <Download download={download} style={style}/>
                        </tr>
                    )
                )
            }
            </tbody>
        </table>
    );
}

type CellProps = {
    download: ImageDownload,
    style: CSSProperties
};

function Description(props: CellProps) {
    return (
        props.download.description
            ? <td style={props.style}
                  className={`
                    break-all mxs:break-keep
                    whitespace-normal mxs:whitespace-nowrap
                  `}
            >
                {props.download.description}
            </td>
            : <td className="w-0"/>
    );
}

function FileName(props: CellProps & { isAnyDescriptionPresent: boolean }) {
    return (
        <td style={props.style}
            className={`
                ${props.download.description ? "px-1" : "pr-1"}
                ${props.isAnyDescriptionPresent ? "text-center" : ""}
                break-all mxs:break-keep
                whitespace-normal mxs:whitespace-nowrap
            `}
        >
            <Highlight>
                {
                    !props.download.description &&
                    <span>{props.download.fileName}</span>
                }
                .{props.download.fileFormat}
            </Highlight>
        </td>
    );
}

function AspectRatio(props: CellProps) {
    return (
        <td style={props.style}
            className={`
                px-1 text-center
                ${props.download.description ? "hidden sm:table-cell" : ""}
            `}
        >
            <Highlight>
                {props.download.aspectRatio}
            </Highlight>
        </td>
    );
}

function Resolution(props: CellProps) {
    return (
        <td style={props.style} className="px-1 text-center">
            <Highlight>
                {`${props.download.width}x${props.download.height}`}
            </Highlight>
        </td>
    );
}

function Download(props: CellProps) {
    return (
        <td style={props.style} className="pl-1 text-right">
            <HyperLink
                noUnderline
                href={props.download.downloadURL}
                className="flex gap-1.5 w-fit ml-auto items-center stroke-black dark:stroke-white"
            >
                <DownloadIcon className="w-5 h-5 ml-auto stroke-[6]"/>

                <span className="hidden sm:inline">
                        Download
                </span>
            </HyperLink>
        </td>
    );
}
