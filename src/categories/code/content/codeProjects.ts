import { CodeLanguage, CodeLanguages } from "@/categories/code/content/codeLanguages";
import { CodeProjectType, CodeProjectTypes } from "@/categories/code/content/codeProjectType";
import { CodeProjectStatus, CodeProjectStatuses } from "@/categories/code/content/codeProjectStatus";


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
    accentColor?: string,
    isGerman: boolean
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
        accentColor: 'light-dark(#525252, #a3a3a3)',
        isGerman: false
    },
    TimeToWork: {
        id: 'TimeToWork',
        routeSegment: 'time-to-work',
        title: 'time-to-work',
        tagline: 'Keep track of your working hours with this work time dashboard.',
        repositoryUrl: "https://github.com/bdav-dev/time-to-work-next",
        type: CodeProjectTypes.WebApplication,
        codeLanguages: [CodeLanguages.TypeScript],
        status: CodeProjectStatuses.InDevelopment,
        action: {
            type: 'Launch',
            url: "https://ttw-preview.bdav.dev/",
        },
        accentColor: 'light-dark(#3b82f6, #60a5fa)',
        isGerman: true
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
        accentColor: 'light-dark(#e65955, #f66864)',
        isGerman: false
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
        accentColor: 'light-dark(oklch(55.4% 0.046 257.417), oklch(70.4% 0.04 256.788))',
        isGerman: false
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
        accentColor: 'light-dark(#20B858, #4ade80)',
        isGerman: true
    }
};
