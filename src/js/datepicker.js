/**
 * Basecoat Datepicker
 * Wrapper around flatpickr.js
 */
import flatpickr from "flatpickr";

// 1. Initializer
const initDatepicker = (root = document) => {
  const inputs = root.querySelectorAll('.datepicker');
  
  inputs.forEach(input => {
    if (input._flatpickr) return; // Already initialized

    // Read config from data attributes
    // e.g. data-mode="range", data-enable-time="true"
    const mode = input.dataset.mode || "single"; // single, multiple, range, time
    const enableTime = input.dataset.enableTime === "true";
    const noCalendar = input.dataset.noCalendar === "true"; // for time picker only
    const inline = input.dataset.inline === "true"; // inline calendar
    const dateFormat = input.dataset.dateFormat || (enableTime && noCalendar ? "H:i" : "Y-m-d");

    flatpickr(input, {
        mode: mode,
        enableTime: enableTime,
        noCalendar: noCalendar,
        inline: inline,
        dateFormat: dateFormat,
        allowInput: true, // Allow manual typing
        shorthandCurrentMonth: true, // Display month shorthand (e.g. "Dec" instead of "December")
        prevArrow: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4"><path d="m15 18-6-6 6-6"/></svg>',
        nextArrow: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4"><path d="m9 18 6-6-6-6"/></svg>',
        static: true, // Position relative to wrapper, helps with scroll
        // Custom class names to hook into our CSS
        // flatpickr doesn't fully support class replacements, but we can append
    });
  });
};

// 2. Auto-init
if (typeof window !== 'undefined') {
  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      if (mutation.type === 'childList') {
        mutation.addedNodes.forEach((node) => {
           if (node.nodeType === 1) {
               if (node.classList?.contains('datepicker')) {
                   initDatepicker(node.parentNode);
               } else if (node.querySelector?.('.datepicker')) {
                   initDatepicker(node);
               }
           }
        });
      }
    });
  });

  document.addEventListener('DOMContentLoaded', () => {
    initDatepicker();
    observer.observe(document.body, { childList: true, subtree: true });
  });
}

export { initDatepicker };
