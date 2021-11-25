const formDiv = document.querySelector('.contact-form-div');
const button = document.querySelector('.button-contact-me');

button.addEventListener('click', hideShow, false);

function hideShow() {
  formDiv.style.display = 'block';
  this.style.display = 'none';
}
