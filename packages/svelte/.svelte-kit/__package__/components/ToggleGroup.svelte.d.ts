import type { Snippet } from 'svelte';
type $$ComponentProps = {
    children?: Snippet;
    type?: 'single' | 'multiple';
    value?: string | string[] | null;
    variant?: 'default' | 'outline';
    class?: string;
    [key: string]: any;
};
declare const ToggleGroup: import("svelte").Component<$$ComponentProps, {}, "value">;
type ToggleGroup = ReturnType<typeof ToggleGroup>;
export default ToggleGroup;
