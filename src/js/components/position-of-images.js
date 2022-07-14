const main = document.querySelector(".main-wrapper");
const start = document.querySelector(".case-start-screen");
const end = document.querySelector(".case-final-screen");
const imgs = document.querySelectorAll(".img-wrapper");

const countsOfVhScreens = 6;
const countsOfImgs = imgs.length;
const maxZlength = 11000;
const frontOffset = 1500;
const backOffset = 1000;
const step = (maxZlength - frontOffset - backOffset) / countsOfImgs;
const positionOfVisibilityBorder = 2000;
const borderBlurCoef = 5;

const getPercent = () => {
  const rect = main.getBoundingClientRect();
  const fullHeight =
    (rect.height * (countsOfVhScreens - 1)) / countsOfVhScreens;
  const top = rect.top;
  const percent = Math.abs(top / fullHeight);

  return percent;
};

const setPositionOfImages = () => {
  const percent = getPercent();

  imgs.forEach((item, index) => {
    const position =
      -maxZlength + index * step + percent * maxZlength + backOffset;

    const opacity =
      ((maxZlength + position + positionOfVisibilityBorder) / maxZlength) **
      borderBlurCoef;

    item.style.transform = `translateX(-50%) translateY(-50%) translateZ(${position}px)`;
    item.style.opacity = opacity;
  });

  if (percent < 0.05) {
    start.classList.add("is-show");
  } else {
    start.classList.remove("is-show");
  }

  if (percent > 0.95) {
    end.classList.add("is-show");
  } else {
    end.classList.remove("is-show");
  }
};

export const positionOfImages = () => {
  setPositionOfImages();

  return setPositionOfImages;
};
