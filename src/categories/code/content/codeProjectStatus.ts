import { SemanticColor } from "@/styling/semanticColor";


export type CodeProjectStatusId = 'InDevelopment' | 'Archived' | 'Prototype';

export type CodeProjectStatus = {
    id: CodeProjectStatusId,
    label: string,
    color: string
}

export const CodeProjectStatuses = {
    InDevelopment: {
        id: 'InDevelopment',
        label: 'In development',
        color: SemanticColor.WARNING,
    },
    Archived: {
        id: 'Archived',
        label: 'Archived',
        color: SemanticColor.DANGER,
    },
    Prototype: {
        id: 'Prototype',
        label: 'Prototype',
        color: SemanticColor.WARNING
    }
} as const satisfies Record<CodeProjectStatusId, CodeProjectStatus>;
