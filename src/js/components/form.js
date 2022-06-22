import axios from "axios";

export const initForm = () => {
  const form = document.querySelector(".form-section__main");

  form.onsubmit = async (e) => {
    e.preventDefault();

    axios({
      method: "post",
      url: "http://backoffice.deviant-studio.com/letters/inbox",
      data: new FormData(form),
      headers: { "Content-Type": "multipart/form-data" },
    })
      .then(function (response) {
        //handle success
        console.log(response);
      })
      .catch(function (response) {
        //handle error
        console.log(response);
      });
  };
};
