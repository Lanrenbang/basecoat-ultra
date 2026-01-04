import type { Snippet } from 'svelte';
type $$ComponentProps = {
    children?: Snippet;
    direction?: 'horizontal' | 'vertical';
    sizes?: number[];
    minSize?: number | number[];
    gutterSize?: number;
    class?: string;
    [key: string]: any;
};
declare const Resizable: import("svelte").Component<$$ComponentProps, {}, "">;
type Resizable = ReturnType<typeof Resizable>;
export default Resizable;
