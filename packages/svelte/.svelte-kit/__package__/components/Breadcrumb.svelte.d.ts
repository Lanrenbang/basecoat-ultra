import type { Snippet } from 'svelte';
type $$ComponentProps = {
    items: Array<{
        label: string | Snippet;
        href?: string;
        active?: boolean;
    }>;
    separator?: string | Snippet;
    class?: string;
    [key: string]: any;
};
declare const Breadcrumb: import("svelte").Component<$$ComponentProps, {}, "">;
type Breadcrumb = ReturnType<typeof Breadcrumb>;
export default Breadcrumb;
