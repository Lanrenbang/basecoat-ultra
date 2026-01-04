import type { Snippet } from 'svelte';
type $$ComponentProps = {
    orientation?: 'horizontal' | 'vertical';
    class?: string;
    children?: Snippet;
    showButtons?: boolean;
    [key: string]: any;
};
declare const Carousel: import("svelte").Component<$$ComponentProps, {}, "">;
type Carousel = ReturnType<typeof Carousel>;
export default Carousel;
