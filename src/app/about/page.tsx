import GitHubLink from "@/components/links/social/GitHubLink";
import InstagramLink from "@/components/links/social/InstagramLink";
import LinkedInLink from "@/components/links/social/LinkedInLink";
import PageBody from "@/components/pageLayout/PageBody";
import Article from "@/components/pageStructure/Article";
import Tile from "@/components/pageElements/Tile";
import Section from "@/components/pageStructure/Section";
import HyperLink from "@/components/links/HyperLink";
import CodeIcon from "@/icons/CodeIcon";
import SmallInternalLink from "@/components/links/SmallInternalLink";
import BlenderIcon from "@/icons/BlenderIcon";
import RecipesIcon from "@/icons/RecipiesIcon";
import CodeLanguageBadge from "@/components/categories/code/CodeLanguageBadge";
import { programmingLanguages } from "@/content/code/codeProjects";
import { defaultMetadata } from "@/metadata";
import LargeBr from "@/components/pageElements/breaks/LargeBr";

export default function About() {
    return (
        <PageBody category={"About"} sitePath={"/about/"}>
            <Article headline="About">

                <Section headline={"About me and this website"}>
                    <Tile className="mt-2">
                        Hey there, I'm David. I am currently studying computer science (as a dual course of study) at
                        the <HyperLink href="https://dhbw-loerrach.de/home">DHBW University in Lörrach</HyperLink>, Germany.
                        Right now, I am in the third semester and I work (as part of my studies)
                        at <HyperLink href="https://www.coop.ch/de/">Coop</HyperLink> in Basel.
                        First I worked with the programming
                        language <CodeLanguageBadge lang={programmingLanguages.abap} smallerPadding/> in
                        the SAP development department.
                        Now I code in <CodeLanguageBadge lang={programmingLanguages.java} smallerPadding/> and
                        use the Spring and Vaadin frameworks.
                        <LargeBr/>
                        I also work on my personal programming projects in my free time.

                        You can have a look at them under the section&thinsp;
                        <SmallInternalLink href="/code/">
                            <CodeIcon className="h-5 inline stroke-[6] pb-0.5 self-center" /> Code
                        </SmallInternalLink>
                        . I try to use many different programming languages to improve my skill and keep learning new things.
                        <br />
                        Currently, (programming, markup and style sheet) languages that I use include:&#8200;
                        <CodeLanguageBadge lang={programmingLanguages.html} smallerPadding />,&#8200;
                        <CodeLanguageBadge lang={programmingLanguages.css} smallerPadding />,&#8200;
                        <CodeLanguageBadge lang={programmingLanguages.javaScript} smallerPadding />,&#8200;
                        <CodeLanguageBadge lang={programmingLanguages.typeScript} smallerPadding />,&#8200;
                        <CodeLanguageBadge lang={programmingLanguages.bash} smallerPadding /> and&#8200;
                        <CodeLanguageBadge lang={programmingLanguages.java} smallerPadding />.
                        
                        <LargeBr/>

                        I enjoy making things in the 3D computer graphics
                        software <HyperLink href="https://www.blender.org/">Blender</HyperLink>.
                        A project of mine is the&thinsp;
                        <SmallInternalLink href="/3d/abstract-3d-series/">
                            <BlenderIcon className="h-5 inline stroke-[6] pb-0.5 self-center" /> Abstract3D Series
                        </SmallInternalLink>
                        , a series of images which feature abstract objects, substances or landscapes.
                        <br />
                        A few of my favorite creations are available as a wallpaper to download.
                        
                        <LargeBr/>

                        Sometimes, I like to cook various dishes.
                        I try to improve a handful of my favorite dishes, until I achieved (at least in my option) the
                        perfect recipe for that dish.
                        When that happens, you will find that recipe in the&thinsp;
                        <SmallInternalLink href="/recipes/">
                            <RecipesIcon className="h-5 inline stroke-[6] pb-0.5 self-center" /> Recipes
                        </SmallInternalLink>
                        &thinsp;section of this website.
                        <br />
                        I also try to make my very own original recipes and if I feel one is good enough,
                        I present the recipe here on this website.
                        
                        <LargeBr/>

                        One last thing: This website uses the dark mode as the default theme.
                        If you like to change that, click on the moon icon located on the very right of the website header.
                        This toggles between light and dark mode.
                        
                        <LargeBr/>

                        Thank you for visiting and enjoy your stay.
                    </Tile>
                </Section>


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
        </PageBody >
    );
}

export const metadata = {
    title: "bdav.dev – About",
    description: "About me and this website.",
    ...defaultMetadata(["About", "general", "me", "about me"])
}