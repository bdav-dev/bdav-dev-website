export default function LightAppIconSvgGroup() {
    return (
        <g>
            <defs>
                <path
                    id="squircle-light"
                    d="M 7.617,7.617 C 8.608,6.626 9.382,5.873 10.957,4.757 11.702,4.229 12.88,3.472 14.493,2.738 17.133,1.537 19.858,0.911 22.383,0.614 25.666,0.229 31.713,0 33.062,0 33.884,0 49.5,0 50,0 c 0.5,0 16.115,0 16.938,0 1.349,0 7.395,0.229 10.679,0.614 2.526,0.296 5.25,0.923 7.89,2.124 1.613,0.734 2.791,1.491 3.536,2.019 1.575,1.116 2.35,1.87 3.34,2.86 0.991,0.991 1.744,1.765 2.86,3.34 0.528,0.745 1.285,1.923 2.019,3.536 1.201,2.64 1.827,5.365 2.124,7.89 0.385,3.283 0.614,9.33 0.614,10.679 0,0.822 0,16.438 0,16.938 0,0.5 0,16.115 0,16.938 0,1.349 -0.229,7.395 -0.614,10.679 -0.296,2.526 -0.923,5.25 -2.124,7.89 -0.734,1.613 -1.491,2.791 -2.019,3.536 -1.116,1.575 -1.869,2.349 -2.86,3.34 -0.991,0.991 -1.765,1.744 -3.34,2.86 -0.745,0.528 -1.923,1.285 -3.536,2.019 -2.64,1.201 -5.365,1.827 -7.89,2.124 C 74.334,99.771 68.287,100 66.938,100 66.116,100 50.5,100 50,100 c -0.5,0 -16.115,0 -16.938,0 -1.349,0 -7.395,-0.229 -10.679,-0.614 -2.526,-0.296 -5.25,-0.923 -7.89,-2.124 C 12.88,96.528 11.702,95.771 10.957,95.243 9.382,94.127 8.608,93.374 7.617,92.383 6.626,91.392 5.873,90.618 4.757,89.043 4.229,88.298 3.472,87.12 2.738,85.507 1.537,82.867 0.911,80.142 0.614,77.617 0.229,74.334 0,68.287 0,66.938 0,66.116 0,50.5 0,50 0,49.5 0,33.885 0,33.062 0,31.713 0.229,25.667 0.614,22.383 0.91,19.857 1.537,17.133 2.738,14.493 3.472,12.88 4.229,11.702 4.757,10.957 5.873,9.382 6.626,8.608 7.617,7.617 Z"
                />

                <clipPath id="squircle-clip-path-light" clipPathUnits="userSpaceOnUse">
                    <use href="#squircle-light"/>
                </clipPath>

                <linearGradient id="light-background-gradient" gradientTransform="rotate(90)">
                    <stop offset="0" style={{ stopColor: '#ffffff' }}/>
                    <stop offset="1" style={{ stopColor: '#ebebeb' }}/>
                </linearGradient>

                <linearGradient id="light-highlights-gradient" gradientTransform="rotate(45 0.5 0.5)">
                    <stop offset="0" style={{ stopColor: '#ffffff' }}/>
                    <stop offset="0.4" style={{ stopColor: '#fdfdfd' }}/>
                    <stop offset="0.6" style={{ stopColor: '#fdfdfd' }}/>
                    <stop offset="1" style={{ stopColor: '#ffffff' }}/>
                </linearGradient>

                <filter
                    id="light-highlights-blur"
                    style={{ colorInterpolation: 'sRGB' }}
                    x="-0.0348586"
                    y="-0.0348586"
                    width="1.0697172"
                    height="1.0697172"
                >
                    <feGaussianBlur stdDeviation="0.98"/>
                </filter>
            </defs>

            <use
                href="#squircle-light"
                style={{ fill: 'url(#light-background-gradient)', stroke: 'none' }}
            />

            <use
                href="#squircle-light"
                style={{ fill: 'none', stroke: 'url(#light-highlights-gradient)', strokeWidth: 2.26772, filter: 'url(#light-highlights-blur)' }}
                clipPath="url(#squircle-clip-path-light)"
            />
        </g>
    );
}
