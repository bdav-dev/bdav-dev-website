'use client';

import SunIcon from "@/icons/app/SunIcon";
import MoonIcon from "@/icons/app/MoonIcon";
import useTheme from "@/hooks/UseTheme";


export default function ThemeToggle() {
    const { theme, toggleTheme } = useTheme();

    const Icon = {
        light: SunIcon,
        dark: MoonIcon
    }[theme];

    return (
        <button
            className={`
                flex flex-row items-center justify-center
                p-1.5 mr-0.5 rounded-l-lg rounded-r-xl
                hover:bg-zinc-300/95 dark:hover:bg-zinc-700/90
                transition-colors duration-200
                size-10
            `}
            onClick={toggleTheme}
        >
            <Icon weight={300} className={'text-[1.2em]'}/>
        </button>
    );
}
