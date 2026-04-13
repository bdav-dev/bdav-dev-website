'use client';

import { ReactNode } from "react";
import { CodeProject } from "@/categories/code/content/codeProjects";
import Tile from "@/components/library/Tile";
import H2 from "@/components/library/headlines/H2";
import CodeProjectRibbon from "@/categories/code/components/layout/CodeProjectRibbon";
import SkeletonLoader from "@/components/SkeletonLoader";
import { CloudinaryImage as CloudinaryImageType } from "@/cloudinary";
import CloudinaryImage from "@/components/CloudinaryImage";
import createAccentColorStyle from "@/styling/accentColorOverride";
import CodeProjectAppIcon from "@/categories/code/components/icon/CodeProjectAppIcon";
import { useTheme } from "@/hooks/UseTheme";


type CodeProjectLayoutProps = {
    project: CodeProject,
    banner: {
        image: CloudinaryImageType | { light: CloudinaryImageType, dark: CloudinaryImageType },
        className?: string
    }
    children?: ReactNode
}

export default function CodeProjectLayout(props: CodeProjectLayoutProps) {
    const { resolveThemeSwitch } = useTheme();

    const image = resolveThemeSwitch(props.banner.image);

    return (
        <div style={createAccentColorStyle(props.project.accentColor)}>
            <div className={'relative mb-5 md:mb-20'}>
                <SkeletonLoader
                    key={image.src}
                    className={'h-[36rem] md:h-[30rem] w-full rounded-3xl'}
                    skeleton={({ className }) => <div className={`${className} skeleton`}/>}
                    component={
                        context =>
                            <CloudinaryImage
                                image={image}
                                alt={props.project.title}
                                className={`${context.className} object-cover ${props.banner.className}`}
                                draggable={false}
                                style={context.style}
                                onLoad={context.setLoaded}
                                quality={95}
                            />
                    }
                />

                <div className={'absolute flex flex-col gap-9 items-center justify-center p-8 inset-0'}>
                    <CodeProjectPanel codeProject={props.project}/>
                    <div className={'relative md:absolute bottom-0 translate-y-0 md:translate-y-1/2'}>
                        <CodeProjectRibbon codeProject={props.project}/>
                    </div>
                </div>
            </div>

            {props.children}
        </div>
    );
}

function CodeProjectPanel(props: { codeProject: CodeProject }) {
    return (
        <Tile className={'flex flex-col gap-2 items-center p-7 shadow-2xl shadow-zinc-600 dark:shadow-zinc-950 max-w-xl'}>
            <CodeProjectAppIcon project={props.codeProject} className={'h-32 w-32 mx-auto select-none drop-shadow-lg'}/>

            <H2 className={'font-semibold text-center'}>
                {props.codeProject.title}
            </H2>

            <p>
                {props.codeProject.tagline}
            </p>
        </Tile>
    );
}
