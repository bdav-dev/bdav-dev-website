import { CodeProjectId } from "@/categories/code/content/codeProjects";
import { ComponentType, CSSProperties } from "react";
import CreateBlenderProjectDarkAppIcon from "@/categories/code/appIcons/createBlenderProject/CreateBlenderProjectDarkAppIcon";
import TimeToWorkDarkAppIcon from "@/categories/code/appIcons/timeToWork/TimeToWorkDarkAppIcon";
import KdmFinderDarkAppIcon from "@/categories/code/appIcons/kdmFinder/KdmFinderDarkAppIcon";
import TimecoderDarkAppIcon from "@/categories/code/appIcons/timecoder/TimecoderDarkAppIcon";
import TimeToWorkLightAppIcon from "@/categories/code/appIcons/timeToWork/TimeToWorkLightAppIcon";
import TimecoderLightAppIcon from "@/categories/code/appIcons/timecoder/TimecoderLightAppIcon";
import CreateBlenderProjectLightAppIcon from "@/categories/code/appIcons/createBlenderProject/CreateBlenderProjectLightAppIcon";
import KdmFinderLightAppIcon from "@/categories/code/appIcons/kdmFinder/KdmFinderLightAppIcon";
import RecipeHavenLightAppIcon from "@/categories/code/appIcons/recipeHaven/RecipeHavenLightAppIcon";
import RecipeHavenDarkAppIcon from "@/categories/code/appIcons/recipeHaven/RecipeHavenDarkAppIcon";
import { ThemeSwitch } from "@/lib/theme";


type AppIconComponent = ComponentType<{ className?: string, style?: CSSProperties }>;

export const codeProjectAppIcons: Record<CodeProjectId, ThemeSwitch<AppIconComponent>> = {
    CreateBlenderProject: {
        light: CreateBlenderProjectLightAppIcon,
        dark: CreateBlenderProjectDarkAppIcon
    },
    TimeToWork: {
        light: TimeToWorkLightAppIcon,
        dark: TimeToWorkDarkAppIcon
    },
    KdmFinder: {
        light: KdmFinderLightAppIcon,
        dark: KdmFinderDarkAppIcon
    },
    Timecoder: {
        light: TimecoderLightAppIcon,
        dark: TimecoderDarkAppIcon
    },
    RecipeHaven: {
        light: RecipeHavenLightAppIcon,
        dark: RecipeHavenDarkAppIcon
    }
}
