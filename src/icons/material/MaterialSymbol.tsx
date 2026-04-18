import { WeightableIconProps } from "@/icons/WeightableIcon";


export enum MaterialSymbols {
    MOBILE_3 = 'mobile_3',
    TERMINAL = 'terminal',
    LANGUAGE = 'language',
    DOWNLOAD = 'download',
    ROCKET_LAUNCH = 'rocket_launch',
    OPEN_IN_NEW = 'open_in_new',
    DESKTOP_WINDOWS = 'desktop_windows',
    INVENTORY_2 = 'inventory_2',
    CONSTRUCTION = 'construction',
    PROGRESS_ACTIVITY = 'progress_activity',
    EMOJI_OBJECTS = 'emoji_objects',
    KEYBOARD_DOUBLE_ARROW_RIGHT = 'keyboard_double_arrow_right',
    KEYBOARD_DOUBLE_ARROW_LEFT = 'keyboard_double_arrow_left'
}

export const MATERIAL_SYMBOLS_API_URL = `https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght@20..48,100..700&icon_names=${Object.values(MaterialSymbols).toSorted().join(',')}`;


type MaterialSymbolConfiguration = {
    opticalSize?: 20 | 24 | 40 | 48
    weight?: 100 | 200 | 300 | 350 | 400 | 500 | 600 | 700 | number
}

export type MaterialSymbolProps = { symbol: MaterialSymbols } & MaterialSymbolConfiguration & WeightableIconProps;

export default function MaterialSymbol(props: MaterialSymbolProps) {

    return (
        <span
            className={`material-symbols-rounded select-none`}
            style={{ fontVariationSettings: createFontVariationSettings(props), display: 'inline-flex', fontSize: "1.5em" }}
        >
            <span className={props.className} style={props.style}>
                {props.symbol}
            </span>
        </span>
    );
}

function createFontVariationSettings(configuration: MaterialSymbolConfiguration) {
    return (
        Object
            .entries(
                {
                    opsz: configuration.opticalSize,
                    wght: configuration.weight
                }
            )
            .filter(([, value]) => value != undefined)
            .map(([key, value]) => `"${key}" ${value}`).join(', ')
        || undefined
    );
}
