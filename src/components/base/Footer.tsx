import Tile from "./Tile";



export default function Footer() {
    return (
        <footer className="flex flex-row mx-1.5 mb-1 text-zinc-500 dark:text-zinc-600">
            <div>
                David Berezowski
            </div>

            <div className="ml-auto">
                Datenschutzerklärung
            </div>

            <div>
                Impressum
            </div>
        </footer>
    );
}