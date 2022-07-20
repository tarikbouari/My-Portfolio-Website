const form = document.getElementById('form');
const formBtn = document.getElementById('primary-btn');
// const NameRequired = " Please enter your name";
// const emailRequired = " Please enter your email";
const emailInvalid = " Please enter correct email format";
const emailLower = "Email should be in lowercase";
const getName = form.elements['name'];
const getEmail = form.elements['email'];
const getComment = form.elements['comment'];



form.addEventListener('click', (e) =>{
    let fullName = getName.value;
    let email= getEmail.value;
    let comment = getComment.value;
console.log(fullName);
    e.preventDefault();
    console.log('hello you click me')
    validName();
    validEmail();
})

// const msg = input.parentNode.querySelector("small");
// const inputField = input.parentNode.querySelector('input');
const msg = document.querySelector('form small');
// function validName(){
//     let fullName = getName.value;
//     if(fullName.trim() === ""){
//         return msg.textContent = NameRequired
//     } else {
//         return inputField.classList.add('success');
//      }
     
// }

function validEmail(){
    const emailTrim = email.trim();
    const emailFormat =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    
    if(emailTrim === ''){
        return msg.textContent = emailRequired
    }
    if(emailTrim !== email.toLowerCase()){
        return msg.textContent = emailLower
    }
    if(emailFormat.test(emailTrim)){
        return msg.textContent = emailInvalid
    }else{
        inputField.classList.add('success');
    }
}