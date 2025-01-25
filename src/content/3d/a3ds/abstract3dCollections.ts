import { Abstract3D, Abstract3DSeries, Abstract3DSeriesValues } from "@/content/3d/a3ds/abstract3dSeries";
import { Abstract3DSeriesSort } from "@/utils/SortUtils";
import { parseDMY } from "@/utils/DateUtils";

export type Abstract3DCollection = {
    routeSegment: string,
    name: string,
    abstract3Ds: Abstract3D[]
};
export type Abstract3DCollections = Abstract3DCollection[];
export type NamedAbstract3DCollections = { [name: string]: Abstract3DCollection };

const yearCollections: NamedAbstract3DCollections = (
    Object.fromEntries(
        Object.entries(
            Abstract3DSeriesValues
                .reduce<{ [name: string]: Abstract3D[] }>(
                    (accumulator, abstract3D) => {
                        const year = parseDMY(abstract3D.releaseDate).getFullYear();
                        const abstract3DsFromYear = accumulator[year];

                        if (abstract3DsFromYear != undefined) {
                            abstract3DsFromYear.push(abstract3D);
                        } else {
                            accumulator[year] = [abstract3D];
                        }

                        return accumulator;
                    },
                    {}
                )
        )
            .map(([year, abstract3Ds]) => [
                `year-${year}`,
                {
                    routeSegment: year,
                    name: year,
                    abstract3Ds: [...abstract3Ds].sort(Abstract3DSeriesSort)
                }
            ])
            .reverse()
    )
);

export const Abstract3DStaticCollections: NamedAbstract3DCollections = {
    wallpapers: {
        routeSegment: 'wallpapers',
        name: 'Wallpapers',
        abstract3Ds:
            Abstract3DSeriesValues
                .filter(abstract3D => abstract3D.downloads?.wallpaperDownloads)
    },
    creatorsFavorites: {
        routeSegment: 'creators-favorites',
        name: "Creator's favorites",
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
        abstract3Ds: Abstract3DSeriesValues.filter(abstract3D => abstract3D.adventCalendar?.year == 2024)
    },
    ...yearCollections
};
