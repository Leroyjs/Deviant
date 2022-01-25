import '~/sass/works';

import { worksHeight } from '@/particles/worksHeight';
import { deviantCircle } from '@/particles/deviantCircle';
import { header } from '@/particles/header';
import { worksFilter } from '@/particles/worksFilter';
import { linkWrapper } from '@/particles/linkWrapper';
import { initBurgerMenu } from '@/particles/burgerMenu';
import { checkTouchDevice } from '@/particles/adaptive';
import { initScrollbar } from '@/particles/scrollbar';
import { initVHSize } from '../particles/vh-size';

window.addEventListener('DOMContentLoaded', () => {
  const changeColorOfHeader = header();
  const setHeightOfWorksBlock = worksHeight();
  const setRotateX = deviantCircle();

  checkTouchDevice();
  initBurgerMenu();
  linkWrapper();
  initVHSize();
  worksFilter(setHeightOfWorksBlock);

  function scrollEvent() {
    changeColorOfHeader();
    setHeightOfWorksBlock();
    setRotateX();
  }

  initScrollbar(scrollEvent);
});
