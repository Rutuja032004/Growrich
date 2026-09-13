import { initRouter, getRoute } from "./router.js";
import { renderAppShell, renderRoute } from "./ui.js";

document.addEventListener("DOMContentLoaded", () => {
  renderAppShell();
  initRouter(() => {
    renderRoute(getRoute());
  });
});
