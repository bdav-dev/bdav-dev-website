'use client';

import H4 from "@/components/library/headlines/H4";
import { CodeProject } from "@/categories/code/content/codeProjects";
import createAccentColorStyle from "@/styling/accentColorOverride";
import CodeProjectAppIcon from "@/categories/code/components/icon/CodeProjectAppIcon";

type CodeProjectBadgeProps = {
    codeProject: CodeProject
}

export default function CodeProjectBadge({ codeProject }: CodeProjectBadgeProps) {

    return (
        <div
            className={"bg-tile w-[23rem] h-[7rem] rounded-2xl group flex gap-3 items-center p-6"}
            style={createAccentColorStyle(codeProject.accentColor)}
        >
            <CodeProjectAppIcon project={codeProject} className={'h-[4rem] w-[4rem]'}/>

            <div className={"flex flex-col gap-1 flex-1"}>
                <H4 className={'font-semibold group-hover:text-accent transition-colors ease-out leading-5'}>
                    {codeProject.title}
                </H4>

                <p className={'text-sm leading-4'}>
                    {codeProject.tagline}
                </p>
            </div>
        </div>
    );
}


