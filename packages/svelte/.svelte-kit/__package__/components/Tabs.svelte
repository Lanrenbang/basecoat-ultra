<script lang="ts">
  import type { Snippet } from 'svelte';

  let {
    items = [],
    activeTab = $bindable(''),
    class: className = '',
    contentClass = '',
    ...rest
  }: {
    items: Array<{ id: string; label: string | Snippet; content: string | Snippet }>;
    activeTab?: string;
    class?: string;
    contentClass?: string;
    [key: string]: any;
  } = $props();

  // Set first item as active when items change and no active tab
  $effect(() => {
    if (!activeTab && items.length > 0) {
      activeTab = items[0].id;
    }
  });

  function handleKeyDown(event: KeyboardEvent) {
    const currentIndex = items.findIndex(item => item.id === activeTab);
    if (currentIndex === -1) return;

    let nextIndex: number;

    switch (event.key) {
      case 'ArrowRight':
        nextIndex = (currentIndex + 1) % items.length;
        break;
      case 'ArrowLeft':
        nextIndex = (currentIndex - 1 + items.length) % items.length;
        break;
      case 'Home':
        nextIndex = 0;
        break;
      case 'End':
        nextIndex = items.length - 1;
        break;
      default:
        return;
    }

    event.preventDefault();
    activeTab = items[nextIndex].id;
    
    const buttons = (event.currentTarget as HTMLElement).querySelectorAll('button');
    (buttons[nextIndex] as HTMLElement).focus();
  }
</script>

<div class={['tabs', className].filter(Boolean).join(' ')} {...rest}>
  <!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
  <div role="tablist" onkeydown={handleKeyDown} tabindex="0">
    {#each items as item}
      <button 
        role="tab" 
        aria-controls={item.id} 
        aria-selected={activeTab === item.id} 
        tabindex={activeTab === item.id ? 0 : -1}
        onclick={() => activeTab = item.id}
      >
        {#if typeof item.label === 'string'}
          {item.label}
        {:else}
          {@render item.label()}
        {/if}
      </button>
    {/each}
  </div>

  {#each items as item}
    <section 
      id={item.id} 
      role="tabpanel" 
      hidden={activeTab !== item.id}
      class={['p-4 border rounded-md mt-4', contentClass].filter(Boolean).join(' ')}
    >
      {#if activeTab === item.id}
        {#if typeof item.content === 'string'}
          {item.content}
        {:else}
          {@render item.content()}
        {/if}
      {/if}
    </section>
  {/each}
</div>

<style>
  @import "../../../../ultra/src/css/parts/components/tabs.css";
  @reference "../reference.css";
</style>
