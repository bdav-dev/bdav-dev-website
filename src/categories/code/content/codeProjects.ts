import { CodeLanguage, CodeLanguages } from "@/categories/code/content/codeLanguages";
import { CodeProjectType, CodeProjectTypes } from "@/categories/code/content/codeProjectType";
import { CodeProjectStatus, CodeProjectStatuses } from "@/categories/code/content/codeProjectStatus";
import CodeLanguageBadge from "@/categories/code/components/CodeLanguageBadge";


export type CodeProjectAction = ({ type: 'Launch' } | { type: 'Download', fileName: string }) & { url: string };


export type CodeProjectId = 'CreateBlenderProject' | 'TimeToWork' | 'KdmFinder' | 'Timecoder' | 'RecipeHaven';

export type CodeProject = {
    id: CodeProjectId,
    title: string,
    tagline: string,
    routeSegment: string,
    repositoryUrl: string,
    type: CodeProjectType,
    codeLanguages: CodeLanguage[],
    status?: CodeProjectStatus,
    action?: CodeProjectAction,
    accentColor?: string
};

export const CodeProjects: Record<CodeProjectId, CodeProject> = {
    CreateBlenderProject: {
        id: 'CreateBlenderProject',
        routeSegment: 'create-blender-project',
        title: 'create-blender-project',
        tagline: 'Create blender projects from your command line.',
        repositoryUrl: "https://github.com/bdav-dev/create-blender-project",
        type: CodeProjectTypes.CLI_Tool,
        codeLanguages: [CodeLanguages.Bash],
        action: {
            type: 'Download',
            url: "https://raw.githubusercontent.com/bdav-dev/create-blender-project/refs/heads/main/create-blender-project",
            fileName: "create-blender-project"
        },
        accentColor: 'light-dark(rgb(5 150 105), rgb(52 211 153))'
    },
    TimeToWork: {
        id: 'TimeToWork',
        routeSegment: 'time-to-work',
        title: 'time-to-work',
        tagline: 'Keep track of your working hours with this work time dashboard.',
        repositoryUrl: "https://github.com/bdav-dev/time-to-work-next",
        type: CodeProjectTypes.WebApplication,
        codeLanguages: [CodeLanguages.TypeScript],
        action: {
            type: 'Launch',
            url: "https://ttw-preview.bdav.dev/",
        },
        accentColor: 'light-dark(oklch(74.6% 0.16 232.661), oklch(70.7% 0.165 254.624))'
    },
    KdmFinder: {
        id: 'KdmFinder',
        routeSegment: 'kdm-finder',
        title: 'KDM-Finder',
        tagline: 'Find key delivery messages in your emails.',
        repositoryUrl: 'https://github.com/bdav-dev/kdm-finder',
        type: CodeProjectTypes.DesktopApplication,
        codeLanguages: [CodeLanguages.Python],
        action: {
            type: 'Download',
            url: 'https://github.com/bdav-dev/kdm-finder/archive/refs/heads/main.zip',
            fileName: 'kdm-finder-main.zip'
        },
        accentColor: '#f86656'
    },
    Timecoder: {
        id: 'Timecoder',
        routeSegment: 'timecoder',
        title: 'Timecoder',
        tagline: 'Timecode calculator',
        repositoryUrl: 'https://github.com/bdav-dev/timecoder',
        type: CodeProjectTypes.WebApplication,
        codeLanguages: [CodeLanguages.TypeScript],
        action: {
            type: 'Launch',
            url: 'https://timecoder.bdav.dev/',
        },
        accentColor: 'light-dark(oklch(55.4% 0.046 257.417), oklch(70.4% 0.04 256.788))'
    },
    RecipeHaven: {
        id: 'RecipeHaven',
        routeSegment: 'recipe-haven',
        title: 'Recipe Haven',
        tagline: 'A mobile app for managing your recipes and shopping list.',
        repositoryUrl: 'https://github.com/bdav-dev/recipe-haven',
        type: CodeProjectTypes.MobileApp,
        codeLanguages: [CodeLanguages.TypeScript],
        status: CodeProjectStatuses.Prototype,
        accentColor: 'light-dark(oklch(76.8% 0.233 130.85), oklch(84.1% 0.238 128.85))'
    }
};
