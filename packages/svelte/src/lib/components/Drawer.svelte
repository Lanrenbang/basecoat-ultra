<script lang="ts">
  import type { Snippet } from 'svelte';
  import { onMount } from 'svelte';
  import { fade } from 'svelte/transition';
  import { cubicOut, backOut } from 'svelte/easing';

  let {
    open = $bindable(false),
    title,
    description,
    children,
    class: className = '',
    ...rest
  }: {
    open?: boolean;
    title?: string | Snippet;
    description?: string | Snippet;
    children: Snippet;
    class?: string;
    [key: string]: any;
  } = $props();

  let container: HTMLDivElement | undefined = $state();
  let isAnimating = $state(false);

  // Custom spring-like transition for drawer content (slides up from bottom)
  function springSlideUp(node: Element, { duration = 400 }: { duration?: number } = {}) {
    return {
      duration,
      css: (t: number) => {
        const eased = backOut(t);
        const offset = (1 - eased) * 100;
        return `transform: translateY(${offset}%)`;
      }
    };
  }
  
  function slideDown(node: Element, { duration = 300 }: { duration?: number } = {}) {
    return {
      duration,
      css: (t: number) => {
        const eased = cubicOut(t);
        const offset = (1 - eased) * 100;
        return `transform: translateY(${offset}%)`;
      }
    };
  }

  function handleClickOutside(event: MouseEvent) {
    if (open && !isAnimating && event.target === container) {
      open = false;
    }
  }

  function handleKeyDown(event: KeyboardEvent) {
    if (event.key === 'Escape' && open && !isAnimating) {
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
    class="drawer fixed inset-0 z-50 flex flex-col items-end sm:items-center justify-end"
    onclick={handleClickOutside}
  >
    <div 
      class="absolute inset-0 bg-black/80"
      transition:fade={{ duration: 200 }}
    ></div>
    <div 
      class={['drawer-content', className].filter(Boolean).join(' ')}
      in:springSlideUp={{ duration: 400 }}
      out:slideDown={{ duration: 300 }}
      onintrostart={() => isAnimating = true}
      onintroend={() => isAnimating = false}
      onoutrostart={() => isAnimating = true}
      onoutroend={() => isAnimating = false}
      {...rest}
    >
      <!-- Drag handle -->
      <div class="mx-auto mt-4 h-2 w-[100px] rounded-full bg-muted cursor-grab active:cursor-grabbing"></div>
      
      <div class="p-4 text-center sm:text-left">
        {#if title}
          <h2 class="text-lg font-semibold leading-none tracking-tight">
            {#if typeof title === 'string'}{title}{:else}{@render title()}{/if}
          </h2>
        {/if}
        
        {#if description}
          <p class="text-sm text-muted-foreground mt-1.5">
            {#if typeof description === 'string'}{description}{:else}{@render description()}{/if}
          </p>
        {/if}
      </div>

      {@render children()}
    </div>
  </div>
{/if}

<style>
  @import "../../../../ultra/src/css/parts/custom/sheet.css";
  @reference "../reference.css";
  
  .drawer-content {
    @apply fixed z-50 flex flex-col bg-background border border-b-0 rounded-t-[10px] bottom-0 inset-x-0 h-auto max-h-[96vh];
  }
</style>
