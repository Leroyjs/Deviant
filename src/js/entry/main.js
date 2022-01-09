import '~/sass/main';
import Scrollbar from 'smooth-scrollbar';
import { worksHeight } from '@/particles/worksHeight';
import { deviantCircle } from '@/particles/deviantCircle';
import { header } from '@/particles/header';
import { linkWrapper } from '@/particles/linkWrapper';
import { preloader } from '@/particles/preloader';
import { initBurgerMenu } from '../particles/burgerMenu';
preloader();

window.addEventListener('DOMContentLoaded', () => {
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
