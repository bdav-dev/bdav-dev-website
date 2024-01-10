import GitHubLink from "@/components/links/social/GitHubLink";
import InstagramLink from "@/components/links/social/InstagramLink";
import LinkedInLink from "@/components/links/social/LinkedInLink";
import PageBody from "@/components/pageLayout/PageBody";
import Article from "@/components/pageStructure/Article";
import Tile from "@/components/pageElements/Tile";
import Section from "@/components/pageStructure/Section";

export default function About() {
    return (
        <PageBody category={"About"} sitePath={"/about/"}>
            <Article headline="About">

                <Section headline={"Social"}>
                    <Tile className="text-center mb-3 mt-2">

                        <div className="my-1.5 text-lg">
                            Visit me on
                        </div>

                        <div className={`
                            flex
                            flex-col justify-center
                            sm:flex-row
                            items-center
                            sm:gap-2
                        `}>
                            <GitHubLink />
                            <InstagramLink />
                            <LinkedInLink />
                        </div>

                    </Tile>
                </Section>

            </Article>
        </PageBody>
    );
}