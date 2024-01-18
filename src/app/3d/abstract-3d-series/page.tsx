import { defaultMetadata } from "@/metadata";
import Abstract3dSeriesLink from "@/components/links/content/Abstract3dSeriesLink";
import Abstract3DSeriesLayout from '@/components/categories/3d/Abstract3DSeries';
import Section from "@/components/pageStructure/Section";
import { abstract3dSeriesImages } from "@/content/3d/abstract3dSeries";

export default function Abstract3DSeries() {

    return (
        <Abstract3DSeriesLayout>

            <Section headline="Abstract3D Series">

                <div className="mt-4 flex flex-row flex-wrap gap-5 justify-center sm:justify-normal">
                    {
                        Object.values(abstract3dSeriesImages)
                            .sort((a, b) => b.nr - a.nr)
                            .map(
                                (image, index) => <Abstract3dSeriesLink abstract3dSeriesImage={image} key={index} />
                            )
                    }
                </div>

            </Section>

            <Section headline="Abstract3D Series – Wallpapers" className="mt-4">

                <div className="mt-4 flex flex-row flex-wrap gap-5 justify-center sm:justify-normal">
                    {
                        Object.values(abstract3dSeriesImages)
                            .sort((a, b) => b.nr - a.nr)
                            .map(
                                (image, index) => {
                                    if (image.downloads?.wallpaperDownloads)
                                        return <Abstract3dSeriesLink abstract3dSeriesImage={image} key={index} />
                                }
                            )
                    }
                </div>

            </Section>

        </Abstract3DSeriesLayout>
    );
}

export const metadata = {
    title: "bdav.dev – Abstract3D Series",
    description: "Abstract3D Series from David Berezowski.",
    ...defaultMetadata(["Abstract3D Series", "Abstract3DSeries", "a3ds", "Blender", "3D", "abstract"])
}