import { w as head, J as attr, N as attr_style, G as ensure_array_like, y as stringify, O as await_block } from "../../../chunks/index2.js";
import { o as onDestroy } from "../../../chunks/index-server.js";
import { r as registry } from "../../../chunks/atom-one-dark.js";
import hljs from "highlight.js/lib/core";
import xml from "highlight.js/lib/languages/xml";
import javascript from "highlight.js/lib/languages/javascript";
import css from "highlight.js/lib/languages/css";
import { k as escape_html } from "../../../chunks/context.js";
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    hljs.registerLanguage("xml", xml);
    hljs.registerLanguage("html", xml);
    hljs.registerLanguage("javascript", javascript);
    hljs.registerLanguage("css", css);
    onDestroy(() => {
      if (typeof window !== "undefined" && window.basecoat) {
        window.basecoat.stop();
      }
    });
    head("12a9shd", $$renderer2, ($$renderer3) => {
      $$renderer3.title(($$renderer4) => {
        $$renderer4.push(`<title>Basecoat Ultra Components</title>`);
      });
    });
    $$renderer2.push(`<div class="bg-background text-foreground antialiased flex min-h-screen overflow-hidden"><aside class="sidebar h-screen sticky top-0 border-r bg-card z-40 flex-shrink-0 transition-all duration-300 overflow-hidden" id="main-sidebar" data-side="left"${attr("aria-hidden", false)}${attr_style(`width: ${stringify("16rem")};`)}><nav aria-label="Sidebar navigation" class="h-full flex flex-col w-64 bg-card border-r"><header class="p-4 border-b h-14 flex items-center"><a href="/ultra" class="flex items-center gap-2 font-semibold text-lg"><div class="bg-primary text-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" class="h-4 w-4"><rect width="256" height="256" fill="none"></rect><line x1="208" y1="128" x2="128" y2="208" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"></line><line x1="192" y1="40" x2="40" y2="192" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"></line></svg></div> <span>Basecoat Ultra</span></a></header> <section class="scrollbar flex-1 overflow-y-auto p-4 space-y-6"><!--[-->`);
    const each_array = ensure_array_like(registry);
    for (let $$index_1 = 0, $$length = each_array.length; $$index_1 < $$length; $$index_1++) {
      let category = each_array[$$index_1];
      $$renderer2.push(`<details open><summary>${escape_html(category.name)}</summary> <ul class="space-y-1"><!--[-->`);
      const each_array_1 = ensure_array_like(category.items);
      for (let $$index = 0, $$length2 = each_array_1.length; $$index < $$length2; $$index++) {
        let item = each_array_1[$$index];
        $$renderer2.push(`<li>`);
        if (item.id === "neumorphism-demo") {
          $$renderer2.push("<!--[-->");
          $$renderer2.push(`<a href="/ultra/neumorphism-demo" class="block px-2 py-1.5 rounded-md hover:bg-accent hover:text-accent-foreground text-sm">${escape_html(item.name)}</a>`);
        } else {
          $$renderer2.push("<!--[!-->");
          $$renderer2.push(`<a${attr("href", `#${stringify(item.id)}`)} class="block px-2 py-1.5 rounded-md hover:bg-accent hover:text-accent-foreground text-sm">${escape_html(item.name)}</a>`);
        }
        $$renderer2.push(`<!--]--></li>`);
      }
      $$renderer2.push(`<!--]--></ul></details>`);
    }
    $$renderer2.push(`<!--]--></section> <footer class="p-2 border-t"><div class="popover w-full"><button type="button" class="btn btn-ghost w-full justify-start gap-2 p-2 h-12" aria-expanded="false"><div class="avatar size-8 rounded-lg overflow-hidden bg-muted"><img src="https://github.com/Lanrenbang.png" alt="@Lanrenbang"/></div> <div class="text-left flex-1 grid leading-tight"><span class="font-medium truncate text-sm">L.R.B</span> <span class="text-xs text-muted-foreground truncate">@Lanrenbang</span></div> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-muted-foreground opacity-50"><path d="m7 15 5 5 5-5"></path><path d="m7 9 5-5 5 5"></path></svg></button> <section data-popover="" aria-hidden="true" data-side="top" class="w-60 p-1"><div role="menu"><div role="heading" class="px-2 py-1.5 text-sm font-semibold text-muted-foreground">My Account</div> <button type="button" role="menuitem" class="w-full text-left cursor-default flex items-center gap-2 rounded-sm px-2 py-1.5 text-sm hover:bg-accent hover:text-accent-foreground">Profile</button> <button type="button" role="menuitem" class="w-full text-left cursor-default flex items-center gap-2 rounded-sm px-2 py-1.5 text-sm hover:bg-accent hover:text-accent-foreground">Settings</button> <hr role="separator" class="my-1 border-muted"/> <button type="button" role="menuitem" class="w-full text-left cursor-default flex items-center gap-2 rounded-sm px-2 py-1.5 text-sm hover:bg-accent hover:text-accent-foreground text-destructive">Logout</button></div></section></div></footer></nav></aside> <main class="flex-1 min-w-0 h-screen overflow-y-auto bg-background flex flex-col scroll-pt-20 ml-0!"><header class="bg-background sticky inset-x-0 top-0 isolate flex shrink-0 items-center gap-2 border-b z-30 h-14 px-4 shadow-sm"><button type="button" aria-label="Toggle sidebar" class="btn btn-sm btn-ghost btn-icon -ml-2 text-muted-foreground hover:text-foreground"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="3" rx="2"></rect><path d="M9 3v18"></path></svg></button> <div class="h-4 w-px bg-border mx-2"></div> <nav class="flex items-center text-sm text-muted-foreground"><a href="/introduction" class="hover:text-foreground transition-colors">Docs</a> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mx-2 opacity-50"><path d="m9 18 6-6-6-6"></path></svg> <span class="font-medium text-foreground">Components</span></nav> <div class="ml-auto flex items-center gap-2"><a href="/introduction" class="btn btn-sm btn-ghost text-sm">Introduction</a> <a href="/svelte" class="btn btn-sm btn-ghost text-sm">Svelte Components</a> <div class="popover"><button type="button" class="btn btn-sm btn-ghost btn-icon text-muted-foreground hover:text-foreground" title="Theme Switcher"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z"></path></svg></button> <div data-popover="" aria-hidden="true" class="catppuccin-theme-switcher w-96 p-6 bg-secondary/50 backdrop-blur-sm" data-side="bottom" data-align="end"><div class="flex items-center justify-between mb-4"><h3 class="font-semibold text-sm">Theme Switcher</h3></div> <div class="theme-flavors mb-6"></div> <div class="theme-accents"></div> <div class="mt-6 flex justify-center"><button type="button" class="theme-reset btn btn-sm btn-ghost text-muted-foreground hover:text-destructive w-full">Reset Theme</button></div></div></div> <a href="https://github.com/Lanrenbang/basecoat-ultra" target="_blank" class="btn btn-sm btn-ghost btn-icon text-muted-foreground hover:text-foreground"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path></svg></a></div></header> <div class="flex-1 p-8 lg:p-12 space-y-24 scroll-smooth max-w-4xl mx-auto w-full">`);
    await_block($$renderer2, import("../../../chunks/ComponentSections.js"), () => {
    }, ({ default: ComponentSections }) => {
      $$renderer2.push(`<!---->`);
      ComponentSections($$renderer2, {});
      $$renderer2.push(`<!---->`);
    });
    $$renderer2.push(`<!--]--></div></main> <section id="toaster" class="toaster"></section></div>`);
  });
}
export {
  _page as default
};
