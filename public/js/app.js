const formDiv = document.querySelector('.contact-form-div');
const button = document.querySelector('.button-contact-me');
const submitButton = document.querySelector('#submit-btn');

let name = document.querySelector('#name');
let subject = document.querySelector('#subject');
let email = document.querySelector('#email');
let message = document.querySelector('#message');

button.addEventListener('click', hideShow, false);

function hideShow() {
  formDiv.style.display = 'block';
  this.style.display = 'none';
}

submitButton.addEventListener('click', (e) => {
  e.preventDefault();

  let formData = {
    name: name.value,
    subject: subject.value,
    email: email.value,
    message: message.value
  }

  let xhr = new XMLHttpRequest();
  xhr.open('POST', '/');
  xhr.setRequestHeader('content-type', 'application/json');
  xhr.onload = function() {
    console.log(xhr.responseText);
    if(xhr.responseText == 'success') {
      alert('Email Sent');
      name.value = '';
      subject.value = '';
      email.value = '';
      message.value = '';
    } else {
      alert('Something went wrong.  Verify all fields and try again.')
    }
  }

  xhr.send(JSON.stringify(formData));
});
