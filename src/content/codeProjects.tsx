import { StaticImageData } from "next/image";

import timecoderBadge from '@/../public/dev/timecoder-badge.webp';
import { inter, spaceMono, spaceMonoBold } from "@/fonts";

export type CodeProject = {
    title: string | React.ReactNode,
    path: string,
    repository: string,

    badgeHoverText?: string | React.ReactNode,

    customBadge?: React.ReactNode,
    customBadgeText?: string | React.ReactNode,
    customBadgeImage?: StaticImageData,

    customDropdownText?: string | React.ReactNode,

    codeProjectProperies: CodeProjectProperties
};

type CodeProjects = {
    [key: string]: CodeProject
}

type CodeProjectProperties = {
    projectLanguage: 'English' | 'German',
    programmingLanguages: ProgrammingLanguage[]
    status: 'In Developement' | 'Maintaining' | 'Completed',
    type: 'Web application' | 'Desktop application' | 'Terminal application',
    launchLink?: string
}

type ProgrammingLanguage = {
    name: string,
    className: string
}

const programmingLanguages: { [key: string]: ProgrammingLanguage } = {
    typeScript: {
        name: "TypeScript",
        className: "bg-blue-600 text-white"
    },
    bash: {
        name: "Bash",
        className: "bg-green-600 text-white"
    },
    html: {
        name: "HTML",
        className: "bg-orange-600 text-white"
    },
    css: {
        name: "CSS",
        className: "bg-blue-700 text-white"
    },
    javaScript: {
        name: "JavaScript",
        className: "bg-yellow-400 text-black"
    }
};


export const codeProjects: CodeProjects = {
    timecoder: {
        title: "Timecoder",
        path: "/code/timecoder/",
        repository: "timecoder",
        customBadgeImage: timecoderBadge,
        badgeHoverText: <span className="text-white">Timecoder</span>,
        codeProjectProperies: {
            programmingLanguages: [programmingLanguages.typeScript],
            projectLanguage: "English",
            status: "In Developement",
            type: "Web application",
            launchLink: "https://timecoder.vercel.app/"
        }
    },
    createBlenderProject: {
        title: <>create&#8209;blender&#8209;project</>,
        path: "/code/create-blender-project/",
        repository: "create-blender-project",
        codeProjectProperies: {
            projectLanguage: "English",
            programmingLanguages: [programmingLanguages.bash],
            status: "Completed",
            type: "Terminal application"
        }
    },
    timeToWork: {
        title: "time-to-work",
        path: "/code/time-to-work/",
        repository: "time-to-work",

        customBadge: (
            <div className="w-full h-full flex justify-center items-center neumorphic-bg">
                <div className={"text-2xl neumorphic " + spaceMono}>
                    time-to-work
                </div>
            </div>
        ),
        badgeHoverText: <span className={"text-white dark:text-black"}>time-to-work</span>,

        codeProjectProperies: {
            programmingLanguages: [programmingLanguages.html, programmingLanguages.css, programmingLanguages.javaScript],
            projectLanguage: "German",
            status: "Completed",
            type: "Web application"
        }
    }
};