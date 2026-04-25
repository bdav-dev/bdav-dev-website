'use client';

import MaterialSymbol, { MaterialSymbols } from "@/icons/material/MaterialSymbol";
import { useState } from "react";
import { downloadFile } from "../../utils/DownloadUtilities";

type DownloadButtonProps = {
    url: string,
    fileName: string
}

export default function DownloadButton(props: DownloadButtonProps) {
    const [isDownloading, setIsDownloading] = useState(false);

    return (
        <button
            className={`
                inline-flex items-center gap-[0.075rem]
                hover:text-accent
                transition-transform ease-out duration-[50ms]
                active:translate-y-[0.075rem]
                disabled:opacity-40 disabled:pointer-events-none
            `}
            onClick={() => {
                setIsDownloading(true);
                downloadFile(props.url, props.fileName)
                    .finally(() => setIsDownloading(false));
            }}
            disabled={isDownloading}
        >
            <MaterialSymbol symbol={isDownloading ? MaterialSymbols.PROGRESS_ACTIVITY : MaterialSymbols.DOWNLOAD} weight={350} className={isDownloading ? 'animate-spin' : ''}/>
            <span className={'self-baseline'}>
                Download
            </span>
        </button>
    );
}
