import CodeProject from "@/components/CodeProject";
import Code from "@/components/base/Code";
import Enumerate from "@/components/base/Enumerate";
import Tile from "@/components/base/Tile";
import Article from "@/components/pageElements/Article";
import Section from "@/components/pageElements/Section";
import SubSection from "@/components/pageElements/SubSection";
import { codeProjects } from "@/content/codeProjects";


export default function TimeToWork() {
    return (
        <CodeProject codeProject={codeProjects.timeToWork}>

            <Tile className="text-center text-red-700 dark:text-red-400 p-1" customPadding>
                Since the language of this project is german, the following description will also be in german.
            </Tile>

            <Article pageTitle={codeProjects.timeToWork.title} className="mt-3">
                Work time dashboard / calculator

                <Section headline="Kurzbeschreibung">
                    <Tile>
                        Halte mit dem Arbeitszeitdashboard "TimeToWork" deine Arbeitsstunden im Blick.
                    </Tile>
                </Section>

                <Section headline="TimeToWork starten">
                    <Tile>
                        <Enumerate
                            items={[
                                <>Lade das Repository herunter (als .zip Datei oder via <Code>git clone</Code>).</>,
                                <>Starte die Applikation, in dem du die Datei <Code noMono>timeToWork.html</Code> in deinem Browser öffnest.</>
                            ]}
                        />
                    </Tile>
                </Section>

                <Section headline="Features">

                    <SubSection smallHeadline="Neumorphic Design">
                        <Tile>
                            TimeToWork hat eine schöne und moderne Benutzeroberfläche im Neumorphic-Stil.
                        </Tile>
                    </SubSection>

                    <SubSection smallHeadline="Light- und Dark-Mode">
                        <Tile>
                            Du kannst zwischen Light- und Dark-Mode wechseln, in dem du den Button oben links anklickst.
                        </Tile>
                    </SubSection>

                    <SubSection smallHeadline="Zeiterfassung">
                        <Tile>
                            Du kannst deine Arbeitszeit über 3 Wege erfassen:
                            <Enumerate
                                className="mb-1.5 ml-2"
                                seperateItems
                                items={[
                                    {
                                        title: "Zeiterfassung via Zeitstempel",
                                        text: "Wenn du auf den Button \"Zeitstempel erfassen\" klickst, wird eine neuer Zeitstempel mit der aktuellen Zeit erstellt. Falls bereits ein offener Zeitstempel vorhanden ist, wird dieser mit der aktuellen Zeit geschlossen."
                                    },
                                    {
                                        title: "Zeiterfassung via Eingabe eines Zeitintervalls",
                                        text: "Du kannst ein Zeitintervall (duch Angabe von Start- und Endzeit) erstellen."
                                    },
                                    {
                                        title: "Erstellen eines offenen Zeitstempels bei angegebener Startzeit",
                                        text: "Falls du ein Zeitintervall ohne Endzeit angibst wird, statt eines Zeitintervalls, ein offener Zeitstempel mit deiner angegeben Zeit erstellt."
                                    }
                                ]}
                            />
                            Deine erstellten Zeitintervalle bzw. Zeitstempel werden in einer Tabelle angezeigt.<br />
                            Dort siehst du auch den Zeitunterschied von jedem Zeitintervall / Zeitstempel.
                        </Tile>
                    </SubSection>

                    <SubSection smallHeadline="Arbeitszeitberechungen">
                        <Tile>
                            Durch die Angabe von
                            <Enumerate
                                className="my-1.5 ml-2"
                                seperateItems
                                items={[
                                    {
                                        title: "Arbeitszeit",
                                        text: "Hier kannst du eintragen, wie lange du am Tag arbeiten musst."
                                    },
                                    {
                                        title: "Zeitsaldo (Überstunden)",
                                        text: "Trage hier deinen Überstundenkontostand ein (Unterstunden werden auch unterstützt)."
                                    },
                                    {
                                        title: "Mindestpause",
                                        text: "Hier kannst du die gesetzliche Mindestpause eintragen."
                                    }
                                ]}
                            />
                            berechnet dir TimeToWork folgende Werte:
                            <Enumerate
                                className="ml-2 mt-1.5"
                                seperateItems
                                items={[
                                    {
                                        title: "Summe der Arbeitszeit",
                                        text: "So lange hast du heute schon gearbeitet."
                                    },
                                    {
                                        title: "restliche Arbeitszeit",
                                        text: "Ein Blick auf dieses Feld verrät dir, wie viel du noch zu arbeiten hast."
                                    },
                                    {
                                        title: "Arbeitsende",
                                        text: "Dieses Feld zeigt dir an, wann du Feierabend hast. Dabei wird davon ausgeganen, dass du exakt die Zeit arbeitest, die du in dem Feld \"Arbeitszeit\" angegeben hast (keine Über- / Unterstunden). Es werden auch die Pausen (in Kombination mit der Mindestpause) miteinberechnet."
                                    },
                                    {
                                        title: "neuer Zeitsaldo",
                                        text: "Falls du jetzt deinen Arbeitsplatz verlassen solltest, zeigt dir dieses Feld an, wie dein Überstundenkonto dann aussehen würde."
                                    },
                                    {
                                        title: "Summe der eingelegete Pausen",
                                        text: "So lange hast du heute schon Pause gemacht."
                                    }
                                ]}
                            />
                        </Tile>
                    </SubSection>

                    <SubSection smallHeadline="Zugberechungen">
                        <Tile>
                            Wenn du mit dem Zug zur Arbeit kommst, kannst du bei Angabe von

                            <Enumerate
                                className="my-1.5 ml-2"
                                seperateItems
                                items={[
                                    {
                                        title: "Startzeitpunkt",
                                        text: <>Hier trägst du ein, was der Startzeitpunkt des Zugplans ist.
                                            Beispiel: Wenn der Zug z.B. jeden Tag um 14:04, 14:34, 15:04, ... abfährt, trägst du hier <Code noMono largePadding>00:04</Code> ein.</>,
                                    },
                                    {
                                        title: "jede",
                                        text: <>Hier gibst du an, in welchem Intervall dein Zug regelmäßig kommt.
                                            Beispiel: Wenn der Zug z.B. jeden Tag um 14:04, 14:34, 15:04, ... abfährt, trägst du hier <Code noMono largePadding>00:30</Code> ein.</>
                                    },
                                    {
                                        title: "Wegzeit",
                                        text: "In diesem Feld kannst du eintragen, wie lange du brauchst, um von deinem Arbeitsplatz zum Bahnhof zu gelangen."
                                    }
                                ]}
                            />

                            folgendes sehen:

                            <Enumerate
                                className="ml-2 mt-1.5"
                                seperateItems
                                items={[
                                    {
                                        title: "Zeitpunkt zum Verlassen des Arbeitsplatzes",
                                        text: "Hier siehst du, wann du deinen Arbeitsplatz verlassen musst, damit du den nächsten Zug pünklich erreichst."
                                    },
                                    {
                                        title: "Abfahrt des nächsten Zugs",
                                        text: "Dieses Feld zeigt dir an, wann der nächste Zug abfährt (und in wie vielen Minuten das ist)."
                                    }
                                ]}
                            />
                        </Tile>
                    </SubSection>

                    <SubSection smallHeadline="Speichern">
                        <Tile>
                            Der gesamte Zustand der Applikation wird beim Schließen des Tabs (bei dir lokal via <Code>localStorage</Code>) gesichert.
                            Dieser Zustand wird wiederherstellt, wenn du die Appliaktion wieder öffnest.
                            Wenn du aber die Applikation an einem neuen Tag öffnest,
                            werden die Zeitstempel und Zeitintervalle vom Vortag nicht geladen und
                            der am Vortag berechnete neue Zeitsaldo wird als aktueller Zeitsaldo übernommen.
                        </Tile>
                    </SubSection>


                </Section>

            </Article>


        </CodeProject>
    );
}