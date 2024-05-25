import PageBody from "@/components/pageLayout/PageBody";
import CodeProjectOverview from "./CodeProjectOverview";
import { CodeProject as CodeProjectType } from "@/content/code/codeProjects";

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
            <CodeProjectOverview codeProject={props.codeProject} />
            {props.children}
        </PageBody>
    );
}