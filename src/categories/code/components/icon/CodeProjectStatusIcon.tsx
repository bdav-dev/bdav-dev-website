import { WeightableIconProps } from "@/icons/WeightableIcon";
import { CodeProjectStatus, CodeProjectStatusId } from "@/categories/code/content/codeProjectStatus";
import MaterialSymbol, { MaterialSymbols } from "@/icons/material/MaterialSymbol";


type CodeProjectStatusIconProps = WeightableIconProps & {
    status: CodeProjectStatus
}

export default function CodeProjectStatusIcon({ status, ...rest }: CodeProjectStatusIconProps) {
    return <MaterialSymbol symbol={codeProjectStatusSymbols[status.id]} {...rest}/>;
}

const codeProjectStatusSymbols: Record<CodeProjectStatusId, MaterialSymbols> = {
    InDevelopment: MaterialSymbols.CONSTRUCTION,
    Archived: MaterialSymbols.INVENTORY_2,
    Prototype: MaterialSymbols.EMOJI_OBJECTS
}
