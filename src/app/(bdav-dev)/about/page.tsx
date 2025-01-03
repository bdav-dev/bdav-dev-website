import GitHubLink from "@/components/link/social/GitHubLink";
import InstagramLink from "@/components/link/social/InstagramLink";
import LinkedInLink from "@/components/link/social/LinkedInLink";
import Article from "@/components/document/Article";
import Tile from "@/components/Tile";
import Section from "@/components/document/Section";
import HyperLink from "@/components/link/HyperLink";
import CodeIcon from "@/icons/CodeIcon";
import InternalLink from "@/components/link/InternalLink";
import BlenderIcon from "@/icons/BlenderIcon";
import RecipesIcon from "@/icons/RecipiesIcon";
import CodeLanguageBadge from "@/components/categories/code/CodeLanguageBadge";
import { ProgrammingLanguages } from "@/content/code/codeProjects";
import { defaultMetadata } from "@/metadata";
import LargeBreak from "@/components/format/break/LargeBreak";
import { Space } from "@/components/format/Space";
import { Route } from "@/utils/RouteUtils";

export default function AboutPage() {
    return (
        <Article headline="About">

            <Section headline={"About me and this website"}>
                <Tile className="mt-2">
                    Hey there, I'm David. I am currently studying computer science (as a dual course of study) at
                    the <HyperLink href="https://dhbw-loerrach.de/home">DHBW University in Lörrach</HyperLink>,
                    Germany.
                    Right now, I am in the fifth semester and I work (as part of my studies)
                    at <HyperLink href="https://www.coop.ch/">Coop</HyperLink> in Basel.
                    First I worked with the programming
                    language <CodeLanguageBadge lang={ProgrammingLanguages.ABAP}/> in
                    the SAP development department.
                    Now I code in <CodeLanguageBadge lang={ProgrammingLanguages.Java}/> and
                    use the Spring and Vaadin frameworks.
                    <LargeBreak/>
                    I also work on my personal programming projects in my free time.

                    You can have a look at them under the section<Space/>
                    <InternalLink href={Route.code} icon={CodeIcon}>Code</InternalLink>
                    . I try to use many different programming languages to improve my skill and keep learning new
                    things.
                    <br/>
                    Currently, (programming, markup and style sheet) languages that I use include:&#8200;
                    <CodeLanguageBadge lang={ProgrammingLanguages.HTML}/>,&#8200;
                    <CodeLanguageBadge lang={ProgrammingLanguages.CSS}/>,&#8200;
                    <CodeLanguageBadge lang={ProgrammingLanguages.JavaScript}/>,&#8200;
                    <CodeLanguageBadge lang={ProgrammingLanguages.TypeScript}/>,&#8200;
                    <CodeLanguageBadge lang={ProgrammingLanguages.Bash}/>,&#8200;
                    <CodeLanguageBadge lang={ProgrammingLanguages.Python}/> and&#8200;
                    <CodeLanguageBadge lang={ProgrammingLanguages.Java}/>.

                    <LargeBreak/>

                    I enjoy making things in the 3D computer graphics
                    software <HyperLink href="https://www.blender.org/">Blender</HyperLink>.
                    A project of mine is the<Space/>
                    <InternalLink href={Route.abstract3dSeries} icon={BlenderIcon}>
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
                </Tile>
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

export const metadata = {
    title: "bdav.dev – About",
    description: "About me and this website.",
    ...defaultMetadata(["About", "general", "me", "about me"])
}