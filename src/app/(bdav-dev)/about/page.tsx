import GitHubLink from "@/components/link/social/GitHubLink";
import InstagramLink from "@/components/link/social/InstagramLink";
import LinkedInLink from "@/components/link/social/LinkedInLink";
import Article from "@/components/layout/document/Article";
import Tile from "@/components/library/Tile";
import Section from "@/components/layout/document/Section";
import CodeIcon from "@/icons/deprecated/CodeIcon";
import InternalLink from "@/components/library/link/InternalLink";
import CubeIcon from "@/icons/CubeIcon";
import RecipesIcon from "@/icons/deprecated/RecipiesIcon";
import CodeLanguageBadge from "@/categories/code/components/CodeLanguageBadge";
import { CodeLanguages } from "@/categories/code/content/codeLanguages";
import { defaultMetadata } from "@/metadata";
import LargeBreak from "@/components/library/spacing/LargeBreak";
import { Space } from "@/components/library/spacing/Space";
import { Route } from "@/routing";
import { Metadata } from "next";
import ExternalLink from "@/components/library/link/ExternalLink";

export default function AboutPage() {
    return (
        <Article headline="About">

            <Section headline={"About me and this website"}>
                Hey there, I'm David.
                <LargeBreak/>
                I work on some programming projects in my free time.

                You can have a look at them under the section<Space/>
                <InternalLink href={Route.code} icon={CodeIcon}>Code</InternalLink>
                . I try to use many different programming languages to improve my skill and keep learning new
                things.
                <br/>
                Currently, languages that I use include:&#8200;
                <CodeLanguageBadge language={CodeLanguages.HTML}/>,&#8200;
                <CodeLanguageBadge language={CodeLanguages.CSS}/>,&#8200;
                <CodeLanguageBadge language={CodeLanguages.JavaScript}/>,&#8200;
                <CodeLanguageBadge language={CodeLanguages.TypeScript}/>,&#8200;
                <CodeLanguageBadge language={CodeLanguages.Bash}/>,&#8200;
                <CodeLanguageBadge language={CodeLanguages.Python}/> and&#8200;
                <CodeLanguageBadge language={CodeLanguages.Java}/>.

                <LargeBreak/>

                I enjoy making things in the 3D computer graphics
                software <ExternalLink href="https://www.blender.org/">Blender</ExternalLink>.
                A project of mine is the<Space/>
                <InternalLink href={Route.abstract3dSeries} icon={CubeIcon}>
                    Abstract3D Series
                </InternalLink>
                , a series of images which feature abstract objects, substances or landscapes.
                <br/>
                A few of my favorite creations are available as a wallpaper to download.

                <LargeBreak/>

                Sometimes, I like to cook various dishes.
                I try to improve a handful of my favorite dishes, until I achieved (at least in my option) the
                perfect recipe for that dish.
                When that happens, you will find that recipe in the<Space/>
                <InternalLink href={Route.recipes} icon={RecipesIcon}>
                    Recipes
                </InternalLink>
                <Space/>section of this website.
                <br/>
                I also try to make my very own original recipes and if I feel one is good enough,
                I present the recipe here on this website.

                <LargeBreak/>

                One last thing: This website uses the dark mode as the default theme.
                If you like to change that, click on the moon icon located on the very right of the website
                header.
                This toggles between light and dark mode.

                <LargeBreak/>

                Thank you for visiting and enjoy your stay.
            </Section>

            <Section headline="Social">
                <Tile className="text-center mt-2">

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
                        <GitHubLink/>
                        <InstagramLink/>
                        <LinkedInLink/>
                    </div>

                </Tile>
            </Section>
        </Article>
    );
}

export const metadata: Metadata = {
    title: "bdav.dev – About",
    description: "About me and this website.",
    ...defaultMetadata(["About", "general", "me", "about me"])
}