<script lang="ts">
  import type { Snippet } from 'svelte';
  import { onMount } from 'svelte';
  import { fade } from 'svelte/transition';
  import { cubicOut, backOut } from 'svelte/easing';

  let {
    open = $bindable(false),
    side = 'right',
    title,
    description,
    children,
    class: className = '',
    ...rest
  }: {
    open?: boolean;
    side?: 'left' | 'right' | 'top' | 'bottom';
    title?: string | Snippet;
    description?: string | Snippet;
    children: Snippet;
    class?: string;
    [key: string]: any;
  } = $props();

  let container: HTMLDivElement | undefined = $state();

  // Custom spring-like transition for sheet content
  function springSlide(node: Element, { duration = 400, side: s = 'right' }: { duration?: number; side?: string } = {}) {
    const style = getComputedStyle(node);
    const transform = style.transform === 'none' ? '' : style.transform;
    
    let axis: 'x' | 'y';
    let distance: number;
    
    switch (s) {
      case 'left':
        axis = 'x';
        distance = -node.clientWidth;
        break;
      case 'right':
        axis = 'x';
        distance = node.clientWidth;
        break;
      case 'top':
        axis = 'y';
        distance = -node.clientHeight;
        break;
      case 'bottom':
        axis = 'y';
        distance = node.clientHeight;
        break;
      default:
        axis = 'x';
        distance = node.clientWidth;
    }
    
    return {
      duration,
      css: (t: number) => {
        // Use backOut easing for spring-like effect on enter
        const eased = backOut(t);
        const offset = (1 - eased) * distance;
        const translateValue = axis === 'x' ? `translateX(${offset}px)` : `translateY(${offset}px)`;
        return `transform: ${transform} ${translateValue}`;
      }
    };
  }
  
  function springSlideOut(node: Element, { duration = 300, side: s = 'right' }: { duration?: number; side?: string } = {}) {
    let axis: 'x' | 'y';
    let distance: number;
    
    switch (s) {
      case 'left':
        axis = 'x';
        distance = -node.clientWidth;
        break;
      case 'right':
        axis = 'x';
        distance = node.clientWidth;
        break;
      case 'top':
        axis = 'y';
        distance = -node.clientHeight;
        break;
      case 'bottom':
        axis = 'y';
        distance = node.clientHeight;
        break;
      default:
        axis = 'x';
        distance = node.clientWidth;
    }
    
    return {
      duration,
      css: (t: number) => {
        const eased = cubicOut(t);
        const offset = (1 - eased) * distance;
        const translateValue = axis === 'x' ? `translateX(${offset}px)` : `translateY(${offset}px)`;
        return `transform: ${translateValue}`;
      }
    };
  }

  function handleClickOutside(event: MouseEvent) {
    if (open && event.target === container) {
      open = false;
    }
  }

  function handleKeyDown(event: KeyboardEvent) {
    if (event.key === 'Escape' && open) {
      open = false;
    }
  }

  onMount(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  });

  // Lock body scroll when open
  $effect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  });
</script>

{#if open}
  <!-- svelte-ignore a11y_click_events_have_key_events -->
  <!-- svelte-ignore a11y_no_static_element_interactions -->
  <div 
    bind:this={container}
    class="sheet fixed inset-0 z-50"
    onclick={handleClickOutside}
  >
    <div 
      class="absolute inset-0 bg-black/80"
      transition:fade={{ duration: 200 }}
    ></div>
    <div 
      class={['sheet-content', className].filter(Boolean).join(' ')}
      data-side={side}
      in:springSlide={{ duration: 400, side }}
      out:springSlideOut={{ duration: 300, side }}
      {...rest}
    >
      <button 
        class="absolute right-4 top-4 opacity-70 hover:opacity-100 transition-opacity" 
        onclick={() => open = false}
        aria-label="Close"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="size-4"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
      </button>

      {#if title}
        <h2 class="text-lg font-semibold">
          {#if typeof title === 'string'}{title}{:else}{@render title()}{/if}
        </h2>
      {/if}
      
      {#if description}
        <p class="text-sm text-muted-foreground">
          {#if typeof description === 'string'}{description}{:else}{@render description()}{/if}
        </p>
      {/if}

      <div class="mt-4">
        {@render children()}
      </div>
    </div>
  </div>
{/if}

<style>
  @import "../../../../ultra/src/css/parts/custom/sheet.css";
  @reference "../reference.css";
</style>
