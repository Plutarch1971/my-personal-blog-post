// TODO: Create logic to toggle the light/dark mode styles for the page and circle. The mode should be saved to local storage.
const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
var currentTheme = localStorage.getItem('theme');
const darkTheme = document.querySelector('.dark-theme');
const lightTheme = document.querySelector('.light-theme');
const darkMode = 'dark';
const lightMode = 'light';

const switchTheme = function(){
    if(currentTheme === 'dark'){
        toggleSwitch.checked = true;
        currentTheme = 'light';
        localStorage.setItem('theme', lightMode);
        document.documentElement.setAttribute('data-theme', lightMode);
    } else {
        toggleSwitch.checked = false;
        currentTheme = 'dark';
        localStorage.setItem('theme', darkMode);
        document.documentElement.setAttribute('data-theme', darkMode);
    }
    document.documentElement.setAttribute('data-theme', currentTheme);
}

toggleSwitch.addEventListener('change', switchTheme);

// TODO: Create a function called `storeLocalStorage` that takes a given object and saves the new data to the existing blog data in local storage.
const storeLocalStorage = function(event){
  event.preventDefault();
  
  const blogData = [];
  blogData ={
      username: usernameEl.value,
      title: titleEl.value,
      content: contentEl.value.trim(),
      toggleSwitch: toggleSwitch.value,
  };
    if(usernameEl.value === "" || titleEl.value === "" || contentEl.value === ""){
        alert("Please fill out all fields");}
    else{
        localStorage.setItem(blogData, JSON.stringify(blogData));
        redirectPage();
    }
}

 // TODO: Create a function called `readLocalStorage` that reads from local storage and returns the data. If no data exists, return an empty array.
const readLocalStorage = function(){
    const blogData = JSON.parse(localStorage.getItem("blogData")) || [];
    return blogData;
}
readLocalStorage();


// ! Use the following function whenever you need to redirect to a different page


let redirectURL = 'https://github.com/Plutarch1971/my-personal-blog-post.git/index.html';

const redirectLandingPage = function (redirectURL) {
  redirectURL = redirectLandingPage;
  location.assign(redirectURL);
};

