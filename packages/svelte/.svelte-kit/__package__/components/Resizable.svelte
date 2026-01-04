<script lang="ts">
  import { onMount, onDestroy } from 'svelte';
  import Split from 'split.js';
  import type { Instance } from 'split.js';
  import type { Snippet } from 'svelte';

  let {
    children,
    direction = 'horizontal',
    sizes,
    minSize = 100,
    gutterSize = 10,
    class: className = '',
    ...rest
  }: {
    children?: Snippet;
    direction?: 'horizontal' | 'vertical';
    sizes?: number[];
    minSize?: number | number[];
    gutterSize?: number;
    class?: string;
    [key: string]: any;
  } = $props();

  let container: HTMLDivElement;
  let splitInstance: Instance;

  const finalClass = $derived([
    'resizable-group h-full flex', 
    direction === 'vertical' ? 'flex-col' : 'flex-row',
    className
  ].filter(Boolean).join(' '));

  onMount(() => {
    const elements = Array.from(container.children).filter(el => !el.classList.contains('gutter')) as HTMLElement[];
    if (elements.length < 2) return;

    splitInstance = Split(elements, {
      direction,
      sizes,
      minSize,
      gutterSize,
      gutter: (index, direction) => {
        const gutter = document.createElement('div');
        gutter.className = `gutter gutter-${direction}`;
        return gutter;
      }
    });
  });

  onDestroy(() => {
    splitInstance?.destroy();
  });
</script>

<div 
  bind:this={container} 
  class={finalClass} 
  {...rest}
>
  {@render children?.()}
</div>

<style>
  @reference "../reference.css";
</style>