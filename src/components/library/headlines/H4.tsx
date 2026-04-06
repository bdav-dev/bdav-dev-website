import { HeadlineProps } from "./H2";

export default function H4(props: HeadlineProps) {

    return (
        <h4 className={`text-xl font-medium text-zinc-900 dark:text-zinc-100 ${props.className}`}>
            {props.children}
        </h4>
    );

}