import { HeadlineProps } from "./Headline";

export default function PageTitle(props: HeadlineProps) {

    return (
        <h1 className={"text-3xl font-semibold " + props.className}>
            {props.children}
        </h1>
    );

}