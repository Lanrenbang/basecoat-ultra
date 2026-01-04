import type { Snippet } from 'svelte';
type $$ComponentProps = {
    children?: Snippet;
    variant?: 'primary' | 'secondary' | 'destructive' | 'outline';
    class?: string;
    [key: string]: any;
};
declare const Badge: import("svelte").Component<$$ComponentProps, {}, "">;
type Badge = ReturnType<typeof Badge>;
export default Badge;
