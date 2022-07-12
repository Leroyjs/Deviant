import Popup from "./popup";
import IMask from "imask";

export const initForm = () => {
  const form = document.querySelector(".form-section__main");

  form.onsubmit = async (e) => {
    e.preventDefault();
    // if (checkValidate() == true) {
    function onDone(result) {
      console.log(result), Popup();
    }
    function onError(errores) {
       const error = document.querySelector(".error-backend");
       error.classList.remove("error-backend");
       error.classList.add("error-backend_error");
    }
    const formdata = new FormData(form);
    const validateErrorArray = getErrorsForm(formdata);
    const hasValidateError = validateErrorArray.some((item) => Boolean(item));
    !hasValidateError
      ? fetchData(formdata, onDone, onError)
      : setErrorsForm(validateErrorArray);
  };
};
function fetchData(formdata, onDone, onError) {
  const requestOptions = {
    method: "POST",
    body: formdata,
  };

  fetch("https://backoffice.deviant-studio.com/letters/inbox", requestOptions)
    .then((response) => response.text())
    // .then((result) => (console.log(result), Popup))
    .then(onDone)
    .catch(onError);
}

// Обработка ошибок

function setErrorsForm(form) {
  function classChange(node) {
    const parentNode = node.parentElement.parentElement;
    parentNode.classList.remove("form-wrapper");
    parentNode.classList.add("form-wrapper_error");
  }
  function displayError() {
    const error = document.querySelector(".error-form");
    error.classList.remove("error-form");
    error.classList.add("error-form_error");
  }
  if (!form[0]) {
    const node = document.querySelector('[name="phone"]');
    classChange(node);
  } else if (!form[1]) {
    const node = document.querySelector('[name="email"]');
    classChange(node);
  } else {
    classChange(document.querySelector('[name="phone"]'));
    classChange(document.querySelector('[name="email"]'));
  }
  displayError();
  // const node = document.querySelector('[name="phone"]');
  // const parentNode = node.parentElement.parentElement;
  // parentNode.classList.remove("form-wrapper");
  // parentNode.classList.add("form-wrapper_error");
}
function getErrorsForm(formData) {
  const errors = [
    emailValid(formData.get("email")),
    phoneValid(formData.get("phone")),
  ];

  return errors;
}

function emailValid(value) {
  const EMAIL_REGEXP =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  function isEmailValid(value) {
    return EMAIL_REGEXP.test(value);
  }

  if (isEmailValid(value)) {
    return false;
  } else {
    return true;
  }
}

function phoneValid(value) {
  let regex =
    /^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/;
  if (regex.test(value)) {
    return false;
  } else {
    return true;
  }
  // } if else
}

function checkValidate() {
  emailValid();
  phoneValid();
}

IMask(document.querySelector(`input[name="phone"`), {
  mask: "+{7} (000) 000-00-00",
});
