import { CodeProject } from "@/content/code/codeProjects";
import Link from "next/link";
import CodeProjectBadge from "@/components/categories/code/CodeProjectBadge";
import ContentLinkPlaceholder from "@/components/link/content/ContentLinkPlaceholder";
import { Route } from "@/utils/RouteUtils";

type CodeProjectProps = {
    codeProject: CodeProject
}

export default function CodeProjectLink({ codeProject }: CodeProjectProps) {
    return (
        <Link
            className="w-fit rounded-2xl drop-shadow-sm"
            href={Route.codeProject(codeProject)}
            draggable="false"
        >
            <CodeProjectBadge codeProject={codeProject} animated/>
        </Link>
    );
}

export function CodeProjectLinkPlaceholder() {
    return <ContentLinkPlaceholder className={'w-72 h-32 rounded-2xl'}/>;
}