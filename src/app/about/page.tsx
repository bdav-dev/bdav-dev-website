import HStack from "@/components/base/stacks/HStack";
import GitHubLink from "@/components/links/social/GitHubLink";
import InstagramLink from "@/components/links/social/InstagramLink";
import LinkedInLink from "@/components/links/social/LinkedInLink";
import PageBody from "@/components/PageBody";
import Article from "@/components/pageElements/Article";

export default function About() {
    return (
        <PageBody category={"About"} sitePath={"/about/"}>
            <Article pageTitle="Social">

                <HStack>
                    <LinkedInLink />
                    <GitHubLink />
                    <InstagramLink/>
                </HStack>

            </Article>
        </PageBody>
    );
}