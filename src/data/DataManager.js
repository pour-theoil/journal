export const get journalentry = () => {

    return fetch("http://localhost:8088/jo")
    .then(response => response.json())
    // .then(parsedResponse => {
    //     // do something with response here
    //     return parsedResponse;
    // })
}