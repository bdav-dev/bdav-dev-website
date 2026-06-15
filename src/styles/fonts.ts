import { Inter } from "next/font/google";
import localFont from 'next/font/local';


export const inter = Inter(
    {
        subsets: ['latin-ext']
    }
);

export const cascadiaCode = localFont(
    {
        src: '../../public/fonts/CascadiaCode.woff2',
        variable: "--cascadia-code-font"
    }
);
