import HyperLink from "@/components/library/link/HyperLink";
import GitHubInvertocat from "@/icons/logo/GitHubInvertocat";

type GitHubRepoLinkProps = {
    href: string,
    repositoryName?: string
}

export default function GitHubRepositoryLink(props: GitHubRepoLinkProps) {
    return (
        <HyperLink
            href={props.href}
            icon={<GitHubInvertocat className={'text-[0.9em]'}/>}
            largerIconGap
            discreet
        >
            {props.repositoryName ?? 'GitHub'}
        </HyperLink>
    );
}