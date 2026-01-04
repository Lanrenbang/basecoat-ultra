import type { Snippet } from 'svelte';
type $$ComponentProps = {
    header?: Snippet;
    children?: Snippet;
    footer?: Snippet;
    caption?: Snippet | string;
    class?: string;
    containerClass?: string;
    [key: string]: any;
};
declare const Table: import("svelte").Component<$$ComponentProps, {}, "">;
type Table = ReturnType<typeof Table>;
export default Table;
