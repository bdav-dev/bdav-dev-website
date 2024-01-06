import { CodeProject } from "@/content/code/codeProjects";
import Link from "next/link";
import CodeProjectBadge from "../categories/code/CodeProjectBadge";

type CodeProjectProps = {
    codeProject: CodeProject
}

export default function CodeProjectLink(props: CodeProjectProps) {

    return (
        <Link className="inline-block w-fit rounded-2xl" href={props.codeProject.path} draggable="false">
            <CodeProjectBadge codeProject={props.codeProject} animated/>
        </Link>
    );
}