import "./index.hbs";
import "./index.scss";

import { linkWrapper } from "../../js/utils/link-wrapper";
import { initBurgerMenu } from "../../js/components/burger-menu";
import { initScrollbar } from "../../js/components/scrollbars";
import { initVHSize } from "../../js/components/vh-size";
import { initClock } from '../../js/utils/clock';
import { initForm } from "../../js/components/form";

window.addEventListener("load", () => {
  initForm();
  initBurgerMenu();
  linkWrapper();
  initClock();
  initVHSize();

  initScrollbar();
});