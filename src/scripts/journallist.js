import { journalEntry} from "./journalentries.js"

export const getJournal = (allJournal) => {

    let journalHTML = "";
    for (const singleEntry of allJournal) {
        journalHTML += journalEntry(singleEntry);
    }
    return journalHTML;
}