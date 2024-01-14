'use client';

import { useEffect, useState } from "react";

export default function useIsMobile() {
    let [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        setIsMobile('ontouchstart' in document.documentElement);
    }, []);

    return isMobile;
}