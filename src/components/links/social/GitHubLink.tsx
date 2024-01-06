import GitHubIcon from "@/icons/GitHubIcon";
import GitHubText from "@/icons/GitHubText";
import SocialLink from "./SocialLink";

export default function GitHubLink() {

    return (
        <SocialLink href={"https://github.com/bdav-dev/"}>
            <GitHubText className="fill-white" />
            <GitHubIcon className="ml-1 fill-white w-[60%]" />
        </SocialLink>
    );

}