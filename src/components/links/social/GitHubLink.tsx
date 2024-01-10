import GitHubIcon from "@/icons/GitHubIcon";
import GitHubText from "@/icons/GitHubText";
import SocialLink from "./SocialLink";

export default function GitHubLink() {

    return (
        <SocialLink href={"https://github.com/bdav-dev/"}>
            <GitHubText className="fill-white w-16 h-8" />
            <GitHubIcon className="ml-1 fill-white h-8 w-8" />
        </SocialLink>
    );

}