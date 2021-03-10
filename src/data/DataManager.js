let orderedResponse = [];

export const getjournalentry = () => {

    return fetch("http://localhost:8088/entries")
    .then(response => response.json())
    .then(parsedResponse => {
        orderedResponse = parsedResponse.reverse();
        console.log(orderedResponse);
        return orderedResponse;
    })

}

export const createPost = postObj => {
    return fetch("http://localhost:8088/entries", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(postObj)
        
    })
        .then(response => response.json())
        .then(getjournalentry())
        
}