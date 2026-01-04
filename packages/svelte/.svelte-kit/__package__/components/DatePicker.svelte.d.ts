import type { Options } from 'flatpickr/dist/types/options';
type $$ComponentProps = {
    value?: string | Date | Date[];
    options?: Options;
    placeholder?: string;
    inline?: boolean;
    locale?: string;
    class?: string;
    [key: string]: any;
};
declare const DatePicker: import("svelte").Component<$$ComponentProps, {}, "value">;
type DatePicker = ReturnType<typeof DatePicker>;
export default DatePicker;
