import { CodeProject } from "@/content/codeProjects"
import PageBody from "./PageBody";
import CodeProjectOverview from "./CodeProjectOverview";

type CodeProjectProps = {
    codeProject: CodeProject
    children?: React.ReactNode
}

export default function CodeProject(props: CodeProjectProps) {
    return (
        <PageBody
            category="Code"
            sitePath={props.codeProject.path}
        >
            <CodeProjectOverview codeProject={props.codeProject}/>
            {props.children}
        </PageBody>
    );
}  