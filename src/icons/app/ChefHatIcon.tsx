import WeightableIcon, { WeightableIconProps } from "@/icons/WeightableIcon";

export default function ChefHatIcon(props: WeightableIconProps) {
    return (
        <WeightableIcon {...props} weightRatio={{ strokeWidth: 72.5, atWeight: 400 }}>
            <svg
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 -960 960 960"
                preserveAspectRatio="xMidYMid meet"
            >
                <path
                    style={{ fill: 'none', strokeLinecap: 'round', strokeLinejoin: 'round', strokeDasharray: 'none' }}
                    d="m 651.7777,-701.93126 c 263.86885,-15.52774 277.72736,278.36352 48.46124,290.23834 -0.50315,66.89133 1.11274,159.4428 -0.98605,226.25697 -0.83114,37.39618 -41.08545,47.70897 -71.46737,47.04793 -105.8154,0.15206 -211.70463,0.1419 -317.53915,-0.23573 -32.61457,1.6232 -75.79278,-10.52801 -74.68046,-50.87842 -0.44475,-74.00161 0.53975,-148.26271 -0.37946,-222.19076 -241.7765218,-50.94356 -128.992,-372.63803 75.62875,-330.91054 103.97414,-116.04743 262.12786,-106.04592 340.9625,40.67221 z m -315.74418,131.82104 v 255.66737 m 87.63442,-255.66737 v 255.66737 m 88.43841,-254.86337 v 254.0594 m 87.63442,-254.0594 v 254.0594 m -364.20542,77.18258 h 464.70359"
                />
            </svg>
        </WeightableIcon>
    );
}
