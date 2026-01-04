import type { Snippet } from 'svelte';
type $$ComponentProps = {
    src?: string;
    alt?: string;
    fallback?: Snippet | string;
    class?: string;
    size?: 'sm' | 'md' | 'lg' | string;
    rounded?: 'full' | 'lg' | 'md' | 'sm' | 'none';
    [key: string]: any;
};
declare const Avatar: import("svelte").Component<$$ComponentProps, {}, "">;
type Avatar = ReturnType<typeof Avatar>;
export default Avatar;
