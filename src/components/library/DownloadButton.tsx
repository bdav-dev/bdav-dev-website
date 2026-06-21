'use client';

import MaterialSymbol, { MaterialSymbols } from "@/icons/material/MaterialSymbol";
import { useState } from "react";
import { Download, fetchDownloadFile } from "@/library/client/download";
import HyperLink from "@/components/library/link/HyperLink";

type DownloadButtonProps = { download: Download };

export default function DownloadButton({ download }: DownloadButtonProps) {
    return download.fetch
        ? <FetchDownloadButton url={download.url} fileName={download.fileName}/>
        : <DownloadLink url={download.url}/>;
}

function DownloadLink(props: { url: string }) {
    return (
        <HyperLink
            href={props.url}
            icon={<MaterialSymbol symbol={MaterialSymbols.DOWNLOAD} weight={350}/>}
            discreet
        >
            Download
        </HyperLink>
    )
}

function FetchDownloadButton(props: { url: string, fileName: string }) {
    const [isDownloading, setIsDownloading] = useState(false);

    return (
        <button
            className={`
                flex items-center gap-[0.075rem]
                hover:text-accent
                transition-transform ease-out duration-50
                active:translate-y-[0.075rem]
                disabled:opacity-40 disabled:pointer-events-none
            `}
            onClick={() => {
                setIsDownloading(true);
                fetchDownloadFile(props.url, props.fileName)
                    .finally(() => setIsDownloading(false));
            }}
            disabled={isDownloading}
        >
            <MaterialSymbol symbol={isDownloading ? MaterialSymbols.PROGRESS_ACTIVITY : MaterialSymbols.DOWNLOAD} weight={350} className={isDownloading ? 'animate-spin' : ''}/>
            <span className={'hidden xs:inline'}>
                Download
            </span>
        </button>
    );
}
