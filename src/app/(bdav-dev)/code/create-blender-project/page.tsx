import Tile from "@/components/library/Tile";
import { CodeProjects } from "@/categories/code/content/codeProjects";
import React from "react";
import { Metadata } from "next";
import Enumerate from "@/components/library/Enumerate";
import CodeProjectLayout from "@/categories/code/components/layout/CodeProjectLayout";
import ReadingLayout from "@/layout/ReadingLayout";
import Terminal, { Path } from "@/components/library/Terminal";


export const metadata: Metadata = {
    title: `${CodeProjects.CreateBlenderProject.title} – bdav.dev`,
    description: "A command line tool to create a new blender project with common directories.",
    keywords: ["create-blender-project", "create blender project", "createBlenderProject"]
}

export default function CreateBlenderProjectPage() {
    const project = CodeProjects.CreateBlenderProject;

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
        >
            <ReadingLayout>
                <div className={'flex flex-col gap-5'}>
                    <Tile className={"flex-1 text-center"}>
                        <CreateBlenderProjectTitle/> is a command-line tool designed to make starting new Blender projects faster and more organized.
                    </Tile>

                    <div className={"flex flex-col lg:flex-row gap-5"}>

                        <div className={"flex flex-col gap-5 flex-1"}>
                            <Tile className={"flex-1"}>
                                Instead of manually creating folders and setting things up every time, the tool automatically generates a clean project structure with commonly used directories:
                                <Enumerate indent items={['assets', 'blender-files', 'render-output', 'results']}/>
                            </Tile>
                            <Tile className={"flex-1"}>
                                It also creates a ready-to-use Blender file named after your project, so you can jump straight into creating.
                            </Tile>
                        </div>

                        <CreateBlenderProjectTerminal/>
                    </div>
                </div>
            </ReadingLayout>
        </CodeProjectLayout>
    );
}

function CreateBlenderProjectTitle() {
    return (
        <span
            className={`
                text-xl font-semibold
                text-transparent bg-clip-text bg-gradient-to-br
                from-gray-700 via-neutral-700 to-zinc-700
                dark:from-gray-100 dark:via-neutral-100 dark:to-zinc-100
            `}
        >
            create-blender-project
        </span>
    );
}

function CreateBlenderProjectTerminal() {
    return (
        <Terminal
            user={"you"}
            hostname={"macbook-pro"}
            currentDirectory={"~/Desktop"}
            command={"create-blender-project earth-and-moon"}
        >
            Creating directories and Blender file.<br/>
            Done. Project "earth-and-moon" successfully created:<br/>
            <Path>./earth-and-moon</Path><br/>
            ├── <Path>assets</Path><br/>
            ├── <Path>blender-files</Path><br/>
            │&nbsp;&nbsp;&nbsp;└── earth-and-moon.blend<br/>
            ├── <Path>render-output</Path><br/>
            └── <Path>results</Path><br/>
            <br/>
            Do you want to open the project in Blender? (y/N): y
        </Terminal>
    );
}
