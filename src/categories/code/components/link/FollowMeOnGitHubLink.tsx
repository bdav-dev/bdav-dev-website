import Link from "next/link";
import GitHubInvertocat from "@/icons/logo/GitHubInvertocat";
import Notebook from "@/components/library/Notebook";
import SkeletonLoadingCloudinaryImage from "@/components/SkeletonLoadingCloudinaryImage";


export default function FollowMeOnGitHubLink() {
    const githubHref = 'https://github.com/bdav-dev/';

    return (
        <div className={'flex flex-col md:flex-row items-center w-fit max-w-full gap-3 md:gap-2'}>
            <Link
                href={githubHref}
                className={'block w-fit max-w-full'}
            >
                <Notebook
                    screen={
                        <SkeletonLoadingCloudinaryImage
                            alt={'GitHub page of bdav-dev'}
                            image={
                                {
                                    light: { src: '/code/bdav-dev-github-light.png', width: 2228, height: 1440 },
                                    dark: { src: '/code/bdav-dev-github-dark.png', width: 2228, height: 1440 }
                                }
                            }
                            sharedClassName={'w-full h-full object-cover'}
                            draggable={false}
                        />
                    }
                    size={'32rem'}
                    className={'max-w-full'}
                />
            </Link>

            <div className={'flex flex-col gap-1'}>
                <div className={'text-sm text-center md:text-left text-neutral-700 dark:text-neutral-200'}>
                    follow me on
                </div>
                <Link
                    href={githubHref}
                    className={'w-fit text-3xl font-semibold flex flex-row gap-1.5'}
                >
                    <GitHubInvertocat className={'text-[0.85em]'}/>
                    GitHub
                </Link>
            </div>
        </div>
    );
}
