import { ProgrammingLanguage } from "@/content/code/codeProjects";

type CodeLanguageBadgeProps = {
    lang: ProgrammingLanguage,
    smallerPadding?: boolean
}


export default function CodeLanguageBadge(props: CodeLanguageBadgeProps) {
    return (
        <span
            className={`
                ${
                    props.smallerPadding
                    ? "px-0.5 py-0.5 rounded-md"
                    : "px-1 py-0.5 rounded-lg"
                }
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