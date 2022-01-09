import '~/sass/works';
import Scrollbar from 'smooth-scrollbar';
import { worksHeight } from '@/particles/worksHeight';
import { deviantCircle } from '@/particles/deviantCircle';
import { header } from '@/particles/header';
import { worksFilter } from '../particles/worksFilter';
import { linkWrapper } from '../particles/linkWrapper';
import { initBurgerMenu } from '../particles/burgerMenu';

window.addEventListener('DOMContentLoaded', () => {
  initBurgerMenu();
  linkWrapper();
  const _scrollWrapperBlock = document.querySelector('.main');
  const mainScrollbar = Scrollbar.init(_scrollWrapperBlock, {
    alwaysShowTracks: true
  });
  const changeColorOfHeader = header();
  const setHeightOfWorksBlock = worksHeight();
  worksFilter(setHeightOfWorksBlock);

  const setRotateX = deviantCircle();
  mainScrollbar.addListener(() => {
    changeColorOfHeader();
    setHeightOfWorksBlock();
    setRotateX();
    mainScrollbar.update();
  });
});
