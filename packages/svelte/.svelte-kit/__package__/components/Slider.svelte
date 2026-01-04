<script lang="ts">
  let {
    value = $bindable(0),
    min = 0,
    max = 100,
    step = 1,
    class: className = '',
    ...rest
  }: {
    value?: number;
    min?: number;
    max?: number;
    step?: number;
    class?: string;
    [key: string]: any;
  } = $props();

  const finalClass = $derived(['slider', className].filter(Boolean).join(' '));
  
  // Calculate slider value percentage for CSS variable
  const sliderPercent = $derived(((value - min) / (max - min)) * 100);
</script>

<input 
  type="range" 
  class={finalClass} 
  bind:value 
  {min} 
  {max} 
  {step} 
  style="--slider-value: {sliderPercent}%"
  {...rest} 
/>

<style>
  @import "../../../../ultra/src/css/parts/components/range.css";
  @reference "../reference.css";
</style>
