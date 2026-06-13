import HyperLink, { HyperLinkProps } from "@/components/library/link/HyperLink";
import MaterialSymbol, { MaterialSymbols } from "@/icons/material/MaterialSymbol";


export default function LinkWithMaterialSymbol(props: { symbol: MaterialSymbols } & Omit<HyperLinkProps, 'icon'>) {
    return (
        <HyperLink
            icon={<MaterialSymbol symbol={props.symbol} opticalSize={20} weight={350}/>}
            {...props}
        />
    );
}
