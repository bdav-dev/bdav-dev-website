import { mono } from "@/fonts";
import React from "react";

export default function Mono({ children }: { children: React.ReactNode }) {
    return (
        <span className={mono}>
            {children}
        </span>
    );
}
