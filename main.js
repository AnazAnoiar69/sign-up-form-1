import { showAlertIcon } from "./src/components";

const form = document.getElementById("sign-up-form");

const cFname = document.querySelector(".f-name");
const cFnameInput = document.querySelector(".f-name-input");
const cLname = document.querySelector(".l-name");
const cLnameInput = document.querySelector(".l-name-input");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  validateForm();
});

function validateForm() {
  const fname = document.getElementById("f-name");
  // const lname = document.getElementById("l-name");
  // const email = document.getElementById("email");
  // const password = document.getElementById("password");

    fname.value === ""
      ? showError(fname, "First Name cannot be empty")
      : showSuccess(fname, "First Name available");

      
}

const showError = (element, message) => {
  element.classList.add("border-red-700");
  const alertIcon = showAlertIcon()
  cFnameInput.append(alertIcon)
  // cLnameInput.append(alertIcon)

  const pop = document.createElement('p')
  pop.classList.add("text-[.6rem]", "text-red-600", "text-end", "italic", "text-bold")
  pop.innerHTML = message;
};
