import { getjournalentry, createPost } from "../data/DataManager.js";
import { getJournal } from "./journallist.js";
import { PostEntry } from "./journalentry.js";


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
    event.preventDefault();
    if (event.target.id === "newPost__submit") {
    //collect the input values into an object to post to the DB
      const title = document.querySelector("input[name='postTitle']").value
      const tag = document.querySelector("input[name='postTag']").value
      const description = document.querySelector("textarea[name='postDescription']").value
      const date = document.querySelector("input[name='postDate']").value
      const postObject = {
          title: title,
          technologyTag: tag,
          description: description,
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


showPostEntry();
startJournal();