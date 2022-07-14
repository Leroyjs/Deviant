import "./index.hbs";
import "./index.scss";
/* import common js */
import "@/common";

import { header } from "../../js/utils/header";
import { linkWrapper } from "../../js/utils/link-wrapper";
import { initBurgerMenu } from "../../js/components/burger-menu";
import { initScrollbar } from "../../js/components/scrollbars";
import { initVHSize } from "../../js/components/vh-size";
import { positionOfImages } from "../../js/components/position-of-images";
import { ScrollbarsDetailPlugin } from "../../js/components/scrollbars-detail-plugin";
import { backButtonInit } from "../../js/components/back-button";

window.addEventListener("load", () => {
  const changeColorOfHeader = header();
  const setPositionOfImages = positionOfImages();

  backButtonInit();
  linkWrapper();
  initBurgerMenu();
  initVHSize();

  function scrollEvent() {
    changeColorOfHeader();
    setPositionOfImages();
  }

  initScrollbar(scrollEvent, ScrollbarsDetailPlugin);
});
