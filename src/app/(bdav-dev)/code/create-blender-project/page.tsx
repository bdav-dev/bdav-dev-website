import { defaultMetadata } from "@/metadata";
import Tile from "@/components/Tile";
import Article from "@/components/document/Article";
import Section from "@/components/document/Section";
import { CodeProjects } from "@/content/code/codeProjects";
import Enumerate from "@/components/Enumerate";
import Code from "@/components/Code";
import HStack from "@/components/layout/stacks/HStack";
import LargeBreak from "@/components/format/break/LargeBreak";
import Highlight from "@/components/Highlight";
import Mono from "@/components/Mono";
import React from "react";
import CodeProjectLayout from "@/layout/CodeProjectLayout";

export default function CreateBlenderProjectPage() {
    const createBlenderProject = CodeProjects.createBlenderProject;

    return (
        <CodeProjectLayout codeProject={createBlenderProject}>

            <Article headline={createBlenderProject.title}>
                A command line tool to create a new blender project with common directories.

                <Section headline="Description">
                    <Tile className="mt-2">

                        <Code>create-blender-project</Code> is a tool accessible via the command line / terminal.

                        <LargeBreak/>

                        It creates a new blender project with the following directories:
                        <Enumerate
                            indent
                            items={[
                                <Highlight small>assets</Highlight>,
                                <Highlight small>blend-files</Highlight>,
                                <Highlight small>render-output</Highlight>,
                                <Highlight small>results</Highlight>,
                            ]}
                        />

                        <LargeBreak/>

                        The directory <Highlight>blend-files</Highlight> will contain a blank blender file
                        with the name of the project: <Highlight>{"<projectName>.blend"}</Highlight>.
                        The tool also sets the directory render-output as the default render output directory of the
                        newly created blender file.
                    </Tile>
                </Section>

                <Section headline="Parameters">
                    <Tile className="mt-2">
                        The command has one (optional) parameter: <Highlight>project name</Highlight>.
                        If the parameter is not specified, the terminal will ask for a project name.
                    </Tile>
                </Section>

                <Section headline={<>Use <Mono>create-blender-project</Mono></>}>
                    <HStack className="mt-2">

                        <Tile
                            title="Run"
                            className="min-w-fit sm:min-w-[25rem] flex-1"
                        >
                            <Enumerate
                                spaceBetween
                                numbered
                                items={[
                                    <>
                                        Download the source code of the project
                                        (as a .zip file or via <Code>git clone</Code>).
                                    </>,
                                    <>
                                        Make sure the <Highlight>create-blender-project</Highlight> file
                                        is flagged as executable, if not run <Code>$ chmod +x
                                        create-blender-project</Code>
                                    </>,
                                    <>
                                        Open a new terminal window and navigate to the directory in which you want to
                                        create a new blender project (using <Code>cd</Code>)
                                    </>,
                                    <>
                                        Run <Code>$/path/to/file/create-blender-project {"<Optional parameter: Project name>"}</Code>
                                    </>
                                ]}
                            />
                        </Tile>

                        <Tile
                            title="Install (Make accessible in terminal)"
                            className="min-w-fit sm:min-w-[25rem] flex-1"
                        >
                            If you want to install <Code>create-blender-project</Code> and make the command accessible
                            anywhere in the terminal, copy the <Highlight>create-blender-project</Highlight> file
                            to the following directory: <Highlight>/usr/local/bin/</Highlight>
                            <LargeBreak/>
                            Now you can access it without specifying the location of the file, like
                            this: <Code>$ create-blender-project {"<Optional parameter: Project name>"}</Code>.
                        </Tile>

                    </HStack>
                </Section>

            </Article>
        </CodeProjectLayout>
    );
}

export const metadata = {
    title: "bdav.dev – create-blender-project",
    description: "A command line tool to create a new blender project with common directories.",
    ...defaultMetadata(["create-blender-project", "create blender project", "createBlenderProject"])
}