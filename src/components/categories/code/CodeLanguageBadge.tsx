import { ProgrammingLanguage } from "@/content/code/codeProjects";

type CodeLanguageBadgeProps = {
    lang: ProgrammingLanguage,
    smallerPadding?: boolean
}


export default function CodeLanguageBadge(props: CodeLanguageBadgeProps) {
    return (
        <span
            className={`
                ${props.smallerPadding
                    ? "py-[0.1rem]"
                    : "py-0.5"}
                px-1 rounded-lg
            `}
            style={{
                backgroundColor: props.lang.bgColor,
                color: props.lang.textColor ?? "#FFFFFF"
            }}
        >
            {props.lang.name}
        </span>
    );
}