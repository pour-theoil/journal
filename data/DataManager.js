//Comment out depending on local or hosted testing
//const apiUrl = "http://localhost:8088"
const apiUrl = "https://firstjsonserver.herokuapp.com"

let loggedInUser = {
    name: "",
    email: ""
}

export const getLikes = (postId) => {
    return fetch(`${apiUrl}/userLikes?postId=${postId}`)
      .then(response => response.json())
}


export const logoutUser = () => {
    loggedInUser = {}
}

export const setLoggedInUser = (userObj) => {
    loggedInUser = userObj;
}

export const getLoggedInUser = () => {
	return loggedInUser;
}

export const registerUser = (userObj) => {
    return fetch(`${apiUrl}/users`, {
      method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(userObj)
    })
    .then(response => response.json())
    .then(parsedUser => {
      setLoggedInUser(parsedUser);
      return getLoggedInUser();
    })
}

export const loginUser = (userObj) => {
    return fetch(`${apiUrl}/users?name=${userObj.name}&email=${userObj.email}`)
    .then(response => response.json())
    .then(parsedUser => {
      //is there a user?
      console.log("parsedUser", parsedUser) //data is returned as an array
      if (parsedUser.length > 0){
        setLoggedInUser(parsedUser[0]);
        return getLoggedInUser();
      }else {
        //no user
        return false;
      }
    })
  }

export const getPosts = () => {
    const userId = getLoggedInUser().id
    return fetch(`${apiUrl}/posts?_expand=user`)
      .then(response => response.json())
      .then(parsedResponse => {
        console.log("data with user", parsedResponse)
        postCollection = parsedResponse
        return parsedResponse;
      })
}



let orderedResponse = [];
export const getjournalentry = () => {

    return fetch(`${apiUrl}/entries?_expand=user`)
    .then(response => response.json())
    .then(parsedResponse => {
        orderedResponse = parsedResponse.reverse();
        console.log(orderedResponse);
        return orderedResponse;
    })

}

export const createPost = postObj => {
    return fetch(`${apiUrl}/entries`, {
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
    return fetch(`${apiUrl}/entries/${postId}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json"
        }
    })
        .then(response => response.json())
        .then(getjournalentry)
}

export const getSingleEntry = (postId) => {
    return fetch(`${apiUrl}/entries/${postId}`)
        .then(response => response.json())
}

export const updateEntry = (postObj) => {
    return fetch(`${apiUrl}/${postObj.id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(postObj)
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
