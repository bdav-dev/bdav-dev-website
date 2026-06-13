import { Abstract3dImage, Abstract3dSeries } from "@/categories/3d/a3ds/content/abstract3dSeries";
import { createAdventCalendarCollections, createYearCollections } from "@/categories/3d/a3ds/utilities/abstract3dSeriesCollectionUtilities";
import { compareAbstract3dImages } from "@/categories/3d/a3ds/utilities/abstract3dSeriesUtilities";


export type Abstract3dCollection = {
    routeSegment: string,
    name: string,
    images: readonly Abstract3dImage[]
};

export const StaticAbstract3dCollections: Record<string, Abstract3dCollection> = {
    wallpapers: {
        routeSegment: 'wallpapers',
        name: 'Wallpapers',
        images: Object.values(Abstract3dSeries).filter(image => image.downloads?.wallpaper).toSorted(compareAbstract3dImages)
    },
    creatorsFavorites: {
        routeSegment: 'creators-favorites',
        name: "Creator's favorites",
        images:
            [
                Abstract3dSeries[49],
                Abstract3dSeries[39],
                Abstract3dSeries[37],
                Abstract3dSeries[33],
                Abstract3dSeries[27],
                Abstract3dSeries[26],
                Abstract3dSeries[19],
                Abstract3dSeries[15],
                Abstract3dSeries[10],
                Abstract3dSeries[4]
            ].sort(compareAbstract3dImages)
    },
    ...Object.fromEntries(createAdventCalendarCollections().map(collection => [`adventCalendar${collection.name}`, collection])),
    ...Object.fromEntries(createYearCollections().map(collection => [`year${collection.name}`, collection]))
};
