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

export const deletePost = (postId) => {
    return fetch(`http://localhost:8088/entries/${postId}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json"
        }
    })
        .then(response => response.json())
        .then(getjournalentry)
}


export const usePostCollection = () => {
  //Best practice: we don't want to alter the original state, so
  //make a copy of it and then return it
  //The spread operator makes this quick work
  return [...orderedResponse];
}
