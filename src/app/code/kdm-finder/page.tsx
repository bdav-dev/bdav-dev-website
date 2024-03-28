import CodeProject from "@/components/categories/code/CodeProject";
import HyperLink from "@/components/links/HyperLink";
import BlockQuote from "@/components/pageElements/BlockQuote";
import Code from "@/components/pageElements/Code";
import Enumerate from "@/components/pageElements/Enumerate";
import Highlight from "@/components/pageElements/Highlight";
import MonoSpan from "@/components/pageElements/MonoSpan";
import Tile from "@/components/pageElements/Tile";
import LargeBr from "@/components/pageElements/breaks/LargeBr";
import Article from "@/components/pageStructure/Article";
import Section from "@/components/pageStructure/Section";
import SubSection from "@/components/pageStructure/SubSection";
import SubSubSection from "@/components/pageStructure/SubSubSection";
import { codeProjects } from "@/content/code/codeProjects";


export default function KdmFinder() {
    return (
        <CodeProject codeProject={codeProjects.kdmFinder}>

            <Article headline={codeProjects.kdmFinder.title}>
                Find KDMs in your emails

                <Section headline="Short Description">
                    <Tile className="mt-2">
                        KDM-Finder is an application developed for cinemas,
                        simplifying the search for KDMs (Key Delivery Messages) within an email account.

                        <LargeBr />

                        A KDM (Key Delivery Message) is required to play an encrypted DCP movie.
                        This is typically is provided as a <Code>.xml</Code> file.

                        <LargeBr />

                        The application is written in Python and uses the PyQt6 UI library.
                    </Tile>
                </Section>

                <Section headline="Platform">
                    <Tile className="mt-2">
                        KDM-Finder should work on all platforms supporting Python and PyQt6.
                        However, the application was only tested on Linux (Ubuntu 22.04).

                        <LargeBr />

                        Functionality under macOS or Windows has not been tested.
                    </Tile>
                </Section>

                <Section headline="Use KDM-Finder">

                    <SubSection headline="Dependencies">
                        <Tile>
                            Make sure you have Python and PyQt6 installed. The latter can be installed with <Code>pip install PyQt6</Code>.

                            <LargeBr />

                            The application is tested with:
                            <Enumerate
                                indent
                                symbol="-"
                                items={[
                                    "Python 3.10.12",
                                    "PyQt6 6.6.1"
                                ]}
                            />
                        </Tile>
                    </SubSection>

                    <SubSection headline="Run and Install">
                        <Tile>
                            To use KDM-Finder, download the source code of the latest version from GitHub
                            (as a <Code>.zip</Code> file or via <Code>git clone</Code>).

                            <LargeBr />

                            You can also use this link: <HyperLink href="https://github.com/bdav-dev/kdm-finder/archive/refs/heads/main.zip" />

                            <LargeBr />

                            <SubSubSection headline="Run">
                                <Enumerate
                                    items={[
                                        <>If needed, unzip the <Code>.zip</Code> file.</>,
                                        <>Execute the python file <Code>main.py</Code> located in the root directory of the project.
                                            On Linux, this can be done with <Code>python3 path/to/main.py</Code></>
                                    ]}
                                />
                            </SubSubSection>

                            <LargeBr />

                            <SubSubSection headline="Install (Linux)">
                                A <Code>.desktop</Code> file is provided (in the root directory of the project) to install
                                KDM-Finder on Linux systems.

                                <LargeBr />

                                Modify the <Code>Exec</Code> and the <Code>Icon</Code> properties,
                                pointing them to the correct files in your KDM-Finder installation:
                                <Enumerate
                                    indent
                                    symbol="-"
                                    items={[
                                        <>The <Code>Exec</Code> property should point the the <Code>main.py</Code> file</>,
                                        <>The <Code>Icon</Code> property should point the the <Code>kdm_finder_icon.png</Code> file</>
                                    ]}
                                />

                                <LargeBr />

                                Copy the <Code>kdm_finder.desktop</Code> file to
                                <Enumerate
                                    indent
                                    symbol="-"
                                    items={[
                                        <><Code>~/<wbr/>.local/<wbr/>share/<wbr/>applications/</Code>, if you want to install KDM-Finder for the current user</>,
                                        <><Code>/usr/<wbr/>share/<wbr/>applications</Code>, if you want to install KDM-Finder system wide for all users</>
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
                                symbol="-"
                                items={[
                                    "IMAP server",
                                    "email address",
                                    "password"
                                ]}
                            />

                            <LargeBr />

                            <BlockQuote>
                                <span className="font-semibold">Note</span>
                                <br />
                                On a Gmail account, the password is not the password to your google account.
                                You need to enter an "app password".
                                <br />
                                Read this article to learn how to create one:<span> </span>
                                <HyperLink href="https://support.google.com/accounts/answer/185833?hl=en">
                                    https://<wbr />support.google.com/<wbr />accounts/<wbr />answer/<wbr />185833?hl=en
                                </HyperLink>
                            </BlockQuote>

                            <LargeBr />

                            You can also specify ...
                            <Enumerate
                                indent
                                symbol="-"
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
                            An email is considered contain a KDM if
                            <Enumerate
                                indent
                                symbol="-"
                                items={[
                                    <>the email content, subject or sender contain (case ignored) <Code>kdm</Code> or <Code>key</Code> and</>,
                                    <>the email has an attachment with <Code>.zip</Code> or <Code>.xml</Code> as the file extension.</>
                                ]}
                            />

                            <LargeBr />

                            When all emails are fetched, the found KDMs are displayed in a list.
                            For each KDM the following information is displayed:
                            <Enumerate
                                indent
                                symbol="-"
                                items={[
                                    "The filename (with extension) of the attachment",
                                    "The sender of the email",
                                    "The subject of the email"
                                ]}
                            />

                            <LargeBr />

                            A <Highlight>View</Highlight> button is also present for each KDM, making it possible to view the entire email.
                        </Tile>
                    </SubSection>

                    <SubSection headline="Save">
                        <Tile>
                            You can select the KDMs you want to save by clicking on them in the list.
                            When you selected all KDMs you want to save, click the <Highlight>Save selected</Highlight> button.

                            <LargeBr />

                            Now, you can locate to a directory in your file system in which the KDMs should be saved.

                            <LargeBr />

                            <BlockQuote>
                                <span className="font-semibold">Note</span>
                                <br />
                                If you save a <MonoSpan>.zip</MonoSpan> file,
                                the contents of the file will be extracted and saved, rather than the <MonoSpan>.zip</MonoSpan> file itself.
                            </BlockQuote>
                        </Tile>
                    </SubSection>

                </Section>

            </Article>


        </CodeProject>
    );

}