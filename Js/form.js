let savedData = {};
const newInputData = {};
const nameBox = document.getElementById("name");
const textBox = document.getElementById("test");
const email = document.getElementById("email");
const form = document.getElementsByClassName("form")[0];
const errorMessage = document.getElementsByClassName("error-message")[0];
const warning = document.querySelector(".warning-icon");
if (localStorage.getItem("user") != null) {
  savedData = JSON.parse(localStorage.getItem("user"));
  nameBox.value = savedData.fullName;
  email.value = savedData.email;
  textBox.value = savedData.textarea;
}