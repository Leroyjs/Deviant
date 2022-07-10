export const initForm = () => {
  const form = document.querySelector(".form-section__main");

  form.onsubmit = async (e) => {
    e.preventDefault();

    const formdata = new FormData(form);

    const requestOptions = {
      method: "POST",
      body: formdata,
    };

    fetch("https://backoffice.deviant-studio.com/letters/inbox", requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  };
};
