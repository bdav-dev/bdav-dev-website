import { CSSProperties, useId } from "react";
import DarkAppIconSvgGroup from "@/categories/code/appIcons/DarkAppIconSvgGroup";

export default function RecipeHavenDarkAppIcon(props: { className?: string, style?: CSSProperties }) {
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
            <DarkAppIconSvgGroup/>

            <defs>
                <linearGradient
                    id={`app-icon-gradient-${id}`}
                    x1="9.0351753"
                    y1="13.059432"
                    x2="90.974823"
                    y2="86.95697"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="matrix(0.95772556,0,0,0.95772556,4.4325889,0.98469466)"
                >
                    <stop offset="0" style={{ stopColor: '#1ff254' }}/>
                    <stop offset="1" style={{ stopColor: '#49f279' }}/>
                </linearGradient>
            </defs>

            <path
                style={{ fill: 'none', stroke: `url(#app-icon-gradient-${id})`, strokeWidth: 4.5, strokeLinecap: 'round' }}
                d="m 68.88208,27.469378 c 25.446258,-1.497421 26.782701,26.844053 4.673374,27.989207 -0.04854,6.450682 0.107302,15.375905 -0.0951,21.819146 -0.08012,3.60631 -3.962086,4.600828 -6.891975,4.537076 -10.204331,0.01463 -20.415781,0.01366 -30.621962,-0.02274 C 32.801225,81.948598 28.63732,80.776795 28.74459,76.885591 28.70171,69.749227 28.79664,62.587844 28.70799,55.45857 5.3922244,50.545831 16.268629,19.523145 36.001281,23.547145 46.028051,12.356083 61.279644,13.320581 68.88208,27.469378 Z M 38.433216,38.431853 V 63.087201 M 46.884262,38.431853 V 63.087201 M 55.41284,38.509388 v 24.500279 m 8.451045,-24.500279 v 24.500279 m -35.122237,9.192842 h 44.813806"
            />
        </svg>
    );
}
