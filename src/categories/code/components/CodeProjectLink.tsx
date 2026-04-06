import { CodeProject } from "@/categories/code/content/codeProjects";
import Link from "next/link";
import CodeProjectBadge from "@/categories/code/components/CodeProjectBadge";
import ContentLinkPlaceholder from "@/components/link/content/ContentLinkPlaceholder";
import { BdavDev } from "@/routing";

type CodeProjectProps = {
    codeProject: CodeProject
}

export default function CodeProjectLink({ codeProject }: CodeProjectProps) {
    return (
        <Link
            href={BdavDev.code.$project.getRoute({ project: codeProject })}
            className={'rounded-2xl w-fit'}
            draggable={false}
        >
            <CodeProjectBadge codeProject={codeProject}/>
        </Link>
    );
}

export function CodeProjectLinkPlaceholder() {
    return <ContentLinkPlaceholder className={'w-[23rem] h-[7.5rem] rounded-2xl'}/>;
}