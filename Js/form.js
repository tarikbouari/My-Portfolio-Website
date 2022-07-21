let savedData = {};
const newInputData = {};

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

form.addEventListener('submit', (event) => {
  const fullName = nameBox.value;
  const textMessage = textBox.value;
  const emailValue = email.value;
  event.preventDefault();
  if (emailValue === emailValue.toLowerCase()) {
    newInputData.fullName = fullName;
    newInputData.email = emailValue;
    newInputData.textarea = textMessage;
    if (Object.keys(savedData).length === 0) {
      localStorage.setItem('user', JSON.stringify(newInputData));
    } else if (
      !(
        savedData.fullName === newInputData.fullName
          && savedData.email === newInputData.email
          && savedData.textarea === newInputData.textarea
      )
    ) {
      localStorage.setItem('user', JSON.stringify(newInputData));
    }
    form.submit();
    form.reset();
    warning.style.visibility = 'hidden';
    errorMessage.style.visibility = 'hidden';
  } else {
    form.focus();
    emailValue.toLowerCase();
    errorMessage.innerHTML = 'Please enter a valid email address (Lowercase only)';
    warning.style.visibility = 'visible';
  }
});
