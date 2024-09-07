import { Inter } from "next/font/google";
import localFont from 'next/font/local';

const interFont = Inter({ subsets: ['latin-ext'] });

const cascadiaCodeFont = localFont({
    src: '../public/fonts/CascadiaCode.woff2',
    display: "swap",
    weight: "350"
});

export const inter = interFont.className;
export const mono = cascadiaCodeFont.className;