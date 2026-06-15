import { CSSProperties } from "react";


export default function createAccentColorStyle(accentColor: string | undefined) {
    return accentColor
        ? { "--color-accent": accentColor } as CSSProperties
        : undefined;
}
