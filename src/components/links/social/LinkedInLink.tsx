import LinkedInIcon from "@/icons/LinkedInIcon";
import SocialLink from "./SocialLink";

export default function LinkedInLink() {

    return (
        <SocialLink href={"https://linkedin.com/in/david-berezowski-ab5639273"}>
            <LinkedInIcon className="fill-white h-7 w-24" />
        </SocialLink>
    );
}