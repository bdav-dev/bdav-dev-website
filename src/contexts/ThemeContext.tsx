'use client';

import React, { Dispatch, SetStateAction, useContext, useEffect } from "react";
import useLocalStorage from "../hooks/UseLocalStorage";

type ThemeProviderProps = {
    children: React.ReactNode
}

type ThemeProviderType = {
    darkTheme: boolean,
    setDarkTheme: Dispatch<SetStateAction<boolean>>
}

const ThemeContext = React.createContext<ThemeProviderType>(
    {
        darkTheme: true,
        setDarkTheme: () => { true }
    }
);

export function useTheme() {
    return useContext(ThemeContext);
}

export default function ThemeProvider(props: ThemeProviderProps) {
    const { storedValue: darkTheme, setStoredValue: setDarkTheme } = useLocalStorage("useDarkTheme", true);

    useEffect(
        () => document.documentElement.style.setProperty('--bg', (darkTheme ? "var(--bg-dark)" : "var(--bg-light)")),
        [darkTheme]
    );

    return (
        <ThemeContext.Provider value={{ darkTheme, setDarkTheme }}>
            {props.children}
        </ThemeContext.Provider>
    );
}
