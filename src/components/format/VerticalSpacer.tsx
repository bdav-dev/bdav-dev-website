type SpacerProps = {
    height?: string
}

export default function VerticalSpacer(props: SpacerProps) {
    const height = props.height ?? '0.375rem';
    return <div style={{ marginTop: height, marginBottom: height }}/>
}