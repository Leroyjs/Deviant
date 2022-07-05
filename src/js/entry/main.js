import '~/sass/main';
import { worksHeight } from '@/particles/worksHeight';
import { deviantCircle } from '@/particles/deviantCircle';
import { header } from '@/particles/header';
import { linkWrapper } from '@/particles/linkWrapper';
import { preloader } from '@/particles/preloader';
import { initBurgerMenu } from '@/particles/burgerMenu';
import { checkTouchDevice } from '@/particles/adaptive';
import { initClock } from '@/particles/clock';
import { initScrollbar } from '@/particles/scrollbar';
import { initVHSize } from '../particles/vh-size';

preloader();

window.addEventListener('DOMContentLoaded', () => {
  const changeColorOfHeader = header();
  const setHeightOfWorksBlock = worksHeight();
  const setRotateX = deviantCircle();

  initClock();
  checkTouchDevice();
  linkWrapper();
  initBurgerMenu();
  initVHSize();

  function scrollEvent() {
    changeColorOfHeader();
    setHeightOfWorksBlock();
    setRotateX();
  }

  initScrollbar(scrollEvent);
});
