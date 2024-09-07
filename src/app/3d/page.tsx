import InstagramLink from "@/components/links/social/InstagramLink";
import HStack from "@/components/pageStructure/stacks/HStack";
import { defaultMetadata } from "@/metadata";
import PageBody from "@/components/pageLayout/PageBody";
import Tile from "@/components/pageElements/Tile";
import Abstract3DSeriesOverview from "@/components/categories/3d/Abstract3DSeriesOverview";

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

            <Abstract3DSeriesOverview />
        </PageBody>
    );
}

export const metadata = {
    title: "bdav.dev – 3D",
    description: "Blender 3D projects from David Berezowski.",
    ...defaultMetadata(["Blender projects", "3D projects", "Project", "Blender", "3D"])
}
