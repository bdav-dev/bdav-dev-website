import { CodeProject } from "@/content/codeProjects";
import HStack from "./base/stacks/HStack";
import CodeProjectBadge from "./CodeProjectBadge";
import Headline from "./pageElements/headlines/Headline";
import Code from "./base/Code";
import Tile from "./base/Tile";
import Link from "next/link";
import GitHubRepoLink from "./links/social/GitHubRepoLink";

type CodeProjectOverviewProps = {
    codeProject: CodeProject
}

export default function CodeProjectOverview(props: CodeProjectOverviewProps) {
    return (
        <Tile className="w-fit mr-auto ml-auto mb-5 px-3.5">

            <HStack className="justify-center gap-3 items-center">

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
                                            className="hover:scale-105 transition-transform text-white bg-blue-500 px-1.5 rounded-lg text-lg mb-1 flex items-center"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >Launch</Link>
                                        : null
                                }
                            </div>
                        </div>
                    </Headline>

                    <table>
                        <tbody>
                            <tr>
                                <td className="px-1">Project Language</td>
                                <td className="px-1"><Code noMono largePadding>{props.codeProject.codeProjectProperies.projectLanguage}</Code></td>
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
                                    <Code noMono largePadding
                                        customColor={props.codeProject.codeProjectProperies.programmingLanguage.className}
                                    >
                                        {props.codeProject.codeProjectProperies.programmingLanguage.name}
                                    </Code>
                                </td>
                            </tr>
                        </tbody>
                    </table>

                </div>

            </HStack>
            
        </Tile>
    );
}