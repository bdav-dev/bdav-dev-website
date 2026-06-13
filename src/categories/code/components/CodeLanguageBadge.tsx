import { CodeLanguage } from "@/categories/code/content/codeLanguages";


type CodeLanguageBadgeProps = {
    language: CodeLanguage
}

export default function CodeLanguageBadge(props: CodeLanguageBadgeProps) {
    return (
        <span className={'inline-flex items-center gap-0.5'}>
            <div className={'w-3 h-3 rounded-full'} style={{ backgroundColor: props.language.color }}/>
            {props.language.name}
        </span>
    );
}
