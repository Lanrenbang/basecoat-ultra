type $$ComponentProps = {
    value?: number;
    min?: number;
    max?: number;
    step?: number;
    class?: string;
    [key: string]: any;
};
declare const Slider: import("svelte").Component<$$ComponentProps, {}, "value">;
type Slider = ReturnType<typeof Slider>;
export default Slider;
