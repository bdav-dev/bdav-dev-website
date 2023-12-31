import { StaticImageData } from "next/image"
import a3ds_19_90p from '@/../public/dev/a3ds_19_90p.webp'

export type Abstract3dSeriesImage = {
    nr: number
    image: StaticImageData
    description?: string | React.ReactNode
    downloads?: {
        imageDownloads?: ImageDownload[],
        wallpaperDownloads?: ImageDownload[]
    }
}

export type ImageDownload = {
    description?: string
    fileName: string
    fileFormat: "png"
    aspectRatio: string
    width: number
    height: number
    downloadURL: string
}

export const abstract3dSeriesImages: { [key: string]: Abstract3dSeriesImage } = {
    19: {
        nr: 19,
        image: a3ds_19_90p,
        downloads: {
            imageDownloads: [
                {
                    fileName: "a3ds-19",
                    fileFormat: "png",
                    aspectRatio: "1:1",
                    width: 1080,
                    height: 1080,
                    downloadURL: "https://nblilnvcme7hrrxj.public.blob.vercel-storage.com/a3ds_19.png"
                }
            ],
            // wallpaperDownloads: [
            //     {
            //         description: "iPhone",
            //         fileName: "a3ds-19-iphone-wallpaper",
            //         fileFormat: "png",
            //         aspectRatio: "x:x",
            //         width: 1080,
            //         height: 512,
            //         downloadURL: "https://nblilnvcme7hrrxj.public.blob.vercel-storage.com/a3ds_19.png"
            //     },
            //     {
            //         description: "Desktop",
            //         fileName: "a3ds-19-desktop-wallpaper",
            //         fileFormat: "png",
            //         aspectRatio: "16:9",
            //         width: 1080,
            //         height: 512,
            //         downloadURL: "https://nblilnvcme7hrrxj.public.blob.vercel-storage.com/a3ds_19.png"
            //     }
            // ]
        }
    }
}