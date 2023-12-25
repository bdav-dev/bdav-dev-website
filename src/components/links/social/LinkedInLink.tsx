import LinkedInIcon from "@/icons/LinkedInIcon";
import Link from "next/link";

export default function GitHubLink() {

    return (
        <Link href="https://github.com/bdav-dev" target="_blank" rel="noopener noreferrer" className="inline-block" draggable="false">
            <div className="m-1 bg-zinc-200 hover:bg-zinc-300 dark:bg-zinc-950 hover:dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-800 transition-all ease-linear hover:rounded-3xl w-fit flex flex-row items-center gap-2 p-2.5 rounded-xl">
                <LinkedInIcon className="fill-zinc-900 dark:fill-white w-24"/>
            </div>
        </Link>
    );
}