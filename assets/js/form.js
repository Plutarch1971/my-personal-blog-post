document.addEventListener('DOMContentLoaded', function() {
    const usernameEl = document.getElementById("username");
    const titleEl = document.getElementById("title");
    const contentEl = document.getElementById("content");
    const submitBtn = document.getElementById("submit");
console.log(usernameEl);
console.log(titleEl);
console.log(contentEl);
console.log(submitBtn);
    const formSubmission = function(event) {
        event.preventDefault(); 
        
        const storeLocalStorage = function() {
            if (!usernameEl.value || !titleEl.value || !contentEl.value) {
                alert("Please fill in all fields"); 
                return; 
            }
            
            const formData = {
                username: usernameEl.value,
                title: titleEl.value,
                content: contentEl.value
            };
            
            localStorage.setItem('formData', JSON.stringify(formData));
            console.log(localStorage);
        };

        const readLocalStorage = function() {
            const storedData = localStorage.getItem('formData');
            return storedData ? JSON.parse(storedData) : {};
        };

        const formData = readLocalStorage();
        console.log(formData);
    };
    const blogPageURL = 'https://github.com/Plutarch1971/my-personal-blog-post.git/blog.html';
    
    function redirectToBlog() { 
        location.assign(blogPageURL);
    }
        const readLocalStorage = function() {
    const storedData = localStorage.getItem('formData');
    return storedData ? JSON.parse(storedData) : {};
};

    submitBtn.addEventListener('click', formSubmission);
    
});
