const formDiv = document.querySelector('.contact-form-div');
const button = document.querySelector('.button-contact-me');

button.onclick = function blockContact() {
  if (formDiv.style.display !== "none") {
   formDiv.style.display = "none";
 } else {
   formDiv.style.display = "block";
 }
};
