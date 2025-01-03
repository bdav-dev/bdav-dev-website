import HyperLink from "@/components/link/HyperLink";
import BlockQuote from "@/components/BlockQuote";
import Code from "@/components/Code";
import Enumerate from "@/components/Enumerate";
import Highlight from "@/components/Highlight";
import Mono from "@/components/Mono";
import Tile from "@/components/Tile";
import LargeBreak from "@/components/format/break/LargeBreak";
import Article from "@/components/document/Article";
import Section from "@/components/document/Section";
import SubSection from "@/components/document/SubSection";
import SubSubSection from "@/components/document/SubSubSection";
import { CodeProjects } from "@/content/code/codeProjects";
import { Space } from "@/components/format/Space";
import InjectWordBreaks from "@/components/format/InjectWordBreaks";
import React from "react";
import CodeProjectLayout from "@/layout/CodeProjectLayout";

export default function KdmFinderPage() {
    const kdmFinder = CodeProjects.kdmFinder;

    return (
        <CodeProjectLayout codeProject={kdmFinder}>
            <Article headline={kdmFinder.title}>
                Find KDMs in your emails

                <Section headline="Short Description">
                    <Tile className="mt-2">
                        KDM-Finder is an application developed for cinemas,
                        simplifying the search for KDMs (Key Delivery Messages) within an email account.

                        <LargeBreak/>

                        A KDM (Key Delivery Message) is required to play an encrypted DCP movie.
                        KDMs are typically provided as <Code>.xml</Code> files.

                        <LargeBreak/>

                        The application is written in Python and uses the PyQt6 UI library.
                    </Tile>
                </Section>

                <Section headline="Platform">
                    <Tile className="mt-2">
                        KDM-Finder should work on all platforms supporting Python and PyQt6.
                        However, the application was only tested on Linux (Ubuntu 22.04).

                        <LargeBreak/>

                        Functionality under macOS or Windows has not been tested.
                    </Tile>
                </Section>

                <Section headline="Use KDM-Finder">

                    <SubSection headline="Dependencies">
                        <Tile>
                            Make sure you have the following software installed:
                            <Enumerate
                                indent
                                items={[
                                    <>Python</>,
                                    <>PyQt6 (can be installed with <Code>pip install PyQt6</Code>)</>,
                                    <>On Linux: <Code>libxcb-cursor0</Code> (can be installed with
                                        <Code>sudo apt install libxcb-cursor0</Code>)</>
                                ]}
                            />
                        </Tile>
                    </SubSection>

                    <SubSection headline="Run and Install">
                        <Tile>
                            To use KDM-Finder, download the source code of the latest version from GitHub using one of
                            the following methods:
                            <Enumerate
                                indent
                                numbered
                                items={[
                                    <>
                                        Download as a .zip file:<Space/>
                                        <HyperLink
                                            href="https://github.com/bdav-dev/kdm-finder/archive/refs/heads/main.zip"
                                        />
                                    </>,
                                    <>
                                        Download via
                                        <Code>git clone <InjectWordBreaks
                                            text={'https://github.com/bdav-dev/kdm-finder.git'}/></Code>
                                    </>
                                ]}
                            />


                            <SubSubSection headline="Run">
                                <Enumerate
                                    indent
                                    items={[
                                        <>If needed, unzip the <Code>.zip</Code> file.</>,
                                        <>Execute the python file <Code>main.py</Code> located in the root directory of
                                            the project.
                                            On Linux, this can be done with <Code>python3 path/to/main.py</Code></>
                                    ]}
                                />
                            </SubSubSection>

                            <LargeBreak/>

                            <SubSubSection headline="Install (Linux)">
                                A <Code>.desktop</Code> file is provided (in the root directory of the project) to
                                install
                                KDM-Finder on Linux systems.

                                <LargeBreak/>

                                Modify the <Code>Exec</Code> and the <Code>Icon</Code> properties,
                                pointing them to the correct files in your KDM-Finder installation:
                                <Enumerate
                                    indent
                                    items={[
                                        <>The <Code>Exec</Code> property should point the
                                            the <Code>main.py</Code> file</>,
                                        <>The <Code>Icon</Code> property should point the
                                            the <Code>kdm_finder_icon.png</Code> file</>
                                    ]}
                                />

                                <LargeBreak/>

                                Copy the <Code>kdm_finder.desktop</Code> file to
                                <Enumerate
                                    indent
                                    items={[
                                        <>
                                            <Code><InjectWordBreaks text={'.local/share/applications/'}/></Code>,
                                            if you want to install KDM-Finder for the current user
                                        </>,
                                        <>
                                            <Code><InjectWordBreaks text={'/usr/share/applications'}/></Code>,
                                            if you want to install KDM-Finder system wide for all users
                                        </>
                                    ]}
                                />
                            </SubSubSection>

                        </Tile>
                    </SubSection>

                </Section>

                <Section headline="Functionality">
                    <SubSection headline="Email">
                        <Tile>
                            The connection to your email account is established via IMAP.
                            KDM-Finder needs the following information to establish an email connection:
                            <Enumerate
                                indent
                                items={[
                                    "IMAP server",
                                    "email address",
                                    "password"
                                ]}
                            />

                            <LargeBreak/>

                            <BlockQuote>
                                <span className="font-semibold">Note</span>
                                <br/>
                                On a Gmail account, the password is not the password to your google account.
                                You need to enter an "app password".
                                <br/>
                                Read this article to learn how to create one:<span> </span>
                                <HyperLink href="https://support.google.com/accounts/answer/185833?hl=en"/>
                            </BlockQuote>

                            <LargeBreak/>

                            You can also specify ...
                            <Enumerate
                                indent
                                items={[
                                    "... how many emails KDM-Finder should fetch for the search (sorted by receipt time, latest first).",
                                    "... if KDM-Finder should automatically start the search on application startup."
                                ]}
                            />
                        </Tile>
                    </SubSection>

                    <SubSection headline="Search">
                        <Tile>
                            KDM-Finder fetches the latest emails and determines if an email contains a KDM.
                            An email is considered to contain a KDM if
                            <Enumerate
                                indent
                                items={[
                                    <>the email content, subject, sender or attachment contain (case
                                        ignored) <Code>kdm</Code> or <Code>key</Code> and</>,
                                    <>the email has an attachment with <Code>.zip</Code> or <Code>.xml</Code> as the
                                        file extension.</>
                                ]}
                            />

                            <LargeBreak/>

                            When all emails are fetched, the found KDMs are displayed in a list.
                            For each KDM the following information is displayed:
                            <Enumerate
                                indent
                                items={[
                                    "The filename (with extension) of the attachment",
                                    "The sender of the email",
                                    "The subject of the email"
                                ]}
                            />

                            <LargeBreak/>

                            A <Highlight>View</Highlight> button is also present for each KDM, making it possible to
                            view the entire email.
                        </Tile>
                    </SubSection>

                    <SubSection headline="Save">
                        <Tile>
                            You can select the KDMs you want to save by clicking on them in the list.
                            When you selected all KDMs you want to save, click the <Highlight>Save
                            selected</Highlight> button.

                            <LargeBreak/>

                            Now, you can locate to a directory in your file system in which the KDMs should be saved.

                            <LargeBreak/>

                            <BlockQuote>
                                <span className="font-semibold">Note</span>
                                <br/>
                                If you save a <Mono>.zip</Mono> file,
                                the contents of the file will be extracted and saved, rather than
                                the <Mono>.zip</Mono> file itself.
                            </BlockQuote>
                        </Tile>
                    </SubSection>

                </Section>

                <Section headline="Known Issues">
                    <Tile className="mt-2">
                        <Enumerate
                            items={[
                                <>
                                    The application windows don't appear in the middle of the screen on Linux when using
                                    Wayland
                                </>,
                                <>
                                    Changing the OS theme (from light to dark mode or vice versa)
                                    requires a restart of the application to avoid color issues
                                </>
                            ]}
                        />
                    </Tile>
                </Section>

            </Article>
        </CodeProjectLayout>
    );

}