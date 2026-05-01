
export type Download = { url: string } & ({ fetch: false } | { fetch: true, fileName: string });

export async function fetchDownloadFile(url: string, fileName: string) {
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
