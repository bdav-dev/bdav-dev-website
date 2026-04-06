'use client';

import LightModeIcon from "@/icons/deprecated/LightModeIcon";
import DarkModeIcon from "@/icons/deprecated/DarkModeIcon";
import { useTheme } from "@/hooks/UseTheme";


export default function ThemeToggle() {
    const { darkTheme, setDarkTheme } = useTheme();

    return (
        <button
            className={`
                flex flex-row items-center
                p-1.5 mx-0.5
                rounded-lg 
                transition-colors duration-200
                bg-opacity-80 dark:bg-opacity-80
                hover:bg-zinc-300 dark:hover:bg-zinc-700 hover:bg-opacity-95 hover:dark:bg-opacity-90
            `}
            onClick={() => setDarkTheme(current => !current)}
        >
            {
                darkTheme
                    ? <DarkModeIcon className="dark:stroke-white stroke-black stroke-[5] h-6 w-6"/>
                    : <LightModeIcon className="dark:stroke-white stroke-black stroke-[5] h-6 w-6"/>
            }
        </button>
    );
}
