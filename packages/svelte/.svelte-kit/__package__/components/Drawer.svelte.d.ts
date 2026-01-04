import type { Snippet } from 'svelte';
type $$ComponentProps = {
    open?: boolean;
    title?: string | Snippet;
    description?: string | Snippet;
    children: Snippet;
    class?: string;
    [key: string]: any;
};
declare const Drawer: import("svelte").Component<$$ComponentProps, {}, "open">;
type Drawer = ReturnType<typeof Drawer>;
export default Drawer;
