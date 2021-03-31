import { getLoggedInUser } from "../../data/DataManager.js"
export const journalEntry = (journalObj) => {
    return (`
    <hr>
    <article class="journal-card"> 
        <h3 class="journal-title">${journalObj.title}</h3>
        <p class="journal-date">${journalObj.date}   ${journalObj.mood}</p>
        <p class="journal-entry">${journalObj.description}</p>
        <p class="journal-tags">Tags:${journalObj.technologyTag}</p>
        ${getLoggedInUser().admin ? `<button id="edit__${journalObj.id}">Edit</button><button id="delete__${journalObj.id}">Delete</button>` :
        `<button id="like__${journalObj.id}">Like 👍 </button>`}
        
    </article>
    `)
}