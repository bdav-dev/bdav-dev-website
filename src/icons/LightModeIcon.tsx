import { IconProps } from "./IconProps";

export default function LightModeIcon(props: IconProps) {

    return (
        <svg
            className={props.className}
            viewBox="0 0 100 100"
            version="1.1"
        >
            <g
                fill="none"
                strokeLinecap="round"
            >
                <path
                    d="M 50.052025,4.5824811 V 20.918221 M 17.796742,17.796742 29.450264,29.450264 M 82.203258,17.796742 70.549736,29.450264 M 4.478432,50.052025 H 21.02227 m 57.95546,0 H 95.521568 M 29.450264,70.549736 17.796742,82.203258 M 70.549736,70.549736 82.203258,82.203258 M 50.052025,79.081779 v 16.33574"
                />
                <path
                    d="M 49.163785,31.019475 C 59.572726,30.230617 69.22803,39.494366 69.017026,49.925636 69.363964,60.817397 58.816226,70.345915 48.016136,68.873273 37.814687,68.063686 29.77972,57.973674 31.12651,47.880036 31.871682,39.143372 39.409343,32.030369 48.049203,31.183557 l 0.554714,-0.08618 z"
                />
            </g>
        </svg>
    );

}