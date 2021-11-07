export const themeController = separator => {
  let height = window.innerHeight;
  const _photoWrapper = document.querySelector(
    '.about-first-section__photo-wrapper'
  );
  const _photo = document.querySelectorAll('.about-first-section__photo');
  const top = separator.getBoundingClientRect().top;
  let stepLength = (top - height) / _photo.length;

  _photoWrapper.style.transform = `translateY(calc(-${top - height}px - 70%))`;
  return () => {
    const top = separator.getBoundingClientRect().top;
    console.log(top - height);

    if (top - height <= 0) {
      document.body.classList = 'theme-red';
      _photoWrapper.style.transform = `translateY(-70%)`;
    } else {
      document.body.classList = 'theme-white';
      _photoWrapper.style.transform = `translateY(calc(-${
        top - height
      }px - 70%))`;
      _photo.forEach((item, index) => {
        if (top - height <= _photo.length * stepLength - stepLength * index) {
          item.style.opacity = 1;
        } else {
          item.style.opacity = 0;
        }
      });
    }
  };
};
