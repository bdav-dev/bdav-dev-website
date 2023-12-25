import CodeProject from "@/components/CodeProject";
import Headline from "@/components/base/Headline";
import PageTitle from "@/components/base/PageTitle";
import Tile from "@/components/base/Tile";
import { codeProjects } from "@/content/codeProjects";

export default function Timecoder() {
    return (
        <CodeProject
            codeProject={codeProjects.timecoder}
        >
            <PageTitle>Timecoder</PageTitle>

            <Headline>Short description</Headline>

            <Tile className="mb-3">
                With "Timecoder" you can document in/out sequences of a video. When specifying an in and out timecode, "Timecoder" will calculate the difference between the two. You are also able to add a comment to a in/out sequence.
                You can export and share your sequences via a .csv table or a link.
                If you are a video producer, your client can document desired corrections with this web application and send you back a link so you can implement these corrections.
                This application uses Next.js with React and TypeScript.
            </Tile>

            <Headline>Use Timecoder</Headline>

            <div className="flex flex-col gap-1.5">
                <Tile title="Website">
                    You can use Timecoder in the web with this website: https://timecoder.vercel.app/
                </Tile>

                <Tile title="From source code">
                    You can download the source code of the application and run the app locally. To achieve this, follow these steps:

                    <ol>
                        <li>1. Make sure you have Node.js installed.</li>
                        <li>2. Download the source code of the project (as a .zip file or via git clone).</li>
                        <li>3. Open a terminal in the project's root directory.</li>
                        <li>4. Run npm install to install the project's dependencies.</li>
                        <li>5. Start the developement server by entering the command npm run dev.</li>
                        <li>6. Open your browser and enter [http://localhost:3000/] in the address bar.</li>
                    </ol>

                </Tile>
            </div>

        </CodeProject>
    );
}