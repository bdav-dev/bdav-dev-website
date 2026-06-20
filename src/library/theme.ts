export type Theme = 'light' | 'dark';
export type ThemeSwitch<T> = T | Record<Theme, T>;

export const THEME_COOKIE = 'theme';

export function parseTheme(value: string | undefined): Theme {
    return value === 'light' || value === 'dark' ? value : 'dark';
}

export function resolveThemeSwitch<T>(theme: Theme, themeSwitch: ThemeSwitch<T>): T {
    if (typeof themeSwitch === 'object' && themeSwitch != null && 'light' in themeSwitch && 'dark' in themeSwitch) {
        return themeSwitch[theme];
    }
    return themeSwitch;
}
