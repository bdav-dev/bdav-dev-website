'use client';

import { ComponentType, CSSProperties, ReactNode, useState } from "react";


type SkeletonLoaderProps =
    {
        className: string,
        skeleton: ComponentType<{ className: string }>,
        component: (context: { setLoaded: () => void, style?: CSSProperties, isLoaded: boolean, className: string }) => ReactNode
    }
    |
    {
        className?: never,
        skeleton: ReactNode,
        component: (context: { setLoaded: () => void, style?: CSSProperties, isLoaded: boolean }) => ReactNode
    };

export default function SkeletonLoader(props: SkeletonLoaderProps) {
    const [isLoaded, setIsLoaded] = useState(false);

    const componentLoadingStyles: CSSProperties = {
        opacity: 0,
        visibility: 'hidden',
        pointerEvents: 'none',
        position: 'absolute'
    };

    return (
        <>
            {
                !isLoaded && (
                    typeof props.skeleton === 'function'
                        ? <props.skeleton className={props.className!}/>
                        : props.skeleton
                )
            }
            {
                props.component(
                    {
                        isLoaded,
                        setLoaded: () => setIsLoaded(true),
                        style: isLoaded ? undefined : componentLoadingStyles,
                        className: props.className!,
                    }
                )
            }
        </>
    );
}
