import '~/sass/about';
import Scrollbar from 'smooth-scrollbar';
import { worksHeight } from '@/particles/worksHeight';
import { deviantCircle } from '@/particles/deviantCircle';
import { header } from '@/particles/header';
import { linkWrapper } from '@/particles/linkWrapper';
import { themeController } from '../particles/themeController';
import { ourProfiles } from '../particles/ourProfiles';

window.addEventListener('DOMContentLoaded', () => {
  linkWrapper();
  ourProfiles();
  const changeColorOfHeader = header();
  const _scrollWrapperBlock = document.querySelector('.main');
  const mainScrollbar = Scrollbar.init(_scrollWrapperBlock, {
    alwaysShowTracks: true
  });
  const setHeightOfWorksBlock = worksHeight();
  const _themeSeparator = document.querySelector('.approach-to-work');
  const themeSetter = themeController(_themeSeparator);

  const setRotateX = deviantCircle();
  mainScrollbar.addListener(() => {
    themeSetter();
    changeColorOfHeader();
    setHeightOfWorksBlock();
    setRotateX();
    mainScrollbar.update();
  });
});
