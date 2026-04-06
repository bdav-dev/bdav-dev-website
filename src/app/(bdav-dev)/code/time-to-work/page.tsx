import CodeProjectLayout from "@/categories/code/components/layout/CodeProjectLayout";
import { CodeProjects } from "@/categories/code/content/codeProjects";


export default function TimeToWorkPage() {
    const project = CodeProjects.TimeToWork;

    return (
        <CodeProjectLayout
            project={project}
            banner={
                {
                    image: {
                        src: '/code/create-blender-project/banner.png',
                        height: 1080,
                        width: 2200
                    },
                    className: 'invert dark:invert-0 hue-rotate-180 dark:hue-rotate-0 dark:brightness-75'
                }
            }
        />
    );
}

