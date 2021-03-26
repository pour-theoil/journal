import { getLoggedInUser } from "../../data/DataManager.js"

export const PostEntry = (postObject, postmethod) => {
    if (postmethod === "edit") {
        const moodList = ["Perplexed","Tenacious","Marvelous"]

        return `
        <form>
        <div class=inputTags>
            <input value="${postObject.title}"
                    name="postTitle"
                    class="newPost__input"
                    type="text"
                    placeholder="Title"
                    />
            <input value="${postObject.technologyTag}"
                    name="postTag"
                    class="newPost__input"
                    type="text"
                    placeholder="Tech Tags"
                    />
            <label for="postMood">Current Mood:</label>
            <select name="postMood" class="newPost__input">
                <option value="${postObject.mood}">${postObject.mood}</option>
                <option value="Perplexed">Perplexed</option>
                <option value="Weepy">Weepy</option>
                <option value="Tenacious">Tenacious</option>
                <option value="Marvelous">Marvelous</option>
                <option value="Creative">Creative</option>
            </select>
            <label for="postdate">Entry Date:</label>            
            <input value="${postObject.date}"
                    name="postDate"
                    class="newPost__input" 
                    type="date"
                    min="2000-01-01" 
                    max="2031-12-31" />  
        </div>
        <textarea name="postDescription"
            class ="newPost__input newPost__description" placeholder="Journal entry text... ">${postObject.description}</textarea>
            <button id="updatePost__${postObject.id}">Save Edit</button><button id="newPost__cancel">Cancel</button>
    </form>    
    `
    } else return `
    <form>
        <div class=inputTags>
            <input value=""
                    name="postTitle"
                    class="newPost__input"
                    type="text"
                    placeholder="Title" />
            <input value=""
                    name="postTag"
                    class="newPost__input"
                    type="text"
                    placeholder="Tech Tags" />
            <label for="postMood">Current Mood:</label>
            <select name="postMood" class="newPost__input">
                <option value="Perplexed">Perplexed</option>
                <option value="Weepy">Weepy</option>
                <option value="Tenacious">Tenacious</option>
                <option value="Marvelous">Marvelous</option>
                <option value="Creative">Creative</option>
            </select>
            <label for="postdate">Entry Date:</label>            
            <input value=""
                    name="postDate"
                    class="newPost__input" 
                    type="date"
                    min="2000-01-01" 
                    max="2031-12-31" />  
        </div>
        <textarea name="postDescription"
            class ="newPost__input newPost__description"
            placeholder="Journal entry text... "></textarea>
        <button id="newPost__submit">Save</button>
        <button id="newPost__cancel">Cancel</button>
    </form>    
    `
}