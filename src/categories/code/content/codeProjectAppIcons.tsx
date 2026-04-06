import { CodeProjectId } from "@/categories/code/content/codeProjects";
import { ComponentType, CSSProperties } from "react";
import CreateBlenderProjectAppIcon from "@/categories/code/appIcons/CreateBlenderProjectAppIcon";
import TimeToWorkAppIcon from "@/categories/code/appIcons/TimeToWorkAppIcon";
import KdmFinderAppIcon from "@/categories/code/appIcons/KdmFinderAppIcon";


export const codeProjectAppIcons: Record<CodeProjectId, ComponentType<{ className?: string, style?: CSSProperties }>> = {
    CreateBlenderProject: CreateBlenderProjectAppIcon,
    TimeToWork: TimeToWorkAppIcon,
    KdmFinder: KdmFinderAppIcon,
    Timecoder: CreateBlenderProjectAppIcon,
    RecipeHaven: CreateBlenderProjectAppIcon
}
