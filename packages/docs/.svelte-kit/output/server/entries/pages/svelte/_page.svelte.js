import { z as attributes, F as clsx, G as ensure_array_like, J as attr, x as attr_class, K as bind_props, N as attr_style, y as stringify, w as head } from "../../../chunks/index2.js";
import { k as escape_html, s as setContext, j as getContext } from "../../../chunks/context.js";
import { o as onDestroy } from "../../../chunks/index-server.js";
import "flatpickr";
import "flatpickr/dist/l10n/zh.js";
import "flatpickr/dist/l10n/zh-tw.js";
import "split.js";
import { r as registry } from "../../../chunks/atom-one-dark.js";
import hljs from "highlight.js/lib/core";
import xml from "highlight.js/lib/languages/xml";
import javascript from "highlight.js/lib/languages/javascript";
import typescript from "highlight.js/lib/languages/typescript";
import css from "highlight.js/lib/languages/css";
import bash from "highlight.js/lib/languages/bash";
import svelte from "highlightjs-svelte";
function Accordion($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      items = [],
      multiple = false,
      class: className = "",
      $$slots,
      $$events,
      ...rest
    } = $$props;
    let openStates = [];
    $$renderer2.push(`<section${attributes({
      class: clsx(["accordion", className].filter(Boolean).join(" ")),
      ...rest
    })}><!--[-->`);
    const each_array = ensure_array_like(items);
    for (let index = 0, $$length = each_array.length; index < $$length; index++) {
      let item = each_array[index];
      $$renderer2.push(`<details class="group border-b last:border-b-0"${attr("open", openStates[index], true)}><summary class="w-full flex items-center justify-between py-4 text-sm font-medium hover:underline cursor-pointer outline-none">`);
      if (typeof item.title === "string") {
        $$renderer2.push("<!--[-->");
        $$renderer2.push(`${escape_html(item.title)}`);
      } else {
        $$renderer2.push("<!--[!-->");
        item.title($$renderer2);
        $$renderer2.push(`<!---->`);
      }
      $$renderer2.push(`<!--]--> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="transition-transform duration-200 group-open:rotate-180 text-muted-foreground"><path d="m6 9 6 6 6-6"></path></svg></summary> <div class="pb-4 text-sm text-muted-foreground">`);
      if (typeof item.content === "string") {
        $$renderer2.push("<!--[-->");
        $$renderer2.push(`${escape_html(item.content)}`);
      } else {
        $$renderer2.push("<!--[!-->");
        item.content($$renderer2);
        $$renderer2.push(`<!---->`);
      }
      $$renderer2.push(`<!--]--></div></details>`);
    }
    $$renderer2.push(`<!--]--></section>`);
  });
}
function Accordion_1($$renderer) {
  const items = [
    {
      title: "Is it accessible?",
      content: "Yes. It adheres to the WAI-ARIA design pattern.",
      open: true
    },
    {
      title: "Is it styled?",
      content: "Yes. It comes with default styles."
    }
  ];
  $$renderer.push(`<div class="max-w-md">`);
  Accordion($$renderer, { items });
  $$renderer.push(`<!----></div>`);
}
const __vite_glob_0_0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Accordion_1
}, Symbol.toStringTag, { value: "Module" }));
function Alert($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      children,
      icon,
      title,
      variant = "default",
      class: className = "",
      $$slots,
      $$events,
      ...rest
    } = $$props;
    const baseClass = variant === "destructive" ? "alert-destructive" : "alert";
    const finalClass = [baseClass, className].filter(Boolean).join(" ");
    $$renderer2.push(`<div${attributes({ role: "alert", class: clsx(finalClass), ...rest }, "svelte-1j6j2zf")}>`);
    if (icon) {
      $$renderer2.push("<!--[-->");
      icon($$renderer2);
      $$renderer2.push(`<!---->`);
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--> `);
    if (title) {
      $$renderer2.push("<!--[-->");
      if (typeof title === "string") {
        $$renderer2.push("<!--[-->");
        $$renderer2.push(`<strong data-title="" class="svelte-1j6j2zf">${escape_html(title)}</strong>`);
      } else {
        $$renderer2.push("<!--[!-->");
        $$renderer2.push(`<div data-title="" class="svelte-1j6j2zf">`);
        title($$renderer2);
        $$renderer2.push(`<!----></div>`);
      }
      $$renderer2.push(`<!--]-->`);
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--> `);
    if (children) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<section class="svelte-1j6j2zf">`);
      children($$renderer2);
      $$renderer2.push(`<!----></section>`);
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--></div>`);
  });
}
function Alert_1($$renderer) {
  $$renderer.push(`<div class="space-y-3 max-w-lg">`);
  {
    let icon = function($$renderer2) {
      $$renderer2.push(`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M12 16v-4"></path><path d="M12 8h.01"></path></svg>`);
    };
    Alert($$renderer, {
      title: "Information",
      icon,
      children: ($$renderer2) => {
        $$renderer2.push(`<!---->A new version of Basecoat is available.`);
      },
      $$slots: { icon: true, default: true }
    });
  }
  $$renderer.push(`<!----> `);
  {
    let icon = function($$renderer2) {
      $$renderer2.push(`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="m15 9-6 6"></path><path d="m9 9 6 6"></path></svg>`);
    };
    Alert($$renderer, {
      variant: "destructive",
      title: "Error",
      icon,
      children: ($$renderer2) => {
        $$renderer2.push(`<!---->Failed to sync data with the server.`);
      },
      $$slots: { icon: true, default: true }
    });
  }
  $$renderer.push(`<!----></div>`);
}
const __vite_glob_0_1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Alert_1
}, Symbol.toStringTag, { value: "Module" }));
function Avatar($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      src,
      alt = "Avatar",
      fallback,
      class: className = "",
      size = "md",
      rounded = "full",
      $$slots,
      $$events,
      ...rest
    } = $$props;
    const sizeMap = { sm: "size-8", md: "size-10", lg: "size-12" };
    const roundedMap = {
      full: "rounded-full",
      lg: "rounded-lg",
      md: "rounded-md",
      sm: "rounded-sm",
      none: "rounded-none"
    };
    const sizeClass = sizeMap[size] || size;
    const roundedClass = roundedMap[rounded] || rounded;
    const finalClass = [
      "avatar overflow-hidden bg-muted flex items-center justify-center shrink-0 object-cover",
      sizeClass,
      roundedClass,
      className
    ].filter(Boolean).join(" ");
    $$renderer2.push(`<div${attributes({ class: clsx(finalClass), ...rest })}>`);
    if (src) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<img${attr("src", src)}${attr("alt", alt)} class="h-full w-full object-cover"/>`);
    } else {
      $$renderer2.push("<!--[!-->");
      if (fallback) {
        $$renderer2.push("<!--[-->");
        if (typeof fallback === "string") {
          $$renderer2.push("<!--[-->");
          $$renderer2.push(`<span class="text-xs font-medium uppercase">${escape_html(fallback)}</span>`);
        } else {
          $$renderer2.push("<!--[!-->");
          fallback($$renderer2);
          $$renderer2.push(`<!---->`);
        }
        $$renderer2.push(`<!--]-->`);
      } else {
        $$renderer2.push("<!--[!-->");
      }
      $$renderer2.push(`<!--]-->`);
    }
    $$renderer2.push(`<!--]--></div>`);
  });
}
function Avatar_1($$renderer) {
  $$renderer.push(`<div class="flex gap-4">`);
  Avatar($$renderer, { src: "https://github.com/hunvreus.png", alt: "@hunvreus" });
  $$renderer.push(`<!----> `);
  Avatar($$renderer, { fallback: "RB" });
  $$renderer.push(`<!----></div>`);
}
const __vite_glob_0_2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Avatar_1
}, Symbol.toStringTag, { value: "Module" }));
function Badge($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      children,
      variant = "primary",
      class: className = "",
      $$slots,
      $$events,
      ...rest
    } = $$props;
    const baseClass = "badge";
    const variantClass = variant !== "primary" ? `badge-${variant}` : "";
    const finalClass = [baseClass, variantClass, className].filter(Boolean).join(" ");
    $$renderer2.push(`<span${attributes({ class: clsx(finalClass), ...rest }, "svelte-6vyzam")}>`);
    children?.($$renderer2);
    $$renderer2.push(`<!----></span>`);
  });
}
function Badge_1($$renderer) {
  $$renderer.push(`<div class="flex flex-wrap gap-2">`);
  Badge($$renderer, {
    children: ($$renderer2) => {
      $$renderer2.push(`<!---->Default`);
    },
    $$slots: { default: true }
  });
  $$renderer.push(`<!----> `);
  Badge($$renderer, {
    variant: "secondary",
    children: ($$renderer2) => {
      $$renderer2.push(`<!---->Secondary`);
    },
    $$slots: { default: true }
  });
  $$renderer.push(`<!----> `);
  Badge($$renderer, {
    variant: "destructive",
    children: ($$renderer2) => {
      $$renderer2.push(`<!---->Destructive`);
    },
    $$slots: { default: true }
  });
  $$renderer.push(`<!----> `);
  Badge($$renderer, {
    variant: "outline",
    children: ($$renderer2) => {
      $$renderer2.push(`<!---->Outline`);
    },
    $$slots: { default: true }
  });
  $$renderer.push(`<!----></div>`);
}
const __vite_glob_0_3 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Badge_1
}, Symbol.toStringTag, { value: "Module" }));
function Breadcrumb($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      items = [],
      separator = "/",
      class: className = "",
      $$slots,
      $$events,
      ...rest
    } = $$props;
    const finalClass = ["flex text-sm text-muted-foreground", className].filter(Boolean).join(" ");
    $$renderer2.push(`<nav${attributes({
      "aria-label": "Breadcrumb",
      class: clsx(finalClass),
      ...rest
    })}><ol class="flex items-center gap-2"><!--[-->`);
    const each_array = ensure_array_like(items);
    for (let i = 0, $$length = each_array.length; i < $$length; i++) {
      let item = each_array[i];
      if (i > 0) {
        $$renderer2.push("<!--[-->");
        $$renderer2.push(`<li><span class="opacity-50">`);
        if (typeof separator === "string") {
          $$renderer2.push("<!--[-->");
          $$renderer2.push(`${escape_html(separator)}`);
        } else {
          $$renderer2.push("<!--[!-->");
          separator($$renderer2);
          $$renderer2.push(`<!---->`);
        }
        $$renderer2.push(`<!--]--></span></li>`);
      } else {
        $$renderer2.push("<!--[!-->");
      }
      $$renderer2.push(`<!--]--> <li>`);
      if (item.href && !item.active) {
        $$renderer2.push("<!--[-->");
        $$renderer2.push(`<a${attr("href", item.href)} class="hover:text-foreground transition-colors">`);
        if (typeof item.label === "string") {
          $$renderer2.push("<!--[-->");
          $$renderer2.push(`${escape_html(item.label)}`);
        } else {
          $$renderer2.push("<!--[!-->");
          item.label($$renderer2);
          $$renderer2.push(`<!---->`);
        }
        $$renderer2.push(`<!--]--></a>`);
      } else {
        $$renderer2.push("<!--[!-->");
        $$renderer2.push(`<span${attr_class(clsx(item.active ? "text-foreground font-medium" : ""))}>`);
        if (typeof item.label === "string") {
          $$renderer2.push("<!--[-->");
          $$renderer2.push(`${escape_html(item.label)}`);
        } else {
          $$renderer2.push("<!--[!-->");
          item.label($$renderer2);
          $$renderer2.push(`<!---->`);
        }
        $$renderer2.push(`<!--]--></span>`);
      }
      $$renderer2.push(`<!--]--></li>`);
    }
    $$renderer2.push(`<!--]--></ol></nav>`);
  });
}
function Breadcrumb_1($$renderer) {
  const items = [
    { label: "Home", href: "#" },
    { label: "Components", href: "#" },
    { label: "Breadcrumb", current: true }
  ];
  Breadcrumb($$renderer, { items });
}
const __vite_glob_0_4 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Breadcrumb_1
}, Symbol.toStringTag, { value: "Module" }));
function Button($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      children,
      type = "button",
      variant = "primary",
      size = "md",
      class: className = "",
      $$slots,
      $$events,
      ...rest
    } = $$props;
    const baseClass = "btn";
    const variantClass = variant !== "primary" ? `btn-${variant}` : "";
    const sizeClass = size !== "md" ? `btn-${size}` : "";
    const finalClass = [baseClass, variantClass, sizeClass, className].filter(Boolean).join(" ");
    $$renderer2.push(`<button${attributes({ type, class: clsx(finalClass), ...rest }, "svelte-1lvxe95")}>`);
    children?.($$renderer2);
    $$renderer2.push(`<!----></button>`);
  });
}
function ButtonGroup($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      children,
      orientation = "horizontal",
      class: className = "",
      $$slots,
      $$events,
      ...rest
    } = $$props;
    const finalClass = ["button-group", className].filter(Boolean).join(" ");
    $$renderer2.push(`<div${attributes(
      {
        class: clsx(finalClass),
        "data-orientation": orientation,
        ...rest
      },
      "svelte-rkwz7i"
    )}>`);
    children?.($$renderer2);
    $$renderer2.push(`<!----></div>`);
  });
}
function Button_group($$renderer) {
  ButtonGroup($$renderer, {
    children: ($$renderer2) => {
      Button($$renderer2, {
        variant: "outline",
        children: ($$renderer3) => {
          $$renderer3.push(`<!---->Left`);
        },
        $$slots: { default: true }
      });
      $$renderer2.push(`<!----> `);
      Button($$renderer2, {
        variant: "outline",
        children: ($$renderer3) => {
          $$renderer3.push(`<!---->Middle`);
        },
        $$slots: { default: true }
      });
      $$renderer2.push(`<!----> `);
      Button($$renderer2, {
        variant: "outline",
        children: ($$renderer3) => {
          $$renderer3.push(`<!---->Right`);
        },
        $$slots: { default: true }
      });
      $$renderer2.push(`<!---->`);
    },
    $$slots: { default: true }
  });
}
const __vite_glob_0_5 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Button_group
}, Symbol.toStringTag, { value: "Module" }));
function Button_1($$renderer) {
  $$renderer.push(`<div class="flex flex-wrap gap-4 items-center">`);
  Button($$renderer, {
    children: ($$renderer2) => {
      $$renderer2.push(`<!---->Default`);
    },
    $$slots: { default: true }
  });
  $$renderer.push(`<!----> `);
  Button($$renderer, {
    variant: "primary",
    children: ($$renderer2) => {
      $$renderer2.push(`<!---->Primary`);
    },
    $$slots: { default: true }
  });
  $$renderer.push(`<!----> `);
  Button($$renderer, {
    variant: "secondary",
    children: ($$renderer2) => {
      $$renderer2.push(`<!---->Secondary`);
    },
    $$slots: { default: true }
  });
  $$renderer.push(`<!----> `);
  Button($$renderer, {
    variant: "outline",
    children: ($$renderer2) => {
      $$renderer2.push(`<!---->Outline`);
    },
    $$slots: { default: true }
  });
  $$renderer.push(`<!----> `);
  Button($$renderer, {
    variant: "ghost",
    children: ($$renderer2) => {
      $$renderer2.push(`<!---->Ghost`);
    },
    $$slots: { default: true }
  });
  $$renderer.push(`<!----> `);
  Button($$renderer, {
    variant: "destructive",
    children: ($$renderer2) => {
      $$renderer2.push(`<!---->Destructive`);
    },
    $$slots: { default: true }
  });
  $$renderer.push(`<!----> `);
  Button($$renderer, {
    variant: "link",
    children: ($$renderer2) => {
      $$renderer2.push(`<!---->Link`);
    },
    $$slots: { default: true }
  });
  $$renderer.push(`<!----></div> <div class="flex flex-wrap gap-4 items-center mt-8">`);
  Button($$renderer, {
    size: "sm",
    children: ($$renderer2) => {
      $$renderer2.push(`<!---->Small`);
    },
    $$slots: { default: true }
  });
  $$renderer.push(`<!----> `);
  Button($$renderer, {
    size: "lg",
    children: ($$renderer2) => {
      $$renderer2.push(`<!---->Large`);
    },
    $$slots: { default: true }
  });
  $$renderer.push(`<!----> `);
  Button($$renderer, {
    size: "icon",
    "aria-label": "Icon only",
    children: ($$renderer2) => {
      $$renderer2.push(`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m5 12 7-7 7 7"></path><path d="M12 19V5"></path></svg>`);
    },
    $$slots: { default: true }
  });
  $$renderer.push(`<!----> `);
  Button($$renderer, {
    disabled: true,
    children: ($$renderer2) => {
      $$renderer2.push(`<!---->Disabled`);
    },
    $$slots: { default: true }
  });
  $$renderer.push(`<!----></div>`);
}
const __vite_glob_0_6 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Button_1
}, Symbol.toStringTag, { value: "Module" }));
function Card($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      children,
      header,
      footer,
      title,
      description,
      class: className = "",
      $$slots,
      $$events,
      ...rest
    } = $$props;
    const finalClass = ["card", className].filter(Boolean).join(" ");
    $$renderer2.push(`<article${attributes({ class: clsx(finalClass), ...rest }, "svelte-dl8vrj")}>`);
    if (header || title || description) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<header class="svelte-dl8vrj">`);
      if (header) {
        $$renderer2.push("<!--[-->");
        header($$renderer2);
        $$renderer2.push(`<!---->`);
      } else {
        $$renderer2.push("<!--[!-->");
        if (title) {
          $$renderer2.push("<!--[-->");
          if (typeof title === "string") {
            $$renderer2.push("<!--[-->");
            $$renderer2.push(`<h2 class="svelte-dl8vrj">${escape_html(title)}</h2>`);
          } else {
            $$renderer2.push("<!--[!-->");
            title($$renderer2);
            $$renderer2.push(`<!---->`);
          }
          $$renderer2.push(`<!--]-->`);
        } else {
          $$renderer2.push("<!--[!-->");
        }
        $$renderer2.push(`<!--]--> `);
        if (description) {
          $$renderer2.push("<!--[-->");
          if (typeof description === "string") {
            $$renderer2.push("<!--[-->");
            $$renderer2.push(`<p class="svelte-dl8vrj">${escape_html(description)}</p>`);
          } else {
            $$renderer2.push("<!--[!-->");
            description($$renderer2);
            $$renderer2.push(`<!---->`);
          }
          $$renderer2.push(`<!--]-->`);
        } else {
          $$renderer2.push("<!--[!-->");
        }
        $$renderer2.push(`<!--]-->`);
      }
      $$renderer2.push(`<!--]--></header>`);
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--> `);
    if (children) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<section class="svelte-dl8vrj">`);
      children($$renderer2);
      $$renderer2.push(`<!----></section>`);
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--> `);
    if (footer) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<footer class="svelte-dl8vrj">`);
      footer($$renderer2);
      $$renderer2.push(`<!----></footer>`);
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--></article>`);
  });
}
function Card_1($$renderer) {
  {
    let header = function($$renderer2) {
      $$renderer2.push(`<h2>Card Title</h2> <p>A short description of the card.</p>`);
    }, footer = function($$renderer2) {
      Button($$renderer2, {
        variant: "primary",
        class: "w-full",
        children: ($$renderer3) => {
          $$renderer3.push(`<!---->Get Started`);
        },
        $$slots: { default: true }
      });
    };
    Card($$renderer, {
      class: "max-w-md",
      header,
      footer,
      children: ($$renderer2) => {
        $$renderer2.push(`<p>Card content goes here. Basecoat cards use semantic HTML.</p>`);
      },
      $$slots: { header: true, footer: true, default: true }
    });
  }
}
const __vite_glob_0_7 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Card_1
}, Symbol.toStringTag, { value: "Module" }));
function Carousel($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      orientation = "horizontal",
      class: className = "",
      children,
      showButtons = true,
      $$slots,
      $$events,
      ...rest
    } = $$props;
    $$renderer2.push(`<div${attributes(
      {
        class: clsx(["carousel relative", className].filter(Boolean).join(" ")),
        "data-orientation": orientation,
        ...rest
      },
      "svelte-1240joj"
    )}>`);
    if (showButtons && orientation === "horizontal") {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<button class="carousel-previous absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 bg-background border rounded-full p-2 shadow-sm z-10 disabled:opacity-50 svelte-1240joj"${attr("disabled", true, true)} aria-label="Previous slide"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svelte-1240joj"><path d="m15 18-6-6 6-6"></path></svg></button>`);
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--> <div${attr_class(
      clsx([
        "carousel-content flex overflow-hidden scroll-smooth",
        orientation === "vertical" ? "flex-col -mt-4 pb-4" : "flex-row -ml-4"
      ].join(" ")),
      "svelte-1240joj"
    )}>`);
    children?.($$renderer2);
    $$renderer2.push(`<!----></div> `);
    if (showButtons && orientation === "horizontal") {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<button class="carousel-next absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 bg-background border rounded-full p-2 shadow-sm z-10 disabled:opacity-50 svelte-1240joj"${attr("disabled", false, true)} aria-label="Next slide"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svelte-1240joj"><path d="m9 18 6-6-6-6"></path></svg></button>`);
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--> `);
    if (showButtons && orientation === "vertical") {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<button class="carousel-previous absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-background border rounded-full p-2 shadow-sm z-10 disabled:opacity-50 svelte-1240joj"${attr("disabled", true, true)} aria-label="Previous slide"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svelte-1240joj"><path d="m18 15-6-6-6 6"></path></svg></button> <button class="carousel-next absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 bg-background border rounded-full p-2 shadow-sm z-10 disabled:opacity-50 svelte-1240joj"${attr("disabled", false, true)} aria-label="Next slide"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svelte-1240joj"><path d="m6 9 6 6 6-6"></path></svg></button>`);
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--></div>`);
  });
}
function Carousel_1($$renderer) {
  const items = [1, 2, 3, 4, 5];
  $$renderer.push(`<div class="p-12 space-y-10"><div><h4 class="text-sm font-medium mb-4">Horizontal</h4> <div class="w-full max-w-sm mx-auto">`);
  {
    let children = function($$renderer2) {
      $$renderer2.push(`<!--[-->`);
      const each_array = ensure_array_like(items);
      for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
        let n = each_array[$$index];
        $$renderer2.push(`<div class="carousel-item pl-4"><div class="p-1 h-48 rounded-lg bg-muted flex items-center justify-center text-4xl font-semibold">${escape_html(n)}</div></div>`);
      }
      $$renderer2.push(`<!--]-->`);
    };
    Carousel($$renderer, { children, $$slots: { default: true } });
  }
  $$renderer.push(`<!----></div></div> <div><h4 class="text-sm font-medium mb-4">Vertical</h4> <div class="w-full max-w-xs mx-auto">`);
  {
    let children = function($$renderer2) {
      $$renderer2.push(`<!--[-->`);
      const each_array_1 = ensure_array_like(items);
      for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
        let n = each_array_1[$$index_1];
        $$renderer2.push(`<div class="carousel-item pt-4"><div class="p-1 h-full rounded-lg bg-muted flex items-center justify-center text-4xl font-semibold">${escape_html(n)}</div></div>`);
      }
      $$renderer2.push(`<!--]-->`);
    };
    Carousel($$renderer, {
      orientation: "vertical",
      style: "--carousel-height: 200px;",
      children,
      $$slots: { default: true }
    });
  }
  $$renderer.push(`<!----></div></div></div>`);
}
const __vite_glob_0_8 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Carousel_1
}, Symbol.toStringTag, { value: "Module" }));
function Checkbox($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      checked = false,
      class: className = "",
      $$slots,
      $$events,
      ...rest
    } = $$props;
    const finalClass = ["input", className].filter(Boolean).join(" ");
    $$renderer2.push(`<input${attributes(
      {
        type: "checkbox",
        class: clsx(finalClass),
        checked,
        ...rest
      },
      "svelte-d7qlxe",
      void 0,
      void 0,
      4
    )}/>`);
    bind_props($$props, { checked });
  });
}
function Label($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      children,
      for: forId,
      class: className = "",
      $$slots,
      $$events,
      ...rest
    } = $$props;
    const finalClass = ["label", className].filter(Boolean).join(" ");
    $$renderer2.push(`<label${attributes({ class: clsx(finalClass), for: forId, ...rest }, "svelte-1auwq2r")}>`);
    if (typeof children === "string") {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`${escape_html(children)}`);
    } else {
      $$renderer2.push("<!--[!-->");
      if (children) {
        $$renderer2.push("<!--[-->");
        children($$renderer2);
        $$renderer2.push(`<!---->`);
      } else {
        $$renderer2.push("<!--[!-->");
      }
      $$renderer2.push(`<!--]-->`);
    }
    $$renderer2.push(`<!--]--></label>`);
  });
}
function Checkbox_1($$renderer) {
  $$renderer.push(`<div class="flex flex-col gap-3"><div class="flex items-center gap-2">`);
  Checkbox($$renderer, { id: "terms" });
  $$renderer.push(`<!----> `);
  Label($$renderer, {
    for: "terms",
    children: ($$renderer2) => {
      $$renderer2.push(`<!---->Accept terms and conditions`);
    },
    $$slots: { default: true }
  });
  $$renderer.push(`<!----></div> <div class="flex items-center gap-2">`);
  Checkbox($$renderer, { id: "newsletter", checked: true });
  $$renderer.push(`<!----> `);
  Label($$renderer, {
    for: "newsletter",
    children: ($$renderer2) => {
      $$renderer2.push(`<!---->Subscribe to newsletter`);
    },
    $$slots: { default: true }
  });
  $$renderer.push(`<!----></div></div>`);
}
const __vite_glob_0_9 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Checkbox_1
}, Symbol.toStringTag, { value: "Module" }));
function Command($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      value = "",
      placeholder = "Type a command or search...",
      children,
      class: className = "",
      onselect,
      $$slots,
      $$events,
      ...rest
    } = $$props;
    $$renderer2.push(`<div${attributes(
      {
        class: clsx([
          "command bg-background flex flex-col overflow-hidden",
          className
        ].filter(Boolean).join(" ")),
        ...rest
      },
      "svelte-1ujem9w"
    )}><header class="flex items-center border-b px-3 svelte-1ujem9w"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="opacity-50 mr-2 shrink-0 svelte-1ujem9w"><circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.3-4.3"></path></svg> <input type="text"${attr("value", value)}${attr("placeholder", placeholder)} class="flex h-10 w-full bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50 border-none focus:ring-0 svelte-1ujem9w"/></header> <div role="menu" class="max-h-40 overflow-y-auto overflow-x-hidden p-1 scrollbar svelte-1ujem9w">`);
    children?.($$renderer2);
    $$renderer2.push(`<!----></div></div>`);
    bind_props($$props, { value });
  });
}
function Popover($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      open = false,
      trigger,
      children,
      side = "bottom",
      align = "start",
      class: className = "",
      contentClass = "",
      $$slots,
      $$events,
      ...rest
    } = $$props;
    $$renderer2.push(`<div${attributes(
      {
        class: clsx(["popover relative", className].filter(Boolean).join(" ")),
        ...rest
      },
      "svelte-15d9noc"
    )}><div role="button" tabindex="0"${attr("aria-expanded", open)} class="inline-block">`);
    trigger($$renderer2, { open });
    $$renderer2.push(`<!----></div> `);
    if (open) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<section data-popover=""${attr("aria-hidden", !open)}${attr("data-side", side)}${attr("data-align", align)}${attr_class(
        clsx([
          "absolute z-50 p-4 bg-popover text-popover-foreground rounded-md border shadow-md outline-none animate-in fade-in-0 zoom-in-95",
          contentClass
        ].filter(Boolean).join(" ")),
        "svelte-15d9noc"
      )}>`);
      children($$renderer2);
      $$renderer2.push(`<!----></section>`);
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--></div>`);
    bind_props($$props, { open });
  });
}
function Combobox($$renderer) {
  let open = false;
  let selected = "ny";
  let selectedLabel = "New York";
  let searchValue = "";
  let $$settled = true;
  let $$inner_renderer;
  function $$render_inner($$renderer2) {
    $$renderer2.push(`<div class="h-64"><div class="select w-56">`);
    {
      let trigger = function($$renderer3) {
        Button($$renderer3, {
          variant: "outline",
          class: "w-full justify-between",
          "aria-expanded": open,
          children: ($$renderer4) => {
            $$renderer4.push(`<span>${escape_html(selectedLabel)}</span> <svg class="opacity-50" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"></path></svg>`);
          },
          $$slots: { default: true }
        });
      }, children = function($$renderer3) {
        $$renderer3.push(`<div class="w-full p-0">`);
        {
          let children2 = function($$renderer4) {
            $$renderer4.push(`<div role="group"><div role="heading" aria-level="3" class="px-2 py-1.5 text-xs font-medium text-muted-foreground">Americas</div> <button role="menuitem" class="w-full text-left cursor-default flex items-center gap-2 rounded-sm px-2 py-1.5 text-sm hover:bg-accent hover:text-accent-foreground">New York `);
            {
              $$renderer4.push("<!--[-->");
              $$renderer4.push(`<svg class="ml-auto size-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"></path></svg>`);
            }
            $$renderer4.push(`<!--]--></button> <button role="menuitem" class="w-full text-left cursor-default flex items-center gap-2 rounded-sm px-2 py-1.5 text-sm hover:bg-accent hover:text-accent-foreground">Los Angeles `);
            {
              $$renderer4.push("<!--[!-->");
            }
            $$renderer4.push(`<!--]--></button></div> <div role="group"><div role="heading" aria-level="3" class="px-2 py-1.5 text-xs font-medium text-muted-foreground">Europe</div> <button role="menuitem" class="w-full text-left cursor-default flex items-center gap-2 rounded-sm px-2 py-1.5 text-sm hover:bg-accent hover:text-accent-foreground">London `);
            {
              $$renderer4.push("<!--[!-->");
            }
            $$renderer4.push(`<!--]--></button> <button role="menuitem" class="w-full text-left cursor-default flex items-center gap-2 rounded-sm px-2 py-1.5 text-sm hover:bg-accent hover:text-accent-foreground">Paris `);
            {
              $$renderer4.push("<!--[!-->");
            }
            $$renderer4.push(`<!--]--></button></div>`);
          };
          Command($$renderer3, {
            placeholder: "Search timezone...",
            class: "border-0 shadow-none bg-transparent",
            get value() {
              return searchValue;
            },
            set value($$value) {
              searchValue = $$value;
              $$settled = false;
            },
            children: children2,
            $$slots: { default: true }
          });
        }
        $$renderer3.push(`<!----></div>`);
      };
      Popover($$renderer2, {
        align: "start",
        get open() {
          return open;
        },
        set open($$value) {
          open = $$value;
          $$settled = false;
        },
        trigger,
        children,
        $$slots: { trigger: true, default: true }
      });
    }
    $$renderer2.push(`<!----> <input type="hidden" name="timezone"${attr("value", selected)}/></div></div>`);
  }
  do {
    $$settled = true;
    $$inner_renderer = $$renderer.copy();
    $$render_inner($$inner_renderer);
  } while (!$$settled);
  $$renderer.subsume($$inner_renderer);
}
const __vite_glob_0_10 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Combobox
}, Symbol.toStringTag, { value: "Module" }));
function Command_1($$renderer) {
  {
    let children = function($$renderer2) {
      $$renderer2.push(`<div role="group"><div role="heading" aria-level="3" class="px-2 py-1.5 text-xs font-medium text-muted-foreground">Links</div> <button role="menuitem" class="w-full text-left cursor-default flex items-center gap-2 rounded-sm px-2 py-1.5 text-sm hover:bg-accent hover:text-accent-foreground">Documentation</button> <button role="menuitem" class="w-full text-left cursor-default flex items-center gap-2 rounded-sm px-2 py-1.5 text-sm hover:bg-accent hover:text-accent-foreground">GitHub Repository</button></div> <div role="group"><div role="heading" aria-level="3" class="px-2 py-1.5 text-xs font-medium text-muted-foreground">Settings</div> <button role="menuitem" class="w-full text-left cursor-default flex items-center gap-2 rounded-sm px-2 py-1.5 text-sm hover:bg-accent hover:text-accent-foreground">Profile</button> <button role="menuitem" class="w-full text-left cursor-default flex items-center gap-2 rounded-sm px-2 py-1.5 text-sm hover:bg-accent hover:text-accent-foreground">Preferences</button> <button role="menuitem" class="w-full text-left cursor-default flex items-center gap-2 rounded-sm px-2 py-1.5 text-sm hover:bg-accent hover:text-accent-foreground">Keyboard Shortcuts</button></div>`);
    };
    Command($$renderer, {
      placeholder: "Search...",
      class: "max-w-sm bg-background border rounded-lg shadow-sm",
      children,
      $$slots: { default: true }
    });
  }
}
const __vite_glob_0_11 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Command_1
}, Symbol.toStringTag, { value: "Module" }));
function DatePicker($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      value = "",
      options = {},
      placeholder = "Select date",
      inline = false,
      locale = "en-short",
      class: className = "",
      $$slots,
      $$events,
      ...rest
    } = $$props;
    const finalClass = inline ? ["datepicker", className].filter(Boolean).join(" ") : ["input datepicker", className].filter(Boolean).join(" ");
    onDestroy(() => {
    });
    if (inline) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<div${attributes({ class: clsx(finalClass), ...rest })}></div>`);
    } else {
      $$renderer2.push("<!--[!-->");
      $$renderer2.push(`<input${attributes(
        {
          type: "text",
          class: clsx(finalClass),
          placeholder,
          ...rest
        },
        void 0,
        void 0,
        void 0,
        4
      )}/>`);
    }
    $$renderer2.push(`<!--]-->`);
    bind_props($$props, { value });
  });
}
function Datepicker($$renderer) {
  let zhDate = "";
  let zhTwDate = "";
  let enFullDate = "";
  let enShortDate = "";
  let $$settled = true;
  let $$inner_renderer;
  function $$render_inner($$renderer2) {
    $$renderer2.push(`<div class="flex flex-col gap-6"><div class="max-w-xs">`);
    Label($$renderer2, {
      children: ($$renderer3) => {
        $$renderer3.push(`<!---->Simplified Chinese`);
      },
      $$slots: { default: true }
    });
    $$renderer2.push(`<!----> `);
    DatePicker($$renderer2, {
      locale: "zh",
      placeholder: "选择日期",
      get value() {
        return zhDate;
      },
      set value($$value) {
        zhDate = $$value;
        $$settled = false;
      }
    });
    $$renderer2.push(`<!----></div> <div class="max-w-xs">`);
    Label($$renderer2, {
      children: ($$renderer3) => {
        $$renderer3.push(`<!---->Traditional Chinese`);
      },
      $$slots: { default: true }
    });
    $$renderer2.push(`<!----> `);
    DatePicker($$renderer2, {
      locale: "zh-tw",
      placeholder: "選擇日期",
      get value() {
        return zhTwDate;
      },
      set value($$value) {
        zhTwDate = $$value;
        $$settled = false;
      }
    });
    $$renderer2.push(`<!----></div> <div class="max-w-xs">`);
    Label($$renderer2, {
      children: ($$renderer3) => {
        $$renderer3.push(`<!---->English (Full Names)`);
      },
      $$slots: { default: true }
    });
    $$renderer2.push(`<!----> `);
    DatePicker($$renderer2, {
      locale: "en-full",
      placeholder: "Select date",
      get value() {
        return enFullDate;
      },
      set value($$value) {
        enFullDate = $$value;
        $$settled = false;
      }
    });
    $$renderer2.push(`<!----></div> <div class="max-w-xs">`);
    Label($$renderer2, {
      children: ($$renderer3) => {
        $$renderer3.push(`<!---->English (Abbreviated)`);
      },
      $$slots: { default: true }
    });
    $$renderer2.push(`<!----> `);
    DatePicker($$renderer2, {
      locale: "en-short",
      placeholder: "Select date",
      get value() {
        return enShortDate;
      },
      set value($$value) {
        enShortDate = $$value;
        $$settled = false;
      }
    });
    $$renderer2.push(`<!----></div> <div class="max-w-xs">`);
    Label($$renderer2, {
      children: ($$renderer3) => {
        $$renderer3.push(`<!---->Inline Calendar`);
      },
      $$slots: { default: true }
    });
    $$renderer2.push(`<!----> `);
    DatePicker($$renderer2, { inline: true, locale: "zh" });
    $$renderer2.push(`<!----></div></div>`);
  }
  do {
    $$settled = true;
    $$inner_renderer = $$renderer.copy();
    $$render_inner($$inner_renderer);
  } while (!$$settled);
  $$renderer.subsume($$inner_renderer);
}
const __vite_glob_0_12 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Datepicker
}, Symbol.toStringTag, { value: "Module" }));
function Dialog($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      open = false,
      title,
      description,
      children,
      footer,
      role = "dialog",
      class: className = "",
      $$slots,
      $$events,
      ...rest
    } = $$props;
    $$renderer2.push(`<dialog${attributes(
      {
        class: clsx(["dialog", className].filter(Boolean).join(" ")),
        role,
        ...// Only close on backdrop click for regular dialog, not alertdialog
        rest
      },
      "svelte-thzjkx"
    )}>`);
    if (role !== "alertdialog") {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<button class="close svelte-thzjkx" aria-label="Close"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svelte-thzjkx"><path d="M18 6 6 18" class="svelte-thzjkx"></path><path d="m6 6 12 12" class="svelte-thzjkx"></path></svg></button>`);
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--> `);
    if (title || description) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<header class="svelte-thzjkx">`);
      if (title) {
        $$renderer2.push("<!--[-->");
        $$renderer2.push(`<h2 class="svelte-thzjkx">`);
        if (typeof title === "string") {
          $$renderer2.push("<!--[-->");
          $$renderer2.push(`${escape_html(title)}`);
        } else {
          $$renderer2.push("<!--[!-->");
          title($$renderer2);
          $$renderer2.push(`<!---->`);
        }
        $$renderer2.push(`<!--]--></h2>`);
      } else {
        $$renderer2.push("<!--[!-->");
      }
      $$renderer2.push(`<!--]--> `);
      if (description) {
        $$renderer2.push("<!--[-->");
        $$renderer2.push(`<p class="svelte-thzjkx">`);
        if (typeof description === "string") {
          $$renderer2.push("<!--[-->");
          $$renderer2.push(`${escape_html(description)}`);
        } else {
          $$renderer2.push("<!--[!-->");
          description($$renderer2);
          $$renderer2.push(`<!---->`);
        }
        $$renderer2.push(`<!--]--></p>`);
      } else {
        $$renderer2.push("<!--[!-->");
      }
      $$renderer2.push(`<!--]--></header>`);
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--> <section class="svelte-thzjkx">`);
    children($$renderer2);
    $$renderer2.push(`<!----></section> `);
    if (footer) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<footer class="svelte-thzjkx">`);
      footer($$renderer2);
      $$renderer2.push(`<!----></footer>`);
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--></dialog>`);
    bind_props($$props, { open });
  });
}
function Input($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      value = void 0,
      type = "text",
      class: className = "",
      $$slots,
      $$events,
      ...rest
    } = $$props;
    const finalClass = ["input", className].filter(Boolean).join(" ");
    $$renderer2.push(`<input${attributes({ type, class: clsx(finalClass), value, ...rest }, "svelte-ygtvep", void 0, void 0, 4)}/>`);
    bind_props($$props, { value });
  });
}
function Dialog_1($$renderer) {
  let dialogOpen = false;
  let alertOpen = false;
  let $$settled = true;
  let $$inner_renderer;
  function $$render_inner($$renderer2) {
    $$renderer2.push(`<div class="flex gap-4">`);
    Button($$renderer2, {
      variant: "outline",
      onclick: () => dialogOpen = true,
      children: ($$renderer3) => {
        $$renderer3.push(`<!---->Open Dialog`);
      },
      $$slots: { default: true }
    });
    $$renderer2.push(`<!----> `);
    {
      let footer = function($$renderer3) {
        Button($$renderer3, {
          variant: "primary",
          onclick: () => dialogOpen = false,
          children: ($$renderer4) => {
            $$renderer4.push(`<!---->Save changes`);
          },
          $$slots: { default: true }
        });
      };
      Dialog($$renderer2, {
        title: "Edit Profile",
        description: "Make changes to your profile here. Click save when you're done.",
        get open() {
          return dialogOpen;
        },
        set open($$value) {
          dialogOpen = $$value;
          $$settled = false;
        },
        footer,
        children: ($$renderer3) => {
          $$renderer3.push(`<div class="space-y-4"><div class="grid grid-cols-4 items-center gap-4">`);
          Label($$renderer3, {
            class: "text-right",
            children: ($$renderer4) => {
              $$renderer4.push(`<!---->Name`);
            },
            $$slots: { default: true }
          });
          $$renderer3.push(`<!----> `);
          Input($$renderer3, { class: "col-span-3", value: "Pedro Duarte" });
          $$renderer3.push(`<!----></div> <div class="grid grid-cols-4 items-center gap-4">`);
          Label($$renderer3, {
            class: "text-right",
            children: ($$renderer4) => {
              $$renderer4.push(`<!---->Username`);
            },
            $$slots: { default: true }
          });
          $$renderer3.push(`<!----> `);
          Input($$renderer3, { class: "col-span-3", value: "@peduarte" });
          $$renderer3.push(`<!----></div></div>`);
        },
        $$slots: { footer: true, default: true }
      });
    }
    $$renderer2.push(`<!----> `);
    Button($$renderer2, {
      variant: "destructive",
      onclick: () => alertOpen = true,
      children: ($$renderer3) => {
        $$renderer3.push(`<!---->Open Alert Dialog`);
      },
      $$slots: { default: true }
    });
    $$renderer2.push(`<!----> `);
    {
      let footer = function($$renderer3) {
        Button($$renderer3, {
          variant: "outline",
          onclick: () => alertOpen = false,
          children: ($$renderer4) => {
            $$renderer4.push(`<!---->Cancel`);
          },
          $$slots: { default: true }
        });
        $$renderer3.push(`<!----> `);
        Button($$renderer3, {
          variant: "destructive",
          onclick: () => alertOpen = false,
          children: ($$renderer4) => {
            $$renderer4.push(`<!---->Delete`);
          },
          $$slots: { default: true }
        });
        $$renderer3.push(`<!---->`);
      };
      Dialog($$renderer2, {
        role: "alertdialog",
        title: "Are you absolutely sure?",
        description: "This action cannot be undone. This will permanently delete your account.",
        get open() {
          return alertOpen;
        },
        set open($$value) {
          alertOpen = $$value;
          $$settled = false;
        },
        footer,
        children: ($$renderer3) => {
          $$renderer3.push(`<div></div>`);
        },
        $$slots: { footer: true, default: true }
      });
    }
    $$renderer2.push(`<!----></div>`);
  }
  do {
    $$settled = true;
    $$inner_renderer = $$renderer.copy();
    $$render_inner($$inner_renderer);
  } while (!$$settled);
  $$renderer.subsume($$inner_renderer);
}
const __vite_glob_0_13 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Dialog_1
}, Symbol.toStringTag, { value: "Module" }));
function Drawer($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      open = false,
      title,
      description,
      children,
      class: className = "",
      $$slots,
      $$events,
      ...rest
    } = $$props;
    if (
      // Lock body scroll when open
      open
    ) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<div class="drawer fixed inset-0 z-50 flex flex-col items-end sm:items-center justify-end svelte-1wbxqi2"><div class="absolute inset-0 bg-black/80 svelte-1wbxqi2"></div> <div${attributes(
        {
          class: clsx(["drawer-content", className].filter(Boolean).join(" ")),
          ...rest
        },
        "svelte-1wbxqi2"
      )}><div class="mx-auto mt-4 h-2 w-[100px] rounded-full bg-muted cursor-grab active:cursor-grabbing svelte-1wbxqi2"></div> <div class="p-4 text-center sm:text-left svelte-1wbxqi2">`);
      if (title) {
        $$renderer2.push("<!--[-->");
        $$renderer2.push(`<h2 class="text-lg font-semibold leading-none tracking-tight svelte-1wbxqi2">`);
        if (typeof title === "string") {
          $$renderer2.push("<!--[-->");
          $$renderer2.push(`${escape_html(title)}`);
        } else {
          $$renderer2.push("<!--[!-->");
          title($$renderer2);
          $$renderer2.push(`<!---->`);
        }
        $$renderer2.push(`<!--]--></h2>`);
      } else {
        $$renderer2.push("<!--[!-->");
      }
      $$renderer2.push(`<!--]--> `);
      if (description) {
        $$renderer2.push("<!--[-->");
        $$renderer2.push(`<p class="text-sm text-muted-foreground mt-1.5 svelte-1wbxqi2">`);
        if (typeof description === "string") {
          $$renderer2.push("<!--[-->");
          $$renderer2.push(`${escape_html(description)}`);
        } else {
          $$renderer2.push("<!--[!-->");
          description($$renderer2);
          $$renderer2.push(`<!---->`);
        }
        $$renderer2.push(`<!--]--></p>`);
      } else {
        $$renderer2.push("<!--[!-->");
      }
      $$renderer2.push(`<!--]--></div> `);
      children($$renderer2);
      $$renderer2.push(`<!----></div></div>`);
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]-->`);
    bind_props($$props, { open });
  });
}
function Drawer_1($$renderer) {
  let open = false;
  let goal = 350;
  let $$settled = true;
  let $$inner_renderer;
  function $$render_inner($$renderer2) {
    $$renderer2.push(`<div>`);
    Button($$renderer2, {
      variant: "outline",
      onclick: () => open = true,
      children: ($$renderer3) => {
        $$renderer3.push(`<!---->Open Drawer`);
      },
      $$slots: { default: true }
    });
    $$renderer2.push(`<!----> `);
    Drawer($$renderer2, {
      title: "Move Goal",
      description: "Set your daily activity goal.",
      get open() {
        return open;
      },
      set open($$value) {
        open = $$value;
        $$settled = false;
      },
      children: ($$renderer3) => {
        $$renderer3.push(`<div class="p-4 pb-0"><div class="flex items-center justify-center space-x-2">`);
        Button($$renderer3, {
          variant: "outline",
          icon: true,
          class: "rounded-full",
          onclick: () => goal = Math.max(0, goal - 10),
          "aria-label": "Decrease",
          children: ($$renderer4) => {
            $$renderer4.push(`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"></path></svg>`);
          },
          $$slots: { default: true }
        });
        $$renderer3.push(`<!----> <div class="flex-1 text-center"><div class="text-7xl font-bold tracking-tighter">${escape_html(goal)}</div> <div class="text-[0.70rem] uppercase text-muted-foreground">Calories/day</div></div> `);
        Button($$renderer3, {
          variant: "outline",
          icon: true,
          class: "rounded-full",
          onclick: () => goal += 10,
          "aria-label": "Increase",
          children: ($$renderer4) => {
            $$renderer4.push(`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>`);
          },
          $$slots: { default: true }
        });
        $$renderer3.push(`<!----></div></div> <div class="mt-auto flex flex-col gap-2 p-4">`);
        Button($$renderer3, {
          variant: "primary",
          onclick: () => open = false,
          children: ($$renderer4) => {
            $$renderer4.push(`<!---->Submit`);
          },
          $$slots: { default: true }
        });
        $$renderer3.push(`<!----> `);
        Button($$renderer3, {
          variant: "outline",
          onclick: () => open = false,
          children: ($$renderer4) => {
            $$renderer4.push(`<!---->Cancel`);
          },
          $$slots: { default: true }
        });
        $$renderer3.push(`<!----></div>`);
      },
      $$slots: { default: true }
    });
    $$renderer2.push(`<!----></div>`);
  }
  do {
    $$settled = true;
    $$inner_renderer = $$renderer.copy();
    $$render_inner($$inner_renderer);
  } while (!$$settled);
  $$renderer.subsume($$inner_renderer);
}
const __vite_glob_0_14 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Drawer_1
}, Symbol.toStringTag, { value: "Module" }));
function DropdownMenu($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      open = false,
      trigger,
      children,
      align = "start",
      class: className = "",
      $$slots,
      $$events,
      ...rest
    } = $$props;
    $$renderer2.push(`<div${attributes(
      {
        class: clsx(["dropdown-menu relative inline-block", className].filter(Boolean).join(" ")),
        ...rest
      },
      "svelte-b5fca3"
    )}><div role="button" tabindex="0"${attr("aria-expanded", open)}>`);
    trigger($$renderer2, { open });
    $$renderer2.push(`<!----></div> `);
    if (open) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<div role="menu" data-popover=""${attr("data-align", align)} class="absolute z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 mt-1 svelte-b5fca3">`);
      children($$renderer2);
      $$renderer2.push(`<!----></div>`);
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--></div>`);
    bind_props($$props, { open });
  });
}
function Dropdown_menu($$renderer) {
  $$renderer.push(`<div class="h-48">`);
  {
    let trigger = function($$renderer2, { open }) {
      Button($$renderer2, {
        variant: "outline",
        "aria-expanded": open,
        children: ($$renderer3) => {
          $$renderer3.push(`<!---->Options`);
        },
        $$slots: { default: true }
      });
    }, children = function($$renderer2) {
      $$renderer2.push(`<div role="heading" aria-level="2" class="px-2 py-1.5 text-sm font-semibold text-muted-foreground">Manage</div> <button role="menuitem" class="w-full text-left cursor-default flex items-center gap-2 rounded-sm px-2 py-1.5 text-sm hover:bg-accent hover:text-accent-foreground">Profile</button> <button role="menuitem" class="w-full text-left cursor-default flex items-center gap-2 rounded-sm px-2 py-1.5 text-sm hover:bg-accent hover:text-accent-foreground">Team</button> <hr class="my-1 border-muted"/> <button role="menuitem" class="w-full text-left cursor-default flex items-center gap-2 rounded-sm px-2 py-1.5 text-sm hover:bg-accent hover:text-accent-foreground text-destructive">Logout</button>`);
    };
    DropdownMenu($$renderer, { trigger, children, $$slots: { trigger: true, default: true } });
  }
  $$renderer.push(`<!----></div>`);
}
const __vite_glob_0_15 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Dropdown_menu
}, Symbol.toStringTag, { value: "Module" }));
function Empty($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      children,
      icon,
      title,
      description,
      class: className = "",
      $$slots,
      $$events,
      ...rest
    } = $$props;
    const finalClass = [
      "p-12 border border-dashed rounded-lg bg-card text-center flex flex-col items-center justify-center",
      className
    ].filter(Boolean).join(" ");
    $$renderer2.push(`<div${attributes({ class: clsx(finalClass), ...rest })}>`);
    if (icon) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<div class="h-10 w-10 rounded-full bg-muted flex items-center justify-center mb-3 text-muted-foreground">`);
      icon($$renderer2);
      $$renderer2.push(`<!----></div>`);
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--> `);
    if (title) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<h4 class="font-medium">`);
      if (typeof title === "string") {
        $$renderer2.push("<!--[-->");
        $$renderer2.push(`${escape_html(title)}`);
      } else {
        $$renderer2.push("<!--[!-->");
        title($$renderer2);
        $$renderer2.push(`<!---->`);
      }
      $$renderer2.push(`<!--]--></h4>`);
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--> `);
    if (description) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<p class="text-sm text-muted-foreground">`);
      if (typeof description === "string") {
        $$renderer2.push("<!--[-->");
        $$renderer2.push(`${escape_html(description)}`);
      } else {
        $$renderer2.push("<!--[!-->");
        description($$renderer2);
        $$renderer2.push(`<!---->`);
      }
      $$renderer2.push(`<!--]--></p>`);
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--> `);
    if (children) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<div class="mt-4">`);
      children($$renderer2);
      $$renderer2.push(`<!----></div>`);
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--></div>`);
  });
}
function Empty_state($$renderer) {
  {
    let icon = function($$renderer2) {
      $$renderer2.push(`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="3" rx="2"></rect><path d="M3 9h18"></path><path d="M9 21V9"></path></svg>`);
    };
    Empty($$renderer, {
      title: "No results found",
      description: "Try adjusting your search filters.",
      icon,
      $$slots: { icon: true }
    });
  }
}
const __vite_glob_0_16 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Empty_state
}, Symbol.toStringTag, { value: "Module" }));
function Form($$renderer) {
  $$renderer.push(`<div class="max-w-md"><form class="form space-y-4"><div class="field">`);
  Label($$renderer, {
    for: "f-email",
    children: ($$renderer2) => {
      $$renderer2.push(`<!---->Email Address`);
    },
    $$slots: { default: true }
  });
  $$renderer.push(`<!----> `);
  Input($$renderer, {
    type: "email",
    id: "f-email",
    placeholder: "name@example.com"
  });
  $$renderer.push(`<!----> <p class="text-xs text-muted-foreground mt-1.5">We'll never share your email.</p></div> <div class="field" data-invalid="true">`);
  Label($$renderer, {
    for: "f-username",
    children: ($$renderer2) => {
      $$renderer2.push(`<!---->Username`);
    },
    $$slots: { default: true }
  });
  $$renderer.push(`<!----> `);
  Input($$renderer, { type: "text", id: "f-username", value: "error_user" });
  $$renderer.push(`<!----> <span role="alert" class="text-xs text-destructive mt-1.5 block">Username is already taken.</span></div></form></div>`);
}
const __vite_glob_0_17 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Form
}, Symbol.toStringTag, { value: "Module" }));
function Input_group($$renderer) {
  $$renderer.push(`<div class="grid gap-6 max-w-sm"><div class="relative">`);
  Input($$renderer, { class: "pl-9", placeholder: "Search..." });
  $$renderer.push(`<!----> <div class="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none text-muted-foreground [&amp;>svg]:size-4"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.3-4.3"></path></svg></div></div> <div class="relative">`);
  Input($$renderer, { class: "pr-12", placeholder: "domain" });
  $$renderer.push(`<!----> <div class="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-muted-foreground text-sm">.com</div></div> <div class="relative">`);
  Input($$renderer, { class: "pr-20", placeholder: "Email" });
  $$renderer.push(`<!----> `);
  Button($$renderer, {
    variant: "secondary",
    size: "sm",
    class: "absolute right-1 top-1/2 -translate-y-1/2 h-7 px-2",
    children: ($$renderer2) => {
      $$renderer2.push(`<!---->Invite`);
    },
    $$slots: { default: true }
  });
  $$renderer.push(`<!----></div></div>`);
}
const __vite_glob_0_18 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Input_group
}, Symbol.toStringTag, { value: "Module" }));
function InputOTP($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      length = 6,
      value = "",
      separator,
      separatorIndices = [],
      class: className = "",
      $$slots,
      $$events,
      ...rest
    } = $$props;
    let values = [];
    function getGroups() {
      const groups = [];
      let currentGroup = [];
      for (let i = 0; i < length; i++) {
        if (i > 0 && separatorIndices.includes(i)) {
          groups.push(currentGroup);
          currentGroup = [];
        }
        currentGroup.push(i);
      }
      if (currentGroup.length > 0) {
        groups.push(currentGroup);
      }
      return groups;
    }
    $$renderer2.push(`<div${attributes(
      {
        class: clsx(["input-otp flex items-center gap-2", className].filter(Boolean).join(" ")),
        ...rest
      },
      "svelte-tvo0jy"
    )}><!--[-->`);
    const each_array = ensure_array_like(getGroups());
    for (let groupIndex = 0, $$length = each_array.length; groupIndex < $$length; groupIndex++) {
      let group = each_array[groupIndex];
      if (groupIndex > 0) {
        $$renderer2.push("<!--[-->");
        $$renderer2.push(`<div class="input-otp-separator text-muted-foreground">`);
        if (separator) {
          $$renderer2.push("<!--[-->");
          separator($$renderer2);
          $$renderer2.push(`<!---->`);
        } else {
          $$renderer2.push("<!--[!-->");
        }
        $$renderer2.push(`<!--]--></div>`);
      } else {
        $$renderer2.push("<!--[!-->");
      }
      $$renderer2.push(`<!--]--> <div class="input-otp-group flex items-center svelte-tvo0jy"><!--[-->`);
      const each_array_1 = ensure_array_like(group);
      for (let $$index = 0, $$length2 = each_array_1.length; $$index < $$length2; $$index++) {
        let inputIndex = each_array_1[$$index];
        $$renderer2.push(`<input type="text" inputmode="text" autocomplete="one-time-code" class="input w-10 h-10 text-center p-0 svelte-tvo0jy" maxlength="1"${attr("value", values[inputIndex])}/>`);
      }
      $$renderer2.push(`<!--]--></div>`);
    }
    $$renderer2.push(`<!--]--></div>`);
    bind_props($$props, { value });
  });
}
function Input_otp($$renderer) {
  let value1 = "";
  let value2 = "";
  let $$settled = true;
  let $$inner_renderer;
  function $$render_inner($$renderer2) {
    $$renderer2.push(`<div class="space-y-8"><div><h4 class="text-sm font-medium mb-2">Default (Connected)</h4> `);
    InputOTP($$renderer2, {
      length: 6,
      get value() {
        return value1;
      },
      set value($$value) {
        value1 = $$value;
        $$settled = false;
      }
    });
    $$renderer2.push(`<!----></div> <div><h4 class="text-sm font-medium mb-2">Separated Groups</h4> `);
    {
      let separator = function($$renderer3) {
        $$renderer3.push(`<span class="text-muted-foreground">-</span>`);
      };
      InputOTP($$renderer2, {
        length: 6,
        separatorIndices: [3],
        get value() {
          return value2;
        },
        set value($$value) {
          value2 = $$value;
          $$settled = false;
        },
        separator,
        $$slots: { separator: true }
      });
    }
    $$renderer2.push(`<!----></div></div>`);
  }
  do {
    $$settled = true;
    $$inner_renderer = $$renderer.copy();
    $$render_inner($$inner_renderer);
  } while (!$$settled);
  $$renderer.subsume($$inner_renderer);
}
const __vite_glob_0_19 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Input_otp
}, Symbol.toStringTag, { value: "Module" }));
function Input_1($$renderer) {
  $$renderer.push(`<div class="grid gap-4 max-w-sm">`);
  Input($$renderer, { type: "text", placeholder: "Text Input" });
  $$renderer.push(`<!----> `);
  Input($$renderer, { type: "email", placeholder: "Email Address" });
  $$renderer.push(`<!----> `);
  Input($$renderer, { type: "password", value: "password" });
  $$renderer.push(`<!----> `);
  Input($$renderer, { type: "text", placeholder: "Disabled", disabled: true });
  $$renderer.push(`<!----></div>`);
}
const __vite_glob_0_20 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Input_1
}, Symbol.toStringTag, { value: "Module" }));
function Item($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      children,
      icon,
      title,
      description,
      actions,
      class: className = "",
      containerClass = "",
      $$slots,
      $$events,
      ...rest
    } = $$props;
    const finalClass = [
      "flex items-center gap-3 p-3 hover:bg-muted cursor-pointer transition-colors border-b last:border-0",
      className
    ].filter(Boolean).join(" ");
    $$renderer2.push(`<div${attributes({ class: clsx(finalClass), ...rest })}>`);
    if (icon) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<div class="h-8 w-8 rounded-full bg-accent flex items-center justify-center shrink-0">`);
      icon($$renderer2);
      $$renderer2.push(`<!----></div>`);
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--> <div class="flex-1 min-w-0">`);
    if (title) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<div class="text-sm font-medium truncate">`);
      if (typeof title === "string") {
        $$renderer2.push("<!--[-->");
        $$renderer2.push(`${escape_html(title)}`);
      } else {
        $$renderer2.push("<!--[!-->");
        title($$renderer2);
        $$renderer2.push(`<!---->`);
      }
      $$renderer2.push(`<!--]--></div>`);
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--> `);
    if (description) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<div class="text-xs text-muted-foreground truncate">`);
      if (typeof description === "string") {
        $$renderer2.push("<!--[-->");
        $$renderer2.push(`${escape_html(description)}`);
      } else {
        $$renderer2.push("<!--[!-->");
        description($$renderer2);
        $$renderer2.push(`<!---->`);
      }
      $$renderer2.push(`<!--]--></div>`);
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--> `);
    children?.($$renderer2);
    $$renderer2.push(`<!----></div> `);
    if (actions) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<div class="flex items-center gap-2 shrink-0">`);
      actions($$renderer2);
      $$renderer2.push(`<!----></div>`);
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--></div>`);
  });
}
function Item_1($$renderer) {
  $$renderer.push(`<div class="max-w-sm border rounded-lg overflow-hidden">`);
  {
    let icon = function($$renderer2) {
      $$renderer2.push(`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>`);
    };
    Item($$renderer, {
      title: "Transactions",
      description: "Manage your billing history.",
      icon,
      $$slots: { icon: true }
    });
  }
  $$renderer.push(`<!----> `);
  {
    let icon = function($$renderer2) {
      $$renderer2.push(`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>`);
    };
    Item($$renderer, {
      title: "Profile",
      description: "Update your personal information.",
      icon,
      $$slots: { icon: true }
    });
  }
  $$renderer.push(`<!----></div>`);
}
const __vite_glob_0_21 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Item_1
}, Symbol.toStringTag, { value: "Module" }));
function Kbd($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { children, class: className = "", $$slots, $$events, ...rest } = $$props;
    const finalClass = ["kbd", className].filter(Boolean).join(" ");
    $$renderer2.push(`<kbd${attributes({ class: clsx(finalClass), ...rest }, "svelte-14wu8qy")}>`);
    if (typeof children === "string") {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`${escape_html(children)}`);
    } else {
      $$renderer2.push("<!--[!-->");
      if (children) {
        $$renderer2.push("<!--[-->");
        children($$renderer2);
        $$renderer2.push(`<!---->`);
      } else {
        $$renderer2.push("<!--[!-->");
      }
      $$renderer2.push(`<!--]-->`);
    }
    $$renderer2.push(`<!--]--></kbd>`);
  });
}
function Kbd_1($$renderer) {
  $$renderer.push(`<div class="flex flex-wrap gap-2 items-center">`);
  Kbd($$renderer, {
    children: ($$renderer2) => {
      $$renderer2.push(`<!---->⌘`);
    },
    $$slots: { default: true }
  });
  $$renderer.push(`<!----> `);
  Kbd($$renderer, {
    children: ($$renderer2) => {
      $$renderer2.push(`<!---->⇧`);
    },
    $$slots: { default: true }
  });
  $$renderer.push(`<!----> `);
  Kbd($$renderer, {
    children: ($$renderer2) => {
      $$renderer2.push(`<!---->⌥`);
    },
    $$slots: { default: true }
  });
  $$renderer.push(`<!----> `);
  Kbd($$renderer, {
    children: ($$renderer2) => {
      $$renderer2.push(`<!---->⌃`);
    },
    $$slots: { default: true }
  });
  $$renderer.push(`<!----> `);
  Kbd($$renderer, {
    children: ($$renderer2) => {
      $$renderer2.push(`<!---->Ctrl`);
    },
    $$slots: { default: true }
  });
  $$renderer.push(`<!----> <span>+</span> `);
  Kbd($$renderer, {
    children: ($$renderer2) => {
      $$renderer2.push(`<!---->B`);
    },
    $$slots: { default: true }
  });
  $$renderer.push(`<!----></div>`);
}
const __vite_glob_0_22 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Kbd_1
}, Symbol.toStringTag, { value: "Module" }));
function Pagination($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      total = 1,
      current = 1,
      onPageChange,
      class: className = "",
      prevIcon,
      nextIcon,
      $$slots,
      $$events,
      ...rest
    } = $$props;
    const finalClass = ["pagination flex items-center gap-1", className].filter(Boolean).join(" ");
    $$renderer2.push(`<nav${attributes({ class: clsx(finalClass), ...rest })}><button type="button" class="btn btn-ghost btn-icon"${attr("disabled", current <= 1, true)}${attr("aria-disabled", current <= 1 ? "true" : void 0)} aria-label="Previous page" data-pagination-prev="">`);
    if (prevIcon) {
      $$renderer2.push("<!--[-->");
      prevIcon($$renderer2);
      $$renderer2.push(`<!---->`);
    } else {
      $$renderer2.push("<!--[!-->");
      $$renderer2.push(`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m15 18-6-6 6-6"></path></svg>`);
    }
    $$renderer2.push(`<!--]--></button> <!--[-->`);
    const each_array = ensure_array_like(Array.from({ length: total }, (_, i) => i + 1));
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let page = each_array[$$index];
      $$renderer2.push(`<button type="button"${attr_class(clsx(["btn w-9", current === page ? "btn-outline" : "btn-ghost"].join(" ")))}${attr("aria-current", current === page ? "page" : void 0)}${attr("data-pagination-page", page)}>${escape_html(page)}</button>`);
    }
    $$renderer2.push(`<!--]--> <button type="button" class="btn btn-ghost btn-icon"${attr("disabled", current >= total, true)}${attr("aria-disabled", current >= total ? "true" : void 0)} aria-label="Next page" data-pagination-next="">`);
    if (nextIcon) {
      $$renderer2.push("<!--[-->");
      nextIcon($$renderer2);
      $$renderer2.push(`<!---->`);
    } else {
      $$renderer2.push("<!--[!-->");
      $$renderer2.push(`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"></path></svg>`);
    }
    $$renderer2.push(`<!--]--></button></nav>`);
    bind_props($$props, { current });
  });
}
function Pagination_1($$renderer) {
  let current = 1;
  let $$settled = true;
  let $$inner_renderer;
  function $$render_inner($$renderer2) {
    Pagination($$renderer2, {
      total: 5,
      get current() {
        return current;
      },
      set current($$value) {
        current = $$value;
        $$settled = false;
      }
    });
  }
  do {
    $$settled = true;
    $$inner_renderer = $$renderer.copy();
    $$render_inner($$inner_renderer);
  } while (!$$settled);
  $$renderer.subsume($$inner_renderer);
}
const __vite_glob_0_23 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Pagination_1
}, Symbol.toStringTag, { value: "Module" }));
function Popover_1($$renderer) {
  $$renderer.push(`<div class="h-40">`);
  {
    let trigger = function($$renderer2) {
      Button($$renderer2, {
        variant: "outline",
        children: ($$renderer3) => {
          $$renderer3.push(`<!---->Popover`);
        },
        $$slots: { default: true }
      });
    };
    Popover($$renderer, {
      trigger,
      children: ($$renderer2) => {
        $$renderer2.push(`<div class="p-4 w-64"><h4 class="font-medium mb-1">Popover Header</h4> <p class="text-sm text-muted-foreground">Basecoat popovers use vanilla JS to toggle aria-hidden.</p></div>`);
      },
      $$slots: { trigger: true, default: true }
    });
  }
  $$renderer.push(`<!----></div>`);
}
const __vite_glob_0_24 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Popover_1
}, Symbol.toStringTag, { value: "Module" }));
function Progress($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      value = 0,
      max = 100,
      class: className = "",
      $$slots,
      $$events,
      ...rest
    } = $$props;
    const percentage = Math.min(Math.max(value / max * 100, 0), 100);
    $$renderer2.push(`<div${attributes({
      class: clsx([
        "progress h-2 bg-muted rounded-full overflow-hidden w-full",
        className
      ].filter(Boolean).join(" ")),
      ...rest
    })}><div class="bg-primary h-full transition-all duration-300 ease-in-out" role="progressbar"${attr("aria-valuenow", value)} aria-valuemin="0"${attr("aria-valuemax", max)}${attr_style(`width: ${stringify(percentage)}%`)}></div></div>`);
  });
}
function Progress_1($$renderer) {
  $$renderer.push(`<div class="max-w-sm">`);
  Progress($$renderer, { value: 45, max: 100 });
  $$renderer.push(`<!----></div>`);
}
const __vite_glob_0_25 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Progress_1
}, Symbol.toStringTag, { value: "Module" }));
function Radio($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      group = void 0,
      value,
      class: className = "",
      $$slots,
      $$events,
      ...rest
    } = $$props;
    const finalClass = ["input", className].filter(Boolean).join(" ");
    $$renderer2.push(`<input${attributes(
      {
        type: "radio",
        class: clsx(finalClass),
        checked: group === value,
        value,
        ...rest
      },
      "svelte-1ural0q",
      void 0,
      void 0,
      4
    )}/>`);
    bind_props($$props, { group });
  });
}
function Radio_group($$renderer) {
  $$renderer.push(`<div class="flex flex-col gap-3"><div class="flex items-center gap-2">`);
  Radio($$renderer, { id: "option-a", name: "demo-radio", checked: true });
  $$renderer.push(`<!----> `);
  Label($$renderer, {
    for: "option-a",
    children: ($$renderer2) => {
      $$renderer2.push(`<!---->Option A`);
    },
    $$slots: { default: true }
  });
  $$renderer.push(`<!----></div> <div class="flex items-center gap-2">`);
  Radio($$renderer, { id: "option-b", name: "demo-radio" });
  $$renderer.push(`<!----> `);
  Label($$renderer, {
    for: "option-b",
    children: ($$renderer2) => {
      $$renderer2.push(`<!---->Option B`);
    },
    $$slots: { default: true }
  });
  $$renderer.push(`<!----></div></div>`);
}
const __vite_glob_0_26 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Radio_group
}, Symbol.toStringTag, { value: "Module" }));
function Resizable($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      children,
      direction = "horizontal",
      sizes,
      minSize = 100,
      gutterSize = 10,
      class: className = "",
      $$slots,
      $$events,
      ...rest
    } = $$props;
    const finalClass = [
      "resizable-group h-full flex",
      direction === "vertical" ? "flex-col" : "flex-row",
      className
    ].filter(Boolean).join(" ");
    onDestroy(() => {
    });
    $$renderer2.push(`<div${attributes({ class: clsx(finalClass), ...rest })}>`);
    children?.($$renderer2);
    $$renderer2.push(`<!----></div>`);
  });
}
function Resizable_1($$renderer) {
  $$renderer.push(`<div class="border rounded-lg bg-card overflow-hidden h-[300px]">`);
  Resizable($$renderer, {
    direction: "horizontal",
    class: "h-full flex",
    children: ($$renderer2) => {
      $$renderer2.push(`<div class="bg-muted/30 p-4 flex items-center justify-center min-w-[100px]"><span class="font-semibold">Sidebar</span></div> <div class="flex-1">`);
      Resizable($$renderer2, {
        direction: "vertical",
        class: "flex flex-col h-full",
        children: ($$renderer3) => {
          $$renderer3.push(`<div class="bg-background p-4 flex items-center justify-center h-full"><span class="font-semibold">Top Panel</span></div> <div class="bg-muted/30 p-4 flex items-center justify-center h-full"><span class="font-semibold">Bottom Panel</span></div>`);
        },
        $$slots: { default: true }
      });
      $$renderer2.push(`<!----></div>`);
    },
    $$slots: { default: true }
  });
  $$renderer.push(`<!----></div>`);
}
const __vite_glob_0_27 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Resizable_1
}, Symbol.toStringTag, { value: "Module" }));
function Select($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      value = void 0,
      options = [],
      placeholder = "Select an option",
      searchable = false,
      searchPlaceholder = "Search...",
      class: className = "",
      $$slots,
      $$events,
      ...rest
    } = $$props;
    let open = false;
    options.filter((opt) => true);
    const selectedLabel = options.find((opt) => opt.value === value)?.label || placeholder;
    $$renderer2.push(`<div${attributes(
      {
        class: clsx(["select relative", className].filter(Boolean).join(" ")),
        ...rest
      },
      "svelte-1nv8leh"
    )}><button type="button" class="btn btn-outline w-full justify-between"${attr("aria-expanded", open)} aria-haspopup="listbox"><span class="truncate">${escape_html(selectedLabel)}</span> <svg class="opacity-50 shrink-0" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"></path></svg></button> `);
    {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--></div>`);
    bind_props($$props, { value });
  });
}
function Select_1($$renderer) {
  const options = [
    { value: "next", label: "Next.js" },
    { value: "svelte", label: "SvelteKit" },
    { value: "nuxt", label: "Nuxt.js" }
  ];
  let selected = "next";
  let $$settled = true;
  let $$inner_renderer;
  function $$render_inner($$renderer2) {
    $$renderer2.push(`<div class="h-48">`);
    Select($$renderer2, {
      placeholder: "Framework",
      options,
      class: "w-56",
      get value() {
        return selected;
      },
      set value($$value) {
        selected = $$value;
        $$settled = false;
      }
    });
    $$renderer2.push(`<!----></div>`);
  }
  do {
    $$settled = true;
    $$inner_renderer = $$renderer.copy();
    $$render_inner($$inner_renderer);
  } while (!$$settled);
  $$renderer.subsume($$inner_renderer);
}
const __vite_glob_0_28 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Select_1
}, Symbol.toStringTag, { value: "Module" }));
function Sheet($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      open = false,
      side = "right",
      title,
      description,
      children,
      class: className = "",
      $$slots,
      $$events,
      ...rest
    } = $$props;
    if (
      // Lock body scroll when open
      open
    ) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<div class="sheet fixed inset-0 z-50 svelte-e3axyi"><div class="absolute inset-0 bg-black/80 svelte-e3axyi"></div> <div${attributes(
        {
          class: clsx(["sheet-content", className].filter(Boolean).join(" ")),
          "data-side": side,
          ...rest
        },
        "svelte-e3axyi"
      )}><button class="absolute right-4 top-4 opacity-70 hover:opacity-100 transition-opacity svelte-e3axyi" aria-label="Close"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="size-4 svelte-e3axyi"><path d="M18 6 6 18" class="svelte-e3axyi"></path><path d="m6 6 12 12" class="svelte-e3axyi"></path></svg></button> `);
      if (title) {
        $$renderer2.push("<!--[-->");
        $$renderer2.push(`<h2 class="text-lg font-semibold svelte-e3axyi">`);
        if (typeof title === "string") {
          $$renderer2.push("<!--[-->");
          $$renderer2.push(`${escape_html(title)}`);
        } else {
          $$renderer2.push("<!--[!-->");
          title($$renderer2);
          $$renderer2.push(`<!---->`);
        }
        $$renderer2.push(`<!--]--></h2>`);
      } else {
        $$renderer2.push("<!--[!-->");
      }
      $$renderer2.push(`<!--]--> `);
      if (description) {
        $$renderer2.push("<!--[-->");
        $$renderer2.push(`<p class="text-sm text-muted-foreground svelte-e3axyi">`);
        if (typeof description === "string") {
          $$renderer2.push("<!--[-->");
          $$renderer2.push(`${escape_html(description)}`);
        } else {
          $$renderer2.push("<!--[!-->");
          description($$renderer2);
          $$renderer2.push(`<!---->`);
        }
        $$renderer2.push(`<!--]--></p>`);
      } else {
        $$renderer2.push("<!--[!-->");
      }
      $$renderer2.push(`<!--]--> <div class="mt-4 svelte-e3axyi">`);
      children($$renderer2);
      $$renderer2.push(`<!----></div></div></div>`);
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]-->`);
    bind_props($$props, { open });
  });
}
function Sheet_1($$renderer) {
  let leftOpen = false;
  let rightOpen = false;
  let topOpen = false;
  let bottomOpen = false;
  let $$settled = true;
  let $$inner_renderer;
  function $$render_inner($$renderer2) {
    $$renderer2.push(`<div class="flex flex-wrap gap-4">`);
    Button($$renderer2, {
      variant: "outline",
      onclick: () => leftOpen = true,
      children: ($$renderer3) => {
        $$renderer3.push(`<!---->Left`);
      },
      $$slots: { default: true }
    });
    $$renderer2.push(`<!----> `);
    Button($$renderer2, {
      variant: "outline",
      onclick: () => rightOpen = true,
      children: ($$renderer3) => {
        $$renderer3.push(`<!---->Right`);
      },
      $$slots: { default: true }
    });
    $$renderer2.push(`<!----> `);
    Button($$renderer2, {
      variant: "outline",
      onclick: () => topOpen = true,
      children: ($$renderer3) => {
        $$renderer3.push(`<!---->Top`);
      },
      $$slots: { default: true }
    });
    $$renderer2.push(`<!----> `);
    Button($$renderer2, {
      variant: "outline",
      onclick: () => bottomOpen = true,
      children: ($$renderer3) => {
        $$renderer3.push(`<!---->Bottom`);
      },
      $$slots: { default: true }
    });
    $$renderer2.push(`<!----> `);
    Sheet($$renderer2, {
      side: "left",
      title: "Edit Profile",
      description: "Make changes to your profile here. Click save when you're done.",
      get open() {
        return leftOpen;
      },
      set open($$value) {
        leftOpen = $$value;
        $$settled = false;
      },
      children: ($$renderer3) => {
        $$renderer3.push(`<div class="grid gap-4 py-4"><div class="grid grid-cols-4 items-center gap-4"><label for="name" class="text-right text-sm">Name</label> `);
        Input($$renderer3, { id: "name", value: "Pedro Duarte", class: "col-span-3" });
        $$renderer3.push(`<!----></div> <div class="grid grid-cols-4 items-center gap-4"><label for="username" class="text-right text-sm">Username</label> `);
        Input($$renderer3, { id: "username", value: "@peduarte", class: "col-span-3" });
        $$renderer3.push(`<!----></div></div> <div class="flex justify-end">`);
        Button($$renderer3, {
          onclick: () => leftOpen = false,
          children: ($$renderer4) => {
            $$renderer4.push(`<!---->Save changes`);
          },
          $$slots: { default: true }
        });
        $$renderer3.push(`<!----></div>`);
      },
      $$slots: { default: true }
    });
    $$renderer2.push(`<!----> `);
    Sheet($$renderer2, {
      side: "right",
      title: "Edit Profile",
      description: "Make changes to your profile here. Click save when you're done.",
      get open() {
        return rightOpen;
      },
      set open($$value) {
        rightOpen = $$value;
        $$settled = false;
      },
      children: ($$renderer3) => {
        $$renderer3.push(`<div class="grid gap-4 py-4"><div class="grid grid-cols-4 items-center gap-4"><label for="name2" class="text-right text-sm">Name</label> `);
        Input($$renderer3, { id: "name2", value: "Pedro Duarte", class: "col-span-3" });
        $$renderer3.push(`<!----></div> <div class="grid grid-cols-4 items-center gap-4"><label for="username2" class="text-right text-sm">Username</label> `);
        Input($$renderer3, { id: "username2", value: "@peduarte", class: "col-span-3" });
        $$renderer3.push(`<!----></div></div> <div class="flex justify-end">`);
        Button($$renderer3, {
          onclick: () => rightOpen = false,
          children: ($$renderer4) => {
            $$renderer4.push(`<!---->Save changes`);
          },
          $$slots: { default: true }
        });
        $$renderer3.push(`<!----></div>`);
      },
      $$slots: { default: true }
    });
    $$renderer2.push(`<!----> `);
    Sheet($$renderer2, {
      side: "top",
      title: "Edit Profile",
      description: "Make changes to your profile here. Click save when you're done.",
      get open() {
        return topOpen;
      },
      set open($$value) {
        topOpen = $$value;
        $$settled = false;
      },
      children: ($$renderer3) => {
        $$renderer3.push(`<div class="grid gap-4 py-4"><div class="grid grid-cols-4 items-center gap-4"><label for="name3" class="text-right text-sm">Name</label> `);
        Input($$renderer3, { id: "name3", value: "Pedro Duarte", class: "col-span-3" });
        $$renderer3.push(`<!----></div> <div class="grid grid-cols-4 items-center gap-4"><label for="username3" class="text-right text-sm">Username</label> `);
        Input($$renderer3, { id: "username3", value: "@peduarte", class: "col-span-3" });
        $$renderer3.push(`<!----></div></div> <div class="flex justify-end">`);
        Button($$renderer3, {
          onclick: () => topOpen = false,
          children: ($$renderer4) => {
            $$renderer4.push(`<!---->Save changes`);
          },
          $$slots: { default: true }
        });
        $$renderer3.push(`<!----></div>`);
      },
      $$slots: { default: true }
    });
    $$renderer2.push(`<!----> `);
    Sheet($$renderer2, {
      side: "bottom",
      title: "Edit Profile",
      description: "Make changes to your profile here. Click save when you're done.",
      get open() {
        return bottomOpen;
      },
      set open($$value) {
        bottomOpen = $$value;
        $$settled = false;
      },
      children: ($$renderer3) => {
        $$renderer3.push(`<div class="grid gap-4 py-4"><div class="grid grid-cols-4 items-center gap-4"><label for="name4" class="text-right text-sm">Name</label> `);
        Input($$renderer3, { id: "name4", value: "Pedro Duarte", class: "col-span-3" });
        $$renderer3.push(`<!----></div> <div class="grid grid-cols-4 items-center gap-4"><label for="username4" class="text-right text-sm">Username</label> `);
        Input($$renderer3, { id: "username4", value: "@peduarte", class: "col-span-3" });
        $$renderer3.push(`<!----></div></div> <div class="flex justify-end">`);
        Button($$renderer3, {
          onclick: () => bottomOpen = false,
          children: ($$renderer4) => {
            $$renderer4.push(`<!---->Save changes`);
          },
          $$slots: { default: true }
        });
        $$renderer3.push(`<!----></div>`);
      },
      $$slots: { default: true }
    });
    $$renderer2.push(`<!----></div>`);
  }
  do {
    $$settled = true;
    $$inner_renderer = $$renderer.copy();
    $$render_inner($$inner_renderer);
  } while (!$$settled);
  $$renderer.subsume($$inner_renderer);
}
const __vite_glob_0_29 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Sheet_1
}, Symbol.toStringTag, { value: "Module" }));
function Skeleton($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      class: className = "",
      rounded = "md",
      $$slots,
      $$events,
      ...rest
    } = $$props;
    const roundedMap = {
      full: "rounded-full",
      lg: "rounded-lg",
      md: "rounded-md",
      sm: "rounded-sm",
      none: "rounded-none"
    };
    const finalClass = [
      "skeleton bg-muted animate-pulse",
      roundedMap[rounded] || rounded,
      className
    ].filter(Boolean).join(" ");
    $$renderer2.push(`<div${attributes({ class: clsx(finalClass), ...rest })}></div>`);
  });
}
function Skeleton_1($$renderer) {
  $$renderer.push(`<div class="flex items-center gap-4">`);
  Skeleton($$renderer, { class: "h-12 w-12", rounded: "full" });
  $$renderer.push(`<!----> <div class="space-y-2 flex-1">`);
  Skeleton($$renderer, { class: "h-4 w-3/4" });
  $$renderer.push(`<!----> `);
  Skeleton($$renderer, { class: "h-4 w-1/2" });
  $$renderer.push(`<!----></div></div>`);
}
const __vite_glob_0_30 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Skeleton_1
}, Symbol.toStringTag, { value: "Module" }));
function Slider($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      value = 0,
      min = 0,
      max = 100,
      step = 1,
      class: className = "",
      $$slots,
      $$events,
      ...rest
    } = $$props;
    const finalClass = ["slider", className].filter(Boolean).join(" ");
    const sliderPercent = (value - min) / (max - min) * 100;
    $$renderer2.push(`<input${attributes(
      {
        type: "range",
        class: clsx(finalClass),
        value,
        min,
        max,
        step,
        style: `--slider-value: ${stringify(sliderPercent)}%`,
        ...rest
      },
      "svelte-aym2je",
      void 0,
      void 0,
      4
    )}/>`);
    bind_props($$props, { value });
  });
}
function Slider_1($$renderer) {
  let value = 50;
  let $$settled = true;
  let $$inner_renderer;
  function $$render_inner($$renderer2) {
    Slider($$renderer2, {
      min: 0,
      max: 100,
      step: 1,
      class: "w-1/2",
      get value() {
        return value;
      },
      set value($$value) {
        value = $$value;
        $$settled = false;
      }
    });
  }
  do {
    $$settled = true;
    $$inner_renderer = $$renderer.copy();
    $$render_inner($$inner_renderer);
  } while (!$$settled);
  $$renderer.subsume($$inner_renderer);
}
const __vite_glob_0_31 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Slider_1
}, Symbol.toStringTag, { value: "Module" }));
function Spinner($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      class: className = "",
      size = "md",
      $$slots,
      $$events,
      ...rest
    } = $$props;
    const sizeMap = { sm: "h-4 w-4", md: "h-6 w-6", lg: "h-8 w-8" };
    const finalClass = [
      "animate-spin text-primary",
      sizeMap[size] || size,
      className
    ].filter(Boolean).join(" ");
    $$renderer2.push(`<svg${attributes(
      {
        class: clsx(finalClass),
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        ...rest
      },
      void 0,
      void 0,
      void 0,
      3
    )}><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>`);
  });
}
function Spinner_1($$renderer) {
  $$renderer.push(`<div class="flex gap-4">`);
  Spinner($$renderer, { size: "sm" });
  $$renderer.push(`<!----> `);
  Spinner($$renderer, { size: "md" });
  $$renderer.push(`<!----> `);
  Spinner($$renderer, { size: "lg" });
  $$renderer.push(`<!----></div>`);
}
const __vite_glob_0_32 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Spinner_1
}, Symbol.toStringTag, { value: "Module" }));
function Switch($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      checked = false,
      class: className = "",
      $$slots,
      $$events,
      ...rest
    } = $$props;
    const finalClass = ["input", className].filter(Boolean).join(" ");
    $$renderer2.push(`<input${attributes(
      {
        type: "checkbox",
        role: "switch",
        class: clsx(finalClass),
        checked,
        ...rest
      },
      "svelte-1s1p2kh",
      void 0,
      void 0,
      4
    )}/>`);
    bind_props($$props, { checked });
  });
}
function Switch_1($$renderer) {
  $$renderer.push(`<div class="flex flex-col gap-3"><div class="flex items-center gap-2">`);
  Switch($$renderer, { id: "airplane", checked: true });
  $$renderer.push(`<!----> `);
  Label($$renderer, {
    for: "airplane",
    children: ($$renderer2) => {
      $$renderer2.push(`<!---->Airplane Mode`);
    },
    $$slots: { default: true }
  });
  $$renderer.push(`<!----></div> <div class="flex items-center gap-2">`);
  Switch($$renderer, { id: "darkmode" });
  $$renderer.push(`<!----> `);
  Label($$renderer, {
    for: "darkmode",
    children: ($$renderer2) => {
      $$renderer2.push(`<!---->Dark Mode`);
    },
    $$slots: { default: true }
  });
  $$renderer.push(`<!----></div></div>`);
}
const __vite_glob_0_33 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Switch_1
}, Symbol.toStringTag, { value: "Module" }));
function Table($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      header,
      children,
      footer,
      caption,
      class: className = "",
      containerClass = "",
      $$slots,
      $$events,
      ...rest
    } = $$props;
    const finalContainerClass = [
      "border rounded-lg overflow-hidden bg-card w-full",
      containerClass
    ].filter(Boolean).join(" ");
    const finalTableClass = ["table w-full", className].filter(Boolean).join(" ");
    $$renderer2.push(`<div${attr_class(clsx(finalContainerClass), "svelte-j5pjp5")}><table${attributes({ class: clsx(finalTableClass), ...rest }, "svelte-j5pjp5")}>`);
    if (caption) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<caption class="svelte-j5pjp5">`);
      if (typeof caption === "string") {
        $$renderer2.push("<!--[-->");
        $$renderer2.push(`${escape_html(caption)}`);
      } else {
        $$renderer2.push("<!--[!-->");
        caption($$renderer2);
        $$renderer2.push(`<!---->`);
      }
      $$renderer2.push(`<!--]--></caption>`);
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]-->`);
    if (header) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<thead class="svelte-j5pjp5">`);
      header($$renderer2);
      $$renderer2.push(`<!----></thead>`);
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]-->`);
    if (children) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<tbody class="svelte-j5pjp5">`);
      children($$renderer2);
      $$renderer2.push(`<!----></tbody>`);
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]-->`);
    if (footer) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<tfoot class="svelte-j5pjp5">`);
      footer($$renderer2);
      $$renderer2.push(`<!----></tfoot>`);
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--></table></div>`);
  });
}
function Table_1($$renderer) {
  {
    let header = function($$renderer2) {
      $$renderer2.push(`<tr><th>User</th><th>Status</th><th>Role</th></tr>`);
    }, children = function($$renderer2) {
      $$renderer2.push(`<tr><td>Alice</td><td>Active</td><td>Admin</td></tr> <tr><td>Bob</td><td>Inactive</td><td>User</td></tr> <tr><td>Charlie</td><td>Active</td><td>Member</td></tr>`);
    };
    Table($$renderer, { header, children, $$slots: { header: true, default: true } });
  }
}
const __vite_glob_0_34 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Table_1
}, Symbol.toStringTag, { value: "Module" }));
function Tabs($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      items = [],
      activeTab = "",
      class: className = "",
      contentClass = "",
      $$slots,
      $$events,
      ...rest
    } = $$props;
    $$renderer2.push(`<div${attributes(
      {
        class: clsx(["tabs", className].filter(Boolean).join(" ")),
        ...rest
      },
      "svelte-y492ut"
    )}><div role="tablist" tabindex="0" class="svelte-y492ut"><!--[-->`);
    const each_array = ensure_array_like(items);
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let item = each_array[$$index];
      $$renderer2.push(`<button role="tab"${attr("aria-controls", item.id)}${attr("aria-selected", activeTab === item.id)}${attr("tabindex", activeTab === item.id ? 0 : -1)} class="svelte-y492ut">`);
      if (typeof item.label === "string") {
        $$renderer2.push("<!--[-->");
        $$renderer2.push(`${escape_html(item.label)}`);
      } else {
        $$renderer2.push("<!--[!-->");
        item.label($$renderer2);
        $$renderer2.push(`<!---->`);
      }
      $$renderer2.push(`<!--]--></button>`);
    }
    $$renderer2.push(`<!--]--></div> <!--[-->`);
    const each_array_1 = ensure_array_like(items);
    for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
      let item = each_array_1[$$index_1];
      $$renderer2.push(`<section${attr("id", item.id)} role="tabpanel"${attr("hidden", activeTab !== item.id)}${attr_class(clsx(["p-4 border rounded-md mt-4", contentClass].filter(Boolean).join(" ")), "svelte-y492ut")}>`);
      if (activeTab === item.id) {
        $$renderer2.push("<!--[-->");
        if (typeof item.content === "string") {
          $$renderer2.push("<!--[-->");
          $$renderer2.push(`${escape_html(item.content)}`);
        } else {
          $$renderer2.push("<!--[!-->");
          item.content($$renderer2);
          $$renderer2.push(`<!---->`);
        }
        $$renderer2.push(`<!--]-->`);
      } else {
        $$renderer2.push("<!--[!-->");
      }
      $$renderer2.push(`<!--]--></section>`);
    }
    $$renderer2.push(`<!--]--></div>`);
    bind_props($$props, { activeTab });
  });
}
function Tabs_1($$renderer) {
  const items = [
    { id: "general", label: "General", content: "General Content" },
    {
      id: "settings",
      label: "Settings",
      content: "Settings Content"
    }
  ];
  Tabs($$renderer, { items });
}
const __vite_glob_0_35 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Tabs_1
}, Symbol.toStringTag, { value: "Module" }));
function Textarea($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      value = void 0,
      class: className = "",
      rows = 3,
      $$slots,
      $$events,
      ...rest
    } = $$props;
    const finalClass = ["textarea", className].filter(Boolean).join(" ");
    $$renderer2.push(`<textarea${attributes({ class: clsx(finalClass), rows, ...rest }, "svelte-1mdr3o3")}>`);
    const $$body = escape_html(value);
    if ($$body) {
      $$renderer2.push(`${$$body}`);
    }
    $$renderer2.push(`</textarea>`);
    bind_props($$props, { value });
  });
}
function Textarea_1($$renderer) {
  $$renderer.push(`<div class="max-w-sm">`);
  Textarea($$renderer, { rows: 3, placeholder: "Type your message here..." });
  $$renderer.push(`<!----></div>`);
}
const __vite_glob_0_36 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Textarea_1
}, Symbol.toStringTag, { value: "Module" }));
function Toast$1($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    function showToast(category) {
      document.dispatchEvent(new CustomEvent("basecoat:toast", {
        detail: {
          config: {
            title: category === "success" ? "Success!" : "Warning",
            description: category === "success" ? "Operation completed." : "Action restricted.",
            category
          }
        }
      }));
    }
    $$renderer2.push(`<div class="flex gap-4">`);
    Button($$renderer2, {
      variant: "outline",
      onclick: () => showToast("success"),
      children: ($$renderer3) => {
        $$renderer3.push(`<!---->Success Toast`);
      },
      $$slots: { default: true }
    });
    $$renderer2.push(`<!----> `);
    Button($$renderer2, {
      variant: "outline",
      onclick: () => showToast("warning"),
      children: ($$renderer3) => {
        $$renderer3.push(`<!---->Warning Toast`);
      },
      $$slots: { default: true }
    });
    $$renderer2.push(`<!----></div>`);
  });
}
const __vite_glob_0_37 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Toast$1
}, Symbol.toStringTag, { value: "Module" }));
function ToggleGroup($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      children,
      type = "single",
      value = null,
      variant = "default",
      class: className = "",
      $$slots,
      $$events,
      ...rest
    } = $$props;
    function handleToggle(toggleValue) {
      if (type === "single") {
        value = value === toggleValue ? null : toggleValue;
      } else {
        const currentValues = Array.isArray(value) ? value : [];
        if (currentValues.includes(toggleValue)) {
          value = currentValues.filter((v) => v !== toggleValue);
        } else {
          value = [...currentValues, toggleValue];
        }
      }
    }
    function isPressed(toggleValue) {
      if (type === "single") {
        return value === toggleValue;
      }
      return Array.isArray(value) && value.includes(toggleValue);
    }
    setContext("toggle-group", { handleToggle, isPressed, getType: () => type });
    $$renderer2.push(`<div${attributes(
      {
        class: clsx(["toggle-group", className].filter(Boolean).join(" ")),
        role: "group",
        "data-type": type,
        "data-variant": variant,
        ...rest
      },
      "svelte-7403iq"
    )}>`);
    children?.($$renderer2);
    $$renderer2.push(`<!----></div>`);
    bind_props($$props, { value });
  });
}
function Toggle($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      children,
      pressed = false,
      value = "",
      variant = "outline",
      size = "md",
      class: className = "",
      $$slots,
      $$events,
      ...rest
    } = $$props;
    const groupContext = getContext("toggle-group");
    const isInGroup = !!groupContext;
    const isPressed = isInGroup && value ? groupContext.isPressed(value) : pressed;
    const baseClass = "btn toggle";
    const finalClass = [
      baseClass,
      variant !== "primary" ? `btn-${variant}` : "",
      size !== "md" ? `btn-${size}` : "",
      className
    ].filter(Boolean).join(" ");
    $$renderer2.push(`<button${attributes(
      {
        type: "button",
        class: clsx(finalClass),
        "aria-pressed": isPressed,
        "data-value": value || void 0,
        ...rest
      },
      "svelte-1lqre1"
    )}>`);
    children?.($$renderer2);
    $$renderer2.push(`<!----></button>`);
    bind_props($$props, { pressed });
  });
}
function Toggle_group($$renderer) {
  let singleValue = "B";
  let multipleValue = ["Bold"];
  let $$settled = true;
  let $$inner_renderer;
  function $$render_inner($$renderer2) {
    $$renderer2.push(`<div class="space-y-6"><div><h4 class="text-sm font-medium mb-2">Single (Merged)</h4> `);
    {
      let children = function($$renderer3) {
        Toggle($$renderer3, {
          value: "B",
          children: ($$renderer4) => {
            $$renderer4.push(`<!---->B`);
          },
          $$slots: { default: true }
        });
        $$renderer3.push(`<!----> `);
        Toggle($$renderer3, {
          value: "I",
          children: ($$renderer4) => {
            $$renderer4.push(`<!---->I`);
          },
          $$slots: { default: true }
        });
        $$renderer3.push(`<!----> `);
        Toggle($$renderer3, {
          value: "U",
          children: ($$renderer4) => {
            $$renderer4.push(`<!---->U`);
          },
          $$slots: { default: true }
        });
        $$renderer3.push(`<!---->`);
      };
      ToggleGroup($$renderer2, {
        type: "single",
        class: "toggle-group-outline",
        get value() {
          return singleValue;
        },
        set value($$value) {
          singleValue = $$value;
          $$settled = false;
        },
        children,
        $$slots: { default: true }
      });
    }
    $$renderer2.push(`<!----></div> <div><h4 class="text-sm font-medium mb-2">Multiple (Merged)</h4> `);
    {
      let children = function($$renderer3) {
        Toggle($$renderer3, {
          value: "Bold",
          children: ($$renderer4) => {
            $$renderer4.push(`<!---->Bold`);
          },
          $$slots: { default: true }
        });
        $$renderer3.push(`<!----> `);
        Toggle($$renderer3, {
          value: "Italic",
          children: ($$renderer4) => {
            $$renderer4.push(`<!---->Italic`);
          },
          $$slots: { default: true }
        });
        $$renderer3.push(`<!----> `);
        Toggle($$renderer3, {
          value: "Underline",
          children: ($$renderer4) => {
            $$renderer4.push(`<!---->Underline`);
          },
          $$slots: { default: true }
        });
        $$renderer3.push(`<!---->`);
      };
      ToggleGroup($$renderer2, {
        type: "multiple",
        class: "toggle-group-outline",
        get value() {
          return multipleValue;
        },
        set value($$value) {
          multipleValue = $$value;
          $$settled = false;
        },
        children,
        $$slots: { default: true }
      });
    }
    $$renderer2.push(`<!----></div></div>`);
  }
  do {
    $$settled = true;
    $$inner_renderer = $$renderer.copy();
    $$render_inner($$inner_renderer);
  } while (!$$settled);
  $$renderer.subsume($$inner_renderer);
}
const __vite_glob_0_38 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Toggle_group
}, Symbol.toStringTag, { value: "Module" }));
function Toggle_1($$renderer) {
  let bold = false;
  let italic = true;
  let $$settled = true;
  let $$inner_renderer;
  function $$render_inner($$renderer2) {
    $$renderer2.push(`<div class="flex gap-4">`);
    Toggle($$renderer2, {
      variant: "outline",
      "aria-label": "Toggle Bold",
      get pressed() {
        return bold;
      },
      set pressed($$value) {
        bold = $$value;
        $$settled = false;
      },
      children: ($$renderer3) => {
        $$renderer3.push(`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 12a4 4 0 0 0 0-8H6v8"></path><path d="M15 20a4 4 0 0 0 0-8H6v8Z"></path></svg>`);
      },
      $$slots: { default: true }
    });
    $$renderer2.push(`<!----> `);
    Toggle($$renderer2, {
      variant: "outline",
      "aria-label": "Toggle Italic",
      get pressed() {
        return italic;
      },
      set pressed($$value) {
        italic = $$value;
        $$settled = false;
      },
      children: ($$renderer3) => {
        $$renderer3.push(`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="19" x2="10" y1="4" y2="4"></line><line x1="14" x2="5" y1="20" y2="20"></line><line x1="15" x2="9" y1="4" y2="20"></line></svg>`);
      },
      $$slots: { default: true }
    });
    $$renderer2.push(`<!----></div>`);
  }
  do {
    $$settled = true;
    $$inner_renderer = $$renderer.copy();
    $$render_inner($$inner_renderer);
  } while (!$$settled);
  $$renderer.subsume($$inner_renderer);
}
const __vite_glob_0_39 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Toggle_1
}, Symbol.toStringTag, { value: "Module" }));
function Tooltip($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      children,
      content,
      side = "top",
      class: className = "",
      $$slots,
      $$events,
      ...rest
    } = $$props;
    $$renderer2.push(`<div${attributes(
      {
        class: clsx(["inline-block", className].filter(Boolean).join(" ")),
        "data-tooltip": content,
        "data-side": side,
        ...rest
      },
      "svelte-1due7wm"
    )}>`);
    children($$renderer2);
    $$renderer2.push(`<!----></div>`);
  });
}
function Tooltip_1($$renderer) {
  $$renderer.push(`<div class="flex gap-4">`);
  Tooltip($$renderer, {
    content: "Settings",
    side: "top",
    children: ($$renderer2) => {
      Button($$renderer2, {
        variant: "outline",
        size: "sm",
        children: ($$renderer3) => {
          $$renderer3.push(`<!---->Top`);
        },
        $$slots: { default: true }
      });
    },
    $$slots: { default: true }
  });
  $$renderer.push(`<!----> `);
  Tooltip($$renderer, {
    content: "User profile",
    side: "bottom",
    children: ($$renderer2) => {
      Button($$renderer2, {
        variant: "outline",
        size: "sm",
        children: ($$renderer3) => {
          $$renderer3.push(`<!---->Bottom`);
        },
        $$slots: { default: true }
      });
    },
    $$slots: { default: true }
  });
  $$renderer.push(`<!----></div>`);
}
const __vite_glob_0_40 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Tooltip_1
}, Symbol.toStringTag, { value: "Module" }));
const __vite_glob_1_0 = `<script lang="ts">
  import Accordion from '@lanrenbang/basecoat-ultra-svelte/components/Accordion.svelte';
  
  const items = [
    { title: 'Is it accessible?', content: 'Yes. It adheres to the WAI-ARIA design pattern.', open: true },
    { title: 'Is it styled?', content: 'Yes. It comes with default styles.' }
  ];
<\/script>

<div class="max-w-md">
  <Accordion {items} />
</div>
`;
const __vite_glob_1_1 = `<script lang="ts">
  import Alert from '@lanrenbang/basecoat-ultra-svelte/components/Alert.svelte';
<\/script>

<div class="space-y-3 max-w-lg">
  <Alert title="Information">
    {#snippet icon()}
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>
    {/snippet}
    A new version of Basecoat is available.
  </Alert>
  <Alert variant="destructive" title="Error">
    {#snippet icon()}
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="m15 9-6 6"/><path d="m9 9 6 6"/></svg>
    {/snippet}
    Failed to sync data with the server.
  </Alert>
</div>
`;
const __vite_glob_1_2 = `<script lang="ts">
  import Avatar from '@lanrenbang/basecoat-ultra-svelte/components/Avatar.svelte';
<\/script>

<div class="flex gap-4">
  <Avatar src="https://github.com/hunvreus.png" alt="@hunvreus" />
  <Avatar fallback="RB" />
</div>
`;
const __vite_glob_1_3 = `<script lang="ts">
  import Badge from '@lanrenbang/basecoat-ultra-svelte/components/Badge.svelte';
<\/script>

<div class="flex flex-wrap gap-2">
  <Badge>Default</Badge>
  <Badge variant="secondary">Secondary</Badge>
  <Badge variant="destructive">Destructive</Badge>
  <Badge variant="outline">Outline</Badge>
</div>
`;
const __vite_glob_1_4 = `<script lang="ts">
  import Breadcrumb from '@lanrenbang/basecoat-ultra-svelte/components/Breadcrumb.svelte';
  
  const items = [
    { label: 'Home', href: '#' },
    { label: 'Components', href: '#' },
    { label: 'Breadcrumb', current: true }
  ];
<\/script>

<Breadcrumb {items} />
`;
const __vite_glob_1_5 = `<script lang="ts">
  import Button from '@lanrenbang/basecoat-ultra-svelte/components/Button.svelte';
  import ButtonGroup from '@lanrenbang/basecoat-ultra-svelte/components/ButtonGroup.svelte';
<\/script>

<ButtonGroup>
  <Button variant="outline">Left</Button>
  <Button variant="outline">Middle</Button>
  <Button variant="outline">Right</Button>
</ButtonGroup>
`;
const __vite_glob_1_6 = `<script lang="ts">
  import Button from '@lanrenbang/basecoat-ultra-svelte/components/Button.svelte';
<\/script>

<div class="flex flex-wrap gap-4 items-center">
  <Button>Default</Button>
  <Button variant="primary">Primary</Button>
  <Button variant="secondary">Secondary</Button>
  <Button variant="outline">Outline</Button>
  <Button variant="ghost">Ghost</Button>
  <Button variant="destructive">Destructive</Button>
  <Button variant="link">Link</Button>
</div>

<div class="flex flex-wrap gap-4 items-center mt-8">
  <Button size="sm">Small</Button>
  <Button size="lg">Large</Button>
  <Button size="icon" aria-label="Icon only">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m5 12 7-7 7 7"/><path d="M12 19V5"/></svg>
  </Button>
  <Button disabled>Disabled</Button>
</div>
`;
const __vite_glob_1_7 = `<script lang="ts">
  import Card from '@lanrenbang/basecoat-ultra-svelte/components/Card.svelte';
  import Button from '@lanrenbang/basecoat-ultra-svelte/components/Button.svelte';
<\/script>

<Card class="max-w-md">
  {#snippet header()}
    <h2>Card Title</h2>
    <p>A short description of the card.</p>
  {/snippet}

  <p>Card content goes here. Basecoat cards use semantic HTML.</p>

  {#snippet footer()}
    <Button variant="primary" class="w-full">Get Started</Button>
  {/snippet}
</Card>
`;
const __vite_glob_1_8 = `<script lang="ts">
  import Carousel from '@lanrenbang/basecoat-ultra-svelte/components/Carousel.svelte';
  
  const items = [1, 2, 3, 4, 5];
<\/script>

<div class="p-12 space-y-10">
  <div>
    <h4 class="text-sm font-medium mb-4">Horizontal</h4>
    <div class="w-full max-w-sm mx-auto">
      <Carousel>
        {#snippet children()}
          {#each items as n}
            <div class="carousel-item pl-4">
              <div class="p-1 h-48 rounded-lg bg-muted flex items-center justify-center text-4xl font-semibold">{n}</div>
            </div>
          {/each}
        {/snippet}
      </Carousel>
    </div>
  </div>

  <div>
    <h4 class="text-sm font-medium mb-4">Vertical</h4>
    <div class="w-full max-w-xs mx-auto">
      <Carousel orientation="vertical" style="--carousel-height: 200px;">
        {#snippet children()}
          {#each items as n}
            <div class="carousel-item pt-4">
              <div class="p-1 h-full rounded-lg bg-muted flex items-center justify-center text-4xl font-semibold">{n}</div>
            </div>
          {/each}
        {/snippet}
      </Carousel>
    </div>
  </div>
</div>`;
const __vite_glob_1_9 = `<script lang="ts">
  import Checkbox from '@lanrenbang/basecoat-ultra-svelte/components/Checkbox.svelte';
  import Label from '@lanrenbang/basecoat-ultra-svelte/components/Label.svelte';
<\/script>

<div class="flex flex-col gap-3">
  <div class="flex items-center gap-2">
    <Checkbox id="terms" />
    <Label for="terms">Accept terms and conditions</Label>
  </div>
  <div class="flex items-center gap-2">
    <Checkbox id="newsletter" checked />
    <Label for="newsletter">Subscribe to newsletter</Label>
  </div>
</div>
`;
const __vite_glob_1_10 = `<script lang="ts">
  import Command from '@lanrenbang/basecoat-ultra-svelte/components/Command.svelte';
  import Popover from '@lanrenbang/basecoat-ultra-svelte/components/Popover.svelte';
  import Button from '@lanrenbang/basecoat-ultra-svelte/components/Button.svelte';

  let open = $state(false);
  let selected = $state('ny'); // 默认选中 New York
  let selectedLabel = $state('New York');
  let searchValue = $state('');

  function handleSelect(value: string, label: string) {
    selected = value;
    selectedLabel = label;
    open = false;
    searchValue = '';
  }
<\/script>

<div class="h-64">
  <div class="select w-56">
    <Popover bind:open align="start">
      {#snippet trigger()}
        <Button variant="outline" class="w-full justify-between" aria-expanded={open}>
          <span>{selectedLabel}</span>
          <svg class="opacity-50" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>
        </Button>
      {/snippet}
      
      {#snippet children()}
        <div class="w-full p-0">
          <Command bind:value={searchValue} placeholder="Search timezone..." class="border-0 shadow-none bg-transparent">
            {#snippet children()}
              <div role="group">
                <div role="heading" aria-level="3" class="px-2 py-1.5 text-xs font-medium text-muted-foreground">Americas</div>
                <button role="menuitem" class="w-full text-left cursor-default flex items-center gap-2 rounded-sm px-2 py-1.5 text-sm hover:bg-accent hover:text-accent-foreground" onclick={() => handleSelect('ny', 'New York')}>
                  New York
                  {#if selected === 'ny'}
                    <svg class="ml-auto size-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
                  {/if}
                </button>
                <button role="menuitem" class="w-full text-left cursor-default flex items-center gap-2 rounded-sm px-2 py-1.5 text-sm hover:bg-accent hover:text-accent-foreground" onclick={() => handleSelect('la', 'Los Angeles')}>
                  Los Angeles
                  {#if selected === 'la'}
                    <svg class="ml-auto size-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
                  {/if}
                </button>
              </div>
              <div role="group">
                <div role="heading" aria-level="3" class="px-2 py-1.5 text-xs font-medium text-muted-foreground">Europe</div>
                <button role="menuitem" class="w-full text-left cursor-default flex items-center gap-2 rounded-sm px-2 py-1.5 text-sm hover:bg-accent hover:text-accent-foreground" onclick={() => handleSelect('ldn', 'London')}>
                  London
                  {#if selected === 'ldn'}
                    <svg class="ml-auto size-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
                  {/if}
                </button>
                <button role="menuitem" class="w-full text-left cursor-default flex items-center gap-2 rounded-sm px-2 py-1.5 text-sm hover:bg-accent hover:text-accent-foreground" onclick={() => handleSelect('par', 'Paris')}>
                  Paris
                  {#if selected === 'par'}
                    <svg class="ml-auto size-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
                  {/if}
                </button>
              </div>
            {/snippet}
          </Command>
        </div>
      {/snippet}
    </Popover>
    <input type="hidden" name="timezone" value={selected} />
  </div>
</div>
`;
const __vite_glob_1_11 = `<script lang="ts">
  import Command from '@lanrenbang/basecoat-ultra-svelte/components/Command.svelte';
<\/script>

<Command placeholder="Search..." class="max-w-sm bg-background border rounded-lg shadow-sm">
  {#snippet children()}
    <div role="group">
      <div role="heading" aria-level="3" class="px-2 py-1.5 text-xs font-medium text-muted-foreground">Links</div>
      <button role="menuitem" class="w-full text-left cursor-default flex items-center gap-2 rounded-sm px-2 py-1.5 text-sm hover:bg-accent hover:text-accent-foreground">Documentation</button>
      <button role="menuitem" class="w-full text-left cursor-default flex items-center gap-2 rounded-sm px-2 py-1.5 text-sm hover:bg-accent hover:text-accent-foreground">GitHub Repository</button>
    </div>
    <div role="group">
      <div role="heading" aria-level="3" class="px-2 py-1.5 text-xs font-medium text-muted-foreground">Settings</div>
      <button role="menuitem" class="w-full text-left cursor-default flex items-center gap-2 rounded-sm px-2 py-1.5 text-sm hover:bg-accent hover:text-accent-foreground">Profile</button>
      <button role="menuitem" class="w-full text-left cursor-default flex items-center gap-2 rounded-sm px-2 py-1.5 text-sm hover:bg-accent hover:text-accent-foreground">Preferences</button>
      <button role="menuitem" class="w-full text-left cursor-default flex items-center gap-2 rounded-sm px-2 py-1.5 text-sm hover:bg-accent hover:text-accent-foreground">Keyboard Shortcuts</button>
    </div>
  {/snippet}
</Command>
`;
const __vite_glob_1_12 = `<script lang="ts">
  import DatePicker from '@lanrenbang/basecoat-ultra-svelte/components/DatePicker.svelte';
  import Label from '@lanrenbang/basecoat-ultra-svelte/components/Label.svelte';
  
  let zhDate = $state('');
  let zhTwDate = $state('');
  let enFullDate = $state('');
  let enShortDate = $state('');
<\/script>

<div class="flex flex-col gap-6">
  <div class="max-w-xs">
    <Label>Simplified Chinese</Label>
    <DatePicker bind:value={zhDate} locale="zh" placeholder="选择日期" />
  </div>
  <div class="max-w-xs">
    <Label>Traditional Chinese</Label>
    <DatePicker bind:value={zhTwDate} locale="zh-tw" placeholder="選擇日期" />
  </div>
  <div class="max-w-xs">
    <Label>English (Full Names)</Label>
    <DatePicker bind:value={enFullDate} locale="en-full" placeholder="Select date" />
  </div>
  <div class="max-w-xs">
    <Label>English (Abbreviated)</Label>
    <DatePicker bind:value={enShortDate} locale="en-short" placeholder="Select date" />
  </div>
  <div class="max-w-xs">
    <Label>Inline Calendar</Label>
    <DatePicker inline locale="zh" />
  </div>
</div>
`;
const __vite_glob_1_13 = `<script lang="ts">
  import Dialog from '@lanrenbang/basecoat-ultra-svelte/components/Dialog.svelte';
  import Button from '@lanrenbang/basecoat-ultra-svelte/components/Button.svelte';
  import Input from '@lanrenbang/basecoat-ultra-svelte/components/Input.svelte';
  import Label from '@lanrenbang/basecoat-ultra-svelte/components/Label.svelte';

  let dialogOpen = $state(false);
  let alertOpen = $state(false);
<\/script>

<div class="flex gap-4">
  <Button variant="outline" onclick={() => dialogOpen = true}>Open Dialog</Button>
  <Dialog bind:open={dialogOpen} title="Edit Profile" description="Make changes to your profile here. Click save when you're done.">
    <div class="space-y-4">
      <div class="grid grid-cols-4 items-center gap-4">
        <Label class="text-right">Name</Label>
        <Input class="col-span-3" value="Pedro Duarte" />
      </div>
      <div class="grid grid-cols-4 items-center gap-4">
        <Label class="text-right">Username</Label>
        <Input class="col-span-3" value="@peduarte" />
      </div>
    </div>
    {#snippet footer()}
      <Button variant="primary" onclick={() => dialogOpen = false}>Save changes</Button>
    {/snippet}
  </Dialog>

  <Button variant="destructive" onclick={() => alertOpen = true}>Open Alert Dialog</Button>
  <Dialog bind:open={alertOpen} role="alertdialog" title="Are you absolutely sure?" description="This action cannot be undone. This will permanently delete your account.">
    <div></div>
    {#snippet footer()}
      <Button variant="outline" onclick={() => alertOpen = false}>Cancel</Button>
      <Button variant="destructive" onclick={() => alertOpen = false}>Delete</Button>
    {/snippet}
  </Dialog>
</div>
`;
const __vite_glob_1_14 = `<script lang="ts">
  import Drawer from '@lanrenbang/basecoat-ultra-svelte/components/Drawer.svelte';
  import Button from '@lanrenbang/basecoat-ultra-svelte/components/Button.svelte';

  let open = $state(false);
  let goal = $state(350);
<\/script>

<div>
  <Button variant="outline" onclick={() => open = true}>Open Drawer</Button>

  <Drawer bind:open title="Move Goal" description="Set your daily activity goal.">
    <div class="p-4 pb-0">
      <div class="flex items-center justify-center space-x-2">
        <Button variant="outline" icon class="rounded-full" onclick={() => goal = Math.max(0, goal - 10)} aria-label="Decrease">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/></svg>
        </Button>
        <div class="flex-1 text-center">
          <div class="text-7xl font-bold tracking-tighter">{goal}</div>
          <div class="text-[0.70rem] uppercase text-muted-foreground">Calories/day</div>
        </div>
        <Button variant="outline" icon class="rounded-full" onclick={() => goal += 10} aria-label="Increase">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="M12 5v14"/></svg>
        </Button>
      </div>
    </div>
    <div class="mt-auto flex flex-col gap-2 p-4">
      <Button variant="primary" onclick={() => open = false}>Submit</Button>
      <Button variant="outline" onclick={() => open = false}>Cancel</Button>
    </div>
  </Drawer>
</div>
`;
const __vite_glob_1_15 = `<script lang="ts">
  import DropdownMenu from '@lanrenbang/basecoat-ultra-svelte/components/DropdownMenu.svelte';
  import Button from '@lanrenbang/basecoat-ultra-svelte/components/Button.svelte';
<\/script>

<div class="h-48">
  <DropdownMenu>
    {#snippet trigger({ open })}
      <Button variant="outline" aria-expanded={open}>Options</Button>
    {/snippet}
    {#snippet children()}
      <div role="heading" aria-level="2" class="px-2 py-1.5 text-sm font-semibold text-muted-foreground">Manage</div>
      <button role="menuitem" class="w-full text-left cursor-default flex items-center gap-2 rounded-sm px-2 py-1.5 text-sm hover:bg-accent hover:text-accent-foreground">Profile</button>
      <button role="menuitem" class="w-full text-left cursor-default flex items-center gap-2 rounded-sm px-2 py-1.5 text-sm hover:bg-accent hover:text-accent-foreground">Team</button>
      <hr class="my-1 border-muted">
      <button role="menuitem" class="w-full text-left cursor-default flex items-center gap-2 rounded-sm px-2 py-1.5 text-sm hover:bg-accent hover:text-accent-foreground text-destructive">Logout</button>
    {/snippet}
  </DropdownMenu>
</div>
`;
const __vite_glob_1_16 = `<script lang="ts">
  import Empty from '@lanrenbang/basecoat-ultra-svelte/components/Empty.svelte';
<\/script>

<Empty title="No results found" description="Try adjusting your search filters.">
  {#snippet icon()}
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M3 9h18"/><path d="M9 21V9"/></svg>
  {/snippet}
</Empty>
`;
const __vite_glob_1_17 = `<script lang="ts">
  import Input from '@lanrenbang/basecoat-ultra-svelte/components/Input.svelte';
  import Label from '@lanrenbang/basecoat-ultra-svelte/components/Label.svelte';
<\/script>

<div class="max-w-md">
  <form class="form space-y-4">
    <div class="field">
      <Label for="f-email">Email Address</Label>
      <Input type="email" id="f-email" placeholder="name@example.com" />
      <p class="text-xs text-muted-foreground mt-1.5">We'll never share your email.</p>
    </div>
    <div class="field" data-invalid="true">
      <Label for="f-username">Username</Label>
      <Input type="text" id="f-username" value="error_user" />
      <span role="alert" class="text-xs text-destructive mt-1.5 block">Username is already taken.</span>
    </div>
  </form>
</div>
`;
const __vite_glob_1_18 = `<script lang="ts">
  import Input from '@lanrenbang/basecoat-ultra-svelte/components/Input.svelte';
  import Button from '@lanrenbang/basecoat-ultra-svelte/components/Button.svelte';
<\/script>

<div class="grid gap-6 max-w-sm">
  <!-- Icon Prefix -->
  <div class="relative">
    <Input class="pl-9" placeholder="Search..." />
    <div class="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none text-muted-foreground [&>svg]:size-4">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
    </div>
  </div>
  <!-- Text Suffix -->
  <div class="relative">
    <Input class="pr-12" placeholder="domain" />
    <div class="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-muted-foreground text-sm">.com</div>
  </div>
  <!-- Button Suffix -->
  <div class="relative">
    <Input class="pr-20" placeholder="Email" />
    <Button variant="secondary" size="sm" class="absolute right-1 top-1/2 -translate-y-1/2 h-7 px-2">Invite</Button>
  </div>
</div>
`;
const __vite_glob_1_19 = `<script lang="ts">
  import InputOTP from '@lanrenbang/basecoat-ultra-svelte/components/InputOTP.svelte';
  let value1 = $state('');
  let value2 = $state('');
<\/script>

<div class="space-y-8">
  <div>
    <h4 class="text-sm font-medium mb-2">Default (Connected)</h4>
    <InputOTP length={6} bind:value={value1} />
  </div>
  <div>
    <h4 class="text-sm font-medium mb-2">Separated Groups</h4>
    <InputOTP length={6} bind:value={value2} separatorIndices={[3]}>
      {#snippet separator()}
        <span class="text-muted-foreground">-</span>
      {/snippet}
    </InputOTP>
  </div>
</div>
`;
const __vite_glob_1_20 = `<script lang="ts">
  import Input from '@lanrenbang/basecoat-ultra-svelte/components/Input.svelte';
<\/script>

<div class="grid gap-4 max-w-sm">
  <Input type="text" placeholder="Text Input" />
  <Input type="email" placeholder="Email Address" />
  <Input type="password" value="password" />
  <Input type="text" placeholder="Disabled" disabled />
</div>
`;
const __vite_glob_1_21 = `<script lang="ts">
  import Item from '@lanrenbang/basecoat-ultra-svelte/components/Item.svelte';
<\/script>

<div class="max-w-sm border rounded-lg overflow-hidden">
  <Item title="Transactions" description="Manage your billing history.">
    {#snippet icon()}
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
    {/snippet}
  </Item>
  <Item title="Profile" description="Update your personal information.">
    {#snippet icon()}
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
    {/snippet}
  </Item>
</div>
`;
const __vite_glob_1_22 = `<script lang="ts">
  import Kbd from '@lanrenbang/basecoat-ultra-svelte/components/Kbd.svelte';
<\/script>

<div class="flex flex-wrap gap-2 items-center">
  <Kbd>⌘</Kbd>
  <Kbd>⇧</Kbd>
  <Kbd>⌥</Kbd>
  <Kbd>⌃</Kbd>
  <Kbd>Ctrl</Kbd>
  <span>+</span>
  <Kbd>B</Kbd>
</div>
`;
const __vite_glob_1_23 = `<script lang="ts">
  import Pagination from '@lanrenbang/basecoat-ultra-svelte/components/Pagination.svelte';
  let current = $state(1);
<\/script>

<Pagination total={5} bind:current />
`;
const __vite_glob_1_24 = `<script lang="ts">
  import Popover from '@lanrenbang/basecoat-ultra-svelte/components/Popover.svelte';
  import Button from '@lanrenbang/basecoat-ultra-svelte/components/Button.svelte';
<\/script>

<div class="h-40">
  <Popover>
    {#snippet trigger()}
      <Button variant="outline">Popover</Button>
    {/snippet}
    <div class="p-4 w-64">
      <h4 class="font-medium mb-1">Popover Header</h4>
      <p class="text-sm text-muted-foreground">Basecoat popovers use vanilla JS to toggle aria-hidden.</p>
    </div>
  </Popover>
</div>
`;
const __vite_glob_1_25 = `<script lang="ts">
  import Progress from '@lanrenbang/basecoat-ultra-svelte/components/Progress.svelte';
<\/script>

<div class="max-w-sm">
  <Progress value={45} max={100} />
</div>
`;
const __vite_glob_1_26 = `<script lang="ts">
  import Radio from '@lanrenbang/basecoat-ultra-svelte/components/Radio.svelte';
  import Label from '@lanrenbang/basecoat-ultra-svelte/components/Label.svelte';
<\/script>

<div class="flex flex-col gap-3">
  <div class="flex items-center gap-2">
    <Radio id="option-a" name="demo-radio" checked />
    <Label for="option-a">Option A</Label>
  </div>
  <div class="flex items-center gap-2">
    <Radio id="option-b" name="demo-radio" />
    <Label for="option-b">Option B</Label>
  </div>
</div>
`;
const __vite_glob_1_27 = `<script lang="ts">
  import Resizable from '@lanrenbang/basecoat-ultra-svelte/components/Resizable.svelte';
<\/script>

<div class="border rounded-lg bg-card overflow-hidden h-[300px]">
  <Resizable direction="horizontal" class="h-full flex">
    <div class="bg-muted/30 p-4 flex items-center justify-center min-w-[100px]">
      <span class="font-semibold">Sidebar</span>
    </div>
    <div class="flex-1">
      <Resizable direction="vertical" class="flex flex-col h-full">
        <div class="bg-background p-4 flex items-center justify-center h-full">
          <span class="font-semibold">Top Panel</span>
        </div>
        <div class="bg-muted/30 p-4 flex items-center justify-center h-full">
          <span class="font-semibold">Bottom Panel</span>
        </div>
      </Resizable>
    </div>
  </Resizable>
</div>
`;
const __vite_glob_1_28 = `<script lang="ts">
  import Select from '@lanrenbang/basecoat-ultra-svelte/components/Select.svelte';

  const options = [
    { value: 'next', label: 'Next.js' },
    { value: 'svelte', label: 'SvelteKit' },
    { value: 'nuxt', label: 'Nuxt.js' }
  ];

  let selected = $state('next'); // 默认选中第一项
<\/script>

<div class="h-48">
  <Select 
    placeholder="Framework" 
    {options} 
    bind:value={selected}
    class="w-56"
  />
</div>
`;
const __vite_glob_1_29 = `<script lang="ts">
  import Sheet from '@lanrenbang/basecoat-ultra-svelte/components/Sheet.svelte';
  import Button from '@lanrenbang/basecoat-ultra-svelte/components/Button.svelte';
  import Input from '@lanrenbang/basecoat-ultra-svelte/components/Input.svelte';

  let leftOpen = $state(false);
  let rightOpen = $state(false);
  let topOpen = $state(false);
  let bottomOpen = $state(false);
<\/script>

<div class="flex flex-wrap gap-4">
  <Button variant="outline" onclick={() => leftOpen = true}>Left</Button>
  <Button variant="outline" onclick={() => rightOpen = true}>Right</Button>
  <Button variant="outline" onclick={() => topOpen = true}>Top</Button>
  <Button variant="outline" onclick={() => bottomOpen = true}>Bottom</Button>

  <Sheet bind:open={leftOpen} side="left" title="Edit Profile" description="Make changes to your profile here. Click save when you're done.">
    <div class="grid gap-4 py-4">
      <div class="grid grid-cols-4 items-center gap-4">
        <label for="name" class="text-right text-sm">Name</label>
        <Input id="name" value="Pedro Duarte" class="col-span-3" />
      </div>
      <div class="grid grid-cols-4 items-center gap-4">
        <label for="username" class="text-right text-sm">Username</label>
        <Input id="username" value="@peduarte" class="col-span-3" />
      </div>
    </div>
    <div class="flex justify-end">
      <Button onclick={() => leftOpen = false}>Save changes</Button>
    </div>
  </Sheet>
  <Sheet bind:open={rightOpen} side="right" title="Edit Profile" description="Make changes to your profile here. Click save when you're done.">
    <div class="grid gap-4 py-4">
      <div class="grid grid-cols-4 items-center gap-4">
        <label for="name2" class="text-right text-sm">Name</label>
        <Input id="name2" value="Pedro Duarte" class="col-span-3" />
      </div>
      <div class="grid grid-cols-4 items-center gap-4">
        <label for="username2" class="text-right text-sm">Username</label>
        <Input id="username2" value="@peduarte" class="col-span-3" />
      </div>
    </div>
    <div class="flex justify-end">
      <Button onclick={() => rightOpen = false}>Save changes</Button>
    </div>
  </Sheet>
  <Sheet bind:open={topOpen} side="top" title="Edit Profile" description="Make changes to your profile here. Click save when you're done.">
    <div class="grid gap-4 py-4">
      <div class="grid grid-cols-4 items-center gap-4">
        <label for="name3" class="text-right text-sm">Name</label>
        <Input id="name3" value="Pedro Duarte" class="col-span-3" />
      </div>
      <div class="grid grid-cols-4 items-center gap-4">
        <label for="username3" class="text-right text-sm">Username</label>
        <Input id="username3" value="@peduarte" class="col-span-3" />
      </div>
    </div>
    <div class="flex justify-end">
      <Button onclick={() => topOpen = false}>Save changes</Button>
    </div>
  </Sheet>
  <Sheet bind:open={bottomOpen} side="bottom" title="Edit Profile" description="Make changes to your profile here. Click save when you're done.">
    <div class="grid gap-4 py-4">
      <div class="grid grid-cols-4 items-center gap-4">
        <label for="name4" class="text-right text-sm">Name</label>
        <Input id="name4" value="Pedro Duarte" class="col-span-3" />
      </div>
      <div class="grid grid-cols-4 items-center gap-4">
        <label for="username4" class="text-right text-sm">Username</label>
        <Input id="username4" value="@peduarte" class="col-span-3" />
      </div>
    </div>
    <div class="flex justify-end">
      <Button onclick={() => bottomOpen = false}>Save changes</Button>
    </div>
  </Sheet>
</div>`;
const __vite_glob_1_30 = `<script lang="ts">
  import Skeleton from '@lanrenbang/basecoat-ultra-svelte/components/Skeleton.svelte';
<\/script>

<div class="flex items-center gap-4">
  <Skeleton class="h-12 w-12" rounded="full" />
  <div class="space-y-2 flex-1">
    <Skeleton class="h-4 w-3/4" />
    <Skeleton class="h-4 w-1/2" />
  </div>
</div>
`;
const __vite_glob_1_31 = `<script lang="ts">
  import Slider from '@lanrenbang/basecoat-ultra-svelte/components/Slider.svelte';
  let value = $state(50);
<\/script>

<Slider bind:value min={0} max={100} step={1} class="w-1/2" />
`;
const __vite_glob_1_32 = `<script lang="ts">
  import Spinner from '@lanrenbang/basecoat-ultra-svelte/components/Spinner.svelte';
<\/script>

<div class="flex gap-4">
  <Spinner size="sm" />
  <Spinner size="md" />
  <Spinner size="lg" />
</div>
`;
const __vite_glob_1_33 = `<script lang="ts">
  import Switch from '@lanrenbang/basecoat-ultra-svelte/components/Switch.svelte';
  import Label from '@lanrenbang/basecoat-ultra-svelte/components/Label.svelte';
<\/script>

<div class="flex flex-col gap-3">
  <div class="flex items-center gap-2">
    <Switch id="airplane" checked />
    <Label for="airplane">Airplane Mode</Label>
  </div>
  <div class="flex items-center gap-2">
    <Switch id="darkmode" />
    <Label for="darkmode">Dark Mode</Label>
  </div>
</div>
`;
const __vite_glob_1_34 = `<script lang="ts">
  import Table from '@lanrenbang/basecoat-ultra-svelte/components/Table.svelte';
<\/script>

<Table>
  {#snippet header()}
    <tr>
      <th>User</th>
      <th>Status</th>
      <th>Role</th>
    </tr>
  {/snippet}
  {#snippet children()}
    <tr><td>Alice</td><td>Active</td><td>Admin</td></tr>
    <tr><td>Bob</td><td>Inactive</td><td>User</td></tr>
    <tr><td>Charlie</td><td>Active</td><td>Member</td></tr>
  {/snippet}
</Table>
`;
const __vite_glob_1_35 = `<script lang="ts">
  import Tabs from '@lanrenbang/basecoat-ultra-svelte/components/Tabs.svelte';
  
  const items = [
    { id: 'general', label: 'General', content: 'General Content' },
    { id: 'settings', label: 'Settings', content: 'Settings Content' }
  ];
<\/script>

<Tabs {items} />
`;
const __vite_glob_1_36 = `<script lang="ts">
  import Textarea from '@lanrenbang/basecoat-ultra-svelte/components/Textarea.svelte';
<\/script>

<div class="max-w-sm">
  <Textarea rows={3} placeholder="Type your message here..." />
</div>
`;
const __vite_glob_1_37 = `<script lang="ts">
  import Button from '@lanrenbang/basecoat-ultra-svelte/components/Button.svelte';
  
  function showToast(category: string) {
    document.dispatchEvent(new CustomEvent('basecoat:toast', { 
      detail: { 
        config: { 
          title: category === 'success' ? 'Success!' : 'Warning', 
          description: category === 'success' ? 'Operation completed.' : 'Action restricted.', 
          category 
        } 
      } 
    }));
  }
<\/script>

<div class="flex gap-4">
  <Button variant="outline" onclick={() => showToast('success')}>Success Toast</Button>
  <Button variant="outline" onclick={() => showToast('warning')}>Warning Toast</Button>
</div>
`;
const __vite_glob_1_38 = `<script lang="ts">
  import ToggleGroup from '@lanrenbang/basecoat-ultra-svelte/components/ToggleGroup.svelte';
  import Toggle from '@lanrenbang/basecoat-ultra-svelte/components/Toggle.svelte';
  
  let singleValue = $state<string | null>('B');
  let multipleValue = $state<string[]>(['Bold']);
<\/script>

<div class="space-y-6">
  <div>
    <h4 class="text-sm font-medium mb-2">Single (Merged)</h4>
    <ToggleGroup type="single" bind:value={singleValue} class="toggle-group-outline">
      {#snippet children()}
        <Toggle value="B">B</Toggle>
        <Toggle value="I">I</Toggle>
        <Toggle value="U">U</Toggle>
      {/snippet}
    </ToggleGroup>
  </div>
  <div>
    <h4 class="text-sm font-medium mb-2">Multiple (Merged)</h4>
    <ToggleGroup type="multiple" bind:value={multipleValue} class="toggle-group-outline">
      {#snippet children()}
        <Toggle value="Bold">Bold</Toggle>
        <Toggle value="Italic">Italic</Toggle>
        <Toggle value="Underline">Underline</Toggle>
      {/snippet}
    </ToggleGroup>
  </div>
</div>
`;
const __vite_glob_1_39 = `<script lang="ts">
  import Toggle from '@lanrenbang/basecoat-ultra-svelte/components/Toggle.svelte';
  let bold = $state(false);
  let italic = $state(true);
<\/script>

<div class="flex gap-4">
  <Toggle bind:pressed={bold} variant="outline" aria-label="Toggle Bold">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 12a4 4 0 0 0 0-8H6v8"/><path d="M15 20a4 4 0 0 0 0-8H6v8Z"/></svg>
  </Toggle>
  <Toggle bind:pressed={italic} variant="outline" aria-label="Toggle Italic">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="19" x2="10" y1="4" y2="4"/><line x1="14" x2="5" y1="20" y2="20"/><line x1="15" x2="9" y1="4" y2="20"/></svg>
  </Toggle>
</div>
`;
const __vite_glob_1_40 = `<script lang="ts">
  import Tooltip from '@lanrenbang/basecoat-ultra-svelte/components/Tooltip.svelte';
  import Button from '@lanrenbang/basecoat-ultra-svelte/components/Button.svelte';
<\/script>

<div class="flex gap-4">
  <Tooltip content="Settings" side="top">
    <Button variant="outline" size="sm">Top</Button>
  </Tooltip>
  <Tooltip content="User profile" side="bottom">
    <Button variant="outline" size="sm">Bottom</Button>
  </Tooltip>
</div>
`;
function DemoTabs($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    hljs.registerLanguage("xml", xml);
    hljs.registerLanguage("javascript", javascript);
    hljs.registerLanguage("typescript", typescript);
    hljs.registerLanguage("css", css);
    hljs.registerLanguage("bash", bash);
    svelte(hljs);
    let { code = "", componentName = "", children } = $$props;
    let activeTab = "preview";
    let copiedInstall = null;
    function getInstallCommands(componentName2) {
      return [
        {
          manager: "bun",
          command: `bunx basecoat-ultra-svelte add ${componentName2}`
        },
        {
          manager: "pnpm",
          command: `pnpm dlx basecoat-ultra-svelte add ${componentName2}`
        },
        {
          manager: "npm",
          command: `npx basecoat-ultra-svelte add ${componentName2}`
        },
        {
          manager: "yarn",
          command: `yarn dlx basecoat-ultra-svelte add ${componentName2}`
        }
      ];
    }
    $$renderer2.push(`<div class="w-full mb-12"><div role="tablist" class="mb-4 border-b w-full flex gap-6"><button type="button" role="tab"${attr("aria-selected", activeTab === "preview")}${attr_class(`relative pb-2 text-sm font-medium border-b-2 transition-colors ${stringify(
      "border-primary text-primary"
    )}`)}>Preview</button> <button type="button" role="tab"${attr("aria-selected", activeTab === "code")}${attr_class(`relative pb-2 text-sm font-medium border-b-2 transition-colors ${stringify("border-transparent text-muted-foreground hover:text-foreground")}`)}>Code</button> <button type="button" role="tab"${attr("aria-selected", activeTab === "installation")}${attr_class(`relative pb-2 text-sm font-medium border-b-2 transition-colors ${stringify("border-transparent text-muted-foreground hover:text-foreground")}`)}>Installation</button></div> <section role="tabpanel" class="w-full"${attr("hidden", activeTab !== "preview")}><div class="p-6 border rounded-lg bg-card">`);
    children($$renderer2);
    $$renderer2.push(`<!----></div></section> <section role="tabpanel" class="w-full mt-4 group relative"${attr("hidden", activeTab !== "code")}><div class="relative rounded-lg bg-[#282c34] p-4 overflow-x-auto text-left shadow-inner text-white"><button type="button" class="absolute top-2 right-2 p-2 rounded-md bg-muted/80 hover:bg-muted text-muted-foreground hover:text-foreground transition-all opacity-0 group-hover:opacity-100 focus:opacity-100 z-10" title="Copy code" aria-label="Copy code">`);
    {
      $$renderer2.push("<!--[!-->");
      $$renderer2.push(`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"></rect><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path></svg>`);
    }
    $$renderer2.push(`<!--]--></button> <pre><code class="language-svelte text-sm font-mono leading-relaxed bg-transparent p-0 border-0">${escape_html(code)}</code></pre></div></section> <section role="tabpanel" class="w-full mt-4 space-y-4"${attr("hidden", activeTab !== "installation")}><!--[-->`);
    const each_array = ensure_array_like(getInstallCommands(componentName));
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let { manager, command } = each_array[$$index];
      $$renderer2.push(`<div class="group relative"><div class="relative rounded-lg bg-[#282c34] p-4 overflow-x-auto text-left shadow-inner text-white"><button type="button" class="absolute top-2 right-2 p-2 rounded-md bg-muted/80 hover:bg-muted text-muted-foreground hover:text-foreground transition-all opacity-0 group-hover:opacity-100 focus:opacity-100 z-10" title="Copy command"${attr("aria-label", `Copy ${stringify(manager)} command`)}>`);
      if (copiedInstall === manager) {
        $$renderer2.push("<!--[-->");
        $$renderer2.push(`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-green-500"><polyline points="20 6 9 17 4 12"></polyline></svg>`);
      } else {
        $$renderer2.push("<!--[!-->");
        $$renderer2.push(`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"></rect><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path></svg>`);
      }
      $$renderer2.push(`<!--]--></button> <pre><code class="language-bash text-sm font-mono leading-relaxed bg-transparent p-0 border-0">${escape_html(command)}</code></pre></div></div>`);
    }
    $$renderer2.push(`<!--]--></section></div>`);
  });
}
function CatppuccinThemeSwitcher($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    const THEMES = ["latte", "frappe", "macchiato", "mocha"];
    const ACCENTS = [
      "rosewater",
      "flamingo",
      "pink",
      "mauve",
      "red",
      "maroon",
      "peach",
      "yellow",
      "green",
      "teal",
      "sky",
      "sapphire",
      "blue",
      "lavender"
    ];
    let currentFlavor = "mocha";
    const previewColors = (() => {
      const colors = { background: `var(--ctp-${currentFlavor}-base)` };
      ACCENTS.forEach((accent) => {
        colors[accent] = `var(--ctp-${currentFlavor}-${accent})`;
      });
      return colors;
    })();
    $$renderer2.push(`<div class="catppuccin-theme-switcher w-full max-w-sm space-y-6"><div class="button-group w-full" data-orientation="horizontal"><!--[-->`);
    const each_array = ensure_array_like(THEMES);
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let theme = each_array[$$index];
      $$renderer2.push(`<button type="button"${attr_class(clsx([
        "btn btn-sm capitalize flex-1",
        currentFlavor === theme ? "btn-primary" : "btn-ghost"
      ].join(" ")))}>${escape_html(theme)}</button>`);
    }
    $$renderer2.push(`<!--]--></div> <div class="grid grid-cols-7 gap-3 place-items-center p-4 rounded-xl border border-border/50 transition-colors duration-300 shadow-inner"${attr_style("", { "background-color": previewColors.background })}><!--[-->`);
    const each_array_1 = ensure_array_like(ACCENTS);
    for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
      let accent = each_array_1[$$index_1];
      $$renderer2.push(`<button type="button"${attr_class(clsx([
        "size-6 rounded-full border border-white/20 shadow-sm transition-transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-ring relative flex items-center justify-center",
        ""
      ].join(" ")))}${attr("title", accent)}${attr_style("", { "background-color": previewColors[accent] })}>`);
      {
        $$renderer2.push("<!--[!-->");
      }
      $$renderer2.push(`<!--]--></button>`);
    }
    $$renderer2.push(`<!--]--></div> <div class="flex justify-center"><button type="button" class="theme-reset btn btn-sm btn-ghost text-muted-foreground hover:text-destructive w-full">Reset Theme</button></div></div>`);
  });
}
function Toast($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let toasts = [];
    $$renderer2.push(`<section id="toaster" class="toaster fixed top-16 right-0 z-[200] flex max-h-screen w-full flex-col p-4 sm:flex-col md:max-w-[420px] svelte-bvlfeu"><!--[-->`);
    const each_array = ensure_array_like(toasts);
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let toast = each_array[$$index];
      $$renderer2.push(`<div${attr_class(
        clsx([
          "toast group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all",
          toast.category === "destructive" ? "destructive border-destructive bg-destructive text-destructive-foreground" : "bg-card text-card-foreground border-border"
        ].join(" ")),
        "svelte-bvlfeu"
      )}><div class="grid gap-1">`);
      if (toast.title) {
        $$renderer2.push("<!--[-->");
        $$renderer2.push(`<div class="text-sm font-semibold">${escape_html(toast.title)}</div>`);
      } else {
        $$renderer2.push("<!--[!-->");
      }
      $$renderer2.push(`<!--]--> `);
      if (toast.description) {
        $$renderer2.push("<!--[-->");
        $$renderer2.push(`<div class="text-sm opacity-90">${escape_html(toast.description)}</div>`);
      } else {
        $$renderer2.push("<!--[!-->");
      }
      $$renderer2.push(`<!--]--></div> <button class="absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100" aria-label="Close"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg></button></div>`);
    }
    $$renderer2.push(`<!--]--></section>`);
  });
}
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    const exampleModules = /* @__PURE__ */ Object.assign({ "/src/lib/examples/svelte/accordion.svelte": __vite_glob_0_0, "/src/lib/examples/svelte/alert.svelte": __vite_glob_0_1, "/src/lib/examples/svelte/avatar.svelte": __vite_glob_0_2, "/src/lib/examples/svelte/badge.svelte": __vite_glob_0_3, "/src/lib/examples/svelte/breadcrumb.svelte": __vite_glob_0_4, "/src/lib/examples/svelte/button-group.svelte": __vite_glob_0_5, "/src/lib/examples/svelte/button.svelte": __vite_glob_0_6, "/src/lib/examples/svelte/card.svelte": __vite_glob_0_7, "/src/lib/examples/svelte/carousel.svelte": __vite_glob_0_8, "/src/lib/examples/svelte/checkbox.svelte": __vite_glob_0_9, "/src/lib/examples/svelte/combobox.svelte": __vite_glob_0_10, "/src/lib/examples/svelte/command.svelte": __vite_glob_0_11, "/src/lib/examples/svelte/datepicker.svelte": __vite_glob_0_12, "/src/lib/examples/svelte/dialog.svelte": __vite_glob_0_13, "/src/lib/examples/svelte/drawer.svelte": __vite_glob_0_14, "/src/lib/examples/svelte/dropdown-menu.svelte": __vite_glob_0_15, "/src/lib/examples/svelte/empty-state.svelte": __vite_glob_0_16, "/src/lib/examples/svelte/form.svelte": __vite_glob_0_17, "/src/lib/examples/svelte/input-group.svelte": __vite_glob_0_18, "/src/lib/examples/svelte/input-otp.svelte": __vite_glob_0_19, "/src/lib/examples/svelte/input.svelte": __vite_glob_0_20, "/src/lib/examples/svelte/item.svelte": __vite_glob_0_21, "/src/lib/examples/svelte/kbd.svelte": __vite_glob_0_22, "/src/lib/examples/svelte/pagination.svelte": __vite_glob_0_23, "/src/lib/examples/svelte/popover.svelte": __vite_glob_0_24, "/src/lib/examples/svelte/progress.svelte": __vite_glob_0_25, "/src/lib/examples/svelte/radio-group.svelte": __vite_glob_0_26, "/src/lib/examples/svelte/resizable.svelte": __vite_glob_0_27, "/src/lib/examples/svelte/select.svelte": __vite_glob_0_28, "/src/lib/examples/svelte/sheet.svelte": __vite_glob_0_29, "/src/lib/examples/svelte/skeleton.svelte": __vite_glob_0_30, "/src/lib/examples/svelte/slider.svelte": __vite_glob_0_31, "/src/lib/examples/svelte/spinner.svelte": __vite_glob_0_32, "/src/lib/examples/svelte/switch.svelte": __vite_glob_0_33, "/src/lib/examples/svelte/table.svelte": __vite_glob_0_34, "/src/lib/examples/svelte/tabs.svelte": __vite_glob_0_35, "/src/lib/examples/svelte/textarea.svelte": __vite_glob_0_36, "/src/lib/examples/svelte/toast.svelte": __vite_glob_0_37, "/src/lib/examples/svelte/toggle-group.svelte": __vite_glob_0_38, "/src/lib/examples/svelte/toggle.svelte": __vite_glob_0_39, "/src/lib/examples/svelte/tooltip.svelte": __vite_glob_0_40 });
    const exampleSources = /* @__PURE__ */ Object.assign({ "/src/lib/examples/svelte/accordion.svelte": __vite_glob_1_0, "/src/lib/examples/svelte/alert.svelte": __vite_glob_1_1, "/src/lib/examples/svelte/avatar.svelte": __vite_glob_1_2, "/src/lib/examples/svelte/badge.svelte": __vite_glob_1_3, "/src/lib/examples/svelte/breadcrumb.svelte": __vite_glob_1_4, "/src/lib/examples/svelte/button-group.svelte": __vite_glob_1_5, "/src/lib/examples/svelte/button.svelte": __vite_glob_1_6, "/src/lib/examples/svelte/card.svelte": __vite_glob_1_7, "/src/lib/examples/svelte/carousel.svelte": __vite_glob_1_8, "/src/lib/examples/svelte/checkbox.svelte": __vite_glob_1_9, "/src/lib/examples/svelte/combobox.svelte": __vite_glob_1_10, "/src/lib/examples/svelte/command.svelte": __vite_glob_1_11, "/src/lib/examples/svelte/datepicker.svelte": __vite_glob_1_12, "/src/lib/examples/svelte/dialog.svelte": __vite_glob_1_13, "/src/lib/examples/svelte/drawer.svelte": __vite_glob_1_14, "/src/lib/examples/svelte/dropdown-menu.svelte": __vite_glob_1_15, "/src/lib/examples/svelte/empty-state.svelte": __vite_glob_1_16, "/src/lib/examples/svelte/form.svelte": __vite_glob_1_17, "/src/lib/examples/svelte/input-group.svelte": __vite_glob_1_18, "/src/lib/examples/svelte/input-otp.svelte": __vite_glob_1_19, "/src/lib/examples/svelte/input.svelte": __vite_glob_1_20, "/src/lib/examples/svelte/item.svelte": __vite_glob_1_21, "/src/lib/examples/svelte/kbd.svelte": __vite_glob_1_22, "/src/lib/examples/svelte/pagination.svelte": __vite_glob_1_23, "/src/lib/examples/svelte/popover.svelte": __vite_glob_1_24, "/src/lib/examples/svelte/progress.svelte": __vite_glob_1_25, "/src/lib/examples/svelte/radio-group.svelte": __vite_glob_1_26, "/src/lib/examples/svelte/resizable.svelte": __vite_glob_1_27, "/src/lib/examples/svelte/select.svelte": __vite_glob_1_28, "/src/lib/examples/svelte/sheet.svelte": __vite_glob_1_29, "/src/lib/examples/svelte/skeleton.svelte": __vite_glob_1_30, "/src/lib/examples/svelte/slider.svelte": __vite_glob_1_31, "/src/lib/examples/svelte/spinner.svelte": __vite_glob_1_32, "/src/lib/examples/svelte/switch.svelte": __vite_glob_1_33, "/src/lib/examples/svelte/table.svelte": __vite_glob_1_34, "/src/lib/examples/svelte/tabs.svelte": __vite_glob_1_35, "/src/lib/examples/svelte/textarea.svelte": __vite_glob_1_36, "/src/lib/examples/svelte/toast.svelte": __vite_glob_1_37, "/src/lib/examples/svelte/toggle-group.svelte": __vite_glob_1_38, "/src/lib/examples/svelte/toggle.svelte": __vite_glob_1_39, "/src/lib/examples/svelte/tooltip.svelte": __vite_glob_1_40 });
    const examples = {};
    for (const path in exampleModules) {
      const name = path.split("/").pop()?.replace(".svelte", "") || "";
      examples[name] = {
        component: exampleModules[path].default,
        code: exampleSources[path] || ""
      };
    }
    const componentExamples = {
      "button": "button",
      "button-group": "button-group",
      "badge": "badge",
      "kbd": "kbd",
      "input": "input",
      "input-group": "input-group",
      "textarea": "textarea",
      "checkbox": "checkbox",
      "radio-group": "radio-group",
      "switch": "switch",
      "select": "select",
      "combobox": "combobox",
      "slider": "slider",
      "form": "form",
      "tabs": "tabs",
      "breadcrumb": "breadcrumb",
      "pagination": "pagination",
      "dropdown-menu": "dropdown-menu",
      "card": "card",
      "accordion": "accordion",
      "table": "table",
      "avatar": "avatar",
      "item": "item",
      "alert": "alert",
      "progress": "progress",
      "spinner": "spinner",
      "skeleton": "skeleton",
      "empty-state": "empty-state",
      "dialog": "dialog",
      "popover": "popover",
      "tooltip": "tooltip",
      "toggle": "toggle",
      "toggle-group": "toggle-group",
      "toast": "toast",
      "command": "command",
      "input-otp": "input-otp",
      "carousel": "carousel",
      "sheet": "sheet",
      "drawer": "drawer",
      "datepicker": "datepicker",
      "resizable": "resizable"
    };
    head("1q6428k", $$renderer2, ($$renderer3) => {
      $$renderer3.title(($$renderer4) => {
        $$renderer4.push(`<title>Basecoat Ultra - Svelte 5 Components</title>`);
      });
    });
    $$renderer2.push(`<div class="bg-background text-foreground antialiased flex min-h-screen overflow-hidden"><aside class="sidebar h-screen sticky top-0 border-r bg-card z-40 flex-shrink-0 transition-all duration-300 overflow-hidden" id="main-sidebar" data-side="left"${attr("aria-hidden", false)}${attr_style(`width: ${stringify("16rem")};`)}><nav aria-label="Sidebar navigation" class="h-full flex flex-col w-64 bg-card border-r"><header class="p-4 border-b h-14 flex items-center"><a href="/svelte" class="flex items-center gap-2 font-semibold text-lg"><div class="bg-primary text-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" class="h-4 w-4"><rect width="256" height="256" fill="none"></rect><line x1="208" y1="128" x2="128" y2="208" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"></line><line x1="192" y1="40" x2="40" y2="192" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"></line></svg></div> <span>Basecoat Ultra</span></a></header> <section class="scrollbar flex-1 overflow-y-auto p-4 space-y-6"><!--[-->`);
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
          $$renderer2.push(`<a href="/svelte/neumorphism-demo" class="block px-2 py-1.5 rounded-md hover:bg-accent hover:text-accent-foreground text-sm">${escape_html(item.name)}</a>`);
        } else {
          $$renderer2.push("<!--[!-->");
          $$renderer2.push(`<a${attr("href", `#${stringify(item.id)}`)} class="block px-2 py-1.5 rounded-md hover:bg-accent hover:text-accent-foreground text-sm">${escape_html(item.name)}</a>`);
        }
        $$renderer2.push(`<!--]--></li>`);
      }
      $$renderer2.push(`<!--]--></ul></details>`);
    }
    $$renderer2.push(`<!--]--></section> <footer class="p-2 border-t">`);
    {
      let trigger = function($$renderer3, { open }) {
        $$renderer3.push(`<button type="button" class="btn btn-ghost w-full justify-start gap-2 p-2 h-12"${attr("aria-expanded", open)}><div class="avatar size-8 rounded-lg overflow-hidden bg-muted"><img src="https://github.com/Lanrenbang.png" alt="@Lanrenbang"/></div> <div class="text-left flex-1 grid leading-tight"><span class="font-medium truncate text-sm">L.R.B</span> <span class="text-xs text-muted-foreground truncate">@Lanrenbang</span></div> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-muted-foreground opacity-50"><path d="m7 15 5 5 5-5"></path><path d="m7 9 5-5 5 5"></path></svg></button>`);
      }, children = function($$renderer3) {
        $$renderer3.push(`<div role="menu"><div role="heading" class="px-2 py-1.5 text-sm font-semibold text-muted-foreground">My Account</div> <button type="button" role="menuitem" class="w-full text-left cursor-default flex items-center gap-2 rounded-sm px-2 py-1.5 text-sm hover:bg-accent hover:text-accent-foreground">Profile</button> <button type="button" role="menuitem" class="w-full text-left cursor-default flex items-center gap-2 rounded-sm px-2 py-1.5 text-sm hover:bg-accent hover:text-accent-foreground">Settings</button> <hr role="separator" class="my-1 border-muted"/> <button type="button" role="menuitem" class="w-full text-left cursor-default flex items-center gap-2 rounded-sm px-2 py-1.5 text-sm hover:bg-accent hover:text-accent-foreground text-destructive">Logout</button></div>`);
      };
      Popover($$renderer2, {
        side: "top",
        align: "start",
        contentClass: "w-60 p-1",
        class: "w-full",
        trigger,
        children,
        $$slots: { trigger: true, default: true }
      });
    }
    $$renderer2.push(`<!----></footer></nav></aside> <main class="flex-1 min-w-0 h-screen overflow-y-auto bg-background flex flex-col scroll-pt-20 ml-0!"><header class="bg-background sticky inset-x-0 top-0 isolate flex shrink-0 items-center gap-2 border-b z-30 h-14 px-4 shadow-sm"><button type="button" aria-label="Toggle sidebar" class="btn btn-sm btn-ghost btn-icon -ml-2 text-muted-foreground hover:text-foreground"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="3" rx="2"></rect><path d="M9 3v18"></path></svg></button> <div class="h-4 w-px bg-border mx-2"></div> <nav class="flex items-center text-sm text-muted-foreground"><a href="/introduction" class="hover:text-foreground transition-colors">Docs</a> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mx-2 opacity-50"><path d="m9 18 6-6-6-6"></path></svg> <span class="font-medium text-foreground">Svelte Components</span></nav> <div class="ml-auto flex items-center gap-2"><a href="/introduction" class="btn btn-sm btn-ghost text-sm">Introduction</a> <a href="/ultra" class="btn btn-sm btn-ghost text-sm">Ultra Components</a> `);
    {
      let trigger = function($$renderer3, { open }) {
        $$renderer3.push(`<button type="button" class="btn btn-sm btn-ghost btn-icon text-muted-foreground hover:text-foreground" title="Theme Switcher" aria-label="Theme Switcher"${attr("aria-expanded", open)}><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z"></path></svg></button>`);
      }, children = function($$renderer3) {
        $$renderer3.push(`<div class="catppuccin-theme-switcher w-96 p-6 bg-secondary/50 backdrop-blur-sm rounded-md border shadow-md"><div class="flex items-center justify-between mb-4"><h3 class="font-semibold text-sm">Theme Switcher</h3></div> `);
        CatppuccinThemeSwitcher($$renderer3);
        $$renderer3.push(`<!----></div>`);
      };
      Popover($$renderer2, {
        side: "bottom",
        align: "end",
        contentClass: "!p-0 bg-transparent border-0 shadow-none !mt-0",
        class: "relative",
        trigger,
        children,
        $$slots: { trigger: true, default: true }
      });
    }
    $$renderer2.push(`<!----> <a href="https://github.com/Lanrenbang/basecoat-ultra" target="_blank" class="btn btn-sm btn-ghost btn-icon text-muted-foreground hover:text-foreground" aria-label="View on GitHub"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path></svg></a></div></header> <div class="flex-1 p-8 lg:p-12 space-y-24 scroll-smooth max-w-4xl mx-auto w-full"><!--[-->`);
    const each_array_2 = ensure_array_like(registry.filter((category) => category.name !== "Showcase"));
    for (let $$index_3 = 0, $$length = each_array_2.length; $$index_3 < $$length; $$index_3++) {
      let category = each_array_2[$$index_3];
      $$renderer2.push(`<section${attr("id", `${stringify(category.name.toLowerCase().replace(/\s+/g, "-"))}-section`)} class="space-y-12"><h2 class="text-3xl font-bold tracking-tight border-b pb-2">${escape_html(category.name)}</h2> <!--[-->`);
      const each_array_3 = ensure_array_like(category.items);
      for (let $$index_2 = 0, $$length2 = each_array_3.length; $$index_2 < $$length2; $$index_2++) {
        let item = each_array_3[$$index_2];
        const exampleName = componentExamples[item.id];
        const example = exampleName ? examples[exampleName] : null;
        $$renderer2.push(`<div${attr("id", item.id)} class="space-y-4"><h3 class="text-xl font-semibold">${escape_html(item.name)}</h3> `);
        if (item.description) {
          $$renderer2.push("<!--[-->");
          $$renderer2.push(`<div class="space-y-2 text-sm text-muted-foreground"><p>- ${escape_html(item.description)}</p></div>`);
        } else {
          $$renderer2.push("<!--[!-->");
        }
        $$renderer2.push(`<!--]--> `);
        if (example) {
          $$renderer2.push("<!--[-->");
          DemoTabs($$renderer2, {
            code: example.code,
            componentName: exampleName,
            children: ($$renderer3) => {
              const ExampleComponent = example.component;
              $$renderer3.push(`<!---->`);
              ExampleComponent($$renderer3, {});
              $$renderer3.push(`<!---->`);
            }
          });
        } else {
          $$renderer2.push("<!--[!-->");
          if (item.id === "neumorphism-demo") {
            $$renderer2.push("<!--[-->");
            $$renderer2.push(`<div class="p-6 border rounded-lg bg-card text-muted-foreground">This demo is available as a separate page. Click "Neumorphism Demo" in the sidebar to view it.</div>`);
          } else {
            $$renderer2.push("<!--[!-->");
            $$renderer2.push(`<div class="p-6 border rounded-lg bg-card text-muted-foreground">Example not found for ${escape_html(item.name)}</div>`);
          }
          $$renderer2.push(`<!--]-->`);
        }
        $$renderer2.push(`<!--]--></div>`);
      }
      $$renderer2.push(`<!--]--></section>`);
    }
    $$renderer2.push(`<!--]--></div></main> `);
    Toast($$renderer2);
    $$renderer2.push(`<!----></div>`);
  });
}
export {
  _page as default
};
