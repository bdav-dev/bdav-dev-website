'use client';

import { createContext, Dispatch, ReactNode, SetStateAction } from "react";
import useLocalStorage from "../hooks/UseLocalStorage";


type ThemeContextType = {
    darkTheme: boolean,
    setDarkTheme: Dispatch<SetStateAction<boolean>>,
    resolveThemeSwitch: <T>(themeSwitch: ThemeSwitch<T>) => T
}

export const ThemeContext = createContext<ThemeContextType>({
    darkTheme: true,
    setDarkTheme: () => { },
    resolveThemeSwitch: themeSwitch => resolveThemeSwitch(true, themeSwitch)
});

export default function ThemeProvider(props: { children?: ReactNode }) {
    const [darkTheme, setDarkTheme] = useLocalStorage("useDarkTheme", true);

    return (
        <ThemeContext.Provider value={{ darkTheme, setDarkTheme, resolveThemeSwitch: themeSwitch => resolveThemeSwitch(darkTheme, themeSwitch) }}>
            {props.children}
        </ThemeContext.Provider>
    );
}

export type ThemeSwitch<T> = T | { light: T, dark: T };

export function resolveThemeSwitch<T>(darkTheme: boolean, themeSwitch: ThemeSwitch<T>): T {
    if (typeof themeSwitch === 'object' && themeSwitch != null && 'light' in themeSwitch && 'dark' in themeSwitch) {
        return darkTheme ? themeSwitch.dark : themeSwitch.light;
    }
    return themeSwitch;
}
