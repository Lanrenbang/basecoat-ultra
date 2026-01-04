<script lang="ts">
  import type { Snippet } from 'svelte';
  import { onMount } from 'svelte';

  let {
    open = $bindable(false),
    trigger,
    children,
    side = 'bottom',
    align = 'start',
    class: className = '',
    contentClass = '',
    ...rest
  }: {
    open?: boolean;
    trigger: Snippet<{ open: boolean }>;
    children: Snippet;
    side?: 'top' | 'bottom' | 'left' | 'right';
    align?: 'start' | 'center' | 'end';
    class?: string;
    contentClass?: string;
    [key: string]: any;
  } = $props();

  let container: HTMLDivElement;

  // 点击外部关闭
  function handleClickOutside(event: MouseEvent) {
    if (open && container && !container.contains(event.target as Node)) {
      open = false;
    }
  }

  onMount(() => {
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  });
</script>

<div bind:this={container} class={['popover relative', className].filter(Boolean).join(' ')} {...rest}>
  <div 
    role="button" 
    tabindex="0" 
    aria-expanded={open}
    onclick={(e) => { e.stopPropagation(); open = !open; }}
    onkeydown={(e) => e.key === 'Enter' && (open = !open)}
    class="inline-block"
  >
    {@render trigger({ open })}
  </div>

  {#if open}
    <section 
      data-popover 
      aria-hidden={!open}
      data-side={side}
      data-align={align}
      class={['absolute z-50 p-4 bg-popover text-popover-foreground rounded-md border shadow-md outline-none animate-in fade-in-0 zoom-in-95', contentClass].filter(Boolean).join(' ')}
    >
      {@render children()}
    </section>
  {/if}
</div>

<style>
  @import "../../../../ultra/src/css/parts/components/popover.css";
  @reference "../reference.css";
</style>
