import { StaticImageData } from "next/image";

import timecoderBadge from '@/../public/dev/timecoder-badge.webp';


export type CodeProject = {
    title: string | React.ReactNode,
    linkText?: string | React.ReactNode,
    path: string,
    image: StaticImageData,
    codeProjectProperies: CodeProjectProperties
};

type CodeProjects = {
    [key: string]: CodeProject
}

type CodeProjectProperties = {
    projectLanguage: 'English' | 'German',
    programmingLanguage: ProgrammingLanguage
    status: 'In Developement' | 'Maintaining',
    type: 'Web application' | 'Desktop application',
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
        image: timecoderBadge,
        linkText: <span className="text-white">Timecoder</span>,
        codeProjectProperies: {
            programmingLanguage: programmingLanguages.typeScript,
            projectLanguage: "English",
            status: "In Developement",
            type: "Web application",
            launchLink: "https://timecoder.vercel.app/"
        }
    }
};