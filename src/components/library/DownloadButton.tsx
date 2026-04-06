'use client';

import MaterialSymbol, { MaterialSymbols } from "@/icons/material/MaterialSymbol";
import { useState } from "react";

type DownloadButtonProps = {
    url: string,
    fileName: string
}

export default function DownloadButton(props: DownloadButtonProps) {
    const [disabled, setDisabled] = useState(false);

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
                setDisabled(true);
                downloadFile(props.url, props.fileName)
                    .finally(() => setDisabled(false));
            }}
            disabled={disabled}
        >
            <MaterialSymbol symbol={disabled ? MaterialSymbols.PROGRESS_ACTIVITY : MaterialSymbols.DOWNLOAD} weight={350} className={disabled ? 'animate-spin' : ''}/>
            <span className={'self-baseline'}>
                Download
            </span>
        </button>
    );
}

async function downloadFile(url: string, fileName: string) {
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(`Failed to download file '${fileName}'.`);
    }

    const blob = await response.blob();
    const blobUrl = URL.createObjectURL(blob);

    const anchor = document.createElement("a");
    anchor.href = blobUrl;
    anchor.download = fileName;
    document.body.appendChild(anchor);

    anchor.click();
    anchor.remove();

    requestAnimationFrame(() => URL.revokeObjectURL(blobUrl));
}