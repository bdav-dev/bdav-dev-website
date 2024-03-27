import { spaceMono } from "@/fonts";


type MonoSpanProps = {
    children: React.ReactNode
}

export default function MonoSpan(props: MonoSpanProps) {

    return (
        <span className={spaceMono}>
            {props.children}
        </span>
    );

}
