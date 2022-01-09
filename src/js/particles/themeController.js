export const themeController = separator => {
  let windowHeight = window.innerHeight;
  const _photoWrapper = document.querySelector(
    '.about-first-section__photo-wrapper'
  );
  const _photo = document.querySelectorAll('.about-first-section__photo');
  const photoWrapperClientRect = _photoWrapper.getBoundingClientRect();
  const photoWrapperBottom = photoWrapperClientRect.bottom;
  const separatorClientRect = separator.getBoundingClientRect();
  const separatorBottom = separatorClientRect.bottom;
  console.log(separatorBottom, photoWrapperBottom);
  let stepLength = (separatorBottom - photoWrapperBottom) / _photo.length;

  return () => {
    const separatorClientRect = separator.getBoundingClientRect();
    const separatorBottom = separatorClientRect.bottom;
    const separatorHeight = separatorClientRect.height;

    console.log(separatorBottom, photoWrapperBottom);

    if (separatorBottom - photoWrapperBottom <= 0) {
      document.body.classList = 'theme-red';
      _photoWrapper.style.transform = `translateY(${
        separatorBottom - windowHeight
      })`;
    } else {
      document.body.classList = 'theme-white';
      _photoWrapper.style.transform = `translateY(${
        separatorHeight - separatorBottom
      }px)`;
      _photo.forEach((item, index) => {
        if (separatorHeight - separatorBottom >= stepLength * index) {
          item.style.opacity = 1;
        } else {
          item.style.opacity = 0;
        }
      });
    }
  };
};
