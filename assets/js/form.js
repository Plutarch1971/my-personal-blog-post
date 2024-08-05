// TODO: Create a variable that selects the form element
const usernameEl = document.getElementById("username");
const titleEl = document.getElementById("title");
const contentEl = document.getElementById("content");
const submitBtn = document.getElementById("submit");

// TODO: Create a function that handles the form submission. Grab the form data and store it in local storage, then redirect to the blog page using the `redirectToBlog` function. If the form is submitted with missing data, display an error message to the user.
const formSubmission = function(event) {
    event.preventDefault(); // Prevent the default form submission behavior

    // Check if any of the form fields are empty
    if (!usernameEl.value || !titleEl.value || !contentEl.value) {
        alert("Please fill in all fields"); // Display an error message
        return; // Exit the function
    }

    // Store the form data in local storage
    const formData = {
        username: usernameEl.value,
        title: titleEl.value,
        content: contentEl.value
    };
    localStorage.setItem("formData", JSON.stringify(formData));

    redirectToBlog(); // Redirect to the blog page
};

function redirectToBlog() {
    const blogPageURL = 'https://github.com/Plutarch1971/my-personal-blog-post.git/blog.html';
    location.assign(blogPageURL);
}

submitBtn.addEventListener('click', formSubmission);

// TODO: Add an event listener to the form on submit. Call the function to handle the form submission.
const blogPageURL = 'https://github.com/Plutarch1971/my-personal-blog-post.git/blog.html';
function redirectToBlog() { 
    location.assign(blogPageURL);
}
submitBtn.addEventListener('click', formSubmission, redirectToBlog);
