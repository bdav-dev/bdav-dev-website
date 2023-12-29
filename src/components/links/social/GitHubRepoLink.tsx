import GitHubCatIcon from "@/icons/GitHubCatIcon";
import Link from "next/link";

type GitHubRepoLinkProps = {
    repository: string,
    className?: string
}

export default function GitHubRepoLink(props: GitHubRepoLinkProps) {

    return (
        <Link
            href={`https://github.com/bdav-dev/${props.repository}`}
            target="_blank"
            rel="noopener noreferrer"
            className={`
                inline-block ${props.className}
                bg-zinc-800 dark:bg-black hover:bg-zinc-700 dark:hover:bg-zinc-900
                border border-zinc-600 dark:border-zinc-800
                p-[0.2rem]
                inline-block ${props.className}
                rounded-lg
                hover:scale-105
                flex flex-row items-center
                transition-all ease-linear 
            `}
            draggable="false"
        >
            <GitHubCatIcon className="fill-white" />
        </Link>
    );

}