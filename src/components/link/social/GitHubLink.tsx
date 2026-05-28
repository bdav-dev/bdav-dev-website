import GitHubInvertocat from "@/icons/logo/GitHubInvertocat";
import SocialLink from "./SocialLink";

export default function GitHubLink() {

    return (
        <SocialLink href={"https://github.com/bdav-dev/"}>
            <GitHubInvertocat className="ml-1 fill-white h-8 w-8"/>
        </SocialLink>
    );

}