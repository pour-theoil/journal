import { getjournalentry } from "../data/DataManager.js";
import { getJournal } from "./journallist.js";

const showjournalentries = () => {
    const postElement = document.querySelector("#journal");
      getjournalentry().then((allPosts) => {
          postElement.innerHTML += getJournal(allPosts);
      })
}


const startJournal = () => {
    showjournalentries();
}

startJournal();