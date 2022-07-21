const data = {};
const local = {};

const username = document.getElementById("name");
const text = document.getElementById("test");
const email = document.getElementById("email");
const form = document.getElementsByClassName("form")[0];
const errorMessage = document.getElementsByClassName("error-message")[0];
const warning = document.querySelector(".warning-icon");

if (localStorage.length >= 1) {
  data = JSON.parse(localStorage.getItem("user"));
  username.value = data["fullName"];
  email.value = data["email"];
  text.value = data["textarea"];
}

form.addEventListener("submit", (event) => {
  const fullName = username.value;
  const textMessage = text.value;
  const emailValue = email.value;
  event.preventDefault();
  if (emailValue === emailValue.toLowerCase()) {
    local["fullName"] = fullName;
    local["email"] = emailValue;
    local["textarea"] = textMessage;
    if (Object.keys(data).length === 0) {
      localStorage.setItem("user", JSON.stringify(local));
    } else {
      if (!(data["fullName"] === local["fullName"] &&
        data["email"] === local["email"] &&
          data["textarea"] === data["textarea"])) {
        localStorage.setItem("user", JSON.stringify(local));  
      } 
    }
    form.submit();
    form.reset();
    warning.style.visibility = "hidden";
    errorMessage.style.visibility = "hidden";
  } else {
    form.focus();
    emailValue.toLowerCase();
    errorMessage.innerHTML =
      "Please enter a valid email address (Lowercase only)";
    warning.style.visibility = "visible";
  }
});
