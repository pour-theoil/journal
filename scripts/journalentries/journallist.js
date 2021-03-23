import { journalEntry} from "./journalentries.js"

export const getJournal = (allJournal) => {

    let journalHTML = "<h2>Journal Entries</h2>";
    for (const singleEntry of allJournal) {
        journalHTML += journalEntry(singleEntry);
    }
    return journalHTML;
}