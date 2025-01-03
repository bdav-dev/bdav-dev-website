import timecoderBadge from '@/../public/code/timecoder/timecoder-badge.webp';
import kdmFinderBadge from '@/../public/code/kdm-finder/kdm-finder-badge.webp';
import { mono } from "@/fonts";
import Image, { StaticImageData } from "next/image";
import React from "react";

export type CodeProject = {
    routeSegment: string,
    title: string | React.ReactNode,
    repository: string,
    properties: {
        projectLanguage: 'English' | 'German',
        programmingLanguages: ProgrammingLanguage[]
        status: 'In Development' | 'Maintaining' | 'Completed',
        type: 'Web application' | 'Desktop application' | 'Terminal application',
        launchLink?: string
    }

    badgeHoverText?: string | React.ReactNode,
    customBadge?: React.ReactNode,
    customBadgeText?: string | React.ReactNode,

    customBadgeImage?: StaticImageData,

    customDropdownText?: string | React.ReactNode,
}

export type ProgrammingLanguage = {
    name: string,
    bgColor: string,
    textColor?: string
}

export const ProgrammingLanguages: { [key: string]: ProgrammingLanguage } = {
    TypeScript: {
        name: "TypeScript",
        bgColor: "#2D79C7"
    },
    Bash: {
        name: "Bash",
        bgColor: "#46B152"
    },
    HTML: {
        name: "HTML",
        bgColor: "#EE5F27"
    },
    CSS: {
        name: "CSS",
        bgColor: "#663399"
    },
    JavaScript: {
        name: "JavaScript",
        bgColor: "#F0DB4E",
        textColor: "#323230"
    },
    Java: {
        name: "Java",
        bgColor: "#ED272C"
    },
    ABAP: {
        name: "ABAP",
        bgColor: "#094789"
    },
    Python: {
        name: "Python",
        bgColor: "#2C6999"
    }
}

export const CodeProjects: { [key: string]: CodeProject } = {
    kdmFinder: {
        title: "KDM-Finder",
        repository: "kdm-finder",
        routeSegment: 'kdm-finder',

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

        properties: {
            programmingLanguages: [ProgrammingLanguages.Python],
            projectLanguage: "English",
            status: "Maintaining",
            type: "Desktop application"
        }
    },
    createBlenderProject: {
        routeSegment: 'create-blender-project',
        title: <>create&#8209;blender&#8209;project</>,
        repository: "create-blender-project",
        properties: {
            projectLanguage: "English",
            programmingLanguages: [ProgrammingLanguages.Bash],
            status: "Completed",
            type: "Terminal application"
        }
    },
    timecoder: {
        routeSegment: 'timecoder',
        title: "Timecoder",
        repository: "timecoder",
        customBadgeImage: timecoderBadge,
        badgeHoverText: <span className="text-white">Timecoder</span>,
        properties: {
            programmingLanguages: [ProgrammingLanguages.TypeScript],
            projectLanguage: "English",
            status: "In Development",
            type: "Web application",
            launchLink: "https://timecoder.vercel.app/"
        }
    },
    timeToWork: {
        routeSegment: 'time-to-work',
        title: "time-to-work",
        repository: "time-to-work",

        customBadge: (
            <div className="w-full h-full flex justify-center items-center neumorphic-bg">
                <div className={"text-2xl neumorphic " + mono}>
                    time-to-work
                </div>
            </div>
        ),
        badgeHoverText: <span className={"text-white dark:text-black"}>time-to-work</span>,

        properties: {
            programmingLanguages: [ProgrammingLanguages.HTML, ProgrammingLanguages.CSS, ProgrammingLanguages.JavaScript],
            projectLanguage: "German",
            status: "Completed",
            type: "Web application"
        }
    }
};