// Entry point for the build script in your package.json
import "@hotwired/turbo-rails"
import "./controllers"
import "bootstrap"


import { initComing } from "./components/coming";

document.addEventListener("turbo:load", () => {
  initComing();
});
