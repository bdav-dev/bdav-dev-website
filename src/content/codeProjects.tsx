import { StaticImageData } from "next/image";

import timecoderBadge from '@/../public/dev/timecoder-badge.webp';

export type CodeProject = {
    title: string,
    path: string,
    image: StaticImageData
};

type CodeProjects = {
    [key: string]: CodeProject
}


export const codeProjects: CodeProjects = {
    timecoder: {
        title: "Timecoder",
        path: "/code/timecoder/",
        image: timecoderBadge
    }
};