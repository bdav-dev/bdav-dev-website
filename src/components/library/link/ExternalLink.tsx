import { HyperLinkProps } from "@/components/library/link/HyperLink";
import LinkWithMaterialSymbol from "@/components/library/link/LinkWithMaterialSymbol";
import { MaterialSymbols } from "@/icons/material/MaterialSymbol";


export default function ExternalLink(props: Omit<HyperLinkProps, 'icon'>) {
    return (
        <LinkWithMaterialSymbol symbol={MaterialSymbols.OPEN_IN_NEW} {...props}/>
    );
}