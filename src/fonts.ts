import { Inter, Space_Mono } from "next/font/google";

const interFont = Inter({ subsets: ['latin'] });
const spaceMono400Font = Space_Mono({ subsets: ['latin'], weight: "400" });
const spaceMono700Font = Space_Mono({ subsets: ['latin'], weight: "700" });

export const inter = interFont.className;
export const spaceMono = spaceMono400Font.className;
export const spaceMonoBold = spaceMono700Font.className;