import CodeProjectLink from "@/components/links/CodeProjectLink";
import GitHubLink from "@/components/links/social/GitHubLink";
import Headline from "@/components/base/Headline";
import Tile from "@/components/base/Tile";
import PageBody from "@/components/PageBody";
import { codeProjects } from "@/content/codeProjects";

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
                <div className="ml-auto mr-auto w-fit">
                    Visit me on
                    <GitHubLink />
                </div>
            </Tile>

            <Headline className="mt-4">Projects</Headline>

            <div className="flex flex-row flex-wrap gap-5 justify-center sm:justify-normal">
                {mapCodeProjects()}
            </div>

        </PageBody>
    );
}
