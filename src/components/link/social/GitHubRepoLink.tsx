import GitHubIcon from "@/icons/GitHubIcon";
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
                w-fit h-fit
                flex flex-row items-center justify-center
                p-[0.25rem]
                rounded-lg
                bg-zinc-800 dark:bg-black hover:bg-zinc-700 dark:hover:bg-zinc-900
                border border-zinc-600 dark:border-zinc-800
                hover:scale-105
                transition-all ease-linear 
                ${props.className}
            `}
            draggable="false"
        >
            <GitHubIcon className="fill-white h-6 w-6"/>
        </Link>
    );

}