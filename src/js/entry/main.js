import '~/sass/main';
import Scrollbar from 'smooth-scrollbar';
import { worksHeight } from '@/particles/worksHeight';
import { deviantCircle } from '@/particles/deviantCircle';
import { header } from '@/particles/header';
import { linkWrapper } from '@/particles/linkWrapper';
import { preloader } from '@/particles/preloader';
import { initBurgerMenu } from '@/particles/burgerMenu';
import { checkTouchDevice } from '@/particles/adaptive';
import { initClock } from '@/particles/clock';
preloader();

window.addEventListener('DOMContentLoaded', () => {
  initClock();
  checkTouchDevice();
  linkWrapper();
  initBurgerMenu();
  const changeColorOfHeader = header();
  const _scrollWrapperBlock = document.querySelector('.main');
  const mainScrollbar = Scrollbar.init(_scrollWrapperBlock, {
    alwaysShowTracks: true
  });
  const setHeightOfWorksBlock = worksHeight();

  const setRotateX = deviantCircle();
  mainScrollbar.addListener(() => {
    changeColorOfHeader();
    setHeightOfWorksBlock();
    setRotateX();
    mainScrollbar.update();
  });
});
