import timecoderBadge from '@/../public/code/timecoder/timecoder-badge.webp';
import kdmFinderBadge from '@/../public/code/kdm-finder/kdm-finder-badge.webp';
import { mono } from "@/fonts";
import Image, { StaticImageData } from "next/image";
import React from "react";

export type CodeProject = {
    title: string | React.ReactNode,
    path: string,
    repository: string,

    badgeHoverText?: string | React.ReactNode,

    customBadge?: React.ReactNode,
    customBadgeText?: string | React.ReactNode,
    customBadgeImage?: StaticImageData,

    customDropdownText?: string | React.ReactNode,

    codeProjectProperties: CodeProjectProperties
};

type CodeProjects = {
    [key: string]: CodeProject
}

type CodeProjectProperties = {
    projectLanguage: 'English' | 'German',
    programmingLanguages: ProgrammingLanguage[]
    status: 'In Development' | 'Maintaining' | 'Completed',
    type: 'Web application' | 'Desktop application' | 'Terminal application',
    launchLink?: string
}

export type ProgrammingLanguage = {
    name: string,
    bgColor: string,
    textColor?: string
}

export const programmingLanguages: { [key: string]: ProgrammingLanguage } = {
    typeScript: {
        name: "TypeScript",
        bgColor: "#2D79C7"
    },
    bash: {
        name: "Bash",
        bgColor: "#46B152"
    },
    html: {
        name: "HTML",
        bgColor: "#EE5F27"
    },
    css: {
        name: "CSS",
        bgColor: "#275DED"
    },
    javaScript: {
        name: "JavaScript",
        bgColor: "#F0DB4E",
        textColor: "#323230"

    },
    java: {
        name: "Java",
        bgColor: "#ED272C"
    },
    abap: {
        name: "ABAP",
        bgColor: "#094789"
    },
    python: {
        name: "Python",
        bgColor: "#2C6999"
    }
};


export const codeProjects: CodeProjects = {
    kdmFinder: {
        title: "KDM-Finder",
        path: "/code/kdm-finder/",
        repository: "kdm-finder",

        customBadge: (
            <div className="w-full h-full flex justify-center items-center bg-[#161616] select-none">
                <Image
                    alt='KDM-Finder badge'
                    src={kdmFinderBadge}
                    className='h-full object-contain p-4'
                    draggable={false}
                />
            </div>
        ),
        badgeHoverText: <span className='text-white'>KDM-Finder</span>,

        codeProjectProperties: {
            programmingLanguages: [programmingLanguages.python],
            projectLanguage: "English",
            status: "Maintaining",
            type: "Desktop application"
        }
    },
    createBlenderProject: {
        title: <>create&#8209;blender&#8209;project</>,
        path: "/code/create-blender-project/",
        repository: "create-blender-project",
        codeProjectProperties: {
            projectLanguage: "English",
            programmingLanguages: [programmingLanguages.bash],
            status: "Completed",
            type: "Terminal application"
        }
    },
    timecoder: {
        title: "Timecoder",
        path: "/code/timecoder/",
        repository: "timecoder",
        customBadgeImage: timecoderBadge,
        badgeHoverText: <span className="text-white">Timecoder</span>,
        codeProjectProperties: {
            programmingLanguages: [programmingLanguages.typeScript],
            projectLanguage: "English",
            status: "In Development",
            type: "Web application",
            launchLink: "https://timecoder.vercel.app/"
        }
    },
    timeToWork: {
        title: "time-to-work",
        path: "/code/time-to-work/",
        repository: "time-to-work",

        customBadge: (
            <div className="w-full h-full flex justify-center items-center neumorphic-bg">
                <div className={"text-2xl neumorphic " + mono}>
                    time-to-work
                </div>
            </div>
        ),
        badgeHoverText: <span className={"text-white dark:text-black"}>time-to-work</span>,

        codeProjectProperties: {
            programmingLanguages: [programmingLanguages.html, programmingLanguages.css, programmingLanguages.javaScript],
            projectLanguage: "German",
            status: "Completed",
            type: "Web application"
        }
    }
};