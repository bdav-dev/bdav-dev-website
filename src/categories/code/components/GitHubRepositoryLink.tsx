import HyperLink from "@/components/library/link/HyperLink";
import GitHubIcon from "@/icons/logos/GitHubIcon";

type GitHubRepoLinkProps = {
    href: string,
    repositoryName?: string
}

export default function GitHubRepositoryLink(props: GitHubRepoLinkProps) {
    return (
        <HyperLink
            href={props.href}
            icon={<GitHubIcon className={'text-[0.9em]'}/>}
            largerIconGap
            discreet
        >
            {props.repositoryName ?? 'GitHub'}
        </HyperLink>
    );
}