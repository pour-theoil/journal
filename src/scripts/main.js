import { getjournalentry, createPost, usePostCollection, deletePost } from "../data/DataManager.js";
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

const showFilteredPosts = (mood) => {
    //get a copy of the post collection
    const filteredmood = mood
    //filter the data
    const filteredData = usePostCollection().filter(singlePost => {
        if (singlePost.mood === filteredmood || mood === "AllPosts") {
            console.log("this is one of the filtered posts", singlePost);
            return singlePost;
        }
    })
    const postElement = document.querySelector("#journal");
    postElement.innerHTML = getJournal(filteredData);
}


const showPostEntry = () => { 
    //Get a reference to the location on the DOM where the nav will display
    const entryElement = document.querySelector(".formBox");
    entryElement.innerHTML = PostEntry();
    
}

// Section for event listeners
const applicationElement = document.querySelector("body");
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
    createPost(postObject).then(response => startJournal());
    document.querySelector("input[name='postTitle']").value = ""
    document.querySelector("input[name='postTag']").value = "" 
    document.querySelector("textarea[name='postDescription']").value = ""  
    }
    
  })

applicationElement.addEventListener("change", event => {
    if (event.target.id === "moodselector") {
      const currentmood = event.target.value
      console.log(`User wants to see ${currentmood} mood`)
      //invoke a filter function passing the year as an argument
      showFilteredPosts(currentmood);
    }
})

applicationElement.addEventListener("click", event => {
    if(event.target.id.startsWith("delete")) {
        const postId = event.target.id.split("__")[1];
        deletePost(postId)
        .then(response => {
            startJournal();
        })
    }
})

showNavBar();
showPostEntry();
startJournal();