/**
 * Basecoat Datepicker
 * Wrapper around flatpickr.js
 */
import flatpickr from "flatpickr";
import { Mandarin } from "flatpickr/dist/l10n/zh.js";
import { MandarinTraditional } from "flatpickr/dist/l10n/zh-tw.js";

// Custom English configurations
const EnglishFull = {
    weekdays: {
        shorthand: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
        longhand: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    },
    months: {
        shorthand: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
        longhand: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
    },
};

const EnglishShort = {
    weekdays: {
        shorthand: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
        longhand: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    },
    months: {
        shorthand: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        longhand: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    },
};

const locales = {
    'zh': Mandarin,
    'zh-tw': MandarinTraditional,
    'en-full': EnglishFull,
    'en-short': EnglishShort,
};

const initDatepicker = (input) => {
    if (input._flatpickr) return;
    if (input.dataset.datepickerInitialized) return;

    const mode = input.dataset.mode || "single"; 
    const enableTime = input.dataset.enableTime === "true";
    const noCalendar = input.dataset.noCalendar === "true"; 
    const isInline = input.dataset.inline === "true"; 
    const dateFormat = input.dataset.dateFormat || (enableTime && noCalendar ? "H:i" : "Y-m-d");
    const locale = input.dataset.locale || "en-short";

    const localeConfig = locales[locale] || EnglishShort;

    flatpickr(input, {
        mode: mode,
        enableTime: enableTime,
        noCalendar: noCalendar,
        inline: isInline,
        dateFormat: dateFormat,
        allowInput: true,
        shorthandCurrentMonth: locale === "en-short",
        static: !isInline,
        locale: localeConfig,
        onOpen: () => {
            document.dispatchEvent(new CustomEvent('basecoat:popover', { detail: { source: input } }));
        },
        onChange: (selectedDates, dateStr) => {
            input.dispatchEvent(new CustomEvent('change', {
                bubbles: true,
                detail: { value: dateStr, dates: selectedDates }
            }));
        }
    });

    input.dataset.datepickerInitialized = 'true';
    input.dispatchEvent(new CustomEvent('basecoat:initialized'));
};

if (window.basecoat) {
    window.basecoat.register('datepicker', '.datepicker:not([data-datepicker-initialized])', initDatepicker);
    if (document.readyState === 'complete' || document.readyState === 'interactive') {
        window.basecoat.init('datepicker');
    }
}

document.addEventListener('basecoat:popover', (event) => {
    document.querySelectorAll('.datepicker').forEach(el => {
        if (el._flatpickr && el._flatpickr.isOpen && event.detail?.source !== el) {
            el._flatpickr.close();
        }
    });
});

export { initDatepicker };
