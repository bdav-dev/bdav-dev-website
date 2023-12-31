import { CodeProject } from "@/content/codeProjects";
import { spaceMono } from "@/fonts";
import Image from "next/image";

type CodeProjectBadgeProps = {
    codeProject: CodeProject
    animated?: boolean
}

export default function CodeProjectBadge(props: CodeProjectBadgeProps) {
    return (
        <div
            className={`
            dark:border-zinc-800 border-zinc-400 border
            w-72 h-32 overflow-hidden
            flex items-center
            rounded-2xl relative group
            ${props.codeProject.image ? "" : "bg-zinc-200 dark:bg-zinc-900"}
            `}
        >

            {
                props.animated && props.codeProject.image
                    ? <div className="select-none text-2xl text-center absolute transition-all z-10 -translate-y-24 ease-out duration-300 group-hover:translate-y-0 left-0 right-0 ml-auto mr-auto w-fit">
                        {props.codeProject.badgeHoverText ?? props.codeProject.title}
                    </div>
                    : null
            }

            {
                props.codeProject.image
                    ? <Image
                        src={props.codeProject.image}
                        alt="TODO"
                        className={props.animated ? "transition-all duration-300 group-hover:blur-md" : ""}
                        draggable="false"
                        placeholder="blur" />
                    : <div
                        className={`
                            transition-all duration-300 select-none
                            ${props.animated && (props.codeProject.image ? "group-hover:blur-md" : "group-hover:scale-105")}
                            ${spaceMono}
                            ml-auto mr-auto text-lg
                        `}>
                        {props.codeProject.badgeText ?? props.codeProject.title}
                    </div>
            }

        </div>
    );
}