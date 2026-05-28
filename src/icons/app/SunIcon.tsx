import WeightableIcon, { WeightableIconProps } from "@/icons/WeightableIcon";

export default function SunIcon(props: WeightableIconProps) {
    return (
        <WeightableIcon {...props} weightRatio={{ strokeWidth: 72.5, atWeight: 400 }}>
            <svg
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 -960 960 960"
                preserveAspectRatio="xMidYMid meet"
            >
                <g style={{ fill: 'none', strokeLinejoin: 'round', strokeLinecap: 'round', strokeDasharray: 'none' }}>
                    <path
                        d="m 480.4672,-887.85889 v 146.69838 m -289.65925,-28.03154 104.65109,104.65109 M 769.19205,-769.19205 664.54096,-664.54096 M 71.206723,-479.5328 H 219.77388 m 520.45224,0 h 148.56716 m -593.33424,184.07376 -104.65109,104.65109 m 473.73301,-104.65109 104.65109,104.65109 M 480.4672,-218.83949 v 146.698385"
                    />
                    <path
                        d="m 472.49061,-650.44912 c 93.47449,-7.08411 180.18115,76.10631 178.28629,169.78132 3.11558,97.81031 -91.60533,183.37841 -188.59242,170.15377 -91.61116,-7.27026 -163.76686,-97.8807 -151.6724,-188.52369 6.6918,-78.45709 74.38159,-142.33335 151.96935,-149.9379 l 4.98145,-0.77392 z"
                    />
                </g>
            </svg>
        </WeightableIcon>
    );
}
