import { defaultMetadata } from "@/metadata";
import CodeProject from "@/components/categories/code/CodeProject";
import Tile from "@/components/pageElements/Tile";
import Article from "@/components/pageStructure/Article";
import Section from "@/components/pageStructure/Section";
import { codeProjects } from "@/content/code/codeProjects";
import { spaceMono } from "@/fonts";
import Enumerate from "@/components/pageElements/Enumerate";
import Code from "@/components/pageElements/Code";
import HStack from "@/components/pageStructure/stacks/HStack";

export default function CreateBlenderProject() {
    return (
        <CodeProject
            codeProject={codeProjects.createBlenderProject}
        >
            <Article headline={codeProjects.createBlenderProject.title}>
                A command line tool to create a new blender project with common directories.

                <Section headline="Description">
                    <Tile className="leading-7 mt-2">

                        <Code>create-blender-project</Code> is a tool accessible via the command line / terminal.
                        
                        <br />
                        
                        It creates a new blender project with the following directories:
                        <Enumerate
                            className="ml-3"
                            symbol="-"
                            items={[
                                <Code noMono largePadding>assets</Code>,
                                <Code noMono largePadding>blend-files</Code>,
                                <Code noMono largePadding>render-output</Code>,
                                <Code noMono largePadding>results</Code>,
                            ]}
                        />

                        The directory <Code noMono largePadding>blend-files</Code> will contain a blank blender file with the name of the project: <Code noMono largePadding>{"<projectName>.blend"}</Code>. The tool also sets the directoy render-output as the default render output directory of the newly created blender file.
                    </Tile>
                </Section>

                <Section headline="Parameters">
                    <Tile className="mt-2">
                        The command has one (optional) parameter: <Code noMono largePadding>project name</Code>.
                        If the parameter is not specified, the terminal will ask for a project name.
                    </Tile>
                </Section>

                <Section headline={<>Use <span className={spaceMono}>create-blender-project</span></>}>
                    <HStack className="mt-2">

                        <Tile
                            title="Run"
                            className="min-w-fit sm:min-w-[25rem]"
                        >
                            <Enumerate
                                items={[
                                    <>Download the source code of the project (as a .zip file or via <Code>git clone</Code>).</>,
                                    <>Make sure the <Code noMono largePadding>create-blender-project</Code> file is flagged as executable, if not run <Code>$ chmod +x create-blender-project</Code></>,
                                    <>Open a new terminal window and navigate to the directory in which you want to create a new blender project (using <Code>cd</Code>)</>,
                                    <>Run <Code>$ /path/to/file/create-blender-project {"<Optional parameter: Project name>"}</Code></>
                                ]}
                            />
                        </Tile>

                        <Tile
                            title="Install (Make accessible in terminal)"
                            className="min-w-fit sm:min-w-[25rem]"
                        >
                            If you want to install <Code>create-blender-project</Code> and make the command accessible anywhere in the terminal, copy the <Code>create-blender-project</Code> file to the following directory: <Code noMono largePadding>/usr/local/bin/</Code>
                            <br />
                            Now you can access it without specifing the location of the file, like this: <Code>$ create-blender-project {"<Optional parameter: Project name>"}</Code>.
                        </Tile>

                    </HStack>
                </Section>
                
            </Article>
        </CodeProject>
    );
}

export const metadata = {
    title: "bdav.dev – create-blender-project",
    description: "A command line tool to create a new blender project with common directories.",
    ...defaultMetadata(["create-blender-project", "create blender project", "createBlenderProject"])
}