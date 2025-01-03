import InstagramLink from "@/components/link/social/InstagramLink";
import HStack from "@/components/layout/stacks/HStack";
import { defaultMetadata } from "@/metadata";
import Tile from "@/components/Tile";
import Section from "@/components/document/Section";
import { Abstract3DSeries } from "@/content/3d/a3ds/abstract3dSeries";
import { Abstract3DSeriesLinkPlaceholder } from "@/components/link/content/Abstract3DLink";
import { Abstract3DSeriesSort } from "@/utils/SortUtils";
import Link from "next/link";
import { Route } from "@/utils/RouteUtils";
import InternalLink from "@/components/link/InternalLink";
import BlenderIcon from "@/icons/BlenderIcon";
import { Abstract3DStaticCollections } from "@/content/3d/a3ds/abstract3dCollections";
import Abstract3DList from "@/components/categories/3d/a3ds/Abstract3DList";
import HyperLink from "@/components/link/HyperLink";

export default function BlenderPage() {
    const amountOfAbstract3Ds = Object.values(Abstract3DSeries).length;
    const abstract3DPreview = Object.values(Abstract3DSeries)
        .slice(-15)
        .sort(Abstract3DSeriesSort);

    return (
        <>
            <Tile>
                <HStack className="ml-auto mr-auto w-fit items-center">
                    Visit me on <InstagramLink/>
                </HStack>
            </Tile>

            <Section headline="Abstract3D Series" className="mt-4">
                <Tile className={'mt-2'}>
                    <InternalLink href={Route.abstract3dSeries} icon={BlenderIcon}>Abstract3D Series</InternalLink> is a collection
                    of {amountOfAbstract3Ds} square-format images, created since 2021 using the 3D software <HyperLink href="https://www.blender.org/">Blender</HyperLink>.
                    This series showcases the beauty of abstract art through diverse 3D or flat shapes.
                    While images are always presented in a square format, some are also available
                    as <InternalLink href={Route.abstract3dCollection(Abstract3DStaticCollections.wallpapers)}>downloadable wallpapers</InternalLink>.

                    <Abstract3DList
                        abstract3Ds={abstract3DPreview}
                        trailingComponent={
                            <Link className={'relative rounded-2xl group'}
                                  href={Route.abstract3dSeries}
                                  draggable={false}
                            >
                                <Abstract3DSeriesLinkPlaceholder
                                    className={`
                                        flex justify-center
                                        items-center text-center
                                        bg-zinc-100 dark:bg-zinc-950
                                    `}
                                >
                                    <div className={'text-xl group-hover:scale-105 transition-transform ease-out'}>
                                        View All
                                    </div>
                                </Abstract3DSeriesLinkPlaceholder>
                            </Link>
                        }
                        className={'mt-3'}
                    />
                </Tile>
            </Section>
        </>
    );
}

export const metadata = {
    title: "bdav.dev – 3D",
    description: "Blender 3D projects from David Berezowski.",
    ...defaultMetadata(["Blender projects", "3D projects", "Project", "Blender", "3D"])
}
