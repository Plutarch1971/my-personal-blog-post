
let usernameEl = document.getElementById("username");
const titleEl = document.getElementById("title");
const contentEl = document.getElementById("content");
const submitBtn = document.getElementById("submit");


const redirectToBlog = function() {
  redirectPage('blog.html');
}

const formSubmission = function(event) {
  event.preventDefault();

  // form logic stays in the form handler
  if (!usernameEl.value || !titleEl.value || !contentEl.value) {
   document.getElementById('error').textContent = "Please complete the form.";
    return;
  }

  const formData = {
    username: usernameEl.value,
    title: titleEl.value,
    content: contentEl.value
  };

  storeLocalStorage(formData);
  redirectToBlog();
}

submitBtn.addEventListener('click', formSubmission);



