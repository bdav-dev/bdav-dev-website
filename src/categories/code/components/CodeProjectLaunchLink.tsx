import Link from "next/link";
import MaterialSymbol, { MaterialSymbols } from "@/icons/material/MaterialSymbol";
import CodeProjectAppIcon from "@/categories/code/components/icon/CodeProjectAppIcon";
import { CodeProject } from "@/categories/code/content/codeProjects";


type CodeProjectLaunchLinkProps = {
    project: CodeProject
}

export default function CodeProjectLaunchLink(props: CodeProjectLaunchLinkProps) {
    if (!(props.project.action?.type === 'Launch')) {
        return;
    }

    return (
        <Link href={props.project.action.url} className={'inline-block group'}>
            <div className={'flex flex-col items-center w-fit'}>
                <div className={'flex items-center gap-1'}>
                    <ArrowSymbol symbol={MaterialSymbols.KEYBOARD_DOUBLE_ARROW_RIGHT}/>
                    <CodeProjectAppIcon project={props.project} className={'drop-shadow-lg w-14 h-14 transition-transform duration-300 group-hover:-translate-y-1'}/>
                    <ArrowSymbol symbol={MaterialSymbols.KEYBOARD_DOUBLE_ARROW_LEFT}/>
                </div>
                {props.project.title}
            </div>
        </Link>
    );
}

function ArrowSymbol(props: { symbol: MaterialSymbols }) {
    return (
        <MaterialSymbol
            className={'group-hover:opacity-0 transition-opacity duration-150 text-[1.5em] text-zinc-350 dark:text-zinc-600'}
            symbol={props.symbol}
        />
    );
}
