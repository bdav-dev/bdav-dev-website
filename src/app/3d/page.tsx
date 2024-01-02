import Abstract3dSeriesLink from "@/components/links/Abstract3dSeriesLink";
import PageBody from "@/components/PageBody";
import Section from "@/components/pageElements/Section";
import { abstract3dSeriesImages } from "@/content/abstract3dSeries";
import Tile from "@/components/base/Tile";
import InstagramLink from "@/components/links/social/InstagramLink";
import HStack from "@/components/base/stacks/HStack";

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