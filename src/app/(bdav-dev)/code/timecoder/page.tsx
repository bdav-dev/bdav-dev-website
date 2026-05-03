import { CodeProjects } from "@/categories/code/content/codeProjects";
import CodeProjectLayout from "@/categories/code/components/layout/CodeProjectLayout";
import ReadingLayout from "@/layout/ReadingLayout";
import CodeProjectTitle from "@/categories/code/components/CodeProjectTitle";
import Tile from "@/components/library/Tile";
import { ThemeSwitch } from "@/contexts/ThemeContext";
import { CloudinaryImage } from "@/cloudinary";
import SkeletonLoadingCloudinaryImage from "@/components/SkeletonLoadingCloudinaryImage";
import CodeProjectAction from "@/categories/code/components/CodeProjectAction";


export default function TimecoderPage() {
    const project = CodeProjects.Timecoder;

    return (
        <CodeProjectLayout
            project={project}
            banner={
                {
                    image: { src: '/code/timecoder/banner.png', height: 3500, width: 1440 },
                    className: 'brightness-[90%] dark:brightness-[40%]'
                }
            }
        >
            <ReadingLayout>
                <div className={'flex flex-col gap-5'}>
                    <Tile className={'text-center'}>
                        <CodeProjectTitle project={project}/> is a tool that lets video producers and clients document and comment in/out timecodes.
                    </Tile>

                    <SkeletonLoadingCloudinaryImage
                        alt={'Timecoder'}
                        image={images.timecoder}
                        sharedClassName={"rounded-2xl"}
                        draggable={false}
                    />

                    <Tile className={'flex justify-center'}>
                        <CodeProjectAction project={project}/>
                    </Tile>
                </div>
            </ReadingLayout>
        </CodeProjectLayout>
    );
}

const images = {
    timecoder: { src: '/code/timecoder/timecoder.png', width: 3763, height: 1733 }
} as const satisfies Record<string, ThemeSwitch<CloudinaryImage>>;
