import CodeProject from "@/components/CodeProject";
import CodeProjectOverview from "@/components/CodeProjectOverview";
import Code from "@/components/base/Code";
import Enumerate from "@/components/base/Enumerate";
import ExternalLink from "@/components/base/ExternalLink";
import Tile from "@/components/base/Tile";
import HStack from "@/components/base/stacks/HStack";
import Article from "@/components/pageElements/Article";
import Section from "@/components/pageElements/Section";
import SubSection from "@/components/pageElements/SubSection";
import { codeProjects } from "@/content/codeProjects";

// "dashboard": project language, programming language, type

export default function Timecoder() {
    return (
        <CodeProject
            codeProject={codeProjects.timecoder}
        >
            <CodeProjectOverview codeProject={codeProjects.timecoder}/>

            <Article pageTitle={codeProjects.timecoder.title}>

                <Section headline="Short description">
                    <Tile className="leading-7 mt-2">
                        With "Timecoder" you can document in/out sequences of a video.
                        When specifying an in and out timecode, "Timecoder" will calculate the difference between the two.
                        You are also able to add a comment to a in/out sequence.
                        <br />
                        You can export and share your sequences via a .csv table or a link.
                        <br />
                        If you are a video producer, your client can document desired corrections with this web application
                        and send you back a link so you can implement these corrections.
                        <br />
                        This application uses Next.js with React and TypeScript.
                    </Tile>
                </Section>


                <Section headline="Use Timecoder">
                    <HStack className="mt-2">
                        <Tile title="Website">
                            You can use Timecoder in the web with this website: <ExternalLink href={codeProjects.timecoder.codeProjectProperies.launchLink!} />
                        </Tile>

                        <Tile title="From source code">
                            You can download the source code of the application and run the app locally.
                            To achieve this, follow these steps:

                            <Enumerate
                                items={[
                                    "Make sure you have Node.js installed.",
                                    <>Download the source code of the project (as a .zip file or via <Code>git clone</Code>).</>,
                                    "Open a terminal in the project's root directory.",
                                    <>Run <Code>npm install</Code> to install the project's dependencies.</>,
                                    <>Start the developement server by entering the command <Code>npm run dev</Code>.</>,
                                    <>Open your browser and enter <ExternalLink href="http://localhost:3000/" /> in the address bar.</>
                                ]}
                            />
                        </Tile>
                    </HStack>
                </Section>


                <Section headline="Features">
                    <SubSection smallHeadline="Project settings">
                        <Tile>
                            You can set a project name and a framerate
                            (currently 24, 25, 30, 50 and 60 fps are supported).
                        </Tile>
                    </SubSection>

                    <SubSection smallHeadline="In/Out sequences">
                        <Tile>
                            A in/out sequence consists of an in and out timecode,
                            a difference timecode and a comment field. The in-timecode specifies the
                            beginning of the sequence via a timecode
                            (example: <Code>00:01:15:14</Code>).
                            <br />
                            The out-timecode specifies the end the sequence also via a timecode
                            (example: <Code>00:02:01:21</Code>).
                            <br />
                            Timecoder automatically calculates the difference between the in and the out
                            timecode and displays the result in the difference timecode (example: <Code>00:00:46:07</Code>).
                            <br />
                            You are able to comment the sequence, for example to state some corrections
                            in that timeframe (example: <Code noMono>Please add a caption here with text:
                                "Our company is proud to announce the opening of its second factory in Berlin."</Code>).
                            <br />
                            You can also delete sequences and change the arrangement by swapping them.
                        </Tile>
                    </SubSection>

                    <SubSection smallHeadline="Total">
                        <Tile>Timecoder calculates the sum of the differences and displays it at the bottom left corner.</Tile>
                    </SubSection>

                    <SubSection smallHeadline="Share and export">
                        <Tile>
                            You can share and export the complete state of the application via 2 ways:

                            <Enumerate
                                items={[
                                    <>Via .csv table:<br />The .csv table export option is perfect if
                                        you want to save your work locally or want to print it out.</>,

                                    <>Via link:<br />If you want to share your work with another person
                                        or want to save your work for later editing, this option is for you.
                                        The link contains a long string in which the whole state of the application is contained.</>
                                ]}
                            />
                        </Tile>
                    </SubSection>

                    <SubSection smallHeadline="Local storage">
                        <Tile>
                            The entire state of the application is saved in your local storage.
                            This means, if you close your browser and reopen it, all of your work is still there.
                        </Tile>
                    </SubSection>

                </Section>

                <Section headline="Limitations">
                    <Tile className="mt-2">
                        <Enumerate
                            symbol="-"
                            items={["The app is not optimized for mobile use."]}
                            symbolWidthClassName="w-3"
                        />
                    </Tile>
                </Section>


            </Article>


            {/* <Article pageTitle="Article">
                This is content inside an article.

                <Section headline="Section">
                    This is content inside a section.

                    <SubSection smallHeadline="Subsection">
                        This is content inside a subsection.

                        <HStack className="mt-1">
                            <Tile>
                                test
                            </Tile>
                            <Tile>
                                test
                            </Tile>
                        </HStack>



                    </SubSection>

                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati at nobis odit. Placeat delectus sunt fugiat iusto repudiandae fuga nemo a quam, consequatur ratione! At ut recusandae voluptate omnis in!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati at nobis odit. Placeat delectus sunt fugiat iusto repudiandae fuga nemo a quam, consequatur ratione! At ut recusandae voluptate omnis in!

                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati at nobis odit. Placeat delectus sunt fugiat iusto repudiandae fuga nemo a quam, consequatur ratione! At ut recusandae voluptate omnis in!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati at nobis odit. Placeat delectus sunt fugiat iusto repudiandae fuga nemo a quam, consequatur ratione! At ut recusandae voluptate omnis in!

                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati at nobis odit. Placeat delectus sunt fugiat iusto repudiandae fuga nemo a quam, consequatur ratione! At ut recusandae voluptate omnis in!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati at nobis odit. Placeat delectus sunt fugiat iusto repudiandae fuga nemo a quam, consequatur ratione! At ut recusandae voluptate omnis in!

                </Section>

                <Section headline="Second Section">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati at nobis odit. Placeat delectus sunt fugiat iusto repudiandae fuga nemo a quam, consequatur ratione! At ut recusandae voluptate omnis in!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati at nobis odit. Placeat delectus sunt fugiat iusto repudiandae fuga nemo a quam, consequatur ratione! At ut recusandae voluptate omnis in!

                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati at nobis odit. Placeat delectus sunt fugiat iusto repudiandae fuga nemo a quam, consequatur ratione! At ut recusandae voluptate omnis in!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati at nobis odit. Placeat delectus sunt fugiat iusto repudiandae fuga nemo a quam, consequatur ratione! At ut recusandae voluptate omnis in!

                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati at nobis odit. Placeat delectus sunt fugiat iusto repudiandae fuga nemo a quam, consequatur ratione! At ut recusandae voluptate omnis in!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati at nobis odit. Placeat delectus sunt fugiat iusto repudiandae fuga nemo a quam, consequatur ratione! At ut recusandae voluptate omnis in!
                </Section>

            

            </Article> */}

        </CodeProject>
    );
}