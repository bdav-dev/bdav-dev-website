import { defaultMetadata } from "@/app/layout";
import Abstract3dSeriesLink from "@/components/links/Abstract3dSeriesLink";
import PageBody from "@/components/PageBody";
import Section from "@/components/pageElements/Section";
import { abstract3dSeriesImages } from "@/content/abstract3dSeries";

export default function Abstract3DSeries() {

    return (
        <PageBody
            category="3D"
            sitePath="/3d/abstract-3d-series/"
        >
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
        </PageBody>
    );
}

export const metadata = {
    title: "bdav.dev – Abstract3D Series",
    description: "Abstract3D Series from David Berezowski",
    ...defaultMetadata(["Abstract3D Series", "Abstract3DSeries", "a3ds", "Blender", "3D", "abstract"])    
}