import Popup from "./popup";
import IMask from "imask";

export const initForm = () => {
  const formEl = document.querySelector(".write-us-form-js");

  formEl.onsubmit = async (e) => {
    e.preventDefault();
    onError(false)
    const formData = new FormData(formEl);

    const validateErrorArray = getErrorsForm(formData);
    const hasValidateError = validateErrorArray.some((item) => Boolean(item));
    !hasValidateError
      ? fetchData(formData, onDone, onError)
      : setErrorsForm(validateErrorArray);
  };

  function onDone(result) {
    console.log(result), Popup();
  }

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
  return [
    emailValid(formData.get("email")),
    phoneValid(formData.get("phone")),
  ];
}

function emailValid(value) {
  const EMAIL_REGEXP =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return !EMAIL_REGEXP.test(value);
}

function phoneValid(value) {
  let regex =
    /^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/;
  return !regex.test(value);
}

IMask(document.querySelector(`input[name="phone"]`), {
  mask: "+{7} (000) 000-00-00",
});
