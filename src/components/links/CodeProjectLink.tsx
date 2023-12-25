import { CodeProject } from "@/content/codeProjects";
import Image from "next/image";
import Link from "next/link";

type CodeProjectProps = {
    codeProject: CodeProject
}

export default function CodeProjectLink(props: CodeProjectProps) {
    return (
        <Link className="inline-block w-fit" href={props.codeProject.path} draggable="false">
            <div className="dark:border-zinc-800 border-zinc-400 border w-72 h-32 overflow-hidden flex items-center rounded-2xl relative group">
                <div className="select-none text-lg text-center absolute transition-all z-10 -translate-y-24 ease-out duration-300 group-hover:translate-y-0 left-0 right-0 ml-auto mr-auto w-fit">
                    {props.codeProject.title}
                </div>
                <Image src={props.codeProject.image} alt="test" className="transition-all duration-300 group-hover:blur-md" draggable="false" />
            </div>
        </Link>
    );
}