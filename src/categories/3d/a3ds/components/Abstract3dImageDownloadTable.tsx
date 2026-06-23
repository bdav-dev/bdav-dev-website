import { Abstract3dImageDownload } from "@/categories/3d/a3ds/content/abstract3dSeries";
import DownloadButton from "@/components/library/DownloadButton";
import Tile from "@/components/library/Tile";
import { calculateAspectRatio } from "@/categories/3d/a3ds/utilities/abstract3dSeriesUtilities";


type Abstract3dImageDownloadTableProps = {
    downloads: readonly Abstract3dImageDownload[]
}

export default function Abstract3dImageDownloadTable(props: Abstract3dImageDownloadTableProps) {
    const isAnyDescriptionPresent = props.downloads.some(download => download.description);

    return (
        <Tile className={'overflow-x-auto'}>
            <table className="abstract-3d-image-download-table">
                <thead>
                <tr>
                    <th>File name</th>
                    {
                        isAnyDescriptionPresent &&
                        <th>Description</th>
                    }
                    <th className={'sm:table-cell hidden'}>Aspect&nbsp;ratio</th>
                    <th className={'sm:table-cell hidden'}>Resolution</th>
                    <th/>
                </tr>
                </thead>
                <tbody>
                {
                    props.downloads.map(
                        (download, index) => (
                            <tr key={index}>
                                <td>
                                    {download.fileName}.{download.fileFormat}
                                </td>

                                {
                                    isAnyDescriptionPresent &&
                                    <td>
                                        {download.description}
                                    </td>
                                }

                                <td className={"sm:table-cell hidden"}>
                                    {calculateAspectRatio(download.width, download.height)}
                                </td>

                                <td className={"sm:table-cell hidden"}>
                                    {download.width}x{download.height}
                                </td>

                                <td>
                                    <div className={'ml-auto w-fit'}>
                                        <DownloadButton download={{ url: download.downloadUrl, fetch: true, fileName: `${download.fileName}.${download.fileFormat}` }}/>
                                    </div>
                                </td>
                            </tr>
                        )
                    )
                }
                </tbody>
            </table>
        </Tile>
    );
}
