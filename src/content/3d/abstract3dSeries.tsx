import { StaticImageData } from "next/image"
import { a3ds } from "./abstract3dSeriesImages"
import React from "react";

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
    fileFormat: "png" | "exr"
    aspectRatio: string
    width: number
    height: number
    downloadURL: string
}

export const abstract3dSeriesImages: { [key: string]: Abstract3dSeriesImage } = {
    32: {
        nr: 32,
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