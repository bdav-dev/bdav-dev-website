import { CSSProperties } from "react";


export default function createAccentColorStyle(accentColor: string | undefined) {
    return accentColor
        ? { "--accent-color": accentColor } as CSSProperties
        : undefined;
}
