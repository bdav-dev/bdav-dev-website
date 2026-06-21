import { ReactNode } from "react";
import { CodeProject } from "@/categories/code/content/codeProjects";
import Tile from "@/components/library/Tile";
import H2 from "@/components/library/headlines/H2";
import CodeProjectRibbon from "@/categories/code/components/layout/CodeProjectRibbon";
import createAccentColorStyle from "@/styles/accentColorOverride";
import CodeProjectAppIcon from "@/categories/code/components/icon/CodeProjectAppIcon";
import SkeletonLoadingCloudinaryImage from "@/components/image/SkeletonLoadingCloudinaryImage";
import ReadingLayout from "@/components/library/layout/ReadingLayout";


type CodeProjectLayoutProps = {
    project: CodeProject,
    banner: {
        className?: string
    }
    children?: ReactNode
}

export default function CodeProjectLayout(props: CodeProjectLayoutProps) {
    return (
        <div style={createAccentColorStyle(props.project.accentColor)}>
            <div className={'relative mb-5 md:mb-20'}>
                <SkeletonLoadingCloudinaryImage
                    preload
                    image={props.project.banner}
                    alt={'Banner'}
                    className={'h-144 md:h-120 w-full rounded-3xl object-cover'}
                    loadedClassName={props.banner.className}
                    quality={95}
                    draggable={false}
                />

                <div className={'absolute flex flex-col gap-9 items-center justify-center p-8 inset-0'}>
                    <CodeProjectPanel codeProject={props.project}/>
                    <div className={'relative md:absolute bottom-0 translate-y-0 md:translate-y-1/2'}>
                        <CodeProjectRibbon codeProject={props.project}/>
                    </div>
                </div>
            </div>

            <ReadingLayout>
                {props.children}
            </ReadingLayout>
        </div>
    );
}

function CodeProjectPanel(props: { codeProject: CodeProject }) {
    return (
        <Tile className={'flex flex-col gap-2 items-center p-7 shadow-2xl shadow-zinc-600 dark:shadow-zinc-950 max-w-xl'}>
            <CodeProjectAppIcon project={props.codeProject} className={'h-32 w-32 mx-auto drop-shadow-lg'}/>

            <H2 className={'font-semibold text-center'}>
                {props.codeProject.title}
            </H2>

            <p>
                {props.codeProject.tagline}
            </p>
        </Tile>
    );
}
