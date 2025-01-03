import { CodeProject } from "@/content/code/codeProjects";
import CodeProjectBadge from "./CodeProjectBadge";
import Tile from "@/components/Tile";
import CodeLanguageBadge from "./CodeLanguageBadge";
import Highlight from "@/components/Highlight";
import Table from "@/components/Table";
import GitHubRepoLink from "@/components/link/social/GitHubRepoLink";
import Link from "next/link";

type CodeProjectInfoProps = {
    codeProject: CodeProject
}

export default function CodeProjectInfo(props: CodeProjectInfoProps) {
    return (
        <Tile className="w-fit mr-auto ml-auto mb-5 py-3 sm:py-2 sm:px-3">

            <div className="flex flex-col sm:flex-row justify-center gap-3 items-center">

                <CodeProjectBadge codeProject={props.codeProject}/>

                <Table
                    header={
                        <div className={'flex flex-row items-end'}>
                            <span className={'text-xl'}>{props.codeProject.title}</span>
                            <div className={'flex flex-row mb-0.5 gap-1 justify-end ml-auto'}>
                                <GitHubRepoLink repository={props.codeProject.repository}/>
                                {
                                    props.codeProject.properties.launchLink &&
                                    <Link
                                        className={`
                                                text-lg text-white
                                                bg-blue-500
                                                transition-transform hover:scale-105
                                                px-1.5
                                                flex items-center
                                                rounded-lg
                                            `}
                                        href={props.codeProject.properties.launchLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Launch
                                    </Link>
                                }
                            </div>
                        </div>
                    }
                    data={[
                        ['Project Language', <Highlight>{props.codeProject.properties.projectLanguage}</Highlight>],
                        ['Status', props.codeProject.properties.status],
                        ['Type', props.codeProject.properties.type],
                        [
                            'Programming Language',
                            <div className={'flex flex-row mt-0.5 gap-0.5'}>
                                {
                                    props.codeProject.properties.programmingLanguages.map(
                                        (lang, i) => <CodeLanguageBadge key={i} lang={lang}/>
                                    )
                                }
                            </div>
                        ]
                    ]}
                />
            </div>
        </Tile>
    );
}