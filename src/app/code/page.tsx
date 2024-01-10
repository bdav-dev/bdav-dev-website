import CodeProjectLink from "@/components/links/content/CodeProjectLink";
import GitHubLink from "@/components/links/social/GitHubLink";
import HStack from "@/components/pageStructure/stacks/HStack";
import { defaultMetadata } from "../layout";
import PageBody from "@/components/pageLayout/PageBody";
import Tile from "@/components/pageElements/Tile";
import Section from "@/components/pageStructure/Section";
import { codeProjects } from "@/content/code/codeProjects";

export default function Code() {
    return (
        <PageBody
            category="Code"
            sitePath="/code"
        >
            <Tile>
                <HStack className="ml-auto mr-auto w-fit items-center">
                    Visit me on <GitHubLink />
                </HStack>
            </Tile>

            <Section headline="Projects" className="mt-4">
                <div className="mt-2.5 flex flex-row flex-wrap gap-2.5 justify-center sm:justify-normal">
                    {
                        Object.values(codeProjects).map(
                            (codeProject, index) => <CodeProjectLink codeProject={codeProject} key={index} />
                        )
                    }
                </div>
            </Section>

        </PageBody>
    );
}


export const metadata = {
    title: "bdav.dev – Code",
    description: "Code projects from David Berezowski",
    ...defaultMetadata(["Code projects", "Code", "Project"])    
}
