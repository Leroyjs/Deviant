import { ScrollbarPlugin } from "smooth-scrollbar";
import { setLoadedStateOfPage } from "../utils/utils";

export class ScrollbarsDetailPlugin extends ScrollbarPlugin {
  static pluginName = "scrollbarsDetailPlugin";

  onInit() {
    const content = document.querySelector(".content");
    const main = document.querySelector(".main");

    main.appendChild(content);

    setTimeout(() => setLoadedStateOfPage(), 0);
  }
}
