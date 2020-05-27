const inputs = document.querySelectorAll('.required');
const form = document.querySelector('form');
const submit = document.querySelector('#submit')
let theDiv = []
for (let every = 0; every < inputs.length; every++) {
    theDiv = document.createElement('div');
    theDiv.style = 'width: 100%; font-size:20px; height: 25px; color:red; backGround : rgba(255, 0, 0, .2); border : thin solid rgba(255, 0, 0, .7)'
    let parentDiv = inputs[every].parentNode;
    parentDiv.insertBefore(theDiv, inputs[every]);
    theDiv.style.display = 'none';
}

const userName = document.querySelector('#userName')
const userNameFormat = /^[0-9a-zA-Z]+$/;
const requiredUserName = () => {
    if (userNameFormat.test(userName.value) === false || userName.value.length < 4) {
        userName.previousElementSibling.style.display = 'inline-block'
        userName.previousElementSibling.textContent = 'Please enter a username.'
    } else {
        userName.previousElementSibling.style.display = 'none'
    }
}

const email = document.querySelector('#email');
const emailFormat = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const requiredEmail = () => {
    if (emailFormat.test(email.value) === false) {
        email.previousElementSibling.style.display = 'inline-block';
        email.previousElementSibling.textContent = 'Please enter a valid email address.'
    } else {
        return email.previousElementSibling.style.display = 'none';
    }
}

const firstName = document.querySelector('#firstName');
const requiredFirstName = () => {
    if (userNameFormat.test(firstName.value) === false || firstName.value.length < 1) {
        firstName.previousElementSibling.style.display = 'inline-block'
        firstName.previousElementSibling.textContent = 'Please enter your first name'
    } else {
        firstName.previousElementSibling.style.display = 'none'
    }
}

const lastName = document.querySelector('#lastName');
const requiredLastName = () => {
    if (userNameFormat.test(lastName.value) === false || lastName.value.length < 1) {
        lastName.previousElementSibling.style.display = 'inline-block'
        lastName.previousElementSibling.textContent = 'Please enter your last name.'
    } else {
        lastName.previousElementSibling.style.display = 'none'
    }
}

const phone = document.querySelector('#phone');
const requiredPhone = () => {
    if (phone.value.length < 10) {
        phone.previousElementSibling.style.display = 'inline-block'
        phone.previousElementSibling.textContent = 'Please enter your phone number'
    } else {
        phone.previousElementSibling.style.display = 'none'
    }
}

const submitFn = (event) => {
    if (userNameFormat.test(userName.value) === false || userName.value.length < 4) {
        event.preventDefault();
    } else if (emailFormat.test(email.value) === false) {
        event.preventDefault();
    } else if (firstName.value.length < 1) {
        event.preventDefault();
    } else if (lastName.value.length < 1) {
        event.preventDefault();
    } else if (phone.value.length < 10) {
        event.preventDefault();
    }
}

form.addEventListener('input', requiredUserName)
form.addEventListener('input', requiredEmail)
form.addEventListener('input', requiredFirstName)
form.addEventListener('input', requiredLastName)
form.addEventListener('input', requiredPhone)
form.addEventListener('click', submitFn)

