import Abstract3dSeriesProject from "@/components/links/Abstract3dSeriesLink";
import Headline from "@/components/pageElements/headlines/Headline";
import test from "@/../public/dev/test.png";
import PageBody from "@/components/PageBody";

export default function Blender() {
    return (
        <PageBody
            category="3D"
            sitePath="/3d/"
        >
            <Headline>
                Abstract3DSeries
            </Headline>

            <div className="flex flex-row flex-wrap gap-5 justify-center sm:justify-normal">
                <Abstract3dSeriesProject image={test} />
                <Abstract3dSeriesProject image={test} />
                <Abstract3dSeriesProject image={test} />
                <Abstract3dSeriesProject image={test} />
                <Abstract3dSeriesProject image={test} />
                <Abstract3dSeriesProject image={test} />
                <Abstract3dSeriesProject image={test} />
                <Abstract3dSeriesProject image={test} />
                <Abstract3dSeriesProject image={test} />
            </div>

        </PageBody>
    );
}