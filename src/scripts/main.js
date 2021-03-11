import { getjournalentry, createPost } from "../data/DataManager.js";
import { getJournal } from "./journalentries/journallist.js";
import { PostEntry } from "./journalentries/journalentry.js";
import { NavBar } from "./navbar/navbar.js";


const showNavBar = () => {
    //Get a reference to the location on the DOM where the nav will display
    const navElement = document.querySelector("nav");
	navElement.innerHTML = NavBar();
}


const showjournalentries = () => {
    const postElement = document.querySelector("#journal");
      getjournalentry().then((allPosts) => {
          postElement.innerHTML = getJournal(allPosts);
      })
}


const startJournal = () => {
    showjournalentries();
}


const applicationElement =document.querySelector("body");
applicationElement.addEventListener("click", event => {
    console.log("You Clicked on: ", event.target)
})

applicationElement.addEventListener("click", event => {
    if (event.target.id === "newPost__cancel") {

        document.querySelector("input[name='postTitle']").value = ""
        document.querySelector("input[name='postTag']").value = "" 
        document.querySelector("textarea[name='postDescription']").value = ""
        //clear the input fields
    }
})

applicationElement.addEventListener("click", event => {
    event.preventDefault();
    if (event.target.id === "newPost__submit") {
    //collect the input values into an object to post to the DB
      const title = document.querySelector("input[name='postTitle']").value
      const tag = document.querySelector("input[name='postTag']").value
      const description = document.querySelector("textarea[name='postDescription']").value
      const date = document.querySelector("input[name='postDate']").value
      const mood = document.querySelector("select[name='postMood']").value
      const postObject = {
          title: title,
          technologyTag: tag,
          description: description,
          mood: mood,
          date: date
    }
  
    // be sure to import from the DataManager
    createPost(postObject).then(startJournal());
        
    }
    
  })

const showPostEntry = () => { 
    //Get a reference to the location on the DOM where the nav will display
    const entryElement = document.querySelector(".formBox");
    entryElement.innerHTML = PostEntry();
    
}




showNavBar();
showPostEntry();
startJournal();