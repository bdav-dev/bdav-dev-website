import { ReactNode } from "react";

export function ContentImageSplit(props: { content: ReactNode, image: ReactNode, reverse?: boolean }) {
    return (
        <div className={'grid grid-cols-1 lg:grid-cols-2 gap-5'}>
            {
                props.reverse
                    ? props.image
                    : props.content
            }
            {
                props.reverse
                    ? <div className={'order-first lg:order-none flex'}>{props.content}</div>
                    : props.image
            }
        </div>
    );
}
