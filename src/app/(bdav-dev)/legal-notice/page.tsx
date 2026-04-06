import HyperLink from "@/components/library/link/HyperLink";
import Article from "@/components/layout/document/Article";
import Section from "@/components/layout/document/Section";
import { Metadata } from "next";

export default function ImpressumPage() {
    return (
        <Article headline="Impressum">

            <Section headline="Angaben gemäß § 5 TMG">
                David Berezowski <br/>
                Taubenacker 28 <br/>
                79541 Lörrach
            </Section>

            <Section headline="Kontakt">
                Telefon: 07621 1628160 <br/>
                E-Mail: david.berezowski@outlook.com
            </Section>

            Quelle: <HyperLink href="https://www.e-recht24.de"/>
        </Article>
    );
}

export const metadata: Metadata = {
    title: "bdav.dev – Impressum"
}