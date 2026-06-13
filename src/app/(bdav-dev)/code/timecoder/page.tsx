import { CodeProjects } from "@/categories/code/content/codeProjects";
import CodeProjectLayout from "@/categories/code/components/layout/CodeProjectLayout";
import CodeProjectTitle from "@/categories/code/components/CodeProjectTitle";
import Tile from "@/components/library/Tile";
import { ThemeSwitch } from "@/contexts/ThemeContext";
import { CloudinaryImage } from "@/utilities/cloudinary";
import SkeletonLoadingCloudinaryImage from "@/components/image/SkeletonLoadingCloudinaryImage";
import CodeProjectAction from "@/categories/code/components/CodeProjectAction";
import { Metadata } from "next";


export const metadata: Metadata = {
    title: `${CodeProjects.Timecoder.title} – bdav.dev`,
    description: CodeProjects.Timecoder.tagline
}

export default function TimecoderPage() {
    const project = CodeProjects.Timecoder;

    return (
        <CodeProjectLayout
            project={project}
            banner={{ className: 'brightness-[90%] dark:brightness-[40%]' }}
        >
            <div className={'flex flex-col gap-gutter'}>
                <Tile className={'text-center'}>
                    <CodeProjectTitle project={project}/> is a tool that lets video producers and clients document and comment in/out timecodes.
                </Tile>

                <SkeletonLoadingCloudinaryImage
                    alt={'Timecoder'}
                    image={images.timecoder}
                    sharedClassName={'rounded-tile'}
                    draggable={false}
                />

                <Tile className={'flex justify-center'}>
                    <CodeProjectAction project={project}/>
                </Tile>
            </div>
        </CodeProjectLayout>
    );
}

const images = {
    timecoder: { src: '/code/timecoder/timecoder.png', width: 3763, height: 1733 }
} as const satisfies Record<string, ThemeSwitch<CloudinaryImage>>;
