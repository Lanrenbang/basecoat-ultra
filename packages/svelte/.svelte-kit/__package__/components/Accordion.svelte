<script lang="ts">
  import type { Snippet } from 'svelte';

  let {
    items = [],
    multiple = false,
    class: className = '',
    ...rest
  }: {
    items: Array<{ title: string | Snippet; content: string | Snippet; open?: boolean }>;
    multiple?: boolean;
    class?: string;
    [key: string]: any;
  } = $props();

  // Track open state for each item - use $derived for reactive initialization
  let openStates = $state<boolean[]>([]);
  
  // Initialize open states when items change
  $effect(() => {
    if (openStates.length !== items.length) {
      openStates = items.map(item => item.open ?? false);
    }
  });

  function handleToggle(index: number) {
    if (multiple) {
      // Multiple mode: just toggle the clicked item
      openStates[index] = !openStates[index];
    } else {
      // Single mode: close all others, toggle clicked
      openStates = openStates.map((_, i) => i === index ? !openStates[index] : false);
    }
  }
</script>

<section class={['accordion', className].filter(Boolean).join(' ')} {...rest}>
  {#each items as item, index}
    <details class="group border-b last:border-b-0" open={openStates[index]}>
      <summary 
        class="w-full flex items-center justify-between py-4 text-sm font-medium hover:underline cursor-pointer outline-none"
        onclick={(e) => { e.preventDefault(); handleToggle(index); }}
      >
        {#if typeof item.title === 'string'}
          {item.title}
        {:else}
          {@render item.title()}
        {/if}
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="transition-transform duration-200 group-open:rotate-180 text-muted-foreground"><path d="m6 9 6 6 6-6"/></svg>
      </summary>
      <div class="pb-4 text-sm text-muted-foreground">
        {#if typeof item.content === 'string'}
          {item.content}
        {:else}
          {@render item.content()}
        {/if}
      </div>
    </details>
  {/each}
</section>

<style>
  @reference "../reference.css";
</style>
