import { Abstract3dCollection, StaticAbstract3dCollections } from "@/categories/3d/a3ds/content/staticAbstract3dCollections";
import { Abstract3dSeries } from "@/categories/3d/a3ds/content/abstract3dSeries";
import { compareAbstract3dImages, getAbstract3dImagesGroupedByAdventCalendarYear, getAbstract3dImagesGroupedByYear } from "@/categories/3d/a3ds/utilities/abstract3dSeriesUtilities";


export function createYearCollections(): Abstract3dCollection[] {
    return Object.entries(getAbstract3dImagesGroupedByYear())
        .map(
            ([year, images]) => (
                {
                    routeSegment: year,
                    name: year,
                    images: images.toSorted(compareAbstract3dImages)
                }
            )
        )
        .reverse();
}

export function createAdventCalendarCollections(): Abstract3dCollection[] {
    return Object.entries(getAbstract3dImagesGroupedByAdventCalendarYear())
        .map(
            ([year, images]) => (
                {
                    routeSegment: `advent-calendar-${year}`,
                    name: `Advent Calendar ${year}`,
                    images: images.toSorted(compareAbstract3dImages)
                }
            )
        )
        .reverse();
}

export function createFavoritesCollection(numbersOfFavoriteAbstract3dImages: number[]): Abstract3dCollection {
    return {
        routeSegment: 'favorites',
        name: 'My Favorites',
        images: Object.values(Abstract3dSeries).filter(image => numbersOfFavoriteAbstract3dImages.includes(image.nr))
    }
}

export function getLatestAdventCalendarCollection() {
    const extractYear = (staticCollectionKey: string) => +staticCollectionKey.replace("adventCalendar", '');

    return Object.keys(StaticAbstract3dCollections)
        .filter(staticCollectionKey => staticCollectionKey.startsWith("adventCalendar"))
        .sort((a, b) => extractYear(b) - extractYear(a))
        .map(staticCollectionKey => StaticAbstract3dCollections[staticCollectionKey])
        .at(0);
}

export function getLatestYearCollection() {
    const extractYear = (staticCollectionKey: string) => +staticCollectionKey.replace("year", '');

    return Object.keys(StaticAbstract3dCollections)
        .filter(staticCollectionKey => staticCollectionKey.startsWith("year"))
        .sort((a, b) => extractYear(b) - extractYear(a))
        .map(staticCollectionKey => StaticAbstract3dCollections[staticCollectionKey])
        .at(0);
}
