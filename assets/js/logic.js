// TODO: Create logic to toggle the light/dark mode styles for the page and circle. The mode should be saved to local storage.
document.addEventListener('DOMContentLoaded', function() {
    const toggleSwitch = document.getElementById('toggle');
    //console.log(toggleSwitch);
    if(toggleSwitch){//if the toggle switch exists
    const switchTheme = function(){
      const body = document.body;
      
      
      if (body.classList.contains("dark")){
        body.classList.remove("dark");
        body.classList.add("light");  
        localStorage.setItem('theme', "light");
      } else{
        body.classList.remove("light");
        body.classList.add("dark");
        localStorage.setItem('theme', "dark");
      }
      
      var currentTheme = localStorage.getItem('theme') || 'light';
      if (currentTheme === 'dark') {
        document.body.classList.add('dark');
      } else {
        document.body.classList.add('light');
        //switchTheme()
      }
  const circleColor = body.classList.contains('dark') ? '#4266f5' : '#ffb100';
  document.documentElement.style.setProperty('--circle-color', circleColor);  
  
    }
    toggleSwitch.addEventListener('click', switchTheme);
  }
  });
  
// TODO: Create a function called `readLocalStorage` that reads from local storage and returns the data. If no data exists, return an empty array.
const readLocalStorage = function() {
  let storedData = localStorage.getItem('formData');
  storedData = JSON.parse(storedData);
  return storedData || [];
};

// TODO: Create a function called `storeLocalStorage` that takes a given object and saves the new data to the existing blog data in local storage.
const storeLocalStorage = function(formData) {
  const dataArray = readLocalStorage();

  dataArray.push(formData);
  localStorage.setItem('formData', JSON.stringify(dataArray));
};

// ! Use the following function whenever you need to redirect to a different page

let redirectURL = '';

const redirectPage = function (url) {
redirectURL = url;
location.assign(url);
 };
