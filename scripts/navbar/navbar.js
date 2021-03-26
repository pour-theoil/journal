export const NavBar = () => {
    return`
    <ul class="navbar">
    <li class="nav" class="active"><a href="/index.html">Journal</a></li>
    <li class="nav" "class="active"><a id="messages">Messages</a></li>
    <li class="nav" "class="active"><a id="logUserOut">Log Out</a></li>
    <li class="moodbar">   
        <label for="FilterMood">Filter Mood:</label>
        <select name="FilterMood" id="moodselector">
            <option value="AllPosts">All Posts</option>
            <option value="Perplexed">Perplexed</option>
            <option value="Weepy">Weepy</option>
            <option value="Tenacious">Tenacious</option>
            <option value="Marvelous">Marvelous</option>
            <option value="Creative">Creative</option>
        </select>
    </li>
    
    </ul>
    `
}