import { CSSProperties, useId } from "react";
import LightAppIconSvgGroup from "@/categories/code/appIcons/LightAppIconSvgGroup";


export default function TimecoderLightAppIcon(props: { className?: string, style?: CSSProperties }) {
    const id = useId();

    return (
        <svg
            width="100"
            height="100"
            viewBox="0 0 100 100"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <LightAppIconSvgGroup/>

            <defs>
                <linearGradient
                    id={`app-icon-gradient-${id}`}
                    gradientUnits="userSpaceOnUse"
                    x1="24.5496804"
                    y1="24.5496773"
                    x2="75.4503174"
                    y2="75.4503163"
                >
                    <stop offset="0" style={{ stopColor: '#475569' }}/>
                    <stop offset="1" style={{ stopColor: '#334155' }}/>
                </linearGradient>
            </defs>

            <path
                style={{ fill: `url(#app-icon-gradient-${id})`, stroke: 'none' }}
                d="m 30.078125,74.238281 q -16.070313,0 -16.070313,-23.90625 0,-24.570313 16.070313,-24.570313 16.070312,0 16.070312,24.570313 0,23.90625 -16.070312,23.90625 z M 21.611328,57.703125 37.548828,38.3125 q -2.158203,-6.441407 -7.470703,-6.441407 -8.964844,0 -8.964844,18.460938 0,4.183594 0.498047,7.371094 z m 8.466797,10.425781 q 8.964843,0 8.964843,-17.796875 0,-3.751953 -0.365234,-6.773438 L 22.972656,62.849609 q 2.224609,5.279297 7.105469,5.279297 z m 39.84375,6.109375 q -16.070313,0 -16.070313,-23.90625 0,-24.570313 16.070313,-24.570313 16.070312,0 16.070312,24.570313 0,23.90625 -16.070312,23.90625 z M 61.455078,57.703125 77.392578,38.3125 q -2.158203,-6.441407 -7.470703,-6.441407 -8.964844,0 -8.964844,18.460938 0,4.183594 0.498047,7.371094 z m 8.466797,10.425781 q 8.964843,0 8.964843,-17.796875 0,-3.751953 -0.365234,-6.773438 L 62.816406,62.849609 q 2.224609,5.279297 7.105469,5.279297 z"
            />
        </svg>
    );
}
