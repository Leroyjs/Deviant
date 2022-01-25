import '~/sass/not-found';

import { linkWrapper } from '@/particles/linkWrapper';
import { initBurgerMenu } from '@/particles/burgerMenu';
import { checkTouchDevice } from '@/particles/adaptive';
import { initScrollbar } from '@/particles/scrollbar';
import { initVHSize } from '../particles/vh-size';

window.addEventListener('DOMContentLoaded', () => {
  checkTouchDevice();
  initBurgerMenu();
  linkWrapper();
  initVHSize();

  initScrollbar();
});
