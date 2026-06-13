import { CodeProject } from "@/categories/code/content/codeProjects";
import Link from "next/link";
import CodeProjectBadge from "@/categories/code/components/CodeProjectBadge";
import { BdavDev } from "@/utilities/routing";


type CodeProjectProps = {
    codeProject: CodeProject
}

export default function CodeProjectLink({ codeProject }: CodeProjectProps) {
    return (
        <Link
            href={BdavDev.code.$project.getRoute({ project: codeProject })}
            className={'block rounded-2xl max-w-full'}
        >
            <CodeProjectBadge codeProject={codeProject}/>
        </Link>
    );
}
