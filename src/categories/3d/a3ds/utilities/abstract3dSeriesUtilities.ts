import { parseDmy } from "@/utils/DateUtils";
import { Abstract3dImage, Abstract3dSeries } from "@/categories/3d/a3ds/content/abstract3dSeries";


export function isNew(abstract3D: Abstract3dImage) {
    const NEW_THRESHOLD_IN_DAYS = 7;

    const date = parseDmy(abstract3D.releaseDate);
    const currentDate = Date.now();

    const differenceInMilliseconds = Math.abs(currentDate.valueOf() - date.valueOf());
    const differenceInDays = differenceInMilliseconds / (1000 * 60 * 60 * 24);
    return differenceInDays <= NEW_THRESHOLD_IN_DAYS;
}

export const compareAbstract3dImages = (a: Abstract3dImage, b: Abstract3dImage) => b.nr - a.nr;

export function getAbstract3dImagesGroupedByYear(abstract3dImages?: Abstract3dImage[]) {
    return (abstract3dImages ?? Object.values(Abstract3dSeries))
        .reduce<Record<number, Abstract3dImage[]>>(
            (accumulator, image) => {
                const year = parseDmy(image.releaseDate).getFullYear();
                (accumulator[year] ??= []).push(image)

                return accumulator;
            },
            {}
        );
}

export function getAbstract3dImagesGroupedByAdventCalendarYear(abstract3dImages?: Abstract3dImage[]) {
    return (abstract3dImages ?? Object.values(Abstract3dSeries))
        .reduce<Record<number, Abstract3dImage[]>>(
            (accumulator, image) => {
                if (image.adventCalendar) {
                    (accumulator[image.adventCalendar.year] ??= []).push(image)
                }
                return accumulator;
            },
            {}
        );
}

export function calculateAspectRatio(width: number, height: number) {
    const greatestCommonDivisor: ((a: number, b: number) => number) = (a, b) => b === 0 ? a : greatestCommonDivisor(b, a % b);
    const overrides: Record<string, string> = {
        "8:5": "16:10"
    };

    const divisor = greatestCommonDivisor(width, height);
    const aspectRatio = `${width / divisor}:${height / divisor}`;

    return overrides[aspectRatio] ?? aspectRatio;
}
