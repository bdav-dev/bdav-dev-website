'use client';

import MaterialSymbol, { MaterialSymbols } from "@/icons/material/MaterialSymbol";
import CodeProjectAppIcon from "@/categories/code/components/icon/CodeProjectAppIcon";
import { CodeProject } from "@/categories/code/content/codeProjects";
import { ComponentType, CSSProperties, ReactNode, useId, useState } from "react";
import { fetchDownloadFile } from "@/utilities/download";
import Link from "next/link";


type CodeProjectActionProps = {
    project: CodeProject,
    message?: string
}

export default function CodeProjectAction(props: CodeProjectActionProps) {
    if (!props.project.action) {
        return;
    }

    const action = props.project.action;
    const [isDownloading, setIsDownloading] = useState(false);

    let Container: ComponentType<{ className?: string, children?: ReactNode }> = () => <></>;
    if (action.type === 'Launch' || (action.type === 'Download' && !action.fetch)) {
        Container = ({ className, children }) =>
            <Link
                href={action.url}
                className={className}
            >
                {children}
            </Link>
    } else if (action.type === 'Download' && action.fetch) {
        Container = ({ className, children }) =>
            <button
                className={`${isDownloading && 'opacity-50 pointer-events-none'} ${className}`}
                onClick={
                    () => {
                        setIsDownloading(true);
                        fetchDownloadFile(action.url, action.fileName)
                            .finally(() => setIsDownloading(false))
                    }
                }
                disabled={isDownloading}
            >
                {children}
            </button>
    }

    return (
        <div className={'relative flex flex-col items-center w-fit'}>
            <div className={'h-8'}/>
            <CurvedText className={'absolute -translate-y-1.5 text-zinc-500 dark:text-zinc-500 font-semibold'}>
                {
                    props.message ?? { Launch: 'Try out now!', Download: 'Download now!' }[props.project.action.type]
                }
            </CurvedText>

            <Container className={'inline-block group'}>
                <div className={'flex flex-col items-center w-fit'}>
                    <div className={'flex items-center gap-1'}>
                        <Arrow direction={'right'}/>
                        <CodeProjectAppIcon project={props.project} className={'drop-shadow-lg w-14 h-14 transition-transform duration-300 group-hover:-translate-y-1'}/>
                        <Arrow direction={'left'}/>
                    </div>
                    {props.project.title}
                </div>
            </Container>
        </div>
    );
}

function Arrow(props: { direction: 'left' | 'right' }) {
    const symbol = {
        left: MaterialSymbols.KEYBOARD_DOUBLE_ARROW_LEFT,
        right: MaterialSymbols.KEYBOARD_DOUBLE_ARROW_RIGHT
    }[props.direction];

    return (
        <MaterialSymbol
            className={'group-hover:opacity-0 transition-opacity duration-150 text-[1.5em] text-zinc-350 dark:text-zinc-600'}
            symbol={symbol}
        />
    );
}

function CurvedText(props: { children?: ReactNode, style?: CSSProperties, className?: string }) {
    const id = useId();

    return (
        <svg
            width="175"
            height="50"
            viewBox="0 0 175 50"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            style={props.style}
            className={props.className}
        >
            <ellipse
                id={id}
                style={{ fill: 'none', stroke: 'none' }}
                cx="87.5"
                cy="49.982883"
                rx="55"
                ry="29.232883"
            />
            <text style={{ fill: "currentcolor", letterSpacing: '-0.3px' }}>
                <textPath href={`#${id}`} startOffset={"75%"} textAnchor={"middle"}>
                    {props.children}
                </textPath>
            </text>
        </svg>
    );
}
