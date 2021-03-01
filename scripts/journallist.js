import { journalEntry} from "./journalentries.js"
import { getEntry } from "./journal.js"

export const getJournal = () => {
    const allJournal = getEntry();

    const DOMlocal = document.querySelector("journal");

    let journalHTML = "";
    for (const singleEntry of allJournal) {
        journalHTML += journalEntry(singleEntry);
    }
    console.log("journal html", journalHTML);
    DOMlocal.innerHTML += journalHTML;
}