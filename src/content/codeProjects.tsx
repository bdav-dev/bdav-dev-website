import { StaticImageData } from "next/image";
import test from "@/../public/dev/test.png";

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
        image: test
    },

    timecoder2: {
        title: "Timecoder2",
        path: "/code/timecoder/",
        image: test
    }
};