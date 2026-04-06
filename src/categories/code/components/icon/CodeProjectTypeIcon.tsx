import { CodeProjectType, CodeProjectTypeId } from "@/categories/code/content/codeProjectType";
import MaterialSymbol, { MaterialSymbols } from "@/icons/material/MaterialSymbol";
import { WeightableIconProps } from "@/icons/WeightableIcon";


type CodeProjectTypeIconProps = WeightableIconProps & {
    type: CodeProjectType
}

export default function CodeProjectTypeIcon({ type, ...rest }: CodeProjectTypeIconProps) {
    return <MaterialSymbol symbol={codeProjectTypeSymbols[type.id]} {...rest}/>;
}

const codeProjectTypeSymbols: Record<CodeProjectTypeId, MaterialSymbols> = {
    WebApplication: MaterialSymbols.LANGUAGE,
    MobileApp: MaterialSymbols.MOBILE_3,
    DesktopApplication: MaterialSymbols.DESKTOP_WINDOWS,
    CLI_Tool: MaterialSymbols.TERMINAL
}
