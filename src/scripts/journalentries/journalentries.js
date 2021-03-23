export const journalEntry = (journalObj) => {
    return (`
    <hr>
    <article class="journal-card"> 
        <h3 class="journal-title">${journalObj.title}</h3>
        <p class="journal-date">${journalObj.date}   ${journalObj.mood}</p>
        <p class="journal-entry">${journalObj.description}</p>
        <p class="journal-tags">Tags:${journalObj.technologyTag}</p>
        <button id="delete__${journalObj.id}">Delete</button>
    </article>
    `)
}