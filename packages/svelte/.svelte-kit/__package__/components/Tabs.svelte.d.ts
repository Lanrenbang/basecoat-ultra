import type { Snippet } from 'svelte';
type $$ComponentProps = {
    items: Array<{
        id: string;
        label: string | Snippet;
        content: string | Snippet;
    }>;
    activeTab?: string;
    class?: string;
    contentClass?: string;
    [key: string]: any;
};
declare const Tabs: import("svelte").Component<$$ComponentProps, {}, "activeTab">;
type Tabs = ReturnType<typeof Tabs>;
export default Tabs;
