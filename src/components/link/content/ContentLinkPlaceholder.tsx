import React from "react";

export default function ContentLinkPlaceholder({ className, children }: { className?: string, children?: React.ReactNode }) {
    return <div className={`border border-dashed border-zinc-500 ${className}`}>{children}</div>;
}
