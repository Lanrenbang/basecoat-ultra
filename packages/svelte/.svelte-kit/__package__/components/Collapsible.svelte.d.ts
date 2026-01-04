import type { Snippet } from 'svelte';
type $$ComponentProps = {
    open?: boolean;
    trigger: Snippet<{
        open: boolean;
    }>;
    children: Snippet;
    class?: string;
    [key: string]: any;
};
declare const Collapsible: import("svelte").Component<$$ComponentProps, {}, "open">;
type Collapsible = ReturnType<typeof Collapsible>;
export default Collapsible;
