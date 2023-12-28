import { CodeProject } from "@/content/codeProjects";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import CodeProjectBadge from "../CodeProjectBadge";

type CodeProjectProps = {
    codeProject: CodeProject
}

export default function CodeProjectLink(props: CodeProjectProps) {

    return (
        <Link className="inline-block w-fit" href={props.codeProject.path} draggable="false">
            <CodeProjectBadge codeProject={props.codeProject} animated/>
        </Link>
    );
}