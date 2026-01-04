import type { Snippet } from 'svelte';
type $$ComponentProps = {
    children?: Snippet;
    icon?: Snippet;
    title?: Snippet | string;
    description?: Snippet | string;
    actions?: Snippet;
    class?: string;
    containerClass?: string;
    [key: string]: any;
};
declare const Item: import("svelte").Component<$$ComponentProps, {}, "">;
type Item = ReturnType<typeof Item>;
export default Item;
