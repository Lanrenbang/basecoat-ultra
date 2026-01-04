type $$ComponentProps = {
    value?: any;
    options: Array<{
        value: any;
        label: string;
        disabled?: boolean;
    }>;
    placeholder?: string;
    searchable?: boolean;
    searchPlaceholder?: string;
    class?: string;
    [key: string]: any;
};
declare const Select: import("svelte").Component<$$ComponentProps, {}, "value">;
type Select = ReturnType<typeof Select>;
export default Select;
