import { ReactNode } from "react";

type SplitLayoutProps = {
    left: ReactNode,
    right: ReactNode,
    reverse?: boolean
}

export function SplitLayout(props: SplitLayoutProps) {
    return (
        <div className={'grid grid-cols-1 lg:grid-cols-2 gap-gutter'}>
            {
                props.reverse
                    ? props.right
                    : props.left
            }
            {
                props.reverse
                    ? props.left
                    : <div className={'order-first lg:order-none flex'}>{props.right}</div>
            }
        </div>
    );
}
