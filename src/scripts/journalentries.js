export const journalEntry = (journalObj) => {
    return (`
    <hr>
    <article class="journal-card"> 
        <h3 class="journal-title">${journalObj.title}</h3>
        <p class="journal-date">${journalObj.date}</p>
        <p class="journal-entry">${journalObj.description}</p>
        <p class="journal-tags">Tags:${journalObj.technologyTag}</p>
    </article>
    `)
}