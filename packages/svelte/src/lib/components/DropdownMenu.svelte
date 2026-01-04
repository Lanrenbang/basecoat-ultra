<script lang="ts">
  import type { Snippet } from 'svelte';
  import { onMount } from 'svelte';

  let {
    open = $bindable(false),
    trigger,
    children,
    align = 'start',
    class: className = '',
    ...rest
  }: {
    open?: boolean;
    trigger: Snippet<{ open: boolean }>;
    children: Snippet;
    align?: 'start' | 'end';
    class?: string;
    [key: string]: any;
  } = $props();

  let container: HTMLDivElement;

  function handleClickOutside(event: MouseEvent) {
    if (open && container && !container.contains(event.target as Node)) {
      open = false;
    }
  }

  onMount(() => {
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  });
  const finalClass = $derived(['dropdown-menu relative inline-block', className].filter(Boolean).join(' '));
</script>

<div bind:this={container} class={['dropdown-menu relative inline-block', className].filter(Boolean).join(' ')} {...rest}>
  <div 
    role="button" 
    tabindex="0"
    aria-expanded={open}
    onclick={(e) => { e.stopPropagation(); open = !open; }}
    onkeydown={(e) => e.key === 'Enter' && (open = !open)}
  >
    {@render trigger({ open })}
  </div>

  {#if open}
    <div 
      role="menu" 
      data-popover 
      data-align={align}
      class="absolute z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 mt-1"
    >
      {@render children()}
    </div>
  {/if}
</div>

<style>
  @import "../../../../ultra/src/css/parts/components/dropdown-menu.css";
  @reference "../reference.css";
</style>
