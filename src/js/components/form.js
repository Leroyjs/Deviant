import IMask from "imask";

export const initForm = () => {
  const formEl = document.querySelector(".write-us-form-js");
  const BASE_URL = 'https://backoffice.deviant-studio.com/letters/inbox'

  formEl.onsubmit = async (e) => {
    e.preventDefault();
    onError(false)
    const formData = new FormData(formEl);

    const validateErrorArray = getErrorsForm(formData);
    const hasValidateError = validateErrorArray.filter(item => !item).length

    if (hasValidateError) return displayError();
    fetch(BASE_URL, {
      method: "POST",
      body: formData,
    })
      .then((response) => {
        try {
          openPopup();
        } catch (error) {
          console.log(error);
        }
      })
      .catch(onError);
  };

  function onError(isError = true) {
    const error = document.querySelector(".error-backend-js");
    if (isError) {
      error.classList.remove("error-backend");
      error.classList.add("error-backend_error");
    } else {
      error.classList.remove("error-backend_error");
      error.classList.add("error-backend");
    }
  }
};

function classChange(node, isError) {
  const parentNode = node.parentElement.parentElement;
  if (isError) {
    if (parentNode.classList.contains("form-wrapper")) parentNode.classList.remove("form-wrapper")
    parentNode.classList.add("form-wrapper_error")
  } else {
    parentNode.classList.add("form-wrapper")
    if (parentNode.classList.contains("form-wrapper_error")) parentNode.classList.remove("form-wrapper_error")
  }
}

function displayError() {
  const error = document.querySelector(".error-form");
  if (error.classList.contains("error-form")) error.classList.remove("error-form");
  error.classList.add("error-form_error");
}

function getErrorsForm(formData) {
  return [
    emailValid(formData.get("email")),
    phoneValid(formData.get("phone")),
  ];
}

function emailValid(value) {
  const EMAIL_REGEXP =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const isValid = EMAIL_REGEXP.test(value);
  const node = document.querySelector('[name="email"]');
  classChange(node, !isValid);
  return isValid;
}

function phoneValid(value) {
  const regex =
    /^(\+)?(\(\d{2,3}\) ?\d|\d)(([ \-]?\d)|( ?\(\d{2,3}\) ?)){5,12}\d$/;

  const isValid = regex.test(value);
  const node = document.querySelector('[name="phone"]');
  classChange(node, !isValid);
  return isValid;
}

IMask(document.querySelector(`input[name="phone"]`), {
  mask: "+{7} (000) 000-00-00",
});

function openPopup() {
  const popupEl = document.querySelector('.popup-contact-us-js');
  const scrollContentEl = document.querySelector('.scroll-content');
  popupEl.classList.add('open')
  document.body.classList.add('no-scroll')
  scrollContentEl.classList.add('no-scroll')
}
