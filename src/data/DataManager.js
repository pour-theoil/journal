export const getjournalentry = () => {

    return fetch("http://localhost:8088/entries")
    .then(response => response.json())
    .then(parsedResponse => {
        console.log("fetched enties",parsedResponse)
        return parsedResponse;
    })

}