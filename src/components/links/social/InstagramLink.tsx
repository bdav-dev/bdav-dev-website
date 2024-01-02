import SocialLink from "./SocialLink";
import InstagramTextIcon from "@/icons/InstagramTextIcon";
import InstagramIcon from "@/icons/InstagramIcon";

export default function InstagramLink() {

    return (
        <SocialLink href={"https://www.instagram.com/davidb.3d/"}>
            <InstagramTextIcon className="fill-white mt-1.5"/>
            <InstagramIcon className="fill-white ml-1 w-[45%]"/>
        </SocialLink>
    );
}