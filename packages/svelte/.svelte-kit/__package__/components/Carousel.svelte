<script lang="ts">
  import type { Snippet } from 'svelte';
  import { onMount } from 'svelte';

  let {
    orientation = 'horizontal',
    class: className = '',
    children,
    showButtons = true,
    ...rest
  }: {
    orientation?: 'horizontal' | 'vertical';
    class?: string;
    children?: Snippet;
    showButtons?: boolean;
    [key: string]: any;
  } = $props();

  let scrollContainer: HTMLDivElement;
  let canScrollPrev = $state(false);
  let canScrollNext = $state(true);

  function getScrollAmount() {
    if (!scrollContainer) return 0;
    const firstItem = scrollContainer.querySelector('.carousel-item') as HTMLElement;
    if (!firstItem) {
      return orientation === 'vertical' ? scrollContainer.offsetHeight : scrollContainer.offsetWidth;
    }
    
    const style = window.getComputedStyle(firstItem);
    if (orientation === 'vertical') {
      const itemHeight = firstItem.offsetHeight;
      const marginTop = parseFloat(style.marginTop);
      const marginBottom = parseFloat(style.marginBottom);
      return itemHeight + marginTop + marginBottom;
    } else {
      const itemWidth = firstItem.offsetWidth;
      const marginLeft = parseFloat(style.marginLeft);
      const marginRight = parseFloat(style.marginRight);
      return itemWidth + marginLeft + marginRight;
    }
  }

  function scroll(direction: 'prev' | 'next') {
    if (!scrollContainer) return;
    const amount = getScrollAmount();
    const value = direction === 'next' ? amount : -amount;
    
    if (orientation === 'vertical') {
      scrollContainer.scrollBy({ top: value, behavior: 'smooth' });
    } else {
      scrollContainer.scrollBy({ left: value, behavior: 'smooth' });
    }
  }

  function updateButtons() {
    if (!scrollContainer) return;
    
    const { scrollLeft, scrollTop, scrollWidth, scrollHeight, clientWidth, clientHeight } = scrollContainer;
    
    if (orientation === 'vertical') {
      canScrollPrev = scrollTop > 1;
      canScrollNext = scrollTop < scrollHeight - clientHeight - 1;
    } else {
      canScrollPrev = scrollLeft > 1;
      canScrollNext = scrollLeft < scrollWidth - clientWidth - 1;
    }
  }

  onMount(() => {
    updateButtons();
    
    // Use ResizeObserver to update buttons when content changes
    const resizeObserver = new ResizeObserver(updateButtons);
    resizeObserver.observe(scrollContainer);
    
    return () => resizeObserver.disconnect();
  });
</script>

<div 
  class={['carousel relative', className].filter(Boolean).join(' ')} 
  data-orientation={orientation}
  {...rest}
>
  {#if showButtons && orientation === 'horizontal'}
    <button 
      class="carousel-previous absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 bg-background border rounded-full p-2 shadow-sm z-10 disabled:opacity-50"
      onclick={() => scroll('prev')}
      disabled={!canScrollPrev}
      aria-label="Previous slide"
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m15 18-6-6 6-6"/></svg>
    </button>
  {/if}

  <div 
    bind:this={scrollContainer}
    class={[
      'carousel-content flex overflow-hidden scroll-smooth', 
      orientation === 'vertical' ? 'flex-col -mt-4 pb-4' : 'flex-row -ml-4'
    ].join(' ')}
    onscroll={updateButtons}
  >
    {@render children?.()}
  </div>

  {#if showButtons && orientation === 'horizontal'}
    <button 
      class="carousel-next absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 bg-background border rounded-full p-2 shadow-sm z-10 disabled:opacity-50"
      onclick={() => scroll('next')}
      disabled={!canScrollNext}
      aria-label="Next slide"
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>
    </button>
  {/if}

  {#if showButtons && orientation === 'vertical'}
    <button 
      class="carousel-previous absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-background border rounded-full p-2 shadow-sm z-10 disabled:opacity-50"
      onclick={() => scroll('prev')}
      disabled={!canScrollPrev}
      aria-label="Previous slide"
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m18 15-6-6-6 6"/></svg>
    </button>
    <button 
      class="carousel-next absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 bg-background border rounded-full p-2 shadow-sm z-10 disabled:opacity-50"
      onclick={() => scroll('next')}
      disabled={!canScrollNext}
      aria-label="Next slide"
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>
    </button>
  {/if}
</div>

<style>
  @import "../../../../ultra/src/css/parts/custom/carousel.css";
  @reference "../reference.css";
</style>
