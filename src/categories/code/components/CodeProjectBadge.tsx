import H4 from "@/components/library/headlines/H4";
import { CodeProject } from "@/categories/code/content/codeProjects";
import createAccentColorStyle from "@/styles/accentColorOverride";
import CodeProjectAppIcon from "@/categories/code/components/icon/CodeProjectAppIcon";

type CodeProjectBadgeProps = {
    codeProject: CodeProject
}

export default function CodeProjectBadge({ codeProject }: CodeProjectBadgeProps) {
    return (
        <div
            className={"group flex items-center gap-3 p-6 w-92 h-28 max-w-full rounded-2xl bg-tile"}
            style={createAccentColorStyle(codeProject.accentColor)}
        >
            <CodeProjectAppIcon project={codeProject} className={'size-16 drop-shadow-sm'}/>

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
