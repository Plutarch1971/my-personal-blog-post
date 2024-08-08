// TODO: Create logic to toggle the light/dark mode styles for the page and circle. The mode should be saved to local storage.
const toggleSwitch = document.getElementById('toggle');
//const dataTheme = document.documentElement.getAttribute('data-theme');    

var currentTheme = localStorage.getItem('theme') || 'light';
//console.log(dataTheme);
//console.log(currentTheme);
const switchTheme = function(){
    const body = document.body;
if (body.classList.contains("dark")){
    localStorage.setItem('theme', "");
     body.classList.toggle("light");
} else{
    localStorage.setItem('theme', currentTheme);
}
body.classList.toggle('dark');
    
}
toggleSwitch.addEventListener('click', switchTheme);

