//differemt screen
document.addEventListener('DOMContentLoaded', function() {
const showScreenLinks = document.querySelectorAll('.show-screen'); 
const screens = document.querySelectorAll('.screen');


showScreenLinks.forEach(link => {
    link.addEventListener('click', 
    function(e){
        e.preventDefault();

        const targetId = this.
        getAttribute('href').substring(1);
        
        screens.forEach(screen => {
           if (screen.id === targetId) {
            screen.style.display = 'block';
           } else {
            screen.style.display = 'none';
           }
        });
    });
});
});



//form validation

const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

// show input error mesage 
function showError(input, message) {
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = message;
}

// check if email is valid 
function checkEmail(input){
    const re =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if(re.test(input.value.trim())) {
        showSuccess(input);
    } else {
        showError(input, 'Email is not valid');
    }
}
// check required field
function checkRequired(inputArr){
    inputArr.forEach(function(input){
        if(input.value.trim() === ''){
            showError(input, `${getFieldName(input)} is required`);
        } else{
            showSuccess(input);
        }
    });
}

// check input length
function checkLength(input, min, max) {
    if(input.value.length < min) {
        showError(input, `${getFieldName(input)} must be at least ${min} characters`);
    } else if(input.value.length > max) {
        showError(input, `${getFieldName(input)} must be less than ${max} characters`);
    } else{
        showSuccess(input);
    }
}

// chech password match
function checkPasswordMatch(input1, input2){
    if(input1.value !== input2.value){
        showError(input2, 'Password do not match');
    }
}
// get fieldName
function getFieldName(input){
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}
// show success outline
function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

// event listener
form.addEventListener('submit', function(e) {
    e.preventDefault();

    checkRequired([username, email, password, password2]);
    checkLength(username, 5, 16);
    checkLength(password, 6, 26);
    checkEmail(email);
    checkPasswordMatch(password, password2)

});


