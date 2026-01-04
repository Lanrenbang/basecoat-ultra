<script lang="ts">
  import { onMount, createEventDispatcher } from 'svelte';
  import type { Snippet } from 'svelte';

  let {
    total = 1,
    current = $bindable(1),
    onPageChange,
    class: className = '',
    prevIcon,
    nextIcon,
    ...rest
  }: {
    total: number;
    current: number;
    onPageChange?: (page: number) => void;
    class?: string;
    prevIcon?: Snippet;
    nextIcon?: Snippet;
    [key: string]: any;
  } = $props();

  const dispatch = createEventDispatcher<{
    change: { page: number; previousPage: number; totalPages: number };
    'basecoat:initialized': void;
  }>();

  let containerRef: HTMLElement;

  const handlePageClick = (page: number) => {
    if (page < 1 || page > total || page === current) return;
    const previousPage = current;
    current = page;
    onPageChange?.(page);
    dispatch('change', { page: current, previousPage, totalPages: total });
  };

  // Keyboard navigation
  const handleKeydown = (e: KeyboardEvent) => {
    if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
      e.preventDefault();
      handlePageClick(current - 1);
    } else if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
      e.preventDefault();
      handlePageClick(current + 1);
    } else if (e.key === 'Home') {
      e.preventDefault();
      handlePageClick(1);
    } else if (e.key === 'End') {
      e.preventDefault();
      handlePageClick(total);
    }
  };

  // Expose API methods via element
  onMount(() => {
    if (containerRef) {
      (containerRef as any).goToPage = (page: number) => handlePageClick(page);
      (containerRef as any).getCurrentPage = () => current;
      (containerRef as any).getTotalPages = () => total;
    }
    dispatch('basecoat:initialized');
  });

  const finalClass = $derived(['pagination flex items-center gap-1', className].filter(Boolean).join(' '));
</script>

<nav 
  bind:this={containerRef}
  class={finalClass} 
  onkeydown={handleKeydown}
  {...rest}
>
  <!-- Previous -->
  <button 
    type="button"
    class="btn btn-ghost btn-icon" 
    disabled={current <= 1}
    aria-disabled={current <= 1 ? 'true' : undefined}
    onclick={() => handlePageClick(current - 1)}
    aria-label="Previous page"
    data-pagination-prev
  >
    {#if prevIcon}
      {@render prevIcon()}
    {:else}
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m15 18-6-6 6-6"/></svg>
    {/if}
  </button>

  <!-- Pages -->
  {#each Array.from({ length: total }, (_, i) => i + 1) as page}
    <button 
      type="button"
      class={['btn w-9', current === page ? 'btn-outline' : 'btn-ghost'].join(' ')}
      onclick={() => handlePageClick(page)}
      aria-current={current === page ? 'page' : undefined}
      data-pagination-page={page}
    >
      {page}
    </button>
  {/each}

  <!-- Next -->
  <button 
    type="button"
    class="btn btn-ghost btn-icon" 
    disabled={current >= total}
    aria-disabled={current >= total ? 'true' : undefined}
    onclick={() => handlePageClick(current + 1)}
    aria-label="Next page"
    data-pagination-next
  >
    {#if nextIcon}
      {@render nextIcon()}
    {:else}
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>
    {/if}
  </button>
</nav>
