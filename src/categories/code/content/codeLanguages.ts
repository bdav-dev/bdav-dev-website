export type CodeLanguage = {
    name: string,
    color: string
}

export const CodeLanguages = {
    TypeScript: {
        name: "TypeScript",
        color: "#2D79C7"
    },
    Bash: {
        name: "Bash",
        color: "#46B152"
    },
    HTML: {
        name: "HTML",
        color: "#EE5F27"
    },
    CSS: {
        name: "CSS",
        color: "#663399"
    },
    JavaScript: {
        name: "JavaScript",
        color: "#F0DB4E"
    },
    Java: {
        name: "Java",
        color: "#ED272C"
    },
    ABAP: {
        name: "ABAP",
        color: "#094789"
    },
    Python: {
        name: "Python",
        color: "#2C6999"
    }
} as const satisfies Record<string, CodeLanguage>;
