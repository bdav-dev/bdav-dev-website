'use client';

import { CSSProperties } from "react";
import { codeProjectAppIcons } from "@/categories/code/content/codeProjectAppIcons";
import { CodeProject } from "@/categories/code/content/codeProjects";
import { useTheme } from "@/hooks/UseTheme";


export type CodeProjectAppIconProps = {
    project: CodeProject,
    className?: string,
    style?: CSSProperties
}

export default function CodeProjectAppIcon({ project, ...rest }: CodeProjectAppIconProps) {
    const { resolveThemeSwitch } = useTheme();

    const AppIcon = resolveThemeSwitch(codeProjectAppIcons[project.id]);

    return <AppIcon {...rest}/>;
}
