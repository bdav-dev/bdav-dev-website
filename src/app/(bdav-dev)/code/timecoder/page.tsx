import { defaultMetadata } from "@/metadata";
import Code from "@/components/Code";
import Enumerate from "@/components/Enumerate";
import HyperLink from "@/components/link/HyperLink";
import Tile from "@/components/Tile";
import Article from "@/components/document/Article";
import Section from "@/components/document/Section";
import SubSection from "@/components/document/SubSection";
import { CodeProjects } from "@/content/code/codeProjects";
import LargeBreak from "@/components/format/break/LargeBreak";
import Highlight from "@/components/Highlight";
import React from "react";
import CodeProjectLayout from "@/layout/CodeProjectLayout";

export default function TimecoderPage() {
    const timecoder = CodeProjects.timecoder;

    return (
        <CodeProjectLayout codeProject={timecoder}>

            <Article headline={timecoder.title}>

                <Section headline="Short description">
                    <Tile className="mt-2">
                        With "Timecoder" you can document in/out sequences of a video.
                        When specifying an in and out timecode, "Timecoder" will calculate the difference between the
                        two.
                        You are also able to add a comment to a in/out sequence.
                        <LargeBreak/>
                        You can export and share your sequences via a .csv table or a link.
                        <LargeBreak/>
                        If you are a video producer, your client can document desired corrections with this web
                        application
                        and send you back a link so you can implement these corrections.
                        <LargeBreak/>
                        This application uses Next.js with React and TypeScript.
                    </Tile>
                </Section>


                <Section headline="Use Timecoder">
                    <div className="flex mt-2 gap-1.5 flex-col md:flex-row">
                        <Tile title="Website" className="flex-1">
                            You can use Timecoder in the web with this
                            website: <HyperLink href={CodeProjects.timecoder.properties.launchLink!}/>
                        </Tile>

                        <Tile title="From source code" className="flex-1">
                            You can download the source code of the application and run the app locally.
                            To achieve this, follow these steps:

                            <Enumerate
                                numbered
                                items={[
                                    "Make sure you have Node.js installed.",
                                    <>Download the source code of the project (as a .zip file or via <Code>git
                                        clone</Code>).</>,
                                    "Open a terminal in the project's root directory.",
                                    <>Run <Code>npm install</Code> to install the project's dependencies.</>,
                                    <>Start the development server by entering the command <Code>npm run dev</Code>.</>,
                                    <>Open your browser and enter <HyperLink href="http://localhost:3000/"/> in the
                                        address bar.</>
                                ]}
                            />
                        </Tile>
                    </div>
                </Section>


                <Section headline="Features">
                    <SubSection headline="Project settings">
                        <Tile>
                            You can set a project name and a framerate
                            (currently 24, 25, 30, 50 and 60 fps are supported).
                        </Tile>
                    </SubSection>

                    <SubSection headline="In/Out sequences">
                        <Tile>
                            A in/out sequence consists of an in and out timecode,
                            a difference timecode and a comment field. The in-timecode specifies the
                            beginning of the sequence via a timecode
                            (example: <Code>00:01:15:14</Code>).
                            <LargeBreak/>
                            The out-timecode specifies the end the sequence also via a timecode
                            (example: <Code>00:02:01:21</Code>).
                            <LargeBreak/>
                            Timecoder automatically calculates the difference between the in and the out
                            timecode and displays the result in the difference timecode
                            (example: <Code>00:00:46:07</Code>).
                            <LargeBreak/>
                            You are able to comment the sequence, for example to state some corrections
                            in that time frame (example: <Highlight>Please add a caption here with text:
                            "Our company is proud to announce the opening of its second factory in Berlin."</Highlight>).
                            <LargeBreak/>
                            You can also delete sequences and change the arrangement by swapping them.
                        </Tile>
                    </SubSection>

                    <SubSection headline="Total">
                        <Tile>Timecoder calculates the sum of the differences and displays it at the bottom left
                            corner.</Tile>
                    </SubSection>

                    <SubSection headline="Share and export">
                        <Tile>
                            You can share and export the complete state of the application via 2 ways:

                            <Enumerate
                                className="ml-1.5 mt-0.5"
                                spaceBetween
                                numbered
                                items={[
                                    {
                                        title: "Via .csv table",
                                        text: <>The .csv table export option is perfect if you want to
                                            save your work locally or want to print it out.</>
                                    },
                                    {
                                        title: "Via link",
                                        text: <>If you want to share your work with another person
                                            or want to save your work for later editing, this option is for you.
                                            The link contains a long string in which the whole state of the application
                                            is contained.</>
                                    }
                                ]}
                            />
                        </Tile>
                    </SubSection>

                    <SubSection headline="Local storage">
                        <Tile>
                            The entire state of the application is saved in your local storage.
                            This means, if you close your browser and reopen it, all of your work is still there.
                        </Tile>
                    </SubSection>

                </Section>

                <Section headline="Limitations">
                    <Tile className="mt-2">
                        <Enumerate
                            items={[
                                "The app is not optimized for mobile use.",
                                "There are currently problems displaying the modals correctly on macOS WebKit"
                            ]}
                            bulletWidth="0.75rem"
                        />
                    </Tile>
                </Section>

            </Article>

        </CodeProjectLayout>
    );
}

export const metadata = {
    title: "bdav.dev – Timecoder",
    description: "Timecode calculator. With Timecoder you can document in/out sequences of a video. If you are a video producer, your client can document desired corrections with this web application and send you back a link so you can implement these corrections.",
    ...defaultMetadata(["Timecoder", "Timecode calculator"])
}