const mainEl = document.querySelector("main");
    const backBtn = document.querySelector("#back");

    //const mainEl = document.querySelector("#data-Container");
    //const backBtn = document.querySelector("#back");

    const readLocalStorage = function() {
        let storedData = localStorage.getItem('formData');
        console.log(storedData);
    storedData = JSON.parse(storedData);
        return storedData || [];
    };

    const displayBlogData = function(data) {
        // Get the container element where data will be displayed
       
        console.log(data);
        // Display data item-wise
        
            // Create a new element for each item
           data.forEach(function(item) { 
            let container = document.createElement("div");
            let h2Item = document.createElement("h2");
            let pItem = document.createElement("p");
            let pItem2 = document.createElement("p");
           
            h2Item.textContent = item.title; // Assuming data has a title field
            pItem.textContent = item.content; // Assuming data has a content field
            pItem2.textContent = item.username; // Assuming data has a username field
            // Append the new element to the container*/
            container.appendChild(h2Item);
            container.appendChild(pItem);
            container.appendChild(pItem2);
            mainEl.appendChild(container);
           });
    };

    const noPosts = () => {
        // Create a new element
        let noPostsEl = document.createElement("div");
        noPostsEl.textContent = "No posts to display";
        // Append the new element to the main element
        mainEl.appendChild(noPostsEl);
    };

    const renderBlogList = (data) => {
        // Check if data exists
        if (!data) {
            // Call the noPosts function
            noPosts();
            return;
        } 
            // Call the displayBlogData function
            displayBlogData(data);
      
    };

    // Call the renderBlogList function with the appropriate data
    const blogData = readLocalStorage(); // Read data from local storage
    console.log(blogData);
    console.log(typeof blogData);
    renderBlogList(blogData); // Pass the data to renderBlogList function

    const redirectLandingPage = function() {
        const redirectURL = 'index.html';
        location.assign(redirectURL);
    };

    if (backBtn) {
        backBtn.addEventListener("click", redirectLandingPage);
        
    } else {
        console.log('Back button not found');
    }
