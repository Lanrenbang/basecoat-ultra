import type { Snippet } from 'svelte';
type $$ComponentProps = {
    items: Array<{
        title: string | Snippet;
        content: string | Snippet;
        open?: boolean;
    }>;
    multiple?: boolean;
    class?: string;
    [key: string]: any;
};
declare const Accordion: import("svelte").Component<$$ComponentProps, {}, "">;
type Accordion = ReturnType<typeof Accordion>;
export default Accordion;
