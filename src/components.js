export const showError = (pe, ce, message) => {
 
    const span = ce.nextElementSibling;
    ce.classList.toggle("error");
    span.classList.toggle("hidden")
    
    console.log(message)
    // cLnameInput.append(alertIcon)
  
    const pop = document.createElement('p')
    pop.classList.add("text-[.6rem]", "text-red-600", "text-end", "italic", "text-bold")
    pop.innerHTML = message;

    pe.appendChild(pop)
  };

  
const showAlertIcon = () => {
    const div = document.createElement('div')
    div.classList.add("absolute", "right-4", "top-1/4")
    div.innerHTML = `<img src="./intro-component-with-signup-form-master/images/icon-error.svg" alt="...">`

    return div
}

export const showSuccess = (pe, ce) => {
    const span = ce.nextElementSibling;
    span.remove()

    ce.classList.toggle("error");
}