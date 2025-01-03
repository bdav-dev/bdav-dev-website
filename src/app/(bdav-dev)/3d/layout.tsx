import React from "react";
import { Abstract3DCollectionsProvider } from "@/contexts/Abstract3DCollectionsContext";

export default function BlenderLayout({ children }: { children: React.ReactNode }) {
    return (
        <Abstract3DCollectionsProvider>
            {children}
        </Abstract3DCollectionsProvider>
    );
}
