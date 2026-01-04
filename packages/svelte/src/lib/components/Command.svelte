<script lang="ts">
  import type { Snippet } from 'svelte';

  let {
    value = $bindable(''),
    placeholder = 'Type a command or search...',
    children,
    class: className = '',
    onselect,
    ...rest
  }: {
    value?: string;
    placeholder?: string;
    children?: Snippet;
    class?: string;
    onselect?: (value: string) => void;
    [key: string]: any;
  } = $props();

  let container: HTMLDivElement;
  let activeIndex = $state(-1);

  function handleKeyDown(event: KeyboardEvent) {
    const items = container?.querySelectorAll('[role="menuitem"]:not([aria-disabled="true"])') as NodeListOf<HTMLElement>;
    if (!items.length) return;

    switch (event.key) {
      case 'ArrowDown':
        event.preventDefault();
        activeIndex = (activeIndex + 1) % items.length;
        items[activeIndex]?.focus();
        break;
      case 'ArrowUp':
        event.preventDefault();
        activeIndex = (activeIndex - 1 + items.length) % items.length;
        items[activeIndex]?.focus();
        break;
      case 'Enter':
        if (activeIndex >= 0) {
          event.preventDefault();
          items[activeIndex]?.click();
        }
        break;
    }
  }
</script>

<!-- svelte-ignore a11y_no_static_element_interactions -->
<div 
  bind:this={container}
  class={['command bg-background flex flex-col overflow-hidden', className].filter(Boolean).join(' ')} 
  onkeydown={handleKeyDown}
  {...rest}
>
  <header class="flex items-center border-b px-3">
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="opacity-50 mr-2 shrink-0"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
    <input 
      type="text" 
      bind:value 
      {placeholder}
      class="flex h-10 w-full bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50 border-none focus:ring-0"
      onkeydown={(e) => {
        if (e.key === 'ArrowDown') {
          handleKeyDown(e);
        }
      }}
    />
  </header>
  
  <div role="menu" class="max-h-40 overflow-y-auto overflow-x-hidden p-1 scrollbar">
    {@render children?.()}
  </div>
</div>

<style>
  @import "../../../../ultra/src/css/parts/components/command.css";
  @reference "../reference.css";
</style>
