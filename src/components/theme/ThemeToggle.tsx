'use client';

import SunIcon from "@/icons/app/SunIcon";
import MoonIcon from "@/icons/app/MoonIcon";
import { useTheme } from "@/hooks/UseTheme";


export default function ThemeToggle() {
    const { darkTheme, setDarkTheme } = useTheme();

    const Icon = darkTheme ? MoonIcon : SunIcon;

    return (
        <button
            className={`
                flex flex-row items-center
                p-1.5 mr-0.5
                rounded-lg 
                transition-colors duration-200
                bg-opacity-80 dark:bg-opacity-80
                hover:bg-zinc-300 dark:hover:bg-zinc-700 hover:bg-opacity-95 hover:dark:bg-opacity-90
            `}
            onClick={() => setDarkTheme(current => !current)}
        >
            <Icon weight={300} className={'text-[1.05em]'}/>
        </button>
    );
}
