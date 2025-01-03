import { CodeProject } from "@/content/code/codeProjects";
import CodeProjectInfo from "@/components/categories/code/CodeProjectInfo";
import React from "react";


type CodeProjectLayoutProps = {
    codeProject: CodeProject
    children?: React.ReactNode
}

export default function CodeProjectLayout(props: CodeProjectLayoutProps) {
    return (
        <>
            <CodeProjectInfo codeProject={props.codeProject}/>
            {props.children}
        </>
    );
}
