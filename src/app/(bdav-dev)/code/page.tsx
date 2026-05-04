import CodeProjectLink from "@/categories/code/components/CodeProjectLink";
import { CodeProjects } from "@/categories/code/content/codeProjects";
import { Metadata } from "next";
import Tile from "@/components/library/Tile";
import Article from "@/components/layout/document/Article";
import { CodeProjectType, CodeProjectTypes } from "@/categories/code/content/codeProjectType";
import Section from "@/components/layout/document/Section";
import CodeProjectTypeIcon from "@/categories/code/components/icon/CodeProjectTypeIcon";


export const metadata: Metadata = {
    title: "Code – bdav.dev",
    description: "Code projects from David Berezowski."
}

export default function CodePage() {
    return (
        <div className={'flex flex-col gap-5'}>
            <Tile>
                Laptop with GitHub
            </Tile>
            <Article headline={'Projects'}>
                {
                    Object.values(CodeProjectTypes).map((type, index) => <CodeProjectTypeSection type={type} key={index}/>)
                }
            </Article>
        </div>
    );
}

function CodeProjectTypeSection(props: { type: CodeProjectType }) {
    return (
        <Section
            headline={
                <div className={'flex flex-row items-center gap-1.5'}>
                    <CodeProjectTypeIcon className={'text-[0.8em]'} type={props.type} weight={400}/>
                    {props.type.pluralLabel}
                </div>
            }
            className={'mb-2'}
        >
            <div className={"mt-0.5 flex flex-row flex-wrap gap-2.5"}>
                {
                    Object.values(CodeProjects)
                        .filter(project => project.type.id === props.type.id)
                        .map((project, index) => <CodeProjectLink codeProject={project} key={index}/>)
                }
            </div>
        </Section>
    );
}
