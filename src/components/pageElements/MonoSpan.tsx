import { mono } from "@/fonts";


type MonoSpanProps = {
    children: React.ReactNode
}

export default function MonoSpan(props: MonoSpanProps) {

    return (
        <span className={mono}>
            {props.children}
        </span>
    );

}
