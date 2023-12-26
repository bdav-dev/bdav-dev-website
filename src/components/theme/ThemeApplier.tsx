'use client';

import { useTheme } from "@/contexts/ThemeContext";

type ThemeApplierProps = {
    children: React.ReactNode
}

export default function ThemeApplier(props: ThemeApplierProps) {
    const { darkTheme, setDarkTheme } = useTheme();

    return (
        <div className={"" + (darkTheme ? "dark text-dark" : "text-light")}>
            {props.children}
        </div>
    );

}