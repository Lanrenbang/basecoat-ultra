import type { Snippet } from 'svelte';
type $$ComponentProps = {
    children?: Snippet;
    type?: 'button' | 'submit' | 'reset';
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'link' | 'destructive';
    size?: 'sm' | 'md' | 'lg' | 'icon';
    class?: string;
    [key: string]: any;
};
declare const Button: import("svelte").Component<$$ComponentProps, {}, "">;
type Button = ReturnType<typeof Button>;
export default Button;
