'use client';

import LightModeIcon from "@/icons/LightModeIcon";
import DarkModeIcon from "@/icons/DarkModeIcon";
import { useTheme } from "@/hooks/UseTheme";

type ThemeToggleProps = {
    selected?: boolean
}

export default function ThemeToggle(props: ThemeToggleProps) {

    const { darkTheme, setDarkTheme } = useTheme();

    return (
        <button
            className={
                `
                flex flex-row items-center
                p-1.5 mx-0.5
                rounded-lg 
                transition-colors duration-200
                bg-opacity-80 dark:bg-opacity-80
                ${
                    props.selected
                        ? "bg-zinc-400 dark:bg-zinc-950"
                        : "hover:bg-zinc-300 dark:hover:bg-zinc-700 hover:bg-opacity-95 hover:dark:bg-opacity-90"
                }
            `}
            onClick={() => setDarkTheme(curr => !curr)}
        >
            {
                darkTheme
                    ? <DarkModeIcon className="dark:stroke-white stroke-black stroke-[5] h-6 w-6"/>
                    : <LightModeIcon className="dark:stroke-white stroke-black stroke-[5] h-6 w-6"/>
            }
        </button>
    );
}
