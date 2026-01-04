import type { Snippet } from 'svelte';
type $$ComponentProps = {
    total: number;
    current: number;
    onPageChange?: (page: number) => void;
    class?: string;
    prevIcon?: Snippet;
    nextIcon?: Snippet;
    [key: string]: any;
};
interface $$__sveltets_2_IsomorphicComponent<Props extends Record<string, any> = any, Events extends Record<string, any> = any, Slots extends Record<string, any> = any, Exports = {}, Bindings = string> {
    new (options: import('svelte').ComponentConstructorOptions<Props>): import('svelte').SvelteComponent<Props, Events, Slots> & {
        $$bindings?: Bindings;
    } & Exports;
    (internal: unknown, props: Props & {
        $$events?: Events;
        $$slots?: Slots;
    }): Exports & {
        $set?: any;
        $on?: any;
    };
    z_$$bindings?: Bindings;
}
declare const Pagination: $$__sveltets_2_IsomorphicComponent<$$ComponentProps, {
    change: CustomEvent<{
        page: number;
        previousPage: number;
        totalPages: number;
    }>;
    'basecoat:initialized': CustomEvent<void>;
} & {
    [evt: string]: CustomEvent<any>;
}, {}, {}, "current">;
type Pagination = InstanceType<typeof Pagination>;
export default Pagination;
