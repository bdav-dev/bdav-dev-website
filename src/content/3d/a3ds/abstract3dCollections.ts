import { Abstract3D, Abstract3DSeries } from "@/content/3d/a3ds/abstract3dSeries";
import { Abstract3DSeriesSort } from "@/utils/SortUtils";

export type Abstract3DCollection = {
    routeSegment: string,
    name: string,
    abstract3Ds: Abstract3D[]
};
export type Abstract3DCollections = Abstract3DCollection[];
export type NamedAbstract3DCollections = { [name: string]: Abstract3DCollection };

export const Abstract3DStaticCollections: NamedAbstract3DCollections = {
    wallpapers: {
        routeSegment: 'wallpapers',
        name: 'Wallpapers',
        abstract3Ds:
            Object.values(Abstract3DSeries)
                .filter(abstract3D => abstract3D.downloads?.wallpaperDownloads)
                .sort(Abstract3DSeriesSort)
    },
    creatorsFavorites: {
        routeSegment: 'creators-favorites',
        name: 'Creators favorites',
        abstract3Ds:
            [
                Abstract3DSeries[49],
                Abstract3DSeries[39],
                Abstract3DSeries[37],
                Abstract3DSeries[33],
                Abstract3DSeries[27],
                Abstract3DSeries[26],
                Abstract3DSeries[19],
                Abstract3DSeries[15],
                Abstract3DSeries[10],
                Abstract3DSeries[4]
            ].sort(Abstract3DSeriesSort)
    },
    adventCalendar2024: {
        routeSegment: 'advent-calendar-2024',
        name: 'Advent Calendar 2024',
        abstract3Ds:
            Object.values(Abstract3DSeries)
                .filter(abstract3D => abstract3D.adventCalendar?.year == 2024)
                .sort(Abstract3DSeriesSort)
    }
};
