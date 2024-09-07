import { CodeProject } from "@/content/code/codeProjects";
import { mono } from "@/fonts";
import Image from "next/image";

type CodeProjectBadgeProps = {
    codeProject: CodeProject
    animated?: boolean
}

export default function CodeProjectBadge(props: CodeProjectBadgeProps) {
    return (
        <div className={`
                border dark:border-zinc-700 border-zinc-400 
                w-72 h-32 overflow-hidden
                flex items-center
                rounded-2xl relative group
                ${props.codeProject.customBadgeImage ? "" : "bg-zinc-200 dark:bg-zinc-800"}
            `}
        >
            {
                props.animated && props.codeProject.badgeHoverText &&
                <div className={`
                        mx-auto w-fit left-0 right-0 z-10
                        text-2xl text-center
                        absolute
                        transition-all ease-out duration-300
                        -translate-y-24 group-hover:translate-y-0
                        select-none
                    `}
                >
                    {props.codeProject.badgeHoverText}
                </div>
            }

            {
                props.codeProject.customBadgeImage
                    ? <Image
                        src={props.codeProject.customBadgeImage}
                        alt={props.codeProject.repository}
                        className={`
                            select-none
                            ${props.animated && props.codeProject.badgeHoverText ? "transition-all duration-300 group-hover:blur-md" : ""}
                        `}
                        draggable="false"
                        placeholder="blur" />
                    : (
                        props.codeProject.customBadge
                            ? <div className={`
                                    w-full h-full select-none
                                    ${props.animated && props.codeProject.badgeHoverText ? "transition-all duration-300 group-hover:blur-md" : ""}
                                `}
                            >
                                {props.codeProject.customBadge}
                            </div>
                            : <div className={`
                                    transition-all duration-300
                                    ${props.animated ? "group-hover:scale-105" : ""}
                                    text-lg ${mono}
                                    mx-auto
                                    select-none
                                `}
                            >
                                {props.codeProject.customBadgeText ?? props.codeProject.title}
                            </div>
                    )
            }
        </div>
    );
}