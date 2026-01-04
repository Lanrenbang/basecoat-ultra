import type { Snippet } from 'svelte';
type $$ComponentProps = {
    open?: boolean;
    title?: string | Snippet;
    description?: string | Snippet;
    children: Snippet;
    footer?: Snippet;
    role?: 'dialog' | 'alertdialog';
    class?: string;
    [key: string]: any;
};
declare const Dialog: import("svelte").Component<$$ComponentProps, {}, "open">;
type Dialog = ReturnType<typeof Dialog>;
export default Dialog;
