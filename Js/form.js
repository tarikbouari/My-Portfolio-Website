const email = document.getElementById("email");
const form = document.getElementsByClassName('form')[0];
const errorMessage = document.getElementsByClassName('error-message');


form.addEventListener('submit', (event)=>{
    let emailValue = email.value;
    event.preventDefault();
    if (emailValue === emailValue.toLowerCase()) {
        form.submit();
    }else{
        emailValue.toLowerCase();
        errorMessage[0].innerHTML = "Please enter a valid email address (Lowercase only)";
    }
})