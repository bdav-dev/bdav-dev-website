'use client';

import { createContext, ReactNode, useEffect, useState } from "react";


export type Theme = 'light' | 'dark';
export type ThemeSwitch<T> = T | Record<Theme, T>;

type ThemeContextType = {
    theme: Theme | undefined,
    toggleTheme: () => void,
    resolveThemeSwitch: <T>(themeSwitch: ThemeSwitch<T>) => T | undefined
}

export const ThemeContext = createContext<ThemeContextType>({
    theme: undefined,
    toggleTheme: () => {},
    resolveThemeSwitch: () => undefined
});

export default function ThemeContextProvider(props: { children?: ReactNode }) {
    const [theme, setTheme] = useState<Theme>();

    useEffect(
        () => setTheme(document.documentElement.classList.contains('dark') ? 'dark' : 'light'),
        []
    );

    function toggleTheme() {
        const invertedTheme = theme === 'light' ? 'dark' : 'light';
        document.documentElement.classList.toggle('dark', invertedTheme === 'dark');
        localStorage.setItem('theme', invertedTheme);
        setTheme(invertedTheme);
    }

    return (
        <ThemeContext value={{ theme, toggleTheme, resolveThemeSwitch: themeSwitch => theme ? resolveThemeSwitch(theme, themeSwitch) : undefined }}>
            {props.children}
        </ThemeContext>
    );
}

function resolveThemeSwitch<T>(theme: Theme, themeSwitch: ThemeSwitch<T>): T {
    if (typeof themeSwitch === 'object' && themeSwitch != null && 'light' in themeSwitch && 'dark' in themeSwitch) {
        return themeSwitch[theme];
    }
    return themeSwitch;
}
