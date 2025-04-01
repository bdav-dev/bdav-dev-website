import Tile from "@/components/Tile";
import React from "react";


export default function NativeLanguageNotice() {

    return (
        <Tile className="text-center text-red-700 dark:text-red-400 p-1" customPadding>
            Since the language of this project is german, the following description will also be in german.
        </Tile>
    );

}