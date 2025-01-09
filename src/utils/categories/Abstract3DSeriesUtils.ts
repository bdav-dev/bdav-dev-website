import { parseDMY } from "@/utils/DateUtils";
import { Abstract3D } from "@/content/3d/a3ds/abstract3dSeries";

const NEW_THRESHOLD_IN_DAYS = 7;

export function isNew(abstract3D: Abstract3D) {
    const date = parseDMY(abstract3D.releaseDate);
    const currentDate = Date.now();

    const differenceInMilliseconds = Math.abs(currentDate.valueOf() - date.valueOf());
    const differenceInDays = differenceInMilliseconds / (1000 * 60 * 60 * 24);
    return differenceInDays <= NEW_THRESHOLD_IN_DAYS;
}
