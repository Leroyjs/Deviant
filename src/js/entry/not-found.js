import '~/sass/not-found';
import Scrollbar from 'smooth-scrollbar';
import { linkWrapper } from '../particles/linkWrapper';
import { initBurgerMenu } from '../particles/burgerMenu';
import { checkTouchDevice } from '../particles/adaptive';

window.addEventListener('DOMContentLoaded', () => {
  checkTouchDevice();
  initBurgerMenu();
  linkWrapper();
  const _scrollWrapperBlock = document.querySelector('.main');
  const mainScrollbar = Scrollbar.init(_scrollWrapperBlock, {
    alwaysShowTracks: true
  });
});
