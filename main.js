const form = document.getElementById("sign-up-form");
const fnameInput = document.getElementById("f-name");
const lnameInput = document.getElementById("l-name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const fnameContainer = document.querySelector(".f-name-input");
const lnameContainer = document.querySelector(".l-name-input");
const emailContainer = document.querySelector(".email-input");
const passwordContainer = document.querySelector(".password-input");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  validateForm();
});

const validateForm = () => {
  fnameInput.value === ""
    ? showError(fnameContainer, fnameInput, "First Name cannot be empty")
    : showSuccess(fnameContainer, fnameInput, "");
  lnameInput.value === ""
    ? showError(lnameContainer, lnameInput, "Last Name cannot be empty")
    : showSuccess(lnameContainer, lnameInput, "");
  emailInput.value === ""
    ? showError(emailContainer, emailInput, "Email cannot be empty")
    : showSuccess(emailContainer, emailInput, "");
  passwordInput.value === ""
    ? showError(passwordContainer, passwordInput, "Password cannot be empty")
    : passwordInput.value.length <= 8 - 1
    ? showError(
        passwordContainer,
        passwordInput,
        "Password must contain min 8 character"
      )
    : showSuccess(passwordContainer, passwordInput, "");
};
const showError = (pe, ce, message) => {
  const span = ce.nextElementSibling;
  ce.classList.add("error");
  span.classList.remove("hidden");
  const errMessage = pe.nextElementSibling;
  errMessage.innerText = message;
  errMessage.classList.remove("hidden");
};
const showSuccess = (pe, ce, message) => {
  
  const span = ce.nextElementSibling;
  ce.classList.remove("error");
  span.classList.add("hidden");
  const errMessage = pe.nextElementSibling;
  errMessage.innerText = message;
  errMessage.classList.add("hidden");
  
};
