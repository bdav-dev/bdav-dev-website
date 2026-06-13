import '@/styles/css/components/germany-flag.css'

export default function GermanyFlag(props: { size: string }) {
    return <div className={'germany-flag'} style={{ width: props.size, height: props.size }}/>
}
