'use client';

import { ReactNode, useEffect } from "react";
import { useTheme } from "@/hooks/UseTheme";


export default function ThemeApplier({ children }: { children?: ReactNode }) {
    const { darkTheme } = useTheme();

    useEffect(
        () => {
            document.documentElement.classList.toggle("dark", darkTheme);
        },
        [darkTheme]
    );

    return children;
}
