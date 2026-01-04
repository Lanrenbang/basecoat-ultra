import { w as head, x as attr, y as stringify } from "../../chunks/index2.js";
import "@sveltejs/kit/internal";
import "../../chunks/exports.js";
import "../../chunks/utils.js";
import { b as base } from "../../chunks/server.js";
import "@sveltejs/kit/internal/server";
import "../../chunks/state.svelte.js";
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    head("1uha8ag", $$renderer2, ($$renderer3) => {
      $$renderer3.push(`<meta http-equiv="refresh"${attr("content", `0; url=${stringify(base)}/introduction`)}/>`);
    });
    $$renderer2.push(`<div class="flex items-center justify-center min-h-screen"><p>Redirecting to Introduction...</p></div>`);
  });
}
export {
  _page as default
};
