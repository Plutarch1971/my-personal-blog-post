document.addEventListener('DOMContentLoaded', function() {
    const usernameEl = document.getElementById("username");
    const titleEl = document.getElementById("title");
    const contentEl = document.getElementById("content");
    const submitBtn = document.getElementById("submit");
    

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
        storeLocalStorage();

        const readLocalStorage = function() {
            const storedData = localStorage.getItem('formData');
            return storedData ? JSON.parse(storedData) : {};
           
        };
        
        const formData = readLocalStorage();
       // console.log(formData);
    };
    
    function redirectToBlog() { 
        location.assign('https://plutarch1971.github.io/my-personal-blog-post//blog.html');
        redirectToBlog();
    }
        const readLocalStorage = function() {
    const storedData = localStorage.getItem('formData');
    return storedData ? JSON.parse(storedData) : {};
        
};
    const readData = readLocalStorage();
    console.log(readData);
    
    if (submitBtn) {
        submitBtn.addEventListener('click', formSubmission);
    } else {
        console.log('Submit button not found');
    }
    
    
});
