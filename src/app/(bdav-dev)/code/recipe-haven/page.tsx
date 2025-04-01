import { CodeProjects } from "@/content/code/codeProjects";
import CodeProjectLayout from "@/layout/CodeProjectLayout";
import Article from "@/components/document/Article";
import Tile from "@/components/Tile";
import React from "react";
import Section from "@/components/document/Section";
import Enumerate from "@/components/Enumerate";
import LargeBreak from "@/components/format/break/LargeBreak";
import SubSection from "@/components/document/SubSection";
import BlockQuote from "@/components/BlockQuote";
import Bold from "@/components/format/Bold";
import NativeLanguageNotice from "@/components/categories/code/NativeLanguageNotice";


export default function RecipeHavenPage() {
    const recipeHaven = CodeProjects.recipeHaven;

    return (
        <CodeProjectLayout codeProject={recipeHaven}>
            <NativeLanguageNotice/>

            <Article headline={recipeHaven.title} className="mt-3">
                A mobile app for managing your recipes and shopping list

                <Section headline={'Über dieses Projekt'}>
                    <Tile className={'mt-1.5'}>
                        <Enumerate
                            indent
                            items={[
                                'Recipe Haven ist eine mobile App zur Verwaltung von Zutaten, Rezepten und Einkaufslisten',
                                <>Entwickelt mit <Bold>React Native</Bold> und <Bold>Expo</Bold></>
                            ]}
                        />
                        <LargeBreak/>
                        <BlockQuote>
                            Entwickelt im Rahmen der Vorlesung <Bold>Entwicklung mobiler Apps</Bold> im <Bold>5. Semester</Bold> an der <Bold>DHBW Lörrach</Bold><br/>
                            von <Bold>Daniele Risorgi</Bold> und <Bold>David Berezowski</Bold>
                        </BlockQuote>
                    </Tile>
                </Section>

                <Section headline={'Funktionen'}>

                    <SubSection headline={'Allgemein'}>
                        <Tile className={'mt-1.5'}>
                            <Enumerate
                                items={[
                                    'Light- sowie Dark-Mode wird unterstützt'
                                ]}
                            />
                            Dabei wird die Systemeinstellung des Geräts verwendet.
                        </Tile>
                    </SubSection>

                    <SubSection headline={'Zutaten'}>
                        <Tile className={'mt-1.5'}>
                            Es gibt einen Zutaten-Tab, in dem Zutaten erstellt und bearbeitet werden können.
                            <LargeBreak/>
                            Zutaten haben dabei folgende Eigenschaften:
                            <Enumerate
                                items={[
                                    'Name der Zutat',
                                    'Bild',
                                    'Mehrzahlname',
                                    'Einheit (Auswahl aus: Gramm, Liter, Stück)',
                                    'Brennwertangabe (z.B. 100 kcal pro 2 Stück)'
                                ]}
                                indent
                            />
                        </Tile>
                    </SubSection>

                    <SubSection headline={'Rezepte'}>
                        <Tile className={'mt-1.5'}>
                            Es gibt einen Rezepte-Tab, in dem Rezepte erstellt und bearbeitet werden können.
                            <LargeBreak/>
                            Rezepte haben dabei folgende Eigenschaften:
                            <Enumerate
                                indent
                                items={[
                                    'Name des Rezepts',
                                    'Bild',
                                    'Beschreibung des Rezepts / Zubereitung',
                                    <>
                                        Liste an Zutaten. Jeder Eintrag enthält:
                                        <Enumerate
                                            items={[
                                                'eine Zutat (Auswahl einer Zutat, die im Zutaten-Tab erstellt wurden)',
                                                'Menge (in Gramm, Liter oder Stück, je nach Einheit der Zutat)'
                                            ]}
                                            indent
                                        />
                                    </>,
                                    'Schwierigkeit (Auswahl aus „Leicht“, „Mittelschwer“ und „Schwer“)',
                                    'Zubereitungsdauer (in Stunden und Minuten)',
                                    'Tags (z.B.: „Gesund“ oder „Vegan“)'
                                ]}
                            />
                            <LargeBreak/>
                            Rezepte können favorisiert werden und werden dann im Rezepte-Tab zuerst angezeigt.
                            <LargeBreak/>
                            Falls alle im Rezept genutzten Zutaten eine Kalorienangabe haben, wird eine aufsummierte Kalorienangabe für das Rezept angezeigt.
                            <LargeBreak/>
                            Rezepte können in einer Detailsicht angesehen werden. Dabei werden alle Eigenschaften des Rezeptes, wie zum Beispiel die benötigten Zutaten angezeigt.
                            Dort gibt es außerdem eine „Zutaten für n Portion(en)“-Angabe, mit der die Zutaten für eine vom Benutzer definierte Anzahl von Portionen angezeigt werden. Falls vorhanden,
                            reagiert die Kalorienangabe ebenfalls auf diese Angabe.
                            Es ist möglich, eine Liste der Zutaten eines Rezeptes direkt in der korrekten Menge (berücksichtigt die „Zutaten für n Portion(en)“-Angabe) zur Einkaufsliste hinzuzufügen.
                        </Tile>
                    </SubSection>

                    <SubSection headline={'Einkaufsliste'}>
                        <Tile className={'mt-1.5'}>
                            Es gibt einen Einkaufslisten-Tab, in dem Einkäufe erstellt und bearbeitet werden können.
                            <LargeBreak/>
                            In der Einkaufsliste können zwei Arten von Objekten hinzugefügt werden:
                            <Enumerate
                                indent
                                items={[
                                    <>
                                        Zutaten
                                        <Enumerate
                                            items={[
                                                'Auswahl aus Zutaten, die im Zutaten-Tab erstellt wurden',
                                                'haben eine Mengenangabe (z.B. 5 Äpfel oder 500g Hackfleisch)'
                                            ]}
                                            indent
                                        />
                                    </>,
                                    <>
                                        andere Einkäufe
                                        <Enumerate
                                            items={[
                                                'werden als Text angegeben (z.B. Zahnpasta, Kaugummi)',
                                                'kann verwendet werden, um Einkäufe hinzuzufügen, die keine Zutaten eines Rezepts sind'
                                            ]}
                                            indent
                                        />
                                    </>
                                ]}
                            />
                            <LargeBreak/>
                            Abgehakte Objekte in der Einkaufsliste werden separat angezeigt und können wiederhergestellt oder endgültig gelöscht werden.
                        </Tile>
                    </SubSection>
                </Section>

            </Article>
        </CodeProjectLayout>
    );
}
