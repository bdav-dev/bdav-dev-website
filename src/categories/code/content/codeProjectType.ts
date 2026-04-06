

export type CodeProjectTypeId = 'WebApplication' | 'MobileApp' | 'DesktopApplication' | 'CLI_Tool';

export type CodeProjectType = {
    id: CodeProjectTypeId,
    label: string,
    pluralLabel: string
};

export const CodeProjectTypes = {
    WebApplication: {
        id: 'WebApplication',
        label: 'Web application',
        pluralLabel: 'Web applications',
    },
    MobileApp: {
        id: 'MobileApp',
        label: 'Mobile application',
        pluralLabel: 'Mobile applications',
    },
    DesktopApplication: {
        id: 'DesktopApplication',
        label: 'Desktop application',
        pluralLabel: 'Desktop applications',
    },
    CLI_Tool: {
        id: 'CLI_Tool',
        label: 'CLI-Tool',
        pluralLabel: 'CLI-Tools',
    }
} as const satisfies Record<CodeProjectTypeId, CodeProjectType>;
