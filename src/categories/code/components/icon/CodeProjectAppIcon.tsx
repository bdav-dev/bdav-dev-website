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
    const { darkTheme } = useTheme();

    const definition = codeProjectAppIcons[project.id];

    const AppIcon = typeof definition === 'object'
        ? darkTheme ? definition.dark : definition.light
        : definition;

    return <AppIcon {...rest}/>;
}
