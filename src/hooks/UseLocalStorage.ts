'use client';

import { useEffect, useState } from "react";

export default function useLocalStorage<T>(key: string, fallback: T) {
    const [firstLoadDone, setFirstLoadDone] = useState(false);
    const [storedValue, setStoredValue] = useState(fallback);

    function fromLocalStorage() {
        if (typeof window === "undefined") {
            return fallback;
        }

        try {
            const item = window.localStorage.getItem(key);
            return item ? JSON.parse(item) : fallback;
        } catch (error) {
            return fallback;
        }
    }

    useEffect(() => {
        setStoredValue(fromLocalStorage());
        setFirstLoadDone(true);
    }, [fallback, key]);

    useEffect(() => {
        if (!firstLoadDone) {
            return;
        }

        try {
            if (typeof window !== "undefined") {
                window.localStorage.setItem(key, JSON.stringify(storedValue));
            }
        } catch (error) {
        }
    }, [storedValue, firstLoadDone, key]);

    return { storedValue, setStoredValue };
}
