import '~/sass/order';

import { linkWrapper } from '@/particles/linkWrapper';
import { initBurgerMenu } from '@/particles/burgerMenu';
import { initScrollbar } from '@/particles/scrollbar';
import { initVHSize } from '../particles/vh-size';

window.addEventListener('DOMContentLoaded', () => {
  initBurgerMenu();
  linkWrapper();
  initVHSize();

  initScrollbar();
});
