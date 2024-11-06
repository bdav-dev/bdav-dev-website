import { defaultMetadata } from "@/metadata";
import Abstract3DSeriesLayout from '@/components/categories/3d/Abstract3DSeries';
import Abstract3DSeriesOverview from "@/components/categories/3d/Abstract3DSeriesOverview";

export default function Abstract3DSeries() {
    return (
        <Abstract3DSeriesLayout>
            <Abstract3DSeriesOverview/>
        </Abstract3DSeriesLayout>
    );
}

export const metadata = {
    title: "bdav.dev – Abstract3D Series",
    description: "Abstract3D Series from David Berezowski.",
    ...defaultMetadata(["Abstract3D Series", "Abstract3DSeries", "a3ds", "Blender", "3D", "abstract"])
}
