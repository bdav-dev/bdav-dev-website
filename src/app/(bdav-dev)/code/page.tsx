import CodeProjectLink from "@/components/link/content/CodeProjectLink";
import GitHubLink from "@/components/link/social/GitHubLink";
import HStack from "@/components/layout/stacks/HStack";
import { defaultMetadata } from "@/metadata";
import Tile from "@/components/Tile";
import Section from "@/components/document/Section";
import { CodeProjects } from "@/content/code/codeProjects";

export default function CodePage() {
    return (
        <>
            <Tile>
                <HStack className="ml-auto mr-auto w-fit items-center">
                    Visit me on <GitHubLink/>
                </HStack>
            </Tile>

            <Section headline="Projects" className="mt-4">
                <div className="mt-2.5 flex flex-row flex-wrap gap-2.5 justify-center sm:justify-normal">
                    {
                        Object.values(CodeProjects).map(
                            (codeProject, index) => <CodeProjectLink codeProject={codeProject} key={index}/>
                        )
                    }
                </div>
            </Section>
        </>
    );
}


export const metadata = {
    title: "bdav.dev – Code",
    description: "Code projects from David Berezowski.",
    ...defaultMetadata(["Code projects", "Code", "Project"])
}
