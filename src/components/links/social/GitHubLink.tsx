import GitHubCatIcon from "@/icons/GitHubCatIcon";
import GitHubIcon from "@/icons/GitHubIcon";
import SocialLink from "./SocialLink";

export default function GitHubLink() {

    return (
        <SocialLink href={"https://github.com/bdav-dev/"}>
            <GitHubIcon className="fill-white" />
            <GitHubCatIcon className="ml-1 fill-white w-[60%]" />
        </SocialLink>
    );

}