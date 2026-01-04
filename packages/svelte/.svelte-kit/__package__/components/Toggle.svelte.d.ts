import type { Snippet } from 'svelte';
type $$ComponentProps = {
    children?: Snippet;
    pressed?: boolean;
    value?: string;
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'link' | 'destructive';
    size?: 'sm' | 'md' | 'lg' | 'icon';
    class?: string;
    [key: string]: any;
};
declare const Toggle: import("svelte").Component<$$ComponentProps, {}, "pressed">;
type Toggle = ReturnType<typeof Toggle>;
export default Toggle;
