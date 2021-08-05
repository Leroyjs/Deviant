import '~/sass/main';
import Scrollbar from 'smooth-scrollbar';
import { worksHeight } from '@/particles/worksHeight';
import { deviantCircle } from '@/particles/deviantCircle';

window.addEventListener('DOMContentLoaded', () => {
  const mainScrollbar = Scrollbar.init(document.querySelector('.main'), {
    alwaysShowTracks: true
  });
  const setHeightOfWorksBlock = worksHeight();

  const setRotateX = deviantCircle();
  mainScrollbar.addListener(() => {
    setHeightOfWorksBlock();
    setRotateX();
    mainScrollbar.update();
  });
});
