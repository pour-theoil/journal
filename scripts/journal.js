const dailyJournal = [
{
    title: "Week one, getting our feet wet",
    date: "2/19/2021",
    description: "After just a single week at NSS we are starting to create some very 'interesting' code. The main focus is on flex box, which is quite difficult until you start to really play with it. Additionally, we are learning how to manuipulate <a href='https://github.com/pour-theoil/Coffee-House-Nash'>.css files</a> to bring the site to life.",
    technologyTag: [ " .css", " .html"]
},
{
    title: "Teamwork, makes the dream work",
    date: "2/19/2021",
    description: "After diving deep into .css, we were thrown into our very first <a href='https://github.com/nss-day-cohort-47/hello-world-vigilant-venutians'>team project</a>. The goal was to master git and github, implement flex box, and of course work as a team. The dynamics were not always easy, but we were able to come together to create a working html website with some interesting responsponsive characteristics!",
    technologyTag: [" .css", " .html", " git", " github"]
}
]

export const getEntry = () => {
    return dailyJournal;
};

// Blank journal entry 
//{
//     title: "",
//     date: "",
//     description: "",
//     technologyTag:""
// },