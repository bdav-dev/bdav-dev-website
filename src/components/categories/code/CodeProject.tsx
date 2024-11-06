import PageBody from "@/components/pageLayout/PageBody";
import CodeProjectInfo from "./CodeProjectInfo";
import { CodeProject as CodeProjectType } from "@/content/code/codeProjects";
import React from "react";

type CodeProjectProps = {
    codeProject: CodeProjectType
    children?: React.ReactNode
}

export default function CodeProject(props: CodeProjectProps) {
    return (
        <PageBody
            category="Code"
            sitePath={props.codeProject.path}
        >
            <CodeProjectInfo codeProject={props.codeProject}/>
            {props.children}
        </PageBody>
    );
}
