import { StaticImageData } from "next/image";

import timecoderBadge from '@/../public/dev/timecoder-badge.webp';

export type CodeProject = {
    title: string | React.ReactNode,
    path: string,
    repository: string,
    badgeHoverText?: string | React.ReactNode,
    badgeText?: string | React.ReactNode,
    dropdownText?: string | React.ReactNode,
    image?: StaticImageData,
    codeProjectProperies: CodeProjectProperties
};

type CodeProjects = {
    [key: string]: CodeProject
}

type CodeProjectProperties = {
    projectLanguage: 'English' | 'German',
    programmingLanguage: ProgrammingLanguage
    status: 'In Developement' | 'Maintaining' | 'Completed',
    type: 'Web application' | 'Desktop application' | 'Terminal application',
    launchLink?: string
}

type ProgrammingLanguage = {
    name: string,
    className: string
}

const programmingLanguages: {[key: string]: ProgrammingLanguage} = {
    typeScript: {
        name: "TypeScript",
        className: "bg-blue-600 text-white"
    },
    bash: {
        name: "Bash",
        className: "bg-green-600 text-white"
    }
};


export const codeProjects: CodeProjects = {
    timecoder: {
        title: "Timecoder",
        path: "/code/timecoder/",
        repository: "timecoder",
        image: timecoderBadge,
        badgeHoverText: <span className="text-white">Timecoder</span>,
        codeProjectProperies: {
            programmingLanguage: programmingLanguages.typeScript,
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
            programmingLanguage: programmingLanguages.bash,
            status: "Completed",
            type: "Terminal application"
        }
    }
};