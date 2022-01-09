import '~/sass/order';
import Scrollbar from 'smooth-scrollbar';
import { linkWrapper } from '@/particles/linkWrapper';
import { initBurgerMenu } from '../particles/burgerMenu';

window.addEventListener('DOMContentLoaded', () => {
  initBurgerMenu();
  linkWrapper();
  const _scrollWrapperBlock = document.querySelector('.main');
  const mainScrollbar = Scrollbar.init(_scrollWrapperBlock, {
    alwaysShowTracks: true
  });
});
