import { StaticImageData } from "next/image"
import { a3ds } from "./abstract3dSeriesImages"
import React from "react";
import { Abstract3DSeriesSort } from "@/utils/SortUtils";

export type ImageDownload = {
    description?: string
    fileName: string
    fileFormat: "png" | "exr" | "jpg"
    aspectRatio: string
    width: number
    height: number
    downloadURL: string
}

export type Abstract3D = {
    nr: number
    image: StaticImageData,
    releaseDate: string,
    description?: string | React.ReactNode,
    adventCalendar?: {
        nr: number,
        year: number
    }
    downloads?: {
        imageDownloads?: ImageDownload[],
        wallpaperDownloads?: ImageDownload[]
    }
}

export const Abstract3DSeries: { [key: string]: Abstract3D } = {
    55: {
        nr: 55,
        releaseDate: '18.05.2025',
        image: a3ds.O55,
        downloads: {
            imageDownloads: [
                {
                    fileName: "a3ds-055",
                    fileFormat: "png",
                    width: 1080,
                    height: 1080,
                    aspectRatio: "1:1",
                    downloadURL: "https://res.cloudinary.com/bdav-dev/image/upload/v1747577680/abstract-3d-series/055/a3ds-055.png"
                }
            ]
        }
    },
    54: {
        nr: 54,
        releaseDate: '01.05.2025',
        image: a3ds.O54,
        downloads: {
            imageDownloads: [
                {
                    fileName: "a3ds-054",
                    fileFormat: "png",
                    width: 1080,
                    height: 1080,
                    aspectRatio: "1:1",
                    downloadURL: "https://res.cloudinary.com/bdav-dev/image/upload/v1746112231/abstract-3d-series/054/a3ds-054.png"
                }
            ]
        }
    },
    53: {
        nr: 53,
        releaseDate: '03.02.2025',
        image: a3ds.O53,
        downloads: {
            imageDownloads: [
                {
                    fileName: "a3ds-053",
                    fileFormat: "png",
                    width: 1080,
                    height: 1080,
                    aspectRatio: "1:1",
                    downloadURL: "https://res.cloudinary.com/bdav-dev/image/upload/v1738612366/abstract-3d-series/053/a3ds-053.png"
                }
            ],
            wallpaperDownloads: [
                {
                    description: "Desktop UHD",
                    fileName: "a3ds-053-wallpaper-desktop-uhd",
                    fileFormat: "jpg",
                    width: 3840,
                    height: 2160,
                    aspectRatio: "16:9",
                    downloadURL: "https://res.cloudinary.com/bdav-dev/image/upload/v1738854650/abstract-3d-series/053/a3ds-053-wallpaper-desktop-uhd.jpg"
                }
            ]
        }
    },
    52: {
        nr: 52,
        releaseDate: '24.12.2024',
        adventCalendar: { nr: 24, year: 2024 },
        image: a3ds.O52,
        downloads: {
            imageDownloads: [
                {
                    fileName: "a3ds-052",
                    fileFormat: "png",
                    width: 1080,
                    height: 1080,
                    aspectRatio: "1:1",
                    downloadURL: "https://res.cloudinary.com/bdav-dev/image/upload/v1735232968/abstract-3d-series/052/a3ds-052.png"
                }
            ]
        }
    },
    51: {
        nr: 51,
        releaseDate: '23.12.2024',
        adventCalendar: { nr: 23, year: 2024 },
        image: a3ds.O51,
        downloads: {
            imageDownloads: [
                {
                    fileName: "a3ds-051",
                    fileFormat: "png",
                    width: 1080,
                    height: 1080,
                    aspectRatio: "1:1",
                    downloadURL: "https://res.cloudinary.com/bdav-dev/image/upload/v1735232932/abstract-3d-series/051/a3ds-051.png"
                }
            ]
        }
    },
    50: {
        nr: 50,
        releaseDate: '22.12.2024',
        adventCalendar: { nr: 22, year: 2024 },
        image: a3ds.O50,
        downloads: {
            imageDownloads: [
                {
                    fileName: "a3ds-050",
                    fileFormat: "png",
                    width: 1080,
                    height: 1080,
                    aspectRatio: "1:1",
                    downloadURL: "https://res.cloudinary.com/bdav-dev/image/upload/v1735232899/abstract-3d-series/050/a3ds-050.png"
                }
            ]
        }
    },
    49: {
        nr: 49,
        releaseDate: '21.12.2024',
        adventCalendar: { nr: 21, year: 2024 },
        image: a3ds.O49,
        downloads: {
            imageDownloads: [
                {
                    fileName: "a3ds-049",
                    fileFormat: "png",
                    width: 1080,
                    height: 1080,
                    aspectRatio: "1:1",
                    downloadURL: "https://res.cloudinary.com/bdav-dev/image/upload/v1735232868/abstract-3d-series/049/a3ds-049.png"
                }
            ]
        }
    },
    48: {
        nr: 48,
        releaseDate: '20.12.2024',
        adventCalendar: { nr: 20, year: 2024 },
        image: a3ds.O48,
        downloads: {
            imageDownloads: [
                {
                    fileName: "a3ds-048",
                    fileFormat: "png",
                    width: 1080,
                    height: 1080,
                    aspectRatio: "1:1",
                    downloadURL: "https://res.cloudinary.com/bdav-dev/image/upload/v1735232823/abstract-3d-series/048/a3ds-048.png"
                }
            ]
        }
    },
    47: {
        nr: 47,
        releaseDate: '19.12.2024',
        adventCalendar: { nr: 19, year: 2024 },
        image: a3ds.O47,
        downloads: {
            imageDownloads: [
                {
                    fileName: "a3ds-047",
                    fileFormat: "png",
                    width: 1080,
                    height: 1080,
                    aspectRatio: "1:1",
                    downloadURL: "https://res.cloudinary.com/bdav-dev/image/upload/v1735232790/abstract-3d-series/047/a3ds-047.png"
                }
            ]
        }
    },
    46: {
        nr: 46,
        releaseDate: '18.12.2024',
        adventCalendar: { nr: 18, year: 2024 },
        image: a3ds.O46,
        downloads: {
            imageDownloads: [
                {
                    fileName: "a3ds-046",
                    fileFormat: "png",
                    width: 1080,
                    height: 1080,
                    aspectRatio: "1:1",
                    downloadURL: "https://res.cloudinary.com/bdav-dev/image/upload/v1735232761/abstract-3d-series/046/a3ds-046.png"
                }
            ]
        }
    },
    45: {
        nr: 45,
        releaseDate: '17.12.2024',
        adventCalendar: { nr: 17, year: 2024 },
        image: a3ds.O45,
        downloads: {
            imageDownloads: [
                {
                    fileName: "a3ds-045",
                    fileFormat: "png",
                    width: 1080,
                    height: 1080,
                    aspectRatio: "1:1",
                    downloadURL: "https://res.cloudinary.com/bdav-dev/image/upload/v1735232733/abstract-3d-series/045/a3ds-045.png"
                }
            ]
        }
    },
    44: {
        nr: 44,
        releaseDate: '16.12.2024',
        adventCalendar: { nr: 16, year: 2024 },
        image: a3ds.O44,
        downloads: {
            imageDownloads: [
                {
                    fileName: "a3ds-044",
                    fileFormat: "png",
                    width: 1080,
                    height: 1080,
                    aspectRatio: "1:1",
                    downloadURL: "https://res.cloudinary.com/bdav-dev/image/upload/v1735232701/abstract-3d-series/044/a3ds-044.png"
                }
            ]
        }
    },
    43: {
        nr: 43,
        releaseDate: '15.12.2024',
        adventCalendar: { nr: 15, year: 2024 },
        image: a3ds.O43,
        downloads: {
            imageDownloads: [
                {
                    fileName: "a3ds-043",
                    fileFormat: "png",
                    width: 1080,
                    height: 1080,
                    aspectRatio: "1:1",
                    downloadURL: "https://res.cloudinary.com/bdav-dev/image/upload/v1735232659/abstract-3d-series/043/a3ds-043.png"
                }
            ]
        }
    },
    42: {
        nr: 42,
        releaseDate: '14.12.2024',
        adventCalendar: { nr: 14, year: 2024 },
        image: a3ds.O42,
        downloads: {
            imageDownloads: [
                {
                    fileName: "a3ds-042",
                    fileFormat: "png",
                    width: 1080,
                    height: 1080,
                    aspectRatio: "1:1",
                    downloadURL: "https://res.cloudinary.com/bdav-dev/image/upload/v1735232630/abstract-3d-series/042/a3ds-042.png"
                }
            ]
        }
    },
    41: {
        nr: 41,
        releaseDate: '13.12.2024',
        adventCalendar: { nr: 13, year: 2024 },
        image: a3ds.O41,
        downloads: {
            imageDownloads: [
                {
                    fileName: "a3ds-041",
                    fileFormat: "png",
                    width: 1080,
                    height: 1080,
                    aspectRatio: "1:1",
                    downloadURL: "https://res.cloudinary.com/bdav-dev/image/upload/v1735232603/abstract-3d-series/041/a3ds-041.png"
                }
            ]
        }
    },
    40: {
        nr: 40,
        releaseDate: '12.12.2024',
        adventCalendar: { nr: 12, year: 2024 },
        image: a3ds.O40,
        downloads: {
            imageDownloads: [
                {
                    fileName: "a3ds-040",
                    fileFormat: "png",
                    width: 1080,
                    height: 1080,
                    aspectRatio: "1:1",
                    downloadURL: "https://res.cloudinary.com/bdav-dev/image/upload/v1735232571/abstract-3d-series/040/a3ds-040.png"
                }
            ]
        }
    },
    39: {
        nr: 39,
        releaseDate: '11.12.2024',
        adventCalendar: { nr: 11, year: 2024 },
        image: a3ds.O39,
        downloads: {
            imageDownloads: [
                {
                    fileName: "a3ds-039",
                    fileFormat: "png",
                    width: 1080,
                    height: 1080,
                    aspectRatio: "1:1",
                    downloadURL: "https://res.cloudinary.com/bdav-dev/image/upload/v1735232533/abstract-3d-series/039/a3ds-039.png"
                }
            ]
        }
    },
    38: {
        nr: 38,
        releaseDate: '10.12.2024',
        adventCalendar: { nr: 10, year: 2024 },
        image: a3ds.O38,
        downloads: {
            imageDownloads: [
                {
                    fileName: "a3ds-038",
                    fileFormat: "png",
                    width: 1080,
                    height: 1080,
                    aspectRatio: "1:1",
                    downloadURL: "https://res.cloudinary.com/bdav-dev/image/upload/v1733912685/abstract-3d-series/038/a3ds-038.png"
                }
            ]
        }
    },
    37: {
        nr: 37,
        releaseDate: '9.12.2024',
        adventCalendar: { nr: 9, year: 2024 },
        image: a3ds.O37,
        downloads: {
            imageDownloads: [
                {
                    fileName: "a3ds-037",
                    fileFormat: "png",
                    width: 1080,
                    height: 1080,
                    aspectRatio: "1:1",
                    downloadURL: "https://res.cloudinary.com/bdav-dev/image/upload/v1733912620/abstract-3d-series/037/a3ds-037.png"
                }
            ]
        }
    },
    36: {
        nr: 36,
        releaseDate: '8.12.2024',
        adventCalendar: { nr: 8, year: 2024 },
        image: a3ds.O36,
        downloads: {
            imageDownloads: [
                {
                    fileName: "a3ds-036",
                    fileFormat: "png",
                    width: 1080,
                    height: 1080,
                    aspectRatio: "1:1",
                    downloadURL: "https://res.cloudinary.com/bdav-dev/image/upload/v1733678657/abstract-3d-series/036/a3ds-036.png"
                }
            ]
        }
    },
    35: {
        nr: 35,
        releaseDate: '7.12.2024',
        adventCalendar: { nr: 7, year: 2024 },
        image: a3ds.O35,
        downloads: {
            imageDownloads: [
                {
                    fileName: "a3ds-035",
                    fileFormat: "png",
                    width: 1080,
                    height: 1080,
                    aspectRatio: "1:1",
                    downloadURL: "https://res.cloudinary.com/bdav-dev/image/upload/v1733586390/abstract-3d-series/035/a3ds-035.png"
                }
            ]
        }
    },
    34: {
        nr: 34,
        releaseDate: '6.12.2024',
        adventCalendar: { nr: 6, year: 2024 },
        image: a3ds.O34,
        downloads: {
            imageDownloads: [
                {
                    fileName: "a3ds-034",
                    fileFormat: "png",
                    width: 1080,
                    height: 1080,
                    aspectRatio: "1:1",
                    downloadURL: "https://res.cloudinary.com/bdav-dev/image/upload/v1733494817/abstract-3d-series/034/a3ds-034.png"
                }
            ]
        }
    },
    33: {
        nr: 33,
        releaseDate: '5.12.2024',
        adventCalendar: { nr: 5, year: 2024 },
        image: a3ds.O33,
        downloads: {
            imageDownloads: [
                {
                    fileName: "a3ds-033",
                    fileFormat: "png",
                    width: 1080,
                    height: 1080,
                    aspectRatio: "1:1",
                    downloadURL: "https://res.cloudinary.com/bdav-dev/image/upload/v1733419352/abstract-3d-series/033/a3ds-033.png"
                }
            ]
        }
    },
    32: {
        nr: 32,
        releaseDate: '4.12.2024',
        adventCalendar: { nr: 4, year: 2024 },
        image: a3ds.O32,
        downloads: {
            imageDownloads: [
                {
                    fileName: "a3ds-032",
                    fileFormat: "png",
                    width: 1080,
                    height: 1080,
                    aspectRatio: "1:1",
                    downloadURL: "https://res.cloudinary.com/bdav-dev/image/upload/v1733337269/abstract-3d-series/032/a3ds-032.png"
                }
            ]
        }
    },
    31: {
        nr: 31,
        releaseDate: '3.12.2024',
        adventCalendar: { nr: 3, year: 2024 },
        image: a3ds.O31,
        downloads: {
            imageDownloads: [
                {
                    fileName: "a3ds-031",
                    fileFormat: "exr",
                    width: 1080,
                    height: 1080,
                    aspectRatio: "1:1",
                    downloadURL: "https://res.cloudinary.com/bdav-dev/raw/upload/v1733258314/abstract-3d-series/031/a3ds-031.exr"
                },
                {
                    fileName: "a3ds-031",
                    fileFormat: "png",
                    width: 1080,
                    height: 1080,
                    aspectRatio: "1:1",
                    downloadURL: "https://res.cloudinary.com/bdav-dev/image/upload/v1733258318/abstract-3d-series/031/a3ds-031.png"
                }
            ]
        }
    },
    30: {
        nr: 30,
        releaseDate: '2.12.2024',
        adventCalendar: { nr: 2, year: 2024 },
        image: a3ds.O30,
        downloads: {
            imageDownloads: [
                {
                    fileName: "a3ds-030",
                    fileFormat: "png",
                    width: 1080,
                    height: 1080,
                    aspectRatio: "1:1",
                    downloadURL: "https://res.cloudinary.com/bdav-dev/image/upload/v1733175817/abstract-3d-series/030/a3ds-030.png"
                }
            ]
        }
    },
    29: {
        nr: 29,
        releaseDate: '1.12.2024',
        adventCalendar: { nr: 1, year: 2024 },
        image: a3ds.O29,
        downloads: {
            imageDownloads: [
                {
                    fileName: "a3ds-029",
                    fileFormat: "png",
                    width: 1080,
                    height: 1080,
                    aspectRatio: "1:1",
                    downloadURL: "https://res.cloudinary.com/bdav-dev/image/upload/v1733175772/abstract-3d-series/029/a3ds-029.png"
                }
            ]
        }
    },
    28: {
        nr: 28,
        releaseDate: '27.08.2024',
        image: a3ds.O28,
        downloads: {
            imageDownloads: [
                {
                    fileName: "a3ds-028",
                    fileFormat: "png",
                    width: 1080,
                    height: 1080,
                    aspectRatio: "1:1",
                    downloadURL: "https://res.cloudinary.com/bdav-dev/image/upload/v1725712070/abstract-3d-series/028/a3ds-028.png"
                }
            ]
        }
    },
    27: {
        nr: 27,
        releaseDate: '26.08.2024',
        image: a3ds.O27,
        downloads: {
            imageDownloads: [
                {
                    fileName: "a3ds-027",
                    fileFormat: "png",
                    width: 1000,
                    height: 1000,
                    aspectRatio: "1:1",
                    downloadURL: "https://res.cloudinary.com/bdav-dev/image/upload/v1725711956/abstract-3d-series/027/a3ds-027.png"
                }
            ]
        }
    },
    26: {
        nr: 26,
        releaseDate: '04.06.2024',
        image: a3ds.O26,
        downloads: {
            imageDownloads: [
                {
                    fileName: "a3ds-026",
                    fileFormat: "png",
                    width: 1080,
                    height: 1080,
                    aspectRatio: "1:1",
                    downloadURL: "https://res.cloudinary.com/bdav-dev/image/upload/v1717500726/abstract-3d-series/026/a3ds-026.png"
                }
            ],
            wallpaperDownloads: [
                {
                    description: "Desktop UHD",
                    fileName: "a3ds-026-wallpaper-desktop-uhd",
                    fileFormat: "png",
                    width: 3840,
                    height: 2160,
                    aspectRatio: "16:9",
                    downloadURL: "https://res.cloudinary.com/bdav-dev/image/upload/v1717506454/abstract-3d-series/026/a3ds-026-wallpaper-desktop-uhd.png"
                }
            ]
        }
    },
    25: {
        nr: 25,
        releaseDate: '20.04.2024',
        image: a3ds.O25,
        downloads: {
            imageDownloads: [
                {
                    fileName: "a3ds-025",
                    fileFormat: "png",
                    width: 1080,
                    height: 1080,
                    aspectRatio: "1:1",
                    downloadURL: "https://res.cloudinary.com/bdav-dev/image/upload/v1713615054/abstract-3d-series/025/a3ds-025.png"
                }
            ]
        }
    },
    24: {
        nr: 24,
        releaseDate: '10.03.2024',
        image: a3ds.O24,
        downloads: {
            imageDownloads: [
                {
                    description: "Green",
                    fileName: "a3ds-024-green",
                    fileFormat: "png",
                    width: 1080,
                    height: 1080,
                    aspectRatio: "1:1",
                    downloadURL: "https://res.cloudinary.com/bdav-dev/image/upload/v1709998497/abstract-3d-series/024/a3ds-024-green.png"
                },
                {
                    description: "Pink",
                    fileName: "a3ds-024-pink",
                    fileFormat: "png",
                    width: 1080,
                    height: 1080,
                    aspectRatio: "1:1",
                    downloadURL: "https://res.cloudinary.com/bdav-dev/image/upload/v1709998497/abstract-3d-series/024/a3ds-024-pink.png"
                }
            ]
        }
    },
    23: {
        nr: 23,
        releaseDate: '23.02.2024',
        image: a3ds.O23,
        downloads: {
            imageDownloads: [
                {
                    fileName: "a3ds-023",
                    fileFormat: "png",
                    width: 1080,
                    height: 1080,
                    aspectRatio: "1:1",
                    downloadURL: "https://res.cloudinary.com/bdav-dev/image/upload/v1707579822/abstract-3d-series/023/a3ds-023.png"
                }
            ],
            wallpaperDownloads: [
                {
                    description: "Desktop UHD",
                    fileName: "a3ds-023-wallpaper-desktop-uhd",
                    fileFormat: "png",
                    width: 3840,
                    height: 2160,
                    aspectRatio: "16:9",
                    downloadURL: "https://res.cloudinary.com/bdav-dev/image/upload/v1707663092/abstract-3d-series/023/a3ds-023-wallpaper-desktop-uhd.png"
                }
            ]
        }
    },
    22: {
        nr: 22,
        releaseDate: '10.02.2024',
        image: a3ds.O22,
        downloads: {
            imageDownloads: [
                {
                    fileName: "a3ds-022",
                    fileFormat: "png",
                    width: 1080,
                    height: 1080,
                    aspectRatio: "1:1",
                    downloadURL: "https://res.cloudinary.com/bdav-dev/image/upload/v1707169876/abstract-3d-series/022/a3ds-022.png"
                }
            ]
        }
    },
    21: {
        nr: 21,
        releaseDate: '28.01.2024',
        image: a3ds.O21,
        downloads: {
            imageDownloads: [
                {
                    fileName: "a3ds-021",
                    fileFormat: "png",
                    width: 1080,
                    height: 1080,
                    aspectRatio: "1:1",
                    downloadURL: "https://res.cloudinary.com/bdav-dev/image/upload/v1706457832/abstract-3d-series/021/a3ds-021.png"
                }
            ]
        }
    },
    20: {
        nr: 20,
        releaseDate: '25.10.2023',
        image: a3ds.O20,
        downloads: {
            imageDownloads: [
                {
                    fileName: "a3ds-020",
                    fileFormat: "png",
                    width: 1080,
                    height: 1080,
                    aspectRatio: "1:1",
                    downloadURL: "https://res.cloudinary.com/bdav-dev/image/upload/v1704293858/abstract-3d-series/020/a3ds-020.png"
                }
            ],
            wallpaperDownloads: [
                {
                    description: "Desktop UHD",
                    fileName: "a3ds-020-wallpaper-desktop-uhd",
                    fileFormat: "png",
                    width: 3840,
                    height: 2160,
                    aspectRatio: "16:9",
                    downloadURL: "https://res.cloudinary.com/bdav-dev/image/upload/v1705605097/abstract-3d-series/020/a3ds-020-wallpaper-desktop-uhd.png"
                }
            ],
        }
    },
    19: {
        nr: 19,
        releaseDate: '22.10.2023',
        image: a3ds.O19,
        downloads: {
            imageDownloads: [
                {
                    fileName: "a3ds-019",
                    fileFormat: "png",
                    width: 1080,
                    height: 1080,
                    aspectRatio: "1:1",
                    downloadURL: "https://res.cloudinary.com/bdav-dev/image/upload/v1704293851/abstract-3d-series/019/a3ds-019.png"
                }
            ],
            wallpaperDownloads: [
                {
                    description: "Desktop UHD",
                    fileName: "a3ds-019-wallpaper-desktop-uhd",
                    fileFormat: "png",
                    width: 3840,
                    height: 2160,
                    aspectRatio: "16:9",
                    downloadURL: "https://res.cloudinary.com/bdav-dev/image/upload/v1705605181/abstract-3d-series/019/a3ds-019-wallpaper-desktop-uhd.png"
                }
            ],
        }
    },
    18: {
        nr: 18,
        releaseDate: '16.09.2023',
        image: a3ds.O18,
        downloads: {
            imageDownloads: [
                {
                    fileName: "a3ds-018",
                    fileFormat: "png",
                    width: 1000,
                    height: 1000,
                    aspectRatio: "1:1",
                    downloadURL: "https://res.cloudinary.com/bdav-dev/image/upload/v1704293835/abstract-3d-series/018/a3ds-018.png"
                }
            ],
            wallpaperDownloads: [
                {
                    description: "Desktop UHD",
                    fileName: "a3ds-018-wallpaper-desktop-uhd",
                    fileFormat: "png",
                    width: 3840,
                    height: 2160,
                    aspectRatio: "16:9",
                    downloadURL: "https://res.cloudinary.com/bdav-dev/image/upload/v1705605273/abstract-3d-series/018/a3ds-018-wallpaper-desktop-uhd.png"
                }
            ],
        }
    },
    17: {
        nr: 17,
        releaseDate: '10.09.2023',
        image: a3ds.O17,
        downloads: {
            imageDownloads: [
                {
                    fileName: "a3ds-017",
                    fileFormat: "png",
                    width: 1000,
                    height: 1000,
                    aspectRatio: "1:1",
                    downloadURL: "https://res.cloudinary.com/bdav-dev/image/upload/v1704293824/abstract-3d-series/017/a3ds-017.png"
                }
            ]
        }
    },
    16: {
        nr: 16,
        releaseDate: '04.09.2023',
        image: a3ds.O16,
        downloads: {
            imageDownloads: [
                {
                    fileName: "a3ds-016",
                    fileFormat: "png",
                    width: 1000,
                    height: 1000,
                    aspectRatio: "1:1",
                    downloadURL: "https://res.cloudinary.com/bdav-dev/image/upload/v1704293818/abstract-3d-series/016/a3ds-016.png"
                }
            ],
            wallpaperDownloads: [
                {
                    description: "Desktop UHD",
                    fileName: "a3ds-016-wallpaper-desktop-uhd",
                    fileFormat: "png",
                    width: 3840,
                    height: 2160,
                    aspectRatio: "16:9",
                    downloadURL: "https://res.cloudinary.com/bdav-dev/image/upload/v1705605359/abstract-3d-series/016/a3ds-016-wallpaper-desktop-uhd.png"
                }
            ],
        }
    },
    15: {
        nr: 15,
        releaseDate: '13.05.2023',
        image: a3ds.O15,
        downloads: {
            imageDownloads: [
                {
                    fileName: "a3ds-015",
                    fileFormat: "png",
                    width: 1080,
                    height: 1080,
                    aspectRatio: "1:1",
                    downloadURL: "https://res.cloudinary.com/bdav-dev/image/upload/v1704293808/abstract-3d-series/015/a3ds-015.png"
                }
            ],
            wallpaperDownloads: [
                {
                    description: "Desktop UHD",
                    fileName: "a3ds-015-wallpaper-desktop-uhd",
                    fileFormat: "png",
                    width: 3840,
                    height: 2160,
                    aspectRatio: "16:9",
                    downloadURL: "https://res.cloudinary.com/bdav-dev/image/upload/v1705605598/abstract-3d-series/015/a3ds-015-wallpaper-desktop-uhd.png"
                }
            ],
        }
    },
    14: {
        nr: 14,
        releaseDate: '10.05.2023',
        image: a3ds.O14,
        downloads: {
            imageDownloads: [
                {
                    fileName: "a3ds-014",
                    fileFormat: "png",
                    width: 1080,
                    height: 1080,
                    aspectRatio: "1:1",
                    downloadURL: "https://res.cloudinary.com/bdav-dev/image/upload/v1704293802/abstract-3d-series/014/a3ds-014.png"
                }
            ]
        }
    },
    13: {
        nr: 13,
        releaseDate: '07.05.2023',
        image: a3ds.O13,
        downloads: {
            imageDownloads: [
                {
                    fileName: "a3ds-013",
                    fileFormat: "png",
                    width: 1080,
                    height: 1080,
                    aspectRatio: "1:1",
                    downloadURL: "https://res.cloudinary.com/bdav-dev/image/upload/v1704293797/abstract-3d-series/013/a3ds-013.png"
                }
            ]
        }
    },
    12: {
        nr: 12,
        releaseDate: '09.07.2022',
        image: a3ds.O12,
        downloads: {
            imageDownloads: [
                {
                    fileName: "a3ds-012",
                    fileFormat: "png",
                    width: 1000,
                    height: 1000,
                    aspectRatio: "1:1",
                    downloadURL: "https://res.cloudinary.com/bdav-dev/image/upload/v1704293788/abstract-3d-series/012/a3ds-012.png"
                }
            ]
        }
    },
    11: {
        nr: 11,
        releaseDate: '09.07.2022',
        image: a3ds.O11,
        downloads: {
            imageDownloads: [
                {
                    fileName: "a3ds-011",
                    fileFormat: "png",
                    width: 1000,
                    height: 1000,
                    aspectRatio: "1:1",
                    downloadURL: "https://res.cloudinary.com/bdav-dev/image/upload/v1704293769/abstract-3d-series/011/a3ds-011.png"
                }
            ]
        }
    },
    10: {
        nr: 10,
        releaseDate: '02.07.2022',
        image: a3ds.O10,
        downloads: {
            imageDownloads: [
                {
                    fileName: "a3ds-010",
                    fileFormat: "png",
                    width: 1000,
                    height: 1000,
                    aspectRatio: "1:1",
                    downloadURL: "https://res.cloudinary.com/bdav-dev/image/upload/v1704293761/abstract-3d-series/010/a3ds-010.png"
                }
            ],
            wallpaperDownloads: [
                {
                    description: "Desktop UHD",
                    fileName: "a3ds-010-wallpaper-desktop-uhd",
                    fileFormat: "png",
                    width: 3840,
                    height: 2160,
                    aspectRatio: "16:9",
                    downloadURL: "https://res.cloudinary.com/bdav-dev/image/upload/v1705605661/abstract-3d-series/010/a3ds-010-wallpaper-desktop-uhd.png"
                }
            ]
        }
    },
    9: {
        nr: 9,
        releaseDate: '02.07.2022',
        image: a3ds.OO9,
        downloads: {
            imageDownloads: [
                {
                    fileName: "a3ds-009",
                    fileFormat: "png",
                    width: 1000,
                    height: 1000,
                    aspectRatio: "1:1",
                    downloadURL: "https://res.cloudinary.com/bdav-dev/image/upload/v1704293756/abstract-3d-series/009/a3ds-009.png"
                }
            ]
        }
    },
    8: {
        nr: 8,
        releaseDate: '12.05.2022',
        image: a3ds.OO8,
        downloads: {
            imageDownloads: [
                {
                    description: "Light",
                    fileName: "a3ds-008-1",
                    fileFormat: "png",
                    width: 1000,
                    height: 1000,
                    aspectRatio: "1:1",
                    downloadURL: "https://res.cloudinary.com/bdav-dev/image/upload/v1704293750/abstract-3d-series/008/a3ds-008-1.png"
                },
                {
                    description: "Dark",
                    fileName: "a3ds-008-2",
                    fileFormat: "png",
                    width: 1000,
                    height: 1000,
                    aspectRatio: "1:1",
                    downloadURL: "https://res.cloudinary.com/bdav-dev/image/upload/v1704293752/abstract-3d-series/008/a3ds-008-2.png"
                },
                {
                    description: "White Glow",
                    fileName: "a3ds-008-3",
                    fileFormat: "png",
                    width: 1000,
                    height: 1000,
                    aspectRatio: "1:1",
                    downloadURL: "https://res.cloudinary.com/bdav-dev/image/upload/v1704293748/abstract-3d-series/008/a3ds-008-3.png"
                },
                {
                    description: "Cyan Glow",
                    fileName: "a3ds-008-4",
                    fileFormat: "png",
                    width: 1000,
                    height: 1000,
                    aspectRatio: "1:1",
                    downloadURL: "https://res.cloudinary.com/bdav-dev/image/upload/v1704293752/abstract-3d-series/008/a3ds-008-4.png"
                }
            ]
        }
    },
    7: {
        nr: 7,
        releaseDate: '20.03.2022',
        image: a3ds.OO7,
        description: "Bismut Landscape",
        downloads: {
            imageDownloads: [
                {
                    description: "#1",
                    fileName: "a3ds-007-01",
                    fileFormat: "png",
                    width: 1000,
                    height: 1000,
                    aspectRatio: "1:1",
                    downloadURL: "https://res.cloudinary.com/bdav-dev/image/upload/v1704293715/abstract-3d-series/007/a3ds-007-01.png"
                },
                {
                    description: "#2",
                    fileName: "a3ds-007-02",
                    fileFormat: "png",
                    width: 1000,
                    height: 1000,
                    aspectRatio: "1:1",
                    downloadURL: "https://res.cloudinary.com/bdav-dev/image/upload/v1704293714/abstract-3d-series/007/a3ds-007-02.png"
                },
                {
                    description: "#3",
                    fileName: "a3ds-007-03",
                    fileFormat: "png",
                    width: 1000,
                    height: 1000,
                    aspectRatio: "1:1",
                    downloadURL: "https://res.cloudinary.com/bdav-dev/image/upload/v1704293714/abstract-3d-series/007/a3ds-007-03.png"
                },
                {
                    description: "#4",
                    fileName: "a3ds-007-04",
                    fileFormat: "png",
                    width: 1000,
                    height: 1000,
                    aspectRatio: "1:1",
                    downloadURL: "https://res.cloudinary.com/bdav-dev/image/upload/v1704293715/abstract-3d-series/007/a3ds-007-04.png"
                },
                {
                    description: "#5",
                    fileName: "a3ds-007-05",
                    fileFormat: "png",
                    width: 1000,
                    height: 1000,
                    aspectRatio: "1:1",
                    downloadURL: "https://res.cloudinary.com/bdav-dev/image/upload/v1704293716/abstract-3d-series/007/a3ds-007-05.png"
                },
                {
                    description: "#6",
                    fileName: "a3ds-007-06",
                    fileFormat: "png",
                    width: 1000,
                    height: 1000,
                    aspectRatio: "1:1",
                    downloadURL: "https://res.cloudinary.com/bdav-dev/image/upload/v1704293716/abstract-3d-series/007/a3ds-007-06.png"
                },
                {
                    description: "#7",
                    fileName: "a3ds-007-07",
                    fileFormat: "png",
                    width: 1000,
                    height: 1000,
                    aspectRatio: "1:1",
                    downloadURL: "https://res.cloudinary.com/bdav-dev/image/upload/v1704293718/abstract-3d-series/007/a3ds-007-07.png"
                },
                {
                    description: "#8",
                    fileName: "a3ds-007-08",
                    fileFormat: "png",
                    width: 1000,
                    height: 1000,
                    aspectRatio: "1:1",
                    downloadURL: "https://res.cloudinary.com/bdav-dev/image/upload/v1704293721/abstract-3d-series/007/a3ds-007-08.png"
                },
                {
                    description: "#9",
                    fileName: "a3ds-007-09",
                    fileFormat: "png",
                    width: 1000,
                    height: 1000,
                    aspectRatio: "1:1",
                    downloadURL: "https://res.cloudinary.com/bdav-dev/image/upload/v1704293720/abstract-3d-series/007/a3ds-007-09.png"
                },
                {
                    description: "#10",
                    fileName: "a3ds-007-10",
                    fileFormat: "png",
                    width: 1000,
                    height: 1000,
                    aspectRatio: "1:1",
                    downloadURL: "https://res.cloudinary.com/bdav-dev/image/upload/v1704293720/abstract-3d-series/007/a3ds-007-10.png"
                },
            ]
        }
    },
    6: {
        nr: 6,
        releaseDate: '13.03.2022',
        image: a3ds.OO6,
        downloads: {
            imageDownloads: [
                {
                    description: "Yellow-Green",
                    fileName: "a3ds-006-1",
                    fileFormat: "png",
                    width: 1000,
                    height: 1000,
                    aspectRatio: "1:1",
                    downloadURL: "https://res.cloudinary.com/bdav-dev/image/upload/v1704293708/abstract-3d-series/006/a3ds-006-1.png"
                },
                {
                    description: "Blue-Purple",
                    fileName: "a3ds-006-2",
                    fileFormat: "png",
                    width: 1000,
                    height: 1000,
                    aspectRatio: "1:1",
                    downloadURL: "https://res.cloudinary.com/bdav-dev/image/upload/v1704293702/abstract-3d-series/006/a3ds-006-2.png"
                }
            ]
        }
    },
    5: {
        nr: 5,
        releaseDate: '13.03.2022',
        image: a3ds.OO5,
        downloads: {
            imageDownloads: [
                {
                    fileName: "a3ds-005",
                    fileFormat: "png",
                    width: 1000,
                    height: 1000,
                    aspectRatio: "1:1",
                    downloadURL: "https://res.cloudinary.com/bdav-dev/image/upload/v1704293691/abstract-3d-series/005/a3ds-005.png"
                }
            ]
        }
    },
    4: {
        nr: 4,
        releaseDate: '13.03.2022',
        image: a3ds.OO4,
        downloads: {
            imageDownloads: [
                {
                    fileName: "a3ds-004",
                    fileFormat: "png",
                    width: 1000,
                    height: 1000,
                    aspectRatio: "1:1",
                    downloadURL: "https://res.cloudinary.com/bdav-dev/image/upload/v1704293634/abstract-3d-series/004/a3ds-004.png"
                }
            ],
            wallpaperDownloads: [
                {
                    description: "Desktop WUXGA",
                    fileName: "a3ds-004-wallpaper-desktop-wuxga",
                    fileFormat: "png",
                    width: 1920,
                    height: 1200,
                    aspectRatio: "16:10",
                    downloadURL: "https://res.cloudinary.com/bdav-dev/image/upload/v1705605885/abstract-3d-series/004/a3ds-004-wallpaper-desktop-wuxga.png"
                }
            ]
        }
    },
    3: {
        nr: 3,
        releaseDate: '17.11.2021',
        image: a3ds.OO3,
        downloads: {
            imageDownloads: [
                {
                    fileName: "a3ds-003",
                    fileFormat: "png",
                    width: 1080,
                    height: 1080,
                    aspectRatio: "1:1",
                    downloadURL: "https://res.cloudinary.com/bdav-dev/image/upload/v1704293629/abstract-3d-series/003/a3ds-003.png"
                }
            ]
        }
    },
    2: {
        nr: 2,
        releaseDate: '09.07.2021',
        image: a3ds.OO2,
        downloads: {
            imageDownloads: [
                {
                    fileName: "a3ds-002",
                    fileFormat: "png",
                    width: 1080,
                    height: 1080,
                    aspectRatio: "1:1",
                    downloadURL: "https://res.cloudinary.com/bdav-dev/image/upload/v1704293608/abstract-3d-series/002/a3ds-002.png"
                }
            ]
        }
    },
    1: {
        nr: 1,
        releaseDate: '08.07.2021',
        image: a3ds.OO1,
        downloads: {
            imageDownloads: [
                {
                    fileName: "a3ds-001",
                    fileFormat: "png",
                    width: 1080,
                    height: 1080,
                    aspectRatio: "1:1",
                    downloadURL: "https://res.cloudinary.com/bdav-dev/image/upload/v1704293435/abstract-3d-series/001/a3ds-001.png"
                }
            ]
        }
    }
}
export const Abstract3DSeriesValues = Object.values(Abstract3DSeries).sort(Abstract3DSeriesSort);

