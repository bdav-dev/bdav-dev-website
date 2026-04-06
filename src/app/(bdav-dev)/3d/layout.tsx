import { ReactNode } from "react";
import { Abstract3dCollectionsProvider } from "@/categories/3d/a3ds/contexts/Abstract3dCollectionsContext";


export default function BlenderLayout({ children }: { children: ReactNode }) {
    return (
        <Abstract3dCollectionsProvider>
            {children}
        </Abstract3dCollectionsProvider>
    );
}
