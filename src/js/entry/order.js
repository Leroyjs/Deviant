import '~/sass/order';
import Scrollbar from 'smooth-scrollbar';
import { linkWrapper } from '@/particles/linkWrapper';

window.addEventListener('DOMContentLoaded', () => {
  linkWrapper();
  const _scrollWrapperBlock = document.querySelector('.main');
  const mainScrollbar = Scrollbar.init(_scrollWrapperBlock, {
    alwaysShowTracks: true
  });
});
