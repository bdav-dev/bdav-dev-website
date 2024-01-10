import Abstract3dSeriesLink from "@/components/links/content/Abstract3dSeriesLink";
import InstagramLink from "@/components/links/social/InstagramLink";
import HStack from "@/components/pageStructure/stacks/HStack";
import { defaultMetadata } from "../layout";
import PageBody from "@/components/pageLayout/PageBody";
import Tile from "@/components/pageElements/Tile";
import Section from "@/components/pageStructure/Section";
import { abstract3dSeriesImages } from "@/content/3d/abstract3dSeries";

export default function Blender() {

    return (
        <PageBody
            category="3D"
            sitePath="/3d/"
        >
            <Tile>
                <HStack className="ml-auto mr-auto w-fit items-center">
                    Visit me on <InstagramLink />
                </HStack>
            </Tile>

            <Section headline="Abstract3D Series" className="mt-4">

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
    title: "bdav.dev – 3D",
    description: "Blender 3D projects from David Berezowski",
    ...defaultMetadata(["Blender projects", "3D projects", "Project", "Blender", "3D"])    
}
