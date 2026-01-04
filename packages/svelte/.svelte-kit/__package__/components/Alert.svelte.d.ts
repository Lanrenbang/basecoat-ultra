import type { Snippet } from 'svelte';
type $$ComponentProps = {
    children?: Snippet;
    icon?: Snippet;
    title?: Snippet | string;
    variant?: 'default' | 'destructive';
    class?: string;
    [key: string]: any;
};
declare const Alert: import("svelte").Component<$$ComponentProps, {}, "">;
type Alert = ReturnType<typeof Alert>;
export default Alert;
