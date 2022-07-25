import isTouchDevice from "is-touch-device";
import Scrollbar from "smooth-scrollbar";
import {noop} from "../utils/utils";

export function initScrollbar(callback = noop, plugin) {
  const scrollWrapperBlock = document.querySelector(".main");
  const isTouchable = isTouchDevice();

  if (isTouchable) {
    if (plugin) {
      scrollWrapperBlock.classList.add('is-touch');
      window.addEventListener('scroll', callback);
      const pl = new plugin();
      pl.onInit()
    } else {
      scrollWrapperBlock.addEventListener('scroll', callback);
    }
  } else {
    if (plugin) Scrollbar.use(plugin);

    const mainScrollbar = Scrollbar.init(scrollWrapperBlock, {
      alwaysShowTracks: true,
      damping: isTouchable ? 1 : 0.1,
    });

    mainScrollbar.addListener(() => {
      callback();
      mainScrollbar.update();
    });
  }
}
