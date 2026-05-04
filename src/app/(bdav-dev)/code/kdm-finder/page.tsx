import { CodeProjects } from "@/categories/code/content/codeProjects";
import CodeProjectLayout from "@/categories/code/components/layout/CodeProjectLayout";
import ReadingLayout from "@/layout/ReadingLayout";
import SkeletonLoadingCloudinaryImage from "@/components/SkeletonLoadingCloudinaryImage";
import Tile from "@/components/library/Tile";
import React from "react";
import CodeProjectAction from "@/categories/code/components/CodeProjectAction";
import CodeProjectTitle from "@/categories/code/components/CodeProjectTitle";
import { Metadata } from "next";


export const metadata: Metadata = {
    title: `${CodeProjects.KdmFinder.title} – bdav.dev`,
    description: CodeProjects.KdmFinder.tagline
}

export default function KdmFinderPage() {
    const project = CodeProjects.KdmFinder;

    return (
        <CodeProjectLayout
            project={project}
            banner={
                {
                    image: images.banner,
                    className: 'brightness-[80%] dark:brightness-[60%]'
                }
            }
        >
            <ReadingLayout>
                <div className={'flex flex-col gap-5'}>
                    <Tile className={"flex-1 text-center"}>
                        <CodeProjectTitle project={project}/> is an application designed to help cinemas quickly find KDM files in their email accounts.
                    </Tile>

                    <SkeletonLoadingCloudinaryImage
                        alt={'KDM-Finder'}
                        image={images.kdmFinder}
                        skeletonClassName={'rounded-2xl'}
                        sharedClassName={'w-full'}
                        draggable={false}
                    />

                    <Tile>
                        KDM-Finder quickly finds KDMs (Key Delivery Messages) files within your email account.
                        It connects via IMAP, scans recent emails for KDM-related attachments like .xml or .zip files, and displays them in a clear, sorted list.
                        Users can review emails and save selected KDMs directly to their system, with automatic extraction of zip files.
                    </Tile>

                    <Tile className={'flex justify-center'}>
                        <CodeProjectAction project={project}/>
                    </Tile>
                </div>
            </ReadingLayout>
        </CodeProjectLayout>
    );
}

const images = {
    banner: {
        light: { src: '/code/kdm-finder/banner/banner-light.png', width: 3500, height: 1440 },
        dark: { src: '/code/kdm-finder/banner/banner-dark.png', width: 3500, height: 1440 }
    },
    kdmFinder: {
        light: { src: '/code/kdm-finder/kdm-finder-windows-light.png', width: 2222, height: 1440 },
        dark: { src: '/code/kdm-finder/kdm-finder-windows-dark.png', width: 2222, height: 1440 }
    }
}
