import CodeProjectLink from "@/components/links/CodeProjectLink";
import GitHubLink from "@/components/links/social/GitHubLink";
import Tile from "@/components/base/Tile";
import PageBody from "@/components/PageBody";
import { codeProjects } from "@/content/codeProjects";
import Section from "@/components/pageElements/Section";
import HStack from "@/components/base/stacks/HStack";

function mapCodeProjects() {
    return Object.values(codeProjects).map((codeProject, index) => {
        return (
            <CodeProjectLink
                codeProject={codeProject}
                key={index}
            />
        );
    });
}

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
                    {mapCodeProjects()}
                </div>
            </Section>

        </PageBody>
    );
}
