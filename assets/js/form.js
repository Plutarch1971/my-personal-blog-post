
const usernameEl = document.getElementById("username");
const titleEl = document.getElementById("title");
const contentEl = document.getElementById("content");
const submitBtn = document.getElementById("submit");

const readLocalStorage = function() {
    let storedData = localStorage.getItem('formData');
    console.log(storedData);
    storedData = JSON.parse(storedData);
    return storedData || [];
};
const redirectToBlog = function() { 
    location.assign('blog.html');
}

const formSubmission = function(event) {
    event.preventDefault(); 
    
    const storeLocalStorage = function() {
        if (!usernameEl.value || !titleEl.value || !contentEl.value) {
            alert("Please fill in all fields"); 
            return; 
        }
        const dataArray = readLocalStorage();
        console.log(dataArray);
        console.log(typeof dataArray);
        const formData = {
            username: usernameEl.value,
            title: titleEl.value,
            content: contentEl.value
        };
        dataArray.push(formData);
        localStorage.setItem('formData', JSON.stringify(dataArray));
        
    };
    
    storeLocalStorage();
    redirectToBlog();
}

    submitBtn.addEventListener('click', formSubmission);
  



