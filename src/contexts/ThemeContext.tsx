'use client';

import React, { Dispatch, SetStateAction } from "react";
import useLocalStorage from "../hooks/UseLocalStorage";


type ThemeContextType = {
    darkTheme: boolean,
    setDarkTheme: Dispatch<SetStateAction<boolean>>,
    resolveThemeSwitch: <T>(themeSwitch: T | { light: T, dark: T }) => T
}

export const ThemeContext = React.createContext<ThemeContextType>({
    darkTheme: true,
    setDarkTheme: () => { },
    resolveThemeSwitch: themeSwitch => resolveThemeSwitch(true, themeSwitch)
});

type ThemeProviderProps = {
    children?: React.ReactNode
}

export default function ThemeProvider(props: ThemeProviderProps) {
    const [darkTheme, setDarkTheme] = useLocalStorage("useDarkTheme", true);

    return (
        <ThemeContext.Provider value={{ darkTheme, setDarkTheme, resolveThemeSwitch: themeSwitch => resolveThemeSwitch(darkTheme, themeSwitch) }}>
            {props.children}
        </ThemeContext.Provider>
    );
}

export function resolveThemeSwitch<T>(darkTheme: boolean, themeSwitch: T | { light: T, dark: T }): T {
    if (typeof themeSwitch === 'object' && themeSwitch != null && 'light' in themeSwitch && 'dark' in themeSwitch) {
        return darkTheme ? themeSwitch.dark : themeSwitch.light;
    }
    return themeSwitch;
}
