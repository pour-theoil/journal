export const PostEntry = () => {
    return `
    <div class="newPost">
        <div>
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
        </div>
        <textarea name="postDescription"
            class ="newPost__input newPost__description"
            placeholder="Journal entry text... "></textarea>
        <button id="newPost__submit">Save</button>
        <button id="newPost__cancel">Cancel</button>
    </div>    
    `
}