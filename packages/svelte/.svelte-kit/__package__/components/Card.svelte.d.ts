import type { Snippet } from 'svelte';
type $$ComponentProps = {
    children?: Snippet;
    header?: Snippet;
    footer?: Snippet;
    title?: Snippet | string;
    description?: Snippet | string;
    class?: string;
    [key: string]: any;
};
declare const Card: import("svelte").Component<$$ComponentProps, {}, "">;
type Card = ReturnType<typeof Card>;
export default Card;
