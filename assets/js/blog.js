// TODO: Create a variable that selects the main element, and a variable that selects the back button element
const mainEl = document.querySelector("main");
const backBtn = document.querySelector("back");
// TODO: Create a function that builds an element and appends it to the DOM
const displayBlogData = function() {
        // Sample data to display
         const data = ["title", "content", "username", ];

        // Get the container element where data will be displayed
        let container = document.getElementById("blogData"); // Fix: Add quotes around "blogData"

        // Display data item-wise
        data.forEach(function(item) {
            // Create a new element for each item
            var newItem = document.createElement("div");
            newItem.textContent = item;

            // Append the new element to the container
            container.appendChild(newItem);
        });
    }
// TODO: Create a function that handles the case where there are no blog posts to display
const noPosts = () => {
        // Create a new element
        let noPostsEl = document.createElement("div");  
        if(data.length === 0){
        noPostsEl.textContent = "No posts to display";
        // Append the new element to the main element
        mainEl.appendChild(noPostsEl);
        }
    }

// TODO: Create a function called `renderBlogList` that renders the list of blog posts if they exist. If not, call the no posts function.
const renderBlogList = (data) => {
    // check if data exists
    if (data.lenth> 0){
        // call the displaly blog data function
        displayBlogData(data);
    }
    else{
        // call the no posts function
        noPosts();
    }
}
// TODO: Call the `renderBlogList` function
renderBlogList(data);
// TODO: Redirect to the home page using the `redirectPage` function found in logic.js when the back button is clicked
backBtn.addEventListener("click", redirectPage);