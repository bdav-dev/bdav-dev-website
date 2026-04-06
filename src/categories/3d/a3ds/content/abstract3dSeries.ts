import { CloudinaryImage } from "@/cloudinary";


export type Abstract3dImage = {
    nr: number,
    image: CloudinaryImage,
    description?: string,
    releaseDate: string,
    adventCalendar?: {
        nr: number,
        year: number
    }
    downloads?: {
        image?: Abstract3dImageDownload[],
        wallpaper?: Abstract3dImageDownload[]
    }
}

export type Abstract3dImageDownload = {
    description?: string,
    fileName: string,
    fileFormat: "png" | "jpg",
    width: number,
    height: number,
    downloadUrl: string
}

export const Abstract3dSeries: Record<number, Abstract3dImage> = {
    1: {
        nr: 1,
        image: {
            src: "/abstract-3d-series/001/a3ds-001.png",
            width: 1080,
            height: 1080
        },
        releaseDate: "08.07.2021",
        downloads: {
            image: [
                {
                    fileName: "a3ds-001",
                    fileFormat: "png",
                    width: 1080,
                    height: 1080,
                    downloadUrl: "https://res.cloudinary.com/bdav-dev/image/upload/abstract-3d-series/001/a3ds-001.png"
                }
            ]
        }
    },
    2: {
        nr: 2,
        image: {
            src: "/abstract-3d-series/002/a3ds-002.png",
            width: 1080,
            height: 1080
        },
        releaseDate: "09.07.2021",
        downloads: {
            image: [
                {
                    fileName: "a3ds-002",
                    fileFormat: "png",
                    width: 1080,
                    height: 1080,
                    downloadUrl: "https://res.cloudinary.com/bdav-dev/image/upload/abstract-3d-series/002/a3ds-002.png"
                }
            ]
        }
    },
    3: {
        nr: 3,
        image: {
            src: "/abstract-3d-series/003/a3ds-003.png",
            width: 1080,
            height: 1080
        },
        releaseDate: "17.11.2021",
        downloads: {
            image: [
                {
                    fileName: "a3ds-003",
                    fileFormat: "png",
                    width: 1080,
                    height: 1080,
                    downloadUrl: "https://res.cloudinary.com/bdav-dev/image/upload/abstract-3d-series/003/a3ds-003.png"
                }
            ]
        }
    },
    4: {
        nr: 4,
        image: {
            src: "/abstract-3d-series/004/a3ds-004.png",
            width: 1000,
            height: 1000
        },
        releaseDate: "13.03.2022",
        downloads: {
            image: [
                {
                    fileName: "a3ds-004",
                    fileFormat: "png",
                    width: 1000,
                    height: 1000,
                    downloadUrl: "https://res.cloudinary.com/bdav-dev/image/upload/abstract-3d-series/004/a3ds-004.png"
                }
            ],
            wallpaper: [
                {
                    description: "Desktop WUXGA",
                    fileName: "a3ds-004-wallpaper-desktop-wuxga",
                    fileFormat: "png",
                    width: 1920,
                    height: 1200,
                    downloadUrl: "https://res.cloudinary.com/bdav-dev/image/upload/abstract-3d-series/004/a3ds-004-wallpaper-desktop-wuxga.png"
                }
            ]
        }
    },
    5: {
        nr: 5,
        image: {
            src: "/abstract-3d-series/005/a3ds-005.png",
            width: 1000,
            height: 1000
        },
        releaseDate: "13.03.2022",
        downloads: {
            image: [
                {
                    fileName: "a3ds-005",
                    fileFormat: "png",
                    width: 1000,
                    height: 1000,
                    downloadUrl: "https://res.cloudinary.com/bdav-dev/image/upload/abstract-3d-series/005/a3ds-005.png"
                }
            ]
        }
    },
    6: {
        nr: 6,
        image: {
            src: "/abstract-3d-series/006/a3ds-006-1.png",
            width: 1000,
            height: 1000
        },
        releaseDate: "13.03.2022",
        downloads: {
            image: [
                {
                    description: "Yellow-Green",
                    fileName: "a3ds-006-1",
                    fileFormat: "png",
                    width: 1000,
                    height: 1000,
                    downloadUrl: "https://res.cloudinary.com/bdav-dev/image/upload/abstract-3d-series/006/a3ds-006-1.png"
                },
                {
                    description: "Blue-Purple",
                    fileName: "a3ds-006-2",
                    fileFormat: "png",
                    width: 1000,
                    height: 1000,
                    downloadUrl: "https://res.cloudinary.com/bdav-dev/image/upload/abstract-3d-series/006/a3ds-006-2.png"
                }
            ]
        }
    },
    7: {
        nr: 7,
        image: {
            src: "/abstract-3d-series/007/a3ds-007-01.png",
            width: 1000,
            height: 1000
        },
        description: "Bismut Landscape",
        releaseDate: "20.03.2022",
        downloads: {
            image: [
                {
                    description: "#1",
                    fileName: "a3ds-007-01",
                    fileFormat: "png",
                    width: 1000,
                    height: 1000,
                    downloadUrl: "https://res.cloudinary.com/bdav-dev/image/upload/abstract-3d-series/007/a3ds-007-01.png"
                },
                {
                    description: "#2",
                    fileName: "a3ds-007-02",
                    fileFormat: "png",
                    width: 1000,
                    height: 1000,
                    downloadUrl: "https://res.cloudinary.com/bdav-dev/image/upload/abstract-3d-series/007/a3ds-007-02.png"
                },
                {
                    description: "#3",
                    fileName: "a3ds-007-03",
                    fileFormat: "png",
                    width: 1000,
                    height: 1000,
                    downloadUrl: "https://res.cloudinary.com/bdav-dev/image/upload/abstract-3d-series/007/a3ds-007-03.png"
                },
                {
                    description: "#4",
                    fileName: "a3ds-007-04",
                    fileFormat: "png",
                    width: 1000,
                    height: 1000,
                    downloadUrl: "https://res.cloudinary.com/bdav-dev/image/upload/abstract-3d-series/007/a3ds-007-04.png"
                },
                {
                    description: "#5",
                    fileName: "a3ds-007-05",
                    fileFormat: "png",
                    width: 1000,
                    height: 1000,
                    downloadUrl: "https://res.cloudinary.com/bdav-dev/image/upload/abstract-3d-series/007/a3ds-007-05.png"
                },
                {
                    description: "#6",
                    fileName: "a3ds-007-06",
                    fileFormat: "png",
                    width: 1000,
                    height: 1000,
                    downloadUrl: "https://res.cloudinary.com/bdav-dev/image/upload/abstract-3d-series/007/a3ds-007-06.png"
                },
                {
                    description: "#7",
                    fileName: "a3ds-007-07",
                    fileFormat: "png",
                    width: 1000,
                    height: 1000,
                    downloadUrl: "https://res.cloudinary.com/bdav-dev/image/upload/abstract-3d-series/007/a3ds-007-07.png"
                },
                {
                    description: "#8",
                    fileName: "a3ds-007-08",
                    fileFormat: "png",
                    width: 1000,
                    height: 1000,
                    downloadUrl: "https://res.cloudinary.com/bdav-dev/image/upload/abstract-3d-series/007/a3ds-007-08.png"
                },
                {
                    description: "#9",
                    fileName: "a3ds-007-09",
                    fileFormat: "png",
                    width: 1000,
                    height: 1000,
                    downloadUrl: "https://res.cloudinary.com/bdav-dev/image/upload/abstract-3d-series/007/a3ds-007-09.png"
                },
                {
                    description: "#10",
                    fileName: "a3ds-007-10",
                    fileFormat: "png",
                    width: 1000,
                    height: 1000,
                    downloadUrl: "https://res.cloudinary.com/bdav-dev/image/upload/abstract-3d-series/007/a3ds-007-10.png"
                }
            ]
        }
    },
    8: {
        nr: 8,
        image: {
            src: "/abstract-3d-series/008/a3ds-008-1.png",
            width: 1000,
            height: 1000
        },
        releaseDate: "12.05.2022",
        downloads: {
            image: [
                {
                    description: "Light",
                    fileName: "a3ds-008-1",
                    fileFormat: "png",
                    width: 1000,
                    height: 1000,
                    downloadUrl: "https://res.cloudinary.com/bdav-dev/image/upload/abstract-3d-series/008/a3ds-008-1.png"
                },
                {
                    description: "Dark",
                    fileName: "a3ds-008-2",
                    fileFormat: "png",
                    width: 1000,
                    height: 1000,
                    downloadUrl: "https://res.cloudinary.com/bdav-dev/image/upload/abstract-3d-series/008/a3ds-008-2.png"
                },
                {
                    description: "White Glow",
                    fileName: "a3ds-008-3",
                    fileFormat: "png",
                    width: 1000,
                    height: 1000,
                    downloadUrl: "https://res.cloudinary.com/bdav-dev/image/upload/abstract-3d-series/008/a3ds-008-3.png"
                },
                {
                    description: "Cyan Glow",
                    fileName: "a3ds-008-4",
                    fileFormat: "png",
                    width: 1000,
                    height: 1000,
                    downloadUrl: "https://res.cloudinary.com/bdav-dev/image/upload/abstract-3d-series/008/a3ds-008-4.png"
                }
            ]
        }
    },
    9: {
        nr: 9,
        image: {
            src: "/abstract-3d-series/009/a3ds-009.png",
            width: 1000,
            height: 1000
        },
        releaseDate: "02.07.2022",
        downloads: {
            image: [
                {
                    fileName: "a3ds-009",
                    fileFormat: "png",
                    width: 1000,
                    height: 1000,
                    downloadUrl: "https://res.cloudinary.com/bdav-dev/image/upload/abstract-3d-series/009/a3ds-009.png"
                }
            ]
        }
    },
    10: {
        nr: 10,
        image: {
            src: "/abstract-3d-series/010/a3ds-010.png",
            width: 1000,
            height: 1000
        },
        releaseDate: "02.07.2022",
        downloads: {
            image: [
                {
                    fileName: "a3ds-010",
                    fileFormat: "png",
                    width: 1000,
                    height: 1000,
                    downloadUrl: "https://res.cloudinary.com/bdav-dev/image/upload/abstract-3d-series/010/a3ds-010.png"
                }
            ],
            wallpaper: [
                {
                    description: "Desktop UHD",
                    fileName: "a3ds-010-wallpaper-desktop-uhd",
                    fileFormat: "png",
                    width: 3840,
                    height: 2160,
                    downloadUrl: "https://res.cloudinary.com/bdav-dev/image/upload/abstract-3d-series/010/a3ds-010-wallpaper-desktop-uhd.png"
                }
            ]
        }
    },
    11: {
        nr: 11,
        image: {
            src: "/abstract-3d-series/011/a3ds-011.png",
            width: 1000,
            height: 1000
        },
        releaseDate: "09.07.2022",
        downloads: {
            image: [
                {
                    fileName: "a3ds-011",
                    fileFormat: "png",
                    width: 1000,
                    height: 1000,
                    downloadUrl: "https://res.cloudinary.com/bdav-dev/image/upload/abstract-3d-series/011/a3ds-011.png"
                }
            ]
        }
    },
    12: {
        nr: 12,
        image: {
            src: "/abstract-3d-series/012/a3ds-012.png",
            width: 1000,
            height: 1000
        },
        releaseDate: "09.07.2022",
        downloads: {
            image: [
                {
                    fileName: "a3ds-012",
                    fileFormat: "png",
                    width: 1000,
                    height: 1000,
                    downloadUrl: "https://res.cloudinary.com/bdav-dev/image/upload/abstract-3d-series/012/a3ds-012.png"
                }
            ]
        }
    },
    13: {
        nr: 13,
        image: {
            src: "/abstract-3d-series/013/a3ds-013.png",
            width: 1080,
            height: 1080
        },
        releaseDate: "07.05.2023",
        downloads: {
            image: [
                {
                    fileName: "a3ds-013",
                    fileFormat: "png",
                    width: 1080,
                    height: 1080,
                    downloadUrl: "https://res.cloudinary.com/bdav-dev/image/upload/abstract-3d-series/013/a3ds-013.png"
                }
            ]
        }
    },
    14: {
        nr: 14,
        image: {
            src: "/abstract-3d-series/014/a3ds-014.png",
            width: 1080,
            height: 1080
        },
        releaseDate: "10.05.2023",
        downloads: {
            image: [
                {
                    fileName: "a3ds-014",
                    fileFormat: "png",
                    width: 1080,
                    height: 1080,
                    downloadUrl: "https://res.cloudinary.com/bdav-dev/image/upload/abstract-3d-series/014/a3ds-014.png"
                }
            ]
        }
    },
    15: {
        nr: 15,
        image: {
            src: "/abstract-3d-series/015/a3ds-015.png",
            width: 1080,
            height: 1080
        },
        releaseDate: "13.05.2023",
        downloads: {
            image: [
                {
                    fileName: "a3ds-015",
                    fileFormat: "png",
                    width: 1080,
                    height: 1080,
                    downloadUrl: "https://res.cloudinary.com/bdav-dev/image/upload/abstract-3d-series/015/a3ds-015.png"
                }
            ],
            wallpaper: [
                {
                    description: "Desktop UHD",
                    fileName: "a3ds-015-wallpaper-desktop-uhd",
                    fileFormat: "png",
                    width: 3840,
                    height: 2160,
                    downloadUrl: "https://res.cloudinary.com/bdav-dev/image/upload/abstract-3d-series/015/a3ds-015-wallpaper-desktop-uhd.png"
                }
            ]
        }
    },
    16: {
        nr: 16,
        image: {
            src: "/abstract-3d-series/016/a3ds-016.png",
            width: 1000,
            height: 1000
        },
        releaseDate: "04.09.2023",
        downloads: {
            image: [
                {
                    fileName: "a3ds-016",
                    fileFormat: "png",
                    width: 1000,
                    height: 1000,
                    downloadUrl: "https://res.cloudinary.com/bdav-dev/image/upload/abstract-3d-series/016/a3ds-016.png"
                }
            ],
            wallpaper: [
                {
                    description: "Desktop UHD",
                    fileName: "a3ds-016-wallpaper-desktop-uhd",
                    fileFormat: "png",
                    width: 3840,
                    height: 2160,
                    downloadUrl: "https://res.cloudinary.com/bdav-dev/image/upload/abstract-3d-series/016/a3ds-016-wallpaper-desktop-uhd.png"
                }
            ]
        }
    },
    17: {
        nr: 17,
        image: {
            src: "/abstract-3d-series/017/a3ds-017.png",
            width: 1000,
            height: 1000
        },
        releaseDate: "10.09.2023",
        downloads: {
            image: [
                {
                    fileName: "a3ds-017",
                    fileFormat: "png",
                    width: 1000,
                    height: 1000,
                    downloadUrl: "https://res.cloudinary.com/bdav-dev/image/upload/abstract-3d-series/017/a3ds-017.png"
                }
            ]
        }
    },
    18: {
        nr: 18,
        image: {
            src: "/abstract-3d-series/018/a3ds-018.png",
            width: 1000,
            height: 1000
        },
        releaseDate: "16.09.2023",
        downloads: {
            image: [
                {
                    fileName: "a3ds-018",
                    fileFormat: "png",
                    width: 1000,
                    height: 1000,
                    downloadUrl: "https://res.cloudinary.com/bdav-dev/image/upload/abstract-3d-series/018/a3ds-018.png"
                }
            ],
            wallpaper: [
                {
                    description: "Desktop UHD",
                    fileName: "a3ds-018-wallpaper-desktop-uhd",
                    fileFormat: "png",
                    width: 3840,
                    height: 2160,
                    downloadUrl: "https://res.cloudinary.com/bdav-dev/image/upload/abstract-3d-series/018/a3ds-018-wallpaper-desktop-uhd.png"
                }
            ]
        }
    },
    19: {
        nr: 19,
        image: {
            src: "/abstract-3d-series/019/a3ds-019.png",
            width: 1080,
            height: 1080
        },
        releaseDate: "22.10.2023",
        downloads: {
            image: [
                {
                    fileName: "a3ds-019",
                    fileFormat: "png",
                    width: 1080,
                    height: 1080,
                    downloadUrl: "https://res.cloudinary.com/bdav-dev/image/upload/abstract-3d-series/019/a3ds-019.png"
                }
            ],
            wallpaper: [
                {
                    description: "Desktop UHD",
                    fileName: "a3ds-019-wallpaper-desktop-uhd",
                    fileFormat: "png",
                    width: 3840,
                    height: 2160,
                    downloadUrl: "https://res.cloudinary.com/bdav-dev/image/upload/abstract-3d-series/019/a3ds-019-wallpaper-desktop-uhd.png"
                }
            ]
        }
    },
    20: {
        nr: 20,
        image: {
            src: "/abstract-3d-series/020/a3ds-020.png",
            width: 1080,
            height: 1080
        },
        releaseDate: "25.10.2023",
        downloads: {
            image: [
                {
                    fileName: "a3ds-020",
                    fileFormat: "png",
                    width: 1080,
                    height: 1080,
                    downloadUrl: "https://res.cloudinary.com/bdav-dev/image/upload/abstract-3d-series/020/a3ds-020.png"
                }
            ],
            wallpaper: [
                {
                    description: "Desktop UHD",
                    fileName: "a3ds-020-wallpaper-desktop-uhd",
                    fileFormat: "png",
                    width: 3840,
                    height: 2160,
                    downloadUrl: "https://res.cloudinary.com/bdav-dev/image/upload/abstract-3d-series/020/a3ds-020-wallpaper-desktop-uhd.png"
                }
            ]
        }
    },
    21: {
        nr: 21,
        image: {
            src: "/abstract-3d-series/021/a3ds-021.png",
            width: 1080,
            height: 1080
        },
        releaseDate: "28.01.2024",
        downloads: {
            image: [
                {
                    fileName: "a3ds-021",
                    fileFormat: "png",
                    width: 1080,
                    height: 1080,
                    downloadUrl: "https://res.cloudinary.com/bdav-dev/image/upload/abstract-3d-series/021/a3ds-021.png"
                }
            ]
        }
    },
    22: {
        nr: 22,
        image: {
            src: "/abstract-3d-series/022/a3ds-022.png",
            width: 1080,
            height: 1080
        },
        releaseDate: "10.02.2024",
        downloads: {
            image: [
                {
                    fileName: "a3ds-022",
                    fileFormat: "png",
                    width: 1080,
                    height: 1080,
                    downloadUrl: "https://res.cloudinary.com/bdav-dev/image/upload/abstract-3d-series/022/a3ds-022.png"
                }
            ]
        }
    },
    23: {
        nr: 23,
        image: {
            src: "/abstract-3d-series/023/a3ds-023.png",
            width: 1080,
            height: 1080
        },
        releaseDate: "23.02.2024",
        downloads: {
            image: [
                {
                    fileName: "a3ds-023",
                    fileFormat: "png",
                    width: 1080,
                    height: 1080,
                    downloadUrl: "https://res.cloudinary.com/bdav-dev/image/upload/abstract-3d-series/023/a3ds-023.png"
                }
            ],
            wallpaper: [
                {
                    description: "Desktop UHD",
                    fileName: "a3ds-023-wallpaper-desktop-uhd",
                    fileFormat: "png",
                    width: 3840,
                    height: 2160,
                    downloadUrl: "https://res.cloudinary.com/bdav-dev/image/upload/abstract-3d-series/023/a3ds-023-wallpaper-desktop-uhd.png"
                }
            ]
        }
    },
    24: {
        nr: 24,
        image: {
            src: "/abstract-3d-series/024/a3ds-024-green.png",
            width: 1080,
            height: 1080
        },
        releaseDate: "10.03.2024",
        downloads: {
            image: [
                {
                    description: "Green",
                    fileName: "a3ds-024-green",
                    fileFormat: "png",
                    width: 1080,
                    height: 1080,
                    downloadUrl: "https://res.cloudinary.com/bdav-dev/image/upload/abstract-3d-series/024/a3ds-024-green.png"
                },
                {
                    description: "Pink",
                    fileName: "a3ds-024-pink",
                    fileFormat: "png",
                    width: 1080,
                    height: 1080,
                    downloadUrl: "https://res.cloudinary.com/bdav-dev/image/upload/abstract-3d-series/024/a3ds-024-pink.png"
                }
            ]
        }
    },
    25: {
        nr: 25,
        image: {
            src: "/abstract-3d-series/025/a3ds-025.png",
            width: 1080,
            height: 1080
        },
        releaseDate: "20.04.2024",
        downloads: {
            image: [
                {
                    fileName: "a3ds-025",
                    fileFormat: "png",
                    width: 1080,
                    height: 1080,
                    downloadUrl: "https://res.cloudinary.com/bdav-dev/image/upload/abstract-3d-series/025/a3ds-025.png"
                }
            ]
        }
    },
    26: {
        nr: 26,
        image: {
            src: "/abstract-3d-series/026/a3ds-026.png",
            width: 1080,
            height: 1080
        },
        releaseDate: "04.06.2024",
        downloads: {
            image: [
                {
                    fileName: "a3ds-026",
                    fileFormat: "png",
                    width: 1080,
                    height: 1080,
                    downloadUrl: "https://res.cloudinary.com/bdav-dev/image/upload/abstract-3d-series/026/a3ds-026.png"
                }
            ],
            wallpaper: [
                {
                    description: "Desktop UHD",
                    fileName: "a3ds-026-wallpaper-desktop-uhd",
                    fileFormat: "png",
                    width: 3840,
                    height: 2160,
                    downloadUrl: "https://res.cloudinary.com/bdav-dev/image/upload/abstract-3d-series/026/a3ds-026-wallpaper-desktop-uhd.png"
                }
            ]
        }
    },
    27: {
        nr: 27,
        image: {
            src: "/abstract-3d-series/027/a3ds-027.png",
            width: 1000,
            height: 1000
        },
        releaseDate: "26.08.2024",
        downloads: {
            image: [
                {
                    fileName: "a3ds-027",
                    fileFormat: "png",
                    width: 1000,
                    height: 1000,
                    downloadUrl: "https://res.cloudinary.com/bdav-dev/image/upload/abstract-3d-series/027/a3ds-027.png"
                }
            ]
        }
    },
    28: {
        nr: 28,
        image: {
            src: "/abstract-3d-series/028/a3ds-028.png",
            width: 1080,
            height: 1080
        },
        releaseDate: "27.08.2024",
        downloads: {
            image: [
                {
                    fileName: "a3ds-028",
                    fileFormat: "png",
                    width: 1080,
                    height: 1080,
                    downloadUrl: "https://res.cloudinary.com/bdav-dev/image/upload/abstract-3d-series/028/a3ds-028.png"
                }
            ]
        }
    },
    29: {
        nr: 29,
        image: {
            src: "/abstract-3d-series/029/a3ds-029.png",
            width: 1080,
            height: 1080
        },
        releaseDate: "1.12.2024",
        adventCalendar: {
            nr: 1,
            year: 2024
        },
        downloads: {
            image: [
                {
                    fileName: "a3ds-029",
                    fileFormat: "png",
                    width: 1080,
                    height: 1080,
                    downloadUrl: "https://res.cloudinary.com/bdav-dev/image/upload/abstract-3d-series/029/a3ds-029.png"
                }
            ]
        }
    },
    30: {
        nr: 30,
        image: {
            src: "/abstract-3d-series/030/a3ds-030.png",
            width: 1080,
            height: 1080
        },
        releaseDate: "2.12.2024",
        adventCalendar: {
            nr: 2,
            year: 2024
        },
        downloads: {
            image: [
                {
                    fileName: "a3ds-030",
                    fileFormat: "png",
                    width: 1080,
                    height: 1080,
                    downloadUrl: "https://res.cloudinary.com/bdav-dev/image/upload/abstract-3d-series/030/a3ds-030.png"
                }
            ]
        }
    },
    31: {
        nr: 31,
        image: {
            src: "/abstract-3d-series/031/a3ds-031.png",
            width: 1080,
            height: 1080
        },
        releaseDate: "3.12.2024",
        adventCalendar: {
            nr: 3,
            year: 2024
        },
        downloads: {
            image: [
                {
                    fileName: "a3ds-031",
                    fileFormat: "png",
                    width: 1080,
                    height: 1080,
                    downloadUrl: "https://res.cloudinary.com/bdav-dev/image/upload/abstract-3d-series/031/a3ds-031.png"
                }
            ]
        }
    },
    32: {
        nr: 32,
        image: {
            src: "/abstract-3d-series/032/a3ds-032.png",
            width: 1080,
            height: 1080
        },
        releaseDate: "4.12.2024",
        adventCalendar: {
            nr: 4,
            year: 2024
        },
        downloads: {
            image: [
                {
                    fileName: "a3ds-032",
                    fileFormat: "png",
                    width: 1080,
                    height: 1080,
                    downloadUrl: "https://res.cloudinary.com/bdav-dev/image/upload/abstract-3d-series/032/a3ds-032.png"
                }
            ]
        }
    },
    33: {
        nr: 33,
        image: {
            src: "/abstract-3d-series/033/a3ds-033.png",
            width: 1080,
            height: 1080
        },
        releaseDate: "5.12.2024",
        adventCalendar: {
            nr: 5,
            year: 2024
        },
        downloads: {
            image: [
                {
                    fileName: "a3ds-033",
                    fileFormat: "png",
                    width: 1080,
                    height: 1080,
                    downloadUrl: "https://res.cloudinary.com/bdav-dev/image/upload/abstract-3d-series/033/a3ds-033.png"
                }
            ]
        }
    },
    34: {
        nr: 34,
        image: {
            src: "/abstract-3d-series/034/a3ds-034.png",
            width: 1080,
            height: 1080
        },
        releaseDate: "6.12.2024",
        adventCalendar: {
            nr: 6,
            year: 2024
        },
        downloads: {
            image: [
                {
                    fileName: "a3ds-034",
                    fileFormat: "png",
                    width: 1080,
                    height: 1080,
                    downloadUrl: "https://res.cloudinary.com/bdav-dev/image/upload/abstract-3d-series/034/a3ds-034.png"
                }
            ]
        }
    },
    35: {
        nr: 35,
        image: {
            src: "/abstract-3d-series/035/a3ds-035.png",
            width: 1080,
            height: 1080
        },
        releaseDate: "7.12.2024",
        adventCalendar: {
            nr: 7,
            year: 2024
        },
        downloads: {
            image: [
                {
                    fileName: "a3ds-035",
                    fileFormat: "png",
                    width: 1080,
                    height: 1080,
                    downloadUrl: "https://res.cloudinary.com/bdav-dev/image/upload/abstract-3d-series/035/a3ds-035.png"
                }
            ]
        }
    },
    36: {
        nr: 36,
        image: {
            src: "/abstract-3d-series/036/a3ds-036.png",
            width: 1080,
            height: 1080
        },
        releaseDate: "8.12.2024",
        adventCalendar: {
            nr: 8,
            year: 2024
        },
        downloads: {
            image: [
                {
                    fileName: "a3ds-036",
                    fileFormat: "png",
                    width: 1080,
                    height: 1080,
                    downloadUrl: "https://res.cloudinary.com/bdav-dev/image/upload/abstract-3d-series/036/a3ds-036.png"
                }
            ],
            wallpaper: [
                {
                    description: "Desktop UHD",
                    fileName: "a3ds-036-wallpaper-desktop-uhd",
                    fileFormat: "png",
                    width: 3840,
                    height: 2160,
                    downloadUrl: "https://res.cloudinary.com/bdav-dev/image/upload/abstract-3d-series/036/a3ds-036-wallpaper-desktop-uhd.png"
                }
            ]
        }
    },
    37: {
        nr: 37,
        image: {
            src: "/abstract-3d-series/037/a3ds-037.png",
            width: 1080,
            height: 1080
        },
        releaseDate: "9.12.2024",
        adventCalendar: {
            nr: 9,
            year: 2024
        },
        downloads: {
            image: [
                {
                    fileName: "a3ds-037",
                    fileFormat: "png",
                    width: 1080,
                    height: 1080,
                    downloadUrl: "https://res.cloudinary.com/bdav-dev/image/upload/abstract-3d-series/037/a3ds-037.png"
                }
            ]
        }
    },
    38: {
        nr: 38,
        image: {
            src: "/abstract-3d-series/038/a3ds-038.png",
            width: 1080,
            height: 1080
        },
        releaseDate: "10.12.2024",
        adventCalendar: {
            nr: 10,
            year: 2024
        },
        downloads: {
            image: [
                {
                    fileName: "a3ds-038",
                    fileFormat: "png",
                    width: 1080,
                    height: 1080,
                    downloadUrl: "https://res.cloudinary.com/bdav-dev/image/upload/abstract-3d-series/038/a3ds-038.png"
                }
            ]
        }
    },
    39: {
        nr: 39,
        image: {
            src: "/abstract-3d-series/039/a3ds-039.png",
            width: 1080,
            height: 1080
        },
        releaseDate: "11.12.2024",
        adventCalendar: {
            nr: 11,
            year: 2024
        },
        downloads: {
            image: [
                {
                    fileName: "a3ds-039",
                    fileFormat: "png",
                    width: 1080,
                    height: 1080,
                    downloadUrl: "https://res.cloudinary.com/bdav-dev/image/upload/abstract-3d-series/039/a3ds-039.png"
                }
            ]
        }
    },
    40: {
        nr: 40,
        image: {
            src: "/abstract-3d-series/040/a3ds-040.png",
            width: 1080,
            height: 1080
        },
        releaseDate: "12.12.2024",
        adventCalendar: {
            nr: 12,
            year: 2024
        },
        downloads: {
            image: [
                {
                    fileName: "a3ds-040",
                    fileFormat: "png",
                    width: 1080,
                    height: 1080,
                    downloadUrl: "https://res.cloudinary.com/bdav-dev/image/upload/abstract-3d-series/040/a3ds-040.png"
                }
            ]
        }
    },
    41: {
        nr: 41,
        image: {
            src: "/abstract-3d-series/041/a3ds-041.png",
            width: 1080,
            height: 1080
        },
        releaseDate: "13.12.2024",
        adventCalendar: {
            nr: 13,
            year: 2024
        },
        downloads: {
            image: [
                {
                    fileName: "a3ds-041",
                    fileFormat: "png",
                    width: 1080,
                    height: 1080,
                    downloadUrl: "https://res.cloudinary.com/bdav-dev/image/upload/abstract-3d-series/041/a3ds-041.png"
                }
            ]
        }
    },
    42: {
        nr: 42,
        image: {
            src: "/abstract-3d-series/042/a3ds-042.png",
            width: 1080,
            height: 1080
        },
        releaseDate: "14.12.2024",
        adventCalendar: {
            nr: 14,
            year: 2024
        },
        downloads: {
            image: [
                {
                    fileName: "a3ds-042",
                    fileFormat: "png",
                    width: 1080,
                    height: 1080,
                    downloadUrl: "https://res.cloudinary.com/bdav-dev/image/upload/abstract-3d-series/042/a3ds-042.png"
                }
            ]
        }
    },
    43: {
        nr: 43,
        image: {
            src: "/abstract-3d-series/043/a3ds-043.png",
            width: 1080,
            height: 1080
        },
        releaseDate: "15.12.2024",
        adventCalendar: {
            nr: 15,
            year: 2024
        },
        downloads: {
            image: [
                {
                    fileName: "a3ds-043",
                    fileFormat: "png",
                    width: 1080,
                    height: 1080,
                    downloadUrl: "https://res.cloudinary.com/bdav-dev/image/upload/abstract-3d-series/043/a3ds-043.png"
                }
            ]
        }
    },
    44: {
        nr: 44,
        image: {
            src: "/abstract-3d-series/044/a3ds-044.png",
            width: 1080,
            height: 1080
        },
        releaseDate: "16.12.2024",
        adventCalendar: {
            nr: 16,
            year: 2024
        },
        downloads: {
            image: [
                {
                    fileName: "a3ds-044",
                    fileFormat: "png",
                    width: 1080,
                    height: 1080,
                    downloadUrl: "https://res.cloudinary.com/bdav-dev/image/upload/abstract-3d-series/044/a3ds-044.png"
                }
            ]
        }
    },
    45: {
        nr: 45,
        image: {
            src: "/abstract-3d-series/045/a3ds-045.png",
            width: 1080,
            height: 1080
        },
        releaseDate: "17.12.2024",
        adventCalendar: {
            nr: 17,
            year: 2024
        },
        downloads: {
            image: [
                {
                    fileName: "a3ds-045",
                    fileFormat: "png",
                    width: 1080,
                    height: 1080,
                    downloadUrl: "https://res.cloudinary.com/bdav-dev/image/upload/abstract-3d-series/045/a3ds-045.png"
                }
            ]
        }
    },
    46: {
        nr: 46,
        image: {
            src: "/abstract-3d-series/046/a3ds-046.png",
            width: 1080,
            height: 1080
        },
        releaseDate: "18.12.2024",
        adventCalendar: {
            nr: 18,
            year: 2024
        },
        downloads: {
            image: [
                {
                    fileName: "a3ds-046",
                    fileFormat: "png",
                    width: 1080,
                    height: 1080,
                    downloadUrl: "https://res.cloudinary.com/bdav-dev/image/upload/abstract-3d-series/046/a3ds-046.png"
                }
            ]
        }
    },
    47: {
        nr: 47,
        image: {
            src: "/abstract-3d-series/047/a3ds-047.png",
            width: 1080,
            height: 1080
        },
        releaseDate: "19.12.2024",
        adventCalendar: {
            nr: 19,
            year: 2024
        },
        downloads: {
            image: [
                {
                    fileName: "a3ds-047",
                    fileFormat: "png",
                    width: 1080,
                    height: 1080,
                    downloadUrl: "https://res.cloudinary.com/bdav-dev/image/upload/abstract-3d-series/047/a3ds-047.png"
                }
            ]
        }
    },
    48: {
        nr: 48,
        image: {
            src: "/abstract-3d-series/048/a3ds-048.png",
            width: 1080,
            height: 1080
        },
        releaseDate: "20.12.2024",
        adventCalendar: {
            nr: 20,
            year: 2024
        },
        downloads: {
            image: [
                {
                    fileName: "a3ds-048",
                    fileFormat: "png",
                    width: 1080,
                    height: 1080,
                    downloadUrl: "https://res.cloudinary.com/bdav-dev/image/upload/abstract-3d-series/048/a3ds-048.png"
                }
            ]
        }
    },
    49: {
        nr: 49,
        image: {
            src: "/abstract-3d-series/049/a3ds-049.png",
            width: 1080,
            height: 1080
        },
        releaseDate: "21.12.2024",
        adventCalendar: {
            nr: 21,
            year: 2024
        },
        downloads: {
            image: [
                {
                    fileName: "a3ds-049",
                    fileFormat: "png",
                    width: 1080,
                    height: 1080,
                    downloadUrl: "https://res.cloudinary.com/bdav-dev/image/upload/abstract-3d-series/049/a3ds-049.png"
                }
            ]
        }
    },
    50: {
        nr: 50,
        image: {
            src: "/abstract-3d-series/050/a3ds-050.png",
            width: 1080,
            height: 1080
        },
        releaseDate: "22.12.2024",
        adventCalendar: {
            nr: 22,
            year: 2024
        },
        downloads: {
            image: [
                {
                    fileName: "a3ds-050",
                    fileFormat: "png",
                    width: 1080,
                    height: 1080,
                    downloadUrl: "https://res.cloudinary.com/bdav-dev/image/upload/abstract-3d-series/050/a3ds-050.png"
                }
            ]
        }
    },
    51: {
        nr: 51,
        image: {
            src: "/abstract-3d-series/051/a3ds-051.png",
            width: 1080,
            height: 1080
        },
        releaseDate: "23.12.2024",
        adventCalendar: {
            nr: 23,
            year: 2024
        },
        downloads: {
            image: [
                {
                    fileName: "a3ds-051",
                    fileFormat: "png",
                    width: 1080,
                    height: 1080,
                    downloadUrl: "https://res.cloudinary.com/bdav-dev/image/upload/abstract-3d-series/051/a3ds-051.png"
                }
            ]
        }
    },
    52: {
        nr: 52,
        image: {
            src: "/abstract-3d-series/052/a3ds-052.png",
            width: 1080,
            height: 1080
        },
        releaseDate: "24.12.2024",
        adventCalendar: {
            nr: 24,
            year: 2024
        },
        downloads: {
            image: [
                {
                    fileName: "a3ds-052",
                    fileFormat: "png",
                    width: 1080,
                    height: 1080,
                    downloadUrl: "https://res.cloudinary.com/bdav-dev/image/upload/abstract-3d-series/052/a3ds-052.png"
                }
            ]
        }
    },
    53: {
        nr: 53,
        image: {
            src: "/abstract-3d-series/053/a3ds-053.png",
            width: 1080,
            height: 1080
        },
        releaseDate: "03.02.2025",
        downloads: {
            image: [
                {
                    fileName: "a3ds-053",
                    fileFormat: "png",
                    width: 1080,
                    height: 1080,
                    downloadUrl: "https://res.cloudinary.com/bdav-dev/image/upload/abstract-3d-series/053/a3ds-053.png"
                }
            ],
            wallpaper: [
                {
                    description: "Desktop UHD",
                    fileName: "a3ds-053-wallpaper-desktop-uhd",
                    fileFormat: "jpg",
                    width: 3840,
                    height: 2160,
                    downloadUrl: "https://res.cloudinary.com/bdav-dev/image/upload/abstract-3d-series/053/a3ds-053-wallpaper-desktop-uhd.jpg"
                }
            ]
        }
    },
    54: {
        nr: 54,
        image: {
            src: "/abstract-3d-series/054/a3ds-054.png",
            width: 1080,
            height: 1080
        },
        releaseDate: "01.05.2025",
        downloads: {
            image: [
                {
                    fileName: "a3ds-054",
                    fileFormat: "png",
                    width: 1080,
                    height: 1080,
                    downloadUrl: "https://res.cloudinary.com/bdav-dev/image/upload/abstract-3d-series/054/a3ds-054.png"
                }
            ]
        }
    },
    55: {
        nr: 55,
        image: {
            src: "/abstract-3d-series/055/a3ds-055.png",
            width: 1080,
            height: 1080
        },
        releaseDate: "18.05.2025",
        downloads: {
            image: [
                {
                    fileName: "a3ds-055",
                    fileFormat: "png",
                    width: 1080,
                    height: 1080,
                    downloadUrl: "https://res.cloudinary.com/bdav-dev/image/upload/abstract-3d-series/055/a3ds-055.png"
                }
            ]
        }
    },
    56: {
        nr: 56,
        releaseDate: '22.06.2025',
        image: {
            src: '/abstract-3d-series/056/a3ds-056.png',
            width: 1080,
            height: 1080
        },
        downloads: {
            image: [
                {
                    fileName: "a3ds-056",
                    fileFormat: "png",
                    width: 1080,
                    height: 1080,
                    downloadUrl: "https://res.cloudinary.com/bdav-dev/image/upload/abstract-3d-series/056/a3ds-056.png"
                }
            ]
        }
    },
    57: {
        nr: 57,
        releaseDate: '06.07.2025',
        image: {
            src: '/abstract-3d-series/057/a3ds-057-colorful.png',
            width: 1080,
            height: 1080
        },
        downloads: {
            image: [
                {
                    fileName: "a3ds-057-colorful",
                    fileFormat: "png",
                    width: 1080,
                    height: 1080,
                    downloadUrl: "https://res.cloudinary.com/bdav-dev/image/upload/abstract-3d-series/057/a3ds-057-colorful.png"
                },
                {
                    fileName: "a3ds-057-clear",
                    fileFormat: "png",
                    width: 1080,
                    height: 1080,
                    downloadUrl: "https://res.cloudinary.com/bdav-dev/image/upload/abstract-3d-series/057/a3ds-057-clear.png"
                }
            ]
        }
    },
    58: {
        nr: 58,
        image: {
            src: '/abstract-3d-series/058/a3ds-058-pink.png',
            width: 1080,
            height: 1080
        },
        releaseDate: '23.08.2025',
        downloads: {
            image: [
                {
                    description: "Pink",
                    fileName: "a3ds-058-pink",
                    fileFormat: "png",
                    width: 1080,
                    height: 1080,
                    downloadUrl: "https://res.cloudinary.com/bdav-dev/image/upload/abstract-3d-series/058/a3ds-058-pink.png"
                },
                {
                    description: "Lila",
                    fileName: "a3ds-058-purple",
                    fileFormat: "png",
                    width: 1080,
                    height: 1080,
                    downloadUrl: "https://res.cloudinary.com/bdav-dev/image/upload/abstract-3d-series/058/a3ds-058-purple.png"
                },
                {
                    description: "Blau",
                    fileName: "a3ds-058-blue",
                    fileFormat: "png",
                    width: 1080,
                    height: 1080,
                    downloadUrl: "https://res.cloudinary.com/bdav-dev/image/upload/abstract-3d-series/058/a3ds-058-blue.png"
                }
            ]
        }
    },
    59: {
        nr: 59,
        image: {
            src: '/abstract-3d-series/059/a3ds-059.png',
            width: 1080,
            height: 1080
        },
        releaseDate: '01.12.2025',
        adventCalendar: {
            nr: 1,
            year: 2025
        },
        downloads: {
            image: [
                {
                    fileName: 'a3ds-059',
                    fileFormat: "png",
                    width: 1080,
                    height: 1080,
                    downloadUrl: 'https://res.cloudinary.com/bdav-dev/image/upload/abstract-3d-series/059/a3ds-059.png'
                }
            ]
        }
    },
    60: {
        nr: 60,
        image: {
            src: '/abstract-3d-series/060/a3ds-060.png',
            width: 1080,
            height: 1080
        },
        releaseDate: '02.12.2025',
        adventCalendar: {
            nr: 2,
            year: 2025
        },
        downloads: {
            image: [
                {
                    fileName: 'a3ds-060',
                    fileFormat: 'png',
                    width: 1080,
                    height: 1080,
                    downloadUrl: 'https://res.cloudinary.com/bdav-dev/image/upload/abstract-3d-series/060/a3ds-060.png'
                }
            ]
        }
    },
    61: {
        nr: 61,
        image: {
            src: '/abstract-3d-series/061/a3ds-061-blue.png',
            width: 1080,
            height: 1080
        },
        releaseDate: '03.12.2025',
        adventCalendar: {
            nr: 3,
            year: 2025
        },
        downloads: {
            image: [
                {
                    description: 'Blue',
                    fileName: 'a3ds-061-blue',
                    fileFormat: 'png',
                    width: 1080,
                    height: 1080,
                    downloadUrl: 'https://res.cloudinary.com/bdav-dev/image/upload/abstract-3d-series/061/a3ds-061-blue.png'
                },
                {
                    description: 'Red',
                    fileName: 'a3ds-061-red',
                    fileFormat: 'png',
                    width: 1080,
                    height: 1080,
                    downloadUrl: 'https://res.cloudinary.com/bdav-dev/image/upload/abstract-3d-series/061/a3ds-061-red.png'
                }
            ]
        }
    },
    62: {
        nr: 62,
        image: {
            src: '/abstract-3d-series/062/a3ds-062.png',
            width: 1080,
            height: 1080
        },
        releaseDate: '04.12.2025',
        adventCalendar: {
            nr: 4,
            year: 2025
        },
        downloads: {
            image: [
                {
                    fileName: 'a3ds-062',
                    fileFormat: 'png',
                    width: 1080,
                    height: 1080,
                    downloadUrl: 'https://res.cloudinary.com/bdav-dev/image/upload/abstract-3d-series/062/a3ds-062.png'
                }
            ]
        }
    },
    63: {
        nr: 63,
        image: {
            src: '/abstract-3d-series/063/a3ds-063.png',
            width: 1080,
            height: 1080
        },
        releaseDate: '05.12.2025',
        adventCalendar: {
            nr: 5,
            year: 2025
        },
        downloads: {
            image: [
                {
                    fileName: 'a3ds-063',
                    fileFormat: 'png',
                    width: 1080,
                    height: 1080,
                    downloadUrl: 'https://res.cloudinary.com/bdav-dev/image/upload/abstract-3d-series/063/a3ds-063.png'
                }
            ]
        }
    },
    64: {
        nr: 64,
        image: {
            src: '/abstract-3d-series/064/a3ds-064.png',
            width: 1080,
            height: 1080
        },
        releaseDate: '06.12.2025',
        adventCalendar: {
            nr: 6,
            year: 2025
        },
        downloads: {
            image: [
                {
                    fileName: 'a3ds-064',
                    fileFormat: 'png',
                    width: 1080,
                    height: 1080,
                    downloadUrl: 'https://res.cloudinary.com/bdav-dev/image/upload/abstract-3d-series/064/a3ds-064.png'
                }
            ]
        }
    },
    65: {
        nr: 65,
        image: {
            src: '/abstract-3d-series/065/a3ds-065.png',
            width: 1080,
            height: 1080
        },
        releaseDate: '07.12.2025',
        adventCalendar: {
            nr: 7,
            year: 2025
        },
        downloads: {
            image: [
                {
                    fileName: 'a3ds-065',
                    fileFormat: 'png',
                    width: 1080,
                    height: 1080,
                    downloadUrl: 'https://res.cloudinary.com/bdav-dev/image/upload/abstract-3d-series/065/a3ds-065.png'
                }
            ]
        }
    },
    66: {
        nr: 66,
        image: {
            src: '/abstract-3d-series/066/a3ds-066.png',
            width: 1080,
            height: 1080
        },
        releaseDate: '08.12.2025',
        adventCalendar: {
            nr: 8,
            year: 2025
        },
        downloads: {
            image: [
                {
                    fileName: 'a3ds-066',
                    fileFormat: 'png',
                    width: 1080,
                    height: 1080,
                    downloadUrl: 'https://res.cloudinary.com/bdav-dev/image/upload/abstract-3d-series/066/a3ds-066.png'
                }
            ]
        }
    },
    67: {
        nr: 67,
        image: {
            src: '/abstract-3d-series/067/a3ds-067.png',
            width: 1080,
            height: 1080
        },
        releaseDate: '09.12.2025',
        adventCalendar: {
            nr: 9,
            year: 2025
        },
        downloads: {
            image: [
                {
                    fileName: 'a3ds-067',
                    fileFormat: 'png',
                    width: 1080,
                    height: 1080,
                    downloadUrl: 'https://res.cloudinary.com/bdav-dev/image/upload/abstract-3d-series/067/a3ds-067.png'
                }
            ]
        }
    },
    68: {
        nr: 68,
        image: {
            src: '/abstract-3d-series/068/a3ds-068.png',
            width: 1080,
            height: 1080
        },
        releaseDate: '10.12.2025',
        adventCalendar: {
            nr: 10,
            year: 2025
        },
        downloads: {
            image: [
                {
                    fileName: 'a3ds-068',
                    fileFormat: 'png',
                    width: 1080,
                    height: 1080,
                    downloadUrl: 'https://res.cloudinary.com/bdav-dev/image/upload/abstract-3d-series/068/a3ds-068.png'
                }
            ]
        }
    },
    69: {
        nr: 69,
        image: {
            src: '/abstract-3d-series/069/a3ds-069.png',
            width: 1080,
            height: 1080
        },
        releaseDate: '11.12.2025',
        adventCalendar: {
            nr: 11,
            year: 2025
        },
        downloads: {
            image: [
                {
                    fileName: 'a3ds-069',
                    fileFormat: 'png',
                    width: 1080,
                    height: 1080,
                    downloadUrl: 'https://res.cloudinary.com/bdav-dev/image/upload/abstract-3d-series/069/a3ds-069.png'
                }
            ]
        }
    },
    70: {
        nr: 70,
        image: {
            src: '/abstract-3d-series/070/a3ds-070.png',
            width: 1080,
            height: 1080
        },
        releaseDate: '12.12.2025',
        adventCalendar: {
            nr: 12,
            year: 2025
        },
        downloads: {
            image: [
                {
                    fileName: 'a3ds-070',
                    fileFormat: 'png',
                    width: 1080,
                    height: 1080,
                    downloadUrl: 'https://res.cloudinary.com/bdav-dev/image/upload/abstract-3d-series/070/a3ds-070.png'
                }
            ]
        }
    },
    71: {
        nr: 71,
        image: {
            src: '/abstract-3d-series/071/a3ds-071.png',
            width: 1080,
            height: 1080
        },
        releaseDate: '13.12.2025',
        adventCalendar: {
            nr: 13,
            year: 2025
        },
        downloads: {
            image: [
                {
                    fileName: 'a3ds-071',
                    fileFormat: 'png',
                    width: 1080,
                    height: 1080,
                    downloadUrl: 'https://res.cloudinary.com/bdav-dev/image/upload/abstract-3d-series/071/a3ds-071.png'
                }
            ]
        }
    },
    72: {
        nr: 72,
        image: {
            src: '/abstract-3d-series/072/a3ds-072.png',
            width: 1080,
            height: 1080
        },
        releaseDate: '14.12.2025',
        adventCalendar: {
            nr: 14,
            year: 2025
        },
        downloads: {
            image: [
                {
                    fileName: 'a3ds-072',
                    fileFormat: 'png',
                    width: 1080,
                    height: 1080,
                    downloadUrl: 'https://res.cloudinary.com/bdav-dev/image/upload/abstract-3d-series/072/a3ds-072.png'
                },
                {
                    description: 'Poster',
                    fileName: 'a3ds-072-poster',
                    fileFormat: 'png',
                    width: 1560,
                    height: 2160,
                    downloadUrl: 'https://res.cloudinary.com/bdav-dev/image/upload/abstract-3d-series/072/a3ds-072-poster.png'
                }
            ]
        }
    },
    73: {
        nr: 73,
        image: {
            src: '/abstract-3d-series/073/a3ds-073.png',
            width: 1080,
            height: 1080
        },
        releaseDate: '15.12.2025',
        adventCalendar: {
            nr: 15,
            year: 2025
        },
        downloads: {
            image: [
                {
                    fileName: 'a3ds-073',
                    fileFormat: 'png',
                    width: 1080,
                    height: 1080,
                    downloadUrl: 'https://res.cloudinary.com/bdav-dev/image/upload/abstract-3d-series/073/a3ds-073.png'
                }
            ]
        }
    },
    74: {
        nr: 74,
        image: {
            src: '/abstract-3d-series/074/a3ds-074.png',
            width: 1080,
            height: 1080
        },
        releaseDate: '16.12.2025',
        adventCalendar: {
            nr: 16,
            year: 2025
        },
        downloads: {
            image: [
                {
                    fileName: 'a3ds-074',
                    fileFormat: 'png',
                    width: 1080,
                    height: 1080,
                    downloadUrl: 'https://res.cloudinary.com/bdav-dev/image/upload/abstract-3d-series/074/a3ds-074.png'
                }
            ]
        }
    },
    75: {
        nr: 75,
        image: {
            src: '/abstract-3d-series/075/a3ds-075.png',
            width: 1080,
            height: 1080
        },
        releaseDate: '17.12.2025',
        adventCalendar: {
            nr: 17,
            year: 2025
        },
        downloads: {
            image: [
                {
                    fileName: 'a3ds-075',
                    fileFormat: 'png',
                    width: 1080,
                    height: 1080,
                    downloadUrl: 'https://res.cloudinary.com/bdav-dev/image/upload/abstract-3d-series/075/a3ds-075.png'
                }
            ]
        }
    },
    76: {
        nr: 76,
        image: {
            src: '/abstract-3d-series/076/a3ds-076.png',
            width: 1080,
            height: 1080
        },
        releaseDate: '18.12.2025',
        adventCalendar: {
            nr: 18,
            year: 2025
        },
        downloads: {
            image: [
                {
                    fileName: 'a3ds-076',
                    fileFormat: 'png',
                    width: 1080,
                    height: 1080,
                    downloadUrl: 'https://res.cloudinary.com/bdav-dev/image/upload/abstract-3d-series/076/a3ds-076.png'
                }
            ]
        }
    },
    77: {
        nr: 77,
        image: {
            src: '/abstract-3d-series/077/a3ds-077.png',
            width: 1080,
            height: 1080
        },
        releaseDate: '19.12.2025',
        adventCalendar: {
            nr: 19,
            year: 2025
        },
        downloads: {
            image: [
                {
                    fileName: 'a3ds-077',
                    fileFormat: 'png',
                    width: 1080,
                    height: 1080,
                    downloadUrl: 'https://res.cloudinary.com/bdav-dev/image/upload/abstract-3d-series/077/a3ds-077.png'
                }
            ]
        }
    },
    78: {
        nr: 78,
        image: {
            src: '/abstract-3d-series/078/a3ds-078.png',
            width: 1080,
            height: 1080
        },
        releaseDate: '20.12.2025',
        adventCalendar: {
            nr: 20,
            year: 2025
        },
        downloads: {
            image: [
                {
                    fileName: 'a3ds-078',
                    fileFormat: 'png',
                    width: 1080,
                    height: 1080,
                    downloadUrl: 'https://res.cloudinary.com/bdav-dev/image/upload/abstract-3d-series/078/a3ds-078.png'
                }
            ]
        }
    },
    79: {
        nr: 79,
        image: {
            src: '/abstract-3d-series/079/a3ds-079.png',
            width: 1080,
            height: 1080
        },
        releaseDate: '21.12.2025',
        adventCalendar: {
            nr: 21,
            year: 2025
        },
        downloads: {
            image: [
                {
                    fileName: 'a3ds-079',
                    fileFormat: 'png',
                    width: 1080,
                    height: 1080,
                    downloadUrl: 'https://res.cloudinary.com/bdav-dev/image/upload/abstract-3d-series/079/a3ds-079.png'
                }
            ]
        }
    },
    80: {
        nr: 80,
        image: {
            src: '/abstract-3d-series/080/a3ds-080-red.png',
            width: 1080,
            height: 1080
        },
        releaseDate: '22.12.2025',
        adventCalendar: {
            nr: 22,
            year: 2025
        },
        downloads: {
            image: [
                {
                    description: 'Red',
                    fileName: 'a3ds-080-red',
                    fileFormat: 'png',
                    width: 1080,
                    height: 1080,
                    downloadUrl: 'https://res.cloudinary.com/bdav-dev/image/upload/abstract-3d-series/080/a3ds-080-red.png'
                },
                {
                    description: 'Blue',
                    fileName: 'a3ds-080-blue',
                    fileFormat: 'png',
                    width: 1080,
                    height: 1080,
                    downloadUrl: 'https://res.cloudinary.com/bdav-dev/image/upload/abstract-3d-series/080/a3ds-080-blue.png'
                }
            ]
        }
    },
    81: {
        nr: 81,
        image: {
            src: '/abstract-3d-series/081/a3ds-081.png',
            width: 1080,
            height: 1080
        },
        releaseDate: '23.12.2025',
        adventCalendar: {
            nr: 23,
            year: 2025
        },
        downloads: {
            image: [
                {
                    fileName: 'a3ds-081',
                    fileFormat: 'png',
                    width: 1080,
                    height: 1080,
                    downloadUrl: 'https://res.cloudinary.com/bdav-dev/image/upload/abstract-3d-series/081/a3ds-081.png'
                }
            ]
        }
    },
    82: {
        nr: 82,
        image: {
            src: '/abstract-3d-series/082/a3ds-082.png',
            width: 1080,
            height: 1080
        },
        releaseDate: '24.12.2025',
        adventCalendar: {
            nr: 24,
            year: 2025
        },
        downloads: {
            image: [
                {
                    fileName: 'a3ds-082',
                    fileFormat: 'png',
                    width: 1080,
                    height: 1080,
                    downloadUrl: 'https://res.cloudinary.com/bdav-dev/image/upload/abstract-3d-series/082/a3ds-082.png'
                }
            ]
        }
    },
};
