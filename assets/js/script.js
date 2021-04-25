// VALIDATION WITH JS

const form = document.getElementById("form");

const inputs = document.querySelectorAll("#form input");

const firstname = document.getElementById("firstname");
const lastname = document.getElementById("lastname");
const email = document.getElementById("email");
const password = document.getElementById("password");

form.addEventListener("submit", function (e) {
  let success = checkInput();
  if (success) {
    alert("Formulaire soumis");
  } else {
    e.preventDefault();
  }
});
function setSuccesFor(input) {
  input.classList.remove("is-invalid");
  input.classList.add("is-valid");
  const small = input.nextElementSibling;
  small.textContent = "Message Error";
  small.style.visibility = "hidden";
}
function setErrorFor(input, message) {
  input.classList.remove("is-valid");
  input.classList.add("is-invalid");
  const small = input.nextElementSibling;
  small.textContent = message;
  small.style.visibility = "visible";
}

function isEmpty() {
  for (let i = 0; i < inputs.length; i++) {
    let inputValue = inputs[i].value.trim();
    if (inputValue === "") {
      setErrorFor(inputs[i], "Le champs est requis");
      return true;
    } else {
      setSuccesFor(inputs[i]);
      return false;
    }
  }
}

function checkInput() {
  const firstnameValue = firstname.value.trim();
  const lastnameValue = lastname.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  let isSuccess = false;

  if (firstnameValue.length > 2 && firstnameValue.length < 50) {
    setSuccesFor(firstname);
    isSuccess = true;
  } else {
    setErrorFor(firstname, "2 caractère minimun et 50 caractère maximum");
    isSuccess = false;
  }

  if (lastnameValue.length > 2 && lastnameValue.length < 100) {
    setSuccesFor(lastname);
    isSuccess = true;
  } else {
    setErrorFor(lastname, "2 caractère minimun et 100 caractère maximum");
    isSuccess = false;
  }

  if (emailValue.length > 10 && emailValue.length < 100) {
    setSuccesFor(email);
    isSuccess = true;
  } else {
    setErrorFor(email, "Il semble que ce ne soit pas un email");
    isSuccess = false;
  }

  if (passwordValue.length > 6 && passwordValue.length < 50) {
    setSuccesFor(password);
    isSuccess = true;
  } else {
    setErrorFor(
      password,
      "Le mot de passe doit être compris entre 6 et 50 caractère !"
    );
    isSuccess = false;
  }

  if (isSuccess) {
    return true;
  } else {
    return false;
  }
}

(function handleKeyPress() {
  for (let i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener("keyup", () => {
      checkInput();
    });
  }
})();
