import Header from "@/components/header/Header";
import GitHubLink from "@/components/links/social/GitHubLink";
import LinkedInLink from "@/components/links/social/LinkedInLink";
import PathBar from "@/components/PathBar";
import ThemeApplier from "@/components/ThemeApplier";

export default function About() {
    return (
        <ThemeApplier>
            <Header selected="About"/>
            <PathBar path="/about/" />

            <LinkedInLink></LinkedInLink>
            <GitHubLink></GitHubLink>
        </ThemeApplier>
    );
}