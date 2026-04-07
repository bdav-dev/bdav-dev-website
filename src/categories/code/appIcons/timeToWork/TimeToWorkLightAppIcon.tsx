import { CSSProperties, useId } from "react";
import LightAppIconSvgGroup from "@/categories/code/appIcons/LightAppIconSvgGroup";

export default function TimeToWorkLightAppIcon(props: { className?: string, style?: CSSProperties }) {
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
                    id={`green-schedule-block-gradient-${id}`}
                    x1="35.136669"
                    y1="46.601845"
                    x2="35.136669"
                    y2="92.177132"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop
                        style={{ stopColor: '#44c576' }}
                        offset="0"
                    />
                    <stop
                        style={{ stopColor: '#3db36b' }}
                        offset="1"
                    />
                </linearGradient>

                <linearGradient
                    id={`blue-schedule-block-gradient-${id}`}
                    x1="35.136669"
                    y1="46.601845"
                    x2="35.136669"
                    y2="92.177132"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop
                        style={{ stopColor: '#5887ff' }}
                        offset="0"
                    />
                    <stop
                        style={{ stopColor: '#517ded' }}
                        offset="1"
                    />
                </linearGradient>
            </defs>

            <path
                style={{ fill: 'none', stroke: '#999999', strokeWidth: 5.5, strokeLinecap: 'round', strokeLinejoin: 'miter', strokeDasharray: 'none' }}
                d="M 7.062292,50.024483 H 25.02775 m 67.909958,0 H 74.97225"
                transform="translate(0,-0.024483)"
            />
            <path
                style={{ fill: 'none', stroke: '#999999', strokeWidth: 5.5, strokeLinecap: 'round', strokeLinejoin: 'miter', strokeDasharray: 'none' }}
                d="M 7.062292,50.024483 H 25.02775 m 68.088608,0 H 75.1509"
                transform="rotate(90,50.056904,49.967579)"
            />
            <path
                style={{ fill: 'none', stroke: '#b3b3b3', strokeWidth: 4.36535, strokeLinecap: 'round', strokeLinejoin: 'miter', strokeDasharray: 'none' }}
                d="M 5.9391318,59.388286 17.459902,52.749357 m 74.57033,6.638929 -11.52077,-6.638929 M 5.9391318,9.727282 17.459902,16.366211 m 74.57033,-6.638929 -11.52077,6.638929"
                transform="rotate(90,41.771233,42.786551)"
            />
            <path
                style={{ fill: 'none', stroke: '#b3b3b3', strokeWidth: 4.36535, strokeLinecap: 'round', strokeLinejoin: 'miter', strokeDasharray: 'none' }}
                d="m 6.982873,25.148268 11.613203,6.732263 M 6.982873,74.851732 18.596076,68.119469 M 93.017127,25.148268 81.403924,31.880531 M 93.017127,74.851732 81.403924,68.119469"
            />
            <path
                style={{ fill: `url(#blue-schedule-block-gradient-${id})`, stroke: 'none' }}
                d="m 23.9546,87.6875 h 31.135931 a 2.833783,2.833783 128.55513 0 0 2.762375,-3.465931 L 50.814779,53.466192 A 3.0565527,3.0565527 27.310317 0 0 46.666067,51.323936 L 15.776933,64.112081 a 5.5514057,5.5514057 123.75519 0 0 -3.427904,5.129215 l 0,6.840633 A 11.605571,11.605571 45 0 0 23.9546,87.6875 Z"
            />
            <path
                style={{ fill: `url(#green-schedule-block-gradient-${id})`, stroke: 'none' }}
                d="m 23.9546,87.6875 h 31.135931 a 2.833783,2.833783 128.55513 0 0 2.762375,-3.465931 L 50.814779,53.466192 A 3.0565527,3.0565527 27.310317 0 0 46.666067,51.323936 L 15.776933,64.112081 a 5.5514057,5.5514057 123.75519 0 0 -3.427904,5.129215 l 0,6.840633 A 11.605571,11.605571 45 0 0 23.9546,87.6875 Z"
                transform="rotate(180,50.024657,49.992187)"
            />
            <path
                style={{ fill: 'none', stroke: '#ff4f4f', strokeWidth: 4.36535433, strokeLinecap: 'round', strokeLinejoin: 'miter', strokeDasharray: 'none' }}
                d="M 21.237354,17.570946 50,50"
            />
        </svg>
    );
}
