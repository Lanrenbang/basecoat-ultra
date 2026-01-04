import type { Snippet } from 'svelte';
type $$ComponentProps = {
    open?: boolean;
    side?: 'left' | 'right' | 'top' | 'bottom';
    title?: string | Snippet;
    description?: string | Snippet;
    children: Snippet;
    class?: string;
    [key: string]: any;
};
declare const Sheet: import("svelte").Component<$$ComponentProps, {}, "open">;
type Sheet = ReturnType<typeof Sheet>;
export default Sheet;
