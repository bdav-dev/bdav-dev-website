import HStack from "@/components/pageStructure/stacks/HStack";
import GitHubLink from "@/components/links/social/GitHubLink";
import InstagramLink from "@/components/links/social/InstagramLink";
import LinkedInLink from "@/components/links/social/LinkedInLink";
import PageBody from "@/components/pageLayout/PageBody";
import Article from "@/components/pageStructure/Article";

export default function About() {
    return (
        <PageBody category={"About"} sitePath={"/about/"}>
            <Article headline="Social">
                <HStack>
                    <LinkedInLink />
                    <GitHubLink />
                    <InstagramLink/>
                </HStack>
            </Article>
        </PageBody>
    );
}