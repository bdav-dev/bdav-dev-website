import { CodeProject } from "@/content/code/codeProjects";
import CodeProjectBadge from "./CodeProjectBadge";
import Link from "next/link";
import Tile from "@/components/pageElements/Tile";
import Headline from "@/components/pageStructure/headlines/Headline";
import GitHubRepoLink from "@/components/links/social/GitHubRepoLink";
import Code from "@/components/pageElements/Code";
import CodeLanguageBadge from "./CodeLanguageBadge";

type CodeProjectOverviewProps = {
    codeProject: CodeProject
}

export default function CodeProjectOverview(props: CodeProjectOverviewProps) {
    return (
        <Tile className="w-fit mr-auto ml-auto mb-5 py-3 sm:py-2 sm:px-3">

            <div className="flex flex-col sm:flex-row justify-center gap-3 items-center">

                <CodeProjectBadge codeProject={props.codeProject} />

                <div>
                    <Headline>
                        <div className="flex flex-row justify-between h-9">
                            <div className="mt-auto">
                                {props.codeProject.title}
                            </div>

                            <div className="flex flex-row gap-1">
                                <GitHubRepoLink repository={props.codeProject.repository} className="mb-1 w-8" />

                                {
                                    props.codeProject.codeProjectProperies.launchLink
                                        ? <Link
                                            href={props.codeProject.codeProjectProperies.launchLink}
                                            className={`
                                                text-lg text-white
                                                bg-blue-500
                                                transition-transform hover:scale-105
                                                px-1.5 mb-1
                                                flex items-center
                                                rounded-lg
                                            `}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >Launch</Link>
                                        : <></>
                                }
                            </div>
                        </div>
                    </Headline>

                    <table>
                        <tbody>

                            <tr>
                                <td className="px-1">Project Language</td>
                                <td className="px-1">
                                    <Code noMono largePadding>{props.codeProject.codeProjectProperies.projectLanguage}</Code>
                                </td>
                            </tr>

                            <tr className="border-t border-zinc-300 dark:border-zinc-800">
                                <td className="px-1">Status</td>
                                <td className="px-1">{props.codeProject.codeProjectProperies.status}</td>
                            </tr>

                            <tr className="border-t border-zinc-300 dark:border-zinc-800">
                                <td className="px-1">Type</td>
                                <td className="px-1">{props.codeProject.codeProjectProperies.type}</td>
                            </tr>

                            <tr className="border-t border-zinc-300 dark:border-zinc-800">
                                <td className="px-1">Programming Language</td>
                                <td className="px-1">
                                    <div className="flex flex-row mt-0.5 gap-0.5">
                                        {
                                            props.codeProject.codeProjectProperies.programmingLanguages.map(
                                                (lang, index) => (
                                                    <CodeLanguageBadge lang={lang} key={index}/>
                                                )
                                            )
                                        }
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </Tile>
    );
}