import CodeProjectLayout from "@/categories/code/components/layout/CodeProjectLayout";
import { CodeProjects } from "@/categories/code/content/codeProjects";
import ReadingLayout from "@/layout/ReadingLayout";
import Tile from "@/components/library/Tile";
import Enumerate from "@/components/library/Enumerate";
import SkeletonLoadingCloudinaryImage from "@/components/SkeletonLoadingCloudinaryImage";
import { ThemeSwitch } from "@/contexts/ThemeContext";
import { CloudinaryImage } from "@/cloudinary";
import CodeProjectAction from "@/categories/code/components/CodeProjectAction";
import { SplitLayout } from "@/components/library/layout/SplitLayout";
import CodeProjectTitle from "@/categories/code/components/CodeProjectTitle";
import { Metadata } from "next";


export const metadata: Metadata = {
    title: `${CodeProjects.TimeToWork.title} – bdav.dev`,
    description: CodeProjects.TimeToWork.tagline
}

export default function TimeToWorkPage() {
    const project = CodeProjects.TimeToWork;

    return (
        <CodeProjectLayout
            project={project}
            banner={{ image: images.banner, className: 'brightness-[80%] dark:brightness-[70%]' }}
        >
            <ReadingLayout>
                <div className={'flex flex-col gap-5'}>
                    <Tile className={'text-center'}>
                        <CodeProjectTitle project={project}/> is a simple, browser-based work time dashboard that helps you keep track of your working hours throughout the day.
                    </Tile>

                    <SplitLayout
                        left={
                            <Tile>
                                Instead of relying on mental math, you can track your work and break time and instantly see where you stand.
                                time-to-work gives you clear answers to the questions that matter, such as:
                                <Enumerate
                                    items={
                                        [
                                            "How long have I worked today?",
                                            "How much time is left?",
                                            "When can I go home?",
                                            "What's my current overtime balance?"
                                        ]
                                    }
                                />
                            </Tile>
                        }
                        right={<TimeToWorkImage alt={'Table'} image={images.table}/>}
                    />

                    <SplitLayout
                        left={
                            <Tile>
                                You can log your time the way that feels most natural to you, either by logging timestamps or entering a time range manually.<br/>
                                Everything is neatly presented on a timeline, so you always have a clear overview of your day.
                            </Tile>
                        }
                        right={<TimeToWorkImage alt={'Timeline'} image={images.timeline}/>}
                        reverse
                    />

                    <SplitLayout
                        left={
                            <Tile>
                                For commuters, time-to-work goes one step further:<br/>
                                It helps you plan exactly when to leave your workplace so you can catch your next train or other public transport on time, taking into account walking time and train
                                intervals.<br/>
                                No more guessing or rushing at the last minute!
                            </Tile>
                        }
                        right={<TimeToWorkImage alt={'Public transport'} image={images.publicTransport}/>}
                    />

                    <SplitLayout
                        left={
                            <Tile>
                                Based on your working hours, breaks, and overtime balance, the app continuously tracks your progress and estimates when your workday will end.<br/>
                                If you decide to leave earlier, it also shows how that would affect your overtime balance.
                            </Tile>
                        }
                        right={<TimeToWorkImage alt={'Overtime'} image={images.overtime}/>}
                        reverse
                    />

                    <div className={'flex flex-col-reverse lg:flex-col gap-5'}>
                        <Tile>
                            The clean, modern interface, which uses the neumorphic design language, keeps everything easy to read and comfortable to use throughout the day.
                            With both light and dark mode support, it adapts to your preference.
                            The app data is stored locally in your browser, so your progress is still there when you come back.
                        </Tile>
                        <TimeToWorkImage alt={'time-to-work'} image={images.banner}/>
                    </div>

                    <Tile className={'flex justify-center'}>
                        <CodeProjectAction project={project} message={'Try a preview!'}/>
                    </Tile>
                </div>
            </ReadingLayout>
        </CodeProjectLayout>
    );
}

function TimeToWorkImage(props: { image: ThemeSwitch<CloudinaryImage>, alt: string }) {
    return (
        <SkeletonLoadingCloudinaryImage
            {...props}
            sharedClassName={'w-full h-full object-cover rounded-xl'}
            quality={95}
            draggable={false}
        />
    );
}

const images = {
    banner: {
        light: { src: '/code/time-to-work/banner/banner-light.png', width: 2934, height: 1440 },
        dark: { src: '/code/time-to-work/banner/banner-dark.png', width: 2934, height: 1440 }
    },
    table: {
        light: { src: '/code/time-to-work/table-light.png', width: 1920, height: 640 },
        dark: { src: '/code/time-to-work/table-dark.png', width: 1920, height: 640 }
    },
    timeline: {
        light: { src: '/code/time-to-work/timeline-light.png', width: 1920, height: 640 },
        dark: { src: '/code/time-to-work/timeline-dark.png', width: 1920, height: 640 }
    },
    publicTransport: {
        light: { src: '/code/time-to-work/public-transport-light.png', width: 1920, height: 640 },
        dark: { src: '/code/time-to-work/public-transport-dark.png', width: 1920, height: 640 }
    },
    overtime: {
        light: { src: '/code/time-to-work/overtime-light.png', width: 1920, height: 640 },
        dark: { src: '/code/time-to-work/overtime-dark.png', width: 1920, height: 640 }
    }
} as const satisfies Record<string, ThemeSwitch<CloudinaryImage>>;
