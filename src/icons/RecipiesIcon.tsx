import { IconProps } from "./IconProps";

export default function RecipesIcon(props: IconProps) {

    return (
        <svg
            className={props.className}
            viewBox="0 0 100 100"
            version="1.1">
            <g
                fill="none"
                strokeLinecap="round"
            >
                <path
                    d="m 70.750592,22.924269 c 31.723058,-1.866789 33.389168,33.465646 5.826148,34.893273 -0.06049,8.041864 0.133777,19.168662 -0.118546,27.20125 -0.09992,4.495875 -4.939409,5.735706 -8.592009,5.656233 -12.721425,0.01828 -25.451724,0.01706 -38.175451,-0.02834 -3.921013,0.195144 -9.112021,-1.265704 -8.978294,-6.116746 -0.05347,-8.896681 0.06489,-17.824558 -0.04562,-26.7124 C -8.4002351,51.692963 5.1590393,13.017946 29.759123,18.034542 42.259186,4.0829948 61.272872,5.2854047 70.750592,22.924269 Z m -37.959651,15.8479 V 69.50922 M 43.326597,38.772169 V 69.50922 M 53.958911,38.868827 V 69.412563 M 64.494567,38.868827 v 30.543736 m -43.7858,9.279109 H 76.57674"
                />
            </g>
        </svg>
    );
}
