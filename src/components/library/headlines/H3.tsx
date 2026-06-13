import { HeadlineProps } from "@/components/library/headlines/H1";


export default function H3(props: HeadlineProps) {
    return (
        <h3 className={`text-2xl font-semibold text-zinc-900 dark:text-zinc-100 ${props.className}`}>
            {props.children}
        </h3>
    );
}
