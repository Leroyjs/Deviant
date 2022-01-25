import '~/sass/about';

import { worksHeight } from '@/particles/worksHeight';
import { deviantCircle } from '@/particles/deviantCircle';
import { header } from '@/particles/header';
import { linkWrapper } from '@/particles/linkWrapper';
import { themeController } from '@/particles/theme-controller';
import { ourProfiles } from '@/particles/our-profiles';
import { initBurgerMenu } from '@/particles/burgerMenu';
import { checkTouchDevice } from '@/particles/adaptive';
import { initClock } from '@/particles/clock';
import { initScrollbar } from '@/particles/scrollbar';
import { initVHSize } from '@/particles/vh-size';

window.addEventListener('DOMContentLoaded', () => {
  const changeColorOfHeader = header();
  const setHeightOfWorksBlock = worksHeight();
  const themeSeparator = document.querySelector('.about-first-section');
  const themeSetter = themeController(themeSeparator);
  const setRotateX = deviantCircle();

  checkTouchDevice();
  linkWrapper();
  initClock();
  ourProfiles();
  initBurgerMenu();
  initVHSize();

  function scrollEvent() {
    themeSetter();
    changeColorOfHeader();
    setHeightOfWorksBlock();
    setRotateX();
  }

  initScrollbar(scrollEvent);
});
