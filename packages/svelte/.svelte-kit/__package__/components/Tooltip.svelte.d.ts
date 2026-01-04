import type { Snippet } from 'svelte';
type $$ComponentProps = {
    children: Snippet;
    content: string;
    side?: 'top' | 'bottom' | 'left' | 'right';
    class?: string;
    [key: string]: any;
};
declare const Tooltip: import("svelte").Component<$$ComponentProps, {}, "">;
type Tooltip = ReturnType<typeof Tooltip>;
export default Tooltip;
