import WeightableIcon, { WeightableIconProps } from "@/icons/WeightableIcon";

export default function CodeIcon(props: WeightableIconProps) {
    return (
        <WeightableIcon {...props} weightRatio={{ strokeWidth: 72.5, atWeight: 400 }}>
            <svg
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 -960 960 960"
                preserveAspectRatio="xMidYMid meet"
            >
                <g style={{ fill: "none", strokeLinecap: "round", strokeLinejoin: "round", strokeDasharray: "none" }}>
                    <path d="m 320.68569,-679.14302 -199.14302,199.14301 199.14302,199.14296"/>
                    <path d="M 639.3144,-280.85705 838.45736,-480.00001 639.3144,-679.14302"/>
                    <path d="M 392.3771,-161.37122 567.62298,-798.6288"/>
                </g>
            </svg>
        </WeightableIcon>
    );
}
