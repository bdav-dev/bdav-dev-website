import { HeadlineProps } from "./Headline";

export default function SmallHeadline(props: HeadlineProps) {

    return (
        <h4 className={"font-semibold " + props.className}>
            {props.children}
        </h4>
    );

}