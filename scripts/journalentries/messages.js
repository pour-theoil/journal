import { getLoggedInUser } from "../../data/DataManager.js"

export const messageBoard = () => {
    return`
    <form>
        <div class=inputTags>
            <input value=""
                    name="messageTitle"
                    class="newMessage__input"
                    type="text"
                    placeholder="Title" />
            <input value=""
                    name="messageTag"
                    class="newMessage__input"
                    type="text"
                    placeholder="Message Tags" />
            <label for="messagedate">Date:</label>            
            <input value=""
                    name="messageDate"
                    class="newMessage__input" 
                    type="date"
                    min="2000-01-01" 
                    max="2031-12-31" />  
        </div>
        <textarea name="messageDescription"
            class ="newMessage__input newmessage__description"
            placeholder="Journal entry text... "></textarea>
        <button id="newmessage__submit">Save</button>
        <button id="newmessage__cancel">Cancel</button>
    </form>    
    `
}