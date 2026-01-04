import type { Snippet } from 'svelte';
type $$ComponentProps = {
    value?: string;
    placeholder?: string;
    children?: Snippet;
    class?: string;
    onselect?: (value: string) => void;
    [key: string]: any;
};
declare const Command: import("svelte").Component<$$ComponentProps, {}, "value">;
type Command = ReturnType<typeof Command>;
export default Command;
