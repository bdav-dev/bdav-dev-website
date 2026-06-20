'use client';

import { CodeProject } from "@/categories/code/content/codeProjects";
import useTheme from "@/hooks/UseTheme";


type CodeProjectTitleProps = {
    project: CodeProject
}

export default function CodeProjectTitle({ project }: CodeProjectTitleProps) {
    const { resolveThemeSwitch } = useTheme();

    const gradient = resolveThemeSwitch(project.gradient);

    return (
        <span
            className={`text-xl font-semibold bg-clip-text`}
            style={
                {
                    backgroundImage: `linear-gradient(to bottom right, ${Object.values(gradient).filter(Boolean).join(', ')})`
                }
            }
        >
            {project.title}
        </span>
    );
}
