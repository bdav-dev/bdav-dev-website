import { CodeProject } from "@/content/codeProjects"
import PageBody from "./PageBody";

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
            {props.children}
        </PageBody>
    );
}  