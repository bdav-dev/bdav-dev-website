import { ComponentProps, CSSProperties, ReactNode } from "react";


type PhoneProps = {
    screen: ReactNode,
    size?: string
    style?: CSSProperties,
    className?: string,
}

export default function Phone(props: PhoneProps) {
    return (
        <div className={`relative h-fit ${props.className}`} style={{ width: props.size ?? '10rem', ...props.style }}>
            <div className={'absolute object-cover w-[92%] h-[97%] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none overflow-clip'} style={{ borderRadius: "14% / 6.4%" }}>
                {props.screen}
            </div>
            <PhoneFrame className={'relative text-[#999999] dark:text-[#B2B2B2]'}/>
        </div>
    );
}

function PhoneFrame(props: ComponentProps<'svg'>) {
    return (
        <svg
            viewBox="0 0 939 1921"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path
                style={{ fill: 'currentcolor' }}
                width="4.2418594"
                height="23.329998"
                x="0.0072031398"
                y="104.37151"
                d="m 1.594703,104.37151 h 1.0668597 a 1.5874999,1.5874999 45 0 1 1.5874999,1.5875 v 20.155 a 1.5874999,1.5874999 135 0 1 -1.5874999,1.5875 H 1.594703 a 1.5874999,1.5874999 45 0 1 -1.58749986,-1.5875 l 0,-20.155 a 1.5874999,1.5874999 135 0 1 1.58749986,-1.5875 z"
                transform="matrix(3.7793324,0,0,3.7793324,-0.02722306,-2.819275e-6)"
            />
            <path
                style={{ fill: 'currentcolor' }}
                width="4.2418594"
                height="38.684101"
                x="-1.6961932e-10"
                y="145.36342"
                d="m 1.8520833,145.36342 h 0.5376928 a 1.8520833,1.8520833 45 0 1 1.8520833,1.85208 v 34.97994 a 1.8520833,1.8520833 135 0 1 -1.8520833,1.85208 H 1.8520833 A 1.8520833,1.8520833 45 0 1 0,182.19544 V 147.2155 a 1.8520833,1.8520833 135 0 1 1.8520833,-1.85208 z"
                transform="matrix(3.7793324,0,0,3.7793324,0,-2.819275e-6)"
            />
            <path
                style={{ fill: 'currentcolor' }}
                id="rect3-9-1"
                width="4.2418594"
                height="59.503506"
                x="244.20224"
                y="158.61147"
                d="m 246.05432,158.61147 h 0.5377 a 1.8520833,1.8520833 45 0 1 1.85208,1.85208 v 55.79934 a 1.8520833,1.8520833 135 0 1 -1.85208,1.85208 h -0.5377 a 1.8520833,1.8520833 45 0 1 -1.85208,-1.85208 v -55.79934 a 1.8520833,1.8520833 135 0 1 1.85208,-1.85208 z"
                transform="matrix(3.7793324,0,0,3.7793324,-0.00390605,-2.819275e-6)"
            />
            <path
                style={{ fill: 'currentcolor' }}
                id="rect3-9-3"
                width="4.2418594"
                height="37.89035"
                x="-1.6961932e-10"
                y="193.53537"
                d="m 1.8520833,193.53537 h 0.5376928 a 1.8520833,1.8520833 45 0 1 1.8520833,1.85208 v 34.18619 a 1.8520833,1.8520833 135 0 1 -1.8520833,1.85208 H 1.8520833 A 1.8520833,1.8520833 45 0 1 0,229.57364 v -34.18619 a 1.8520833,1.8520833 135 0 1 1.8520833,-1.85208 z"
                transform="matrix(3.7793324,0,0,3.7793324,0,-2.819275e-6)"
            />
            <path
                style={{ stroke: '#171717', strokeWidth: 4.88256, fill: 'none' }}
                width="230.84642"
                height="495.16437"
                x="8.7986622"
                y="6.5501046"
                d="M 44.252827,6.5501046 H 204.19092 A 35.454165,35.454165 45 0 1 239.64508,42.00427 v 424.25604 a 35.454165,35.454165 135 0 1 -35.45416,35.45416 H 44.252827 A 35.454165,35.454165 45 0 1 8.7986622,466.26031 V 42.00427 A 35.454165,35.454165 135 0 1 44.252827,6.5501046 Z"
                transform="matrix(3.7793324,0,0,3.7793324,0,-2.819275e-6)"
            />
            <path
                style={{ stroke: '#000000', strokeWidth: 76.3879, strokeLinecap: 'round', strokeLinejoin: 'round', strokeDasharray: 'none' }}
                d="M 373.72838,101.69004 H 565.22313"
            />
            <path
                style={{ stroke: 'currentcolor', strokeWidth: 5.01101, fill: 'none' }}
                width="239.20299"
                height="503.2554"
                x="4.619668"
                y="2.504585"
                d="m 44.57175,2.504585 h 159.29882 a 39.952082,39.952082 45 0 1 39.95209,39.952082 V 465.8079 a 39.952082,39.952082 135 0 1 -39.95209,39.95209 H 44.57175 A 39.952082,39.952082 45 0 1 4.619668,465.8079 V 42.456667 A 39.952082,39.952082 135 0 1 44.57175,2.504585 Z"
                transform="matrix(3.7793324,0,0,3.7793189,-1.7546835e-5,0.0034782)"
            />
        </svg>
    );
}
