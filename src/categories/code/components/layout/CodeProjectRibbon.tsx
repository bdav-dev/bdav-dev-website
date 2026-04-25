import { CodeProject, CodeProjectAction } from "@/categories/code/content/codeProjects";
import CodeLanguageBadge from "@/categories/code/components/CodeLanguageBadge";
import VerticalRuler from "@/components/library/VerticalRuler";
import GitHubRepositoryLink from "@/categories/code/components/GitHubRepositoryLink";
import DownloadButton from "@/components/library/DownloadButton";
import HyperLink from "@/components/library/link/HyperLink";
import MaterialSymbol, { MaterialSymbols } from "@/icons/material/MaterialSymbol";
import InlineIcon from "@/components/InlineIcon";
import CodeProjectTypeIcon from "@/categories/code/components/icon/CodeProjectTypeIcon";
import CodeProjectStatusIcon from "@/categories/code/components/icon/CodeProjectStatusIcon";
import GermanyFlag from "../../../../components/misc/GermanyFlag";


type CodeProjectRibbonProps = {
    codeProject: CodeProject
}

export default function CodeProjectRibbon({ codeProject }: CodeProjectRibbonProps) {
    return (
        <div className={'flex flex-row flex-wrap items-center justify-center gap-4 md:gap-5 py-4 md:py-3 px-4 rounded-2xl md:rounded-full bg-tile'}>
            <InlineIcon icon={<CodeProjectTypeIcon type={codeProject.type} weight={350}/>}>
                {codeProject.type.label}
            </InlineIcon>

            <div className={'flex gap-1.5'}>
                {
                    codeProject.codeLanguages.map((language, index) => <CodeLanguageBadge language={language} key={index}/>)
                }
            </div>

            {
                codeProject.status &&
                <div style={{ color: codeProject.status.color }}>
                    <InlineIcon icon={<CodeProjectStatusIcon status={codeProject.status} weight={300}/>}>
                        {codeProject.status.label}
                    </InlineIcon>
                </div>
            }

            {
                codeProject.isGerman &&
                <div className={'flex gap-1 items-center'}>
                    <GermanyFlag size={'1.25rem'}/> German
                </div>
            }

            <VerticalRuler className={'h-6 hidden md:block'}/>

            <GitHubRepositoryLink href={codeProject.repositoryUrl}/>

            {
                codeProject.action &&
                renderAction(codeProject.action)
            }
        </div>
    );
}

function renderAction(action: CodeProjectAction) {
    switch (action.type) {
        case "Download":
            return <DownloadButton url={action.url} fileName={action.fileName}/>;
        case "Launch":
            return <LaunchLink href={action.url}/>;
    }
}

function LaunchLink(props: { href: string }) {
    return (
        <HyperLink
            href={props.href}
            icon={<MaterialSymbol symbol={MaterialSymbols.ROCKET_LAUNCH} weight={300}/>}
            discreet
        >
            Launch
        </HyperLink>
    );
}
