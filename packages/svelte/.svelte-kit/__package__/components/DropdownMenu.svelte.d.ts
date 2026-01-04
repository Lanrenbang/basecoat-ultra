import type { Snippet } from 'svelte';
type $$ComponentProps = {
    open?: boolean;
    trigger: Snippet<{
        open: boolean;
    }>;
    children: Snippet;
    align?: 'start' | 'end';
    class?: string;
    [key: string]: any;
};
declare const DropdownMenu: import("svelte").Component<$$ComponentProps, {}, "open">;
type DropdownMenu = ReturnType<typeof DropdownMenu>;
export default DropdownMenu;
