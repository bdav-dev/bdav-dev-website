import HyperLink from "@/components/links/HyperLink";
import PageBody from "@/components/pageLayout/PageBody";
import Article from "@/components/pageStructure/Article";
import Section from "@/components/pageStructure/Section";

export default function Impressum() {
    return (
        <PageBody
            sitePath="/impressum/"
        >

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


        </PageBody>
    );
}