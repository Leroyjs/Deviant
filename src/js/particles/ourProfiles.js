function ourProfiles() {
  const _ourProfilesMainWrapper = document.querySelectorAll(
    '.our-profiles__item'
  );
  // const _ourProfilesImgWrapper = document.querySelector(
  //   '.our-profiles__photo-wrapper'
  // );

  _ourProfilesMainWrapper.forEach(item => {
    const _ourProfilesImgWrapper = item.querySelector(
      '.our-profiles__photo-wrapper'
    );
    item.addEventListener('mousemove', e => {
      console.log(e);
      _ourProfilesImgWrapper.style.transform = `translate(calc(${
        e.pageX + 20
      }px), calc(${e.offsetY - 20}px - 100%))`;
      _ourProfilesImgWrapper.classList.add(
        'our-profiles__photo-wrapper_active'
      );
    });
    item.addEventListener('mouseout', () => {
      _ourProfilesImgWrapper.classList.remove(
        'our-profiles__photo-wrapper_active'
      );
    });
  });
}
export { ourProfiles };
