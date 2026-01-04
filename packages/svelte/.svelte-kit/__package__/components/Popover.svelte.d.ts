import type { Snippet } from 'svelte';
type $$ComponentProps = {
    open?: boolean;
    trigger: Snippet<{
        open: boolean;
    }>;
    children: Snippet;
    side?: 'top' | 'bottom' | 'left' | 'right';
    align?: 'start' | 'center' | 'end';
    class?: string;
    contentClass?: string;
    [key: string]: any;
};
declare const Popover: import("svelte").Component<$$ComponentProps, {}, "open">;
type Popover = ReturnType<typeof Popover>;
export default Popover;
