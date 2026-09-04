// Simple JavaScript file for the CSE Department website

// Used on the gallery page to change the big preview image
function changeImage(imgSrc, caption) {
  var bigImage = document.getElementById("bigImage");
  var bigCaption = document.getElementById("bigCaption");
  bigImage.src = imgSrc;
  bigCaption.innerHTML = caption;
}

// Used on the contact page to check the form before submitting
function validateForm() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var subject = document.getElementById("subject").value;
  var message = document.getElementById("message").value;

  var nameError = document.getElementById("nameError");
  var emailError = document.getElementById("emailError");
  var subjectError = document.getElementById("subjectError");
  var messageError = document.getElementById("messageError");
  var formMessage = document.getElementById("formMessage");

  // clear old error messages
  nameError.innerHTML = "";
  emailError.innerHTML = "";
  subjectError.innerHTML = "";
  messageError.innerHTML = "";
  formMessage.innerHTML = "";
  formMessage.className = "";

  var isValid = true;

  if (name.trim() === "") {
    nameError.innerHTML = "Please enter your name.";
    isValid = false;
  }

  // very basic email check: must contain @ and a dot after it
  var atPosition = email.indexOf("@");
  var dotPosition = email.lastIndexOf(".");
  if (email.trim() === "" || atPosition < 1 || dotPosition < atPosition + 2) {
    emailError.innerHTML = "Please enter a valid email address.";
    isValid = false;
  }

  if (subject === "") {
    subjectError.innerHTML = "Please choose a subject.";
    isValid = false;
  }

  if (message.trim() === "") {
    messageError.innerHTML = "Please enter a message.";
    isValid = false;
  } else if (message.trim().length < 10) {
    messageError.innerHTML = "Message should be at least 10 characters.";
    isValid = false;
  }

  if (isValid === false) {
    formMessage.innerHTML = "Please fix the errors above and try again.";
    formMessage.className = "failure";
    return false;
  }

  formMessage.innerHTML = "Thank you, " + name + "! Your message has been sent.";
  formMessage.className = "success";
  document.getElementById("contactForm").reset();
  return false;
}
