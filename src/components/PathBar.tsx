import Link from "next/link";

type PathBarProps = {
    path: string
}

type Node = {
    node: string,
    href: string
}

export default function PathBar(props: PathBarProps) {

    const path = props.path
        .split("/")
        .filter(e => e != "");

    let nodes: Node[] = [];

    for (let i = 0; i < path.length; i++) {
        nodes.push({
            node: path[i],
            href: "/" + path.slice(0, i + 1).join("/")
        });
    }

    return (
        <div className="m-2 ml-4 mb-6">
            <Link
                href="/"
                className="p-1 pl-1.5 pr-1.5 rounded-md transition-colors duration-200 hover:bg-zinc-300 dark:hover:bg-zinc-700"
                draggable="false"
            >
                bdav.dev
            </Link>

            {nodes.map((node, i) => {
                return (
                    <span key={i}>
                        <span
                            className="ml-1.5 mr-1.5 select-none text-zinc-500"
                        >/</span>
                        <Link
                            href={node.href}
                            className="p-1 pl-1.5 pr-1.5 select-none rounded-md transition-colors duration-200 hover:bg-zinc-300 dark:hover:bg-zinc-700"
                            draggable="false"
                        >
                            {node.node}
                        </Link>
                    </span>
                );
            })}
        </div>
    );


}