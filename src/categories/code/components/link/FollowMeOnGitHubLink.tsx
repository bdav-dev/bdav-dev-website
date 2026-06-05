'use client';

import React from "react";
import Link from "next/link";
import GitHubInvertocat from "@/icons/logo/GitHubInvertocat";
import Notebook from "@/components/library/Notebook";


export default function FollowMeOnGitHubLink() {
    const githubHref = 'https://github.com/bdav-dev/';

    return (
        <div className={'flex flex-col md:flex-row items-center w-fit max-w-full gap-3 md:gap-2'}>
            <Link
                href={githubHref}
                className={'block w-fit max-w-full'}
            >
                <Notebook
                    screen={<div className={'w-full h-full bg-red-500'}></div>}
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
