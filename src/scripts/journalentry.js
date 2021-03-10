export const PostEntry = () => {
    return `
    <div>
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
    </div>    
    `
}