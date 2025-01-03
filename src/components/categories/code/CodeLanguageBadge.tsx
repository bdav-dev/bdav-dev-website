import { ProgrammingLanguage } from "@/content/code/codeProjects";

type CodeLanguageBadgeProps = {
    lang: ProgrammingLanguage
}

export default function CodeLanguageBadge(props: CodeLanguageBadgeProps) {
    return (
        <span
            className={'px-[0.32rem] py-[0.05rem] rounded-full'}
            style={{
                backgroundColor: props.lang.bgColor,
                color: props.lang.textColor ?? "#FFFFFF"
            }}
        >
            {props.lang.name}
        </span>
    );
}
