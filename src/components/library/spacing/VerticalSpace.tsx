type SpacerProps = {
    height?: string
}

export default function VerticalSpace(props: SpacerProps) {
    const height = props.height ?? '0.375rem';
    return <div style={{ marginTop: height, marginBottom: height }}/>
}