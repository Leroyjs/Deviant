import isTouchDevice from "is-touch-device";
import Scrollbar from "smooth-scrollbar";
import { noop } from "../utils/utils";

export function initScrollbar(callback = noop, plugin) {
  const scrollWrapperBlock = document.querySelector(".main");
  const isTouchable = isTouchDevice();

  if (plugin) Scrollbar.use(plugin);

  const mainScrollbar = Scrollbar.init(scrollWrapperBlock, {
    alwaysShowTracks: true,
    damping: isTouchable ? 0.03 : 0.1,
  });

  mainScrollbar.addListener(() => {
    callback();
    mainScrollbar.update();
  });
}
