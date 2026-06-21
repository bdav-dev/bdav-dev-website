import HyperLink from "@/components/library/link/HyperLink";
import Article from "@/components/library/document/Article";
import Section from "@/components/library/document/Section";
import { Metadata } from "next";


export const metadata: Metadata = {
    title: "Impressum – bdav.dev"
}

export default function LegalNoticePage() {
    return (
        <Article headline="Impressum">
            <Section headline="Angaben gemäß § 5 TMG">
                David Berezowski<br/>
                Taubenacker 28<br/>
                79541 Lörrach
            </Section>

            <Section headline="Kontakt">
                Telefon: 07621 1628160<br/>
                E-Mail: david.berezowski@outlook.com
            </Section>

            Quelle: <HyperLink href="https://www.e-recht24.de"/>
        </Article>
    );
}
