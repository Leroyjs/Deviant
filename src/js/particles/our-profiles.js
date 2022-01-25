import isTouchDevice from 'is-touch-device';

function ourProfiles() {
  const isTouchable = isTouchDevice();
  const _ourProfilesMainWrapper = document.querySelectorAll(
    '.our-profiles__item'
  );

  !isTouchable && _ourProfilesMainWrapper.forEach(item => initItem(item));
}

function initItem(item) {
  const _ourProfilesImgWrapper = item.querySelector(
    '.our-profiles__photo-wrapper'
  );

  item.addEventListener('mousemove', e => {
    _ourProfilesImgWrapper.style.transform = `translate(calc(${
      e.pageX + 20
    }px), calc(${e.offsetY - 20}px - 100%))`;
    _ourProfilesImgWrapper.classList.add('our-profiles__photo-wrapper_active');
  });

  item.addEventListener('mouseout', () => {
    _ourProfilesImgWrapper.classList.remove(
      'our-profiles__photo-wrapper_active'
    );
  });
}

export { ourProfiles };
