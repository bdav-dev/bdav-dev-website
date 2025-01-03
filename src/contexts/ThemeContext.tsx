'use client';

import React, { Dispatch, SetStateAction, useEffect } from "react";
import useLocalStorage from "../hooks/UseLocalStorage";


type ThemeContextType = {
    darkTheme: boolean,
    setDarkTheme: Dispatch<SetStateAction<boolean>>
}

export const ThemeContext = React.createContext<ThemeContextType>({
    darkTheme: true,
    setDarkTheme: () => { }
});

type ThemeProviderProps = {
    children?: React.ReactNode
}

export default function ThemeProvider(props: ThemeProviderProps) {
    const { storedValue: darkTheme, setStoredValue: setDarkTheme } = useLocalStorage("useDarkTheme", true);

    useEffect(() => {
        document.documentElement.style.setProperty('--bg', (darkTheme ? "var(--bg-dark)" : "var(--bg-light)"))
    }, [darkTheme]);

    return (
        <ThemeContext.Provider value={{ darkTheme, setDarkTheme }}>
            {props.children}
        </ThemeContext.Provider>
    );
}
