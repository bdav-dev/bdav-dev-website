import { Inter, Space_Mono } from "next/font/google";

const interFont = Inter({ subsets: ['latin'] });
const spaceMonoFont = Space_Mono({ subsets: ['latin'], weight: "400" });

export const inter = interFont.className;
export const spaceMono = spaceMonoFont.className;