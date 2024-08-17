const mainEl = document.querySelector("main");
const backBtn = document.querySelector("#back");


const displayBlogData = function(data) {
  // Get the container element where data will be displayed

  console.log(data);
  // Display data item-wise

  // Create a new element for each item
  data.forEach(function(item) {
    let container = document.createElement("article");
    let h2Item = document.createElement("h2");
    let bquote = document.createElement("blockquote");
    let pItem2 = document.createElement("p");

    h2Item.textContent = item.title; // Assuming data has a title field
    bquote.textContent = item.content; // Assuming data has a content field
    pItem2.textContent = item.username; // Assuming data has a username field
    // Append the new element to the container*/
    container.appendChild(h2Item);
    container.appendChild(bquote);
    container.appendChild(pItem2);
    mainEl.appendChild(container);
  });
};

const noPosts = () => {
  mainEl.innerHTML = ""; // Clear the main element
  // Create a new element
  let noPostsEl = document.createElement("div");
  noPostsEl.textContent = "No posts to display";
  // Append the new element to the main element
  mainEl.appendChild(noPostsEl);
};
 //noPosts();
const renderBlogList = function(data) {
  if (data.length === 0) {
    noPosts();
  } else {
    displayBlogData(data);
  }
}

// Call the renderBlogList function with the appropriate data
const blogData = readLocalStorage(); // Read data from local storage
console.log(blogData);
console.log(typeof blogData);
renderBlogList(blogData); // Pass the data to renderBlogList function

const redirectLandingPage = function() {
  redirectPage('index.html');
};

if (backBtn) {
  backBtn.addEventListener("click", redirectLandingPage);

} else {
  console.log('Back button not found');
}