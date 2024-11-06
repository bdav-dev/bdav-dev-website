type SpacerProps = {
    className?: string
}

export default function Spacer(props: SpacerProps) {
    return <div className={props.className ?? "my-1.5"}/>
}