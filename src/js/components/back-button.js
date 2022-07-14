export const backButtonInit = () => {
  const backButton = document.querySelector(".circle-button");
  backButton.addEventListener("click", () => {
    history.back();
  });
};
