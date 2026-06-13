import { CodeLanguage, CodeLanguages } from "@/categories/code/content/codeLanguages";
import { CodeProjectType, CodeProjectTypes } from "@/categories/code/content/codeProjectType";
import { CodeProjectStatus, CodeProjectStatuses } from "@/categories/code/content/codeProjectStatus";
import { Download } from "@/utilities/download";
import { ThemeSwitch } from "@/contexts/ThemeContext";
import { CloudinaryImage } from "@/utilities/cloudinary";


export type CodeProjectAction = { url: string } & ({ type: 'Launch' } | ({ type: 'Download' } & Download));

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
    isGerman: boolean,
    accentColor?: string,
    gradient: ThemeSwitch<{ from: string, via?: string, to: string }>,
    banner: ThemeSwitch<CloudinaryImage>
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
            fileName: "create-blender-project",
            fetch: true
        },
        isGerman: false,
        accentColor: 'light-dark(#525252, #a3a3a3)',
        gradient: {
            light: { from: '#374151', via: '#404040', to: '#3f3f46' },
            dark: { from: '#f3f4f6', via: '#f5f5f5', to: '#f4f4f5' }
        },
        banner: { src: '/code/create-blender-project/banner.png', height: 3500, width: 1440 }
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
        isGerman: true,
        accentColor: 'light-dark(#3b82f6, #60a5fa)',
        gradient: {
            light: { from: '#0284c7', via: '#2563eb', to: '#4f46e5' },
            dark: { from: '#38bdf8', via: '#60a5fa', to: '#818cf8' }
        },
        banner: {
            light: { src: '/code/time-to-work/banner/banner-light.png', width: 2934, height: 1440 },
            dark: { src: '/code/time-to-work/banner/banner-dark.png', width: 2934, height: 1440 }
        }
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
            fetch: false
        },
        isGerman: false,
        accentColor: 'light-dark(#e65955, #f66864)',
        gradient: {
            light: { from: '#f77e4a', to: '#ed4278' },
            dark: { from: '#fb8a58', to: '#f05082' }
        },
        banner: {
            light: { src: '/code/kdm-finder/banner/banner-light.png', width: 3500, height: 1440 },
            dark: { src: '/code/kdm-finder/banner/banner-dark.png', width: 3500, height: 1440 }
        }
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
        isGerman: false,
        accentColor: 'light-dark(oklch(55.4% 0.046 257.417), oklch(70.4% 0.04 256.788))',
        gradient: {
            light: { from: '#64748b', via: '#6b7280', to: '#71717a' },
            dark: { from: '#94a3b8', via: '#9ca3af', to: '#a1a1aa' }
        },
        banner: { src: '/code/timecoder/banner.png', height: 3500, width: 1440 }
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
        isGerman: true,
        accentColor: 'light-dark(#20B858, #4ade80)',
        gradient: {
            light: { from: '#20B858', to: '#20B858' },
            dark: { from: '#4ade80', to: '#4ade80' }
        },
        banner: {
            light: { src: `/code/recipe-haven/banner/banner-light.png`, width: 3500, height: 1440 },
            dark: { src: `/code/recipe-haven/banner/banner-dark.png`, width: 3500, height: 1440 }
        }
    }
};
