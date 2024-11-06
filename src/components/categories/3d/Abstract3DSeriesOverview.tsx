import Abstract3dSeriesLink from "@/components/links/content/Abstract3dSeriesLink";
import Section from "@/components/pageStructure/Section";
import { abstract3dSeriesImages } from "@/content/3d/abstract3dSeries";

export default function Abstract3DSeriesOverview() {

    return (
        <>
            <Section headline="Abstract3D Series" className="mt-4">
                <div className="mt-4 flex flex-row flex-wrap gap-5 justify-center sm:justify-normal">
                    {
                        Object.values(abstract3dSeriesImages)
                            .sort((a, b) => b.nr - a.nr)
                            .map(
                                (image, index) => <Abstract3dSeriesLink abstract3dSeriesImage={image} key={index}/>
                            )
                    }
                </div>
            </Section>

            <Section headline="Abstract3D Series – Wallpapers" className="mt-4">
                <div className="mt-4 flex flex-row flex-wrap gap-5 justify-center sm:justify-normal">
                    {
                        Object.values(abstract3dSeriesImages)
                            .sort((a, b) => b.nr - a.nr)
                            .filter(image => image.downloads?.wallpaperDownloads)
                            .map((image, index) => <Abstract3dSeriesLink abstract3dSeriesImage={image} key={index}/>)
                    }
                </div>
            </Section>
        </>
    );
}