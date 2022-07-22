let savedData = {};
const nameBox = document.getElementById('name');
const textBox = document.getElementById('test');
const email = document.getElementById('email');
const form = document.getElementsByClassName('form')[0];
const errorMessage = document.getElementsByClassName('error-message')[0];
const warning = document.querySelector('.warning-icon');
if (localStorage.getItem('user') != null) {
  savedData = JSON.parse(localStorage.getItem('user'));
  nameBox.value = savedData.fullName;
  email.value = savedData.email;
  textBox.value = savedData.textarea;
}

nameBox.addEventListener('focusout', () => {
  const formData = {
    fullName: nameBox.value,
    textarea: textBox.value,
    email: email.value,
  };
  localStorage.setItem('user', JSON.stringify(formData));
});
email.addEventListener('focusout', () => {
  const formData = {
    fullName: nameBox.value,
    textarea: textBox.value,
    email: email.value,
  };
  localStorage.setItem('user', JSON.stringify(formData));
});
textBox.addEventListener('focusout', () => {
  const formData = {
    fullName: nameBox.value,
    textarea: textBox.value,
    email: email.value,
  };
  localStorage.setItem('user', JSON.stringify(formData));
});

form.addEventListener('submit', (event) => {
  event.preventDefault();
  if (email.value === email.value.toLowerCase()) {
    form.submit();
    form.reset();
    warning.style.visibility = 'hidden';
    errorMessage.style.visibility = 'hidden';
  } else {
    form.focus();
    email.value.toLowerCase();
    errorMessage.innerHTML = 'Please enter a valid email address (Lowercase only)';
    warning.style.visibility = 'visible';
  }
});
