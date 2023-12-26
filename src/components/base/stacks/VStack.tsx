type VStackProps = {
    className?: string,
    children: React.ReactNode
};


export default function VStack(props: VStackProps) {

    return (
        <div className={"flex flex-col flex-wrap gap-1.5 " + props.className}>
            {props.children}
        </div>
    );

}