import { StaticImageData } from "next/image"
import { a3ds } from "./abstract3dSeriesImages"

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
    20: {
        image: a3ds.O20,
        nr: 20
    },
    19: {
        image: a3ds.O19,
        nr: 19
    },
    18: {
        image: a3ds.O18,
        nr: 18
    },
    17: {
        image: a3ds.O17,
        nr: 17
    },
    16: {
        image: a3ds.O16,
        nr: 16
    },
    15: {
        image: a3ds.O15,
        nr: 15
    },
    14: {
        image: a3ds.O14,
        nr: 14
    },
    13: {
        image: a3ds.O13,
        nr: 13
    },
    12: {
        image: a3ds.O12,
        nr: 12
    },
    11: {
        image: a3ds.O11,
        nr: 11
    },
    10: {
        image: a3ds.O10,
        nr: 10
    },
    9: {
        image: a3ds.OO9,
        nr: 9
    },
    8: {
        image: a3ds.OO8,
        nr: 8
    },
    7: {
        image: a3ds.OO7,
        nr: 7,
        description: "Bismut Landscape"
    },
    6: {
        image: a3ds.OO6,
        nr: 6
    },
    5: {
        image: a3ds.OO5,
        nr: 5
    },
    4: {
        image: a3ds.OO4,
        nr: 4
    },
    3: {
        image: a3ds.OO3,
        nr: 3
    },
    2: {
        image: a3ds.OO2,
        nr: 2
    },
    1: {
        image: a3ds.OO1,
        nr: 1
    }
}