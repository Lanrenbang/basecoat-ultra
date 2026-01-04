<script lang="ts">
  import { onMount, tick } from 'svelte';

  let {
    value = $bindable(),
    options = [],
    placeholder = 'Select an option',
    searchable = false,
    searchPlaceholder = 'Search...',
    class: className = '',
    ...rest
  }: {
    value?: any;
    options: Array<{ value: any; label: string; disabled?: boolean }>;
    placeholder?: string;
    searchable?: boolean;
    searchPlaceholder?: string;
    class?: string;
    [key: string]: any;
  } = $props();

  let open = $state(false);
  let searchTerm = $state('');
  let activeIndex = $state(-1);
  let container = $state<HTMLDivElement>();
  let filterInput = $state<HTMLInputElement>();

  const filteredOptions = $derived(
    options.filter(opt => 
      !searchTerm || opt.label.toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  const selectedLabel = $derived(
    options.find(opt => opt.value === value)?.label || placeholder
  );

  async function toggleOpen() {
    open = !open;
    if (open) {
      activeIndex = filteredOptions.findIndex(opt => opt.value === value);
      await tick();
      if (searchable) filterInput?.focus();
      
      // 自动滚动到选中项
      const selectedEl = container.querySelector('[aria-selected="true"]');
      selectedEl?.scrollIntoView({ block: 'nearest' });
    } else {
      searchTerm = '';
    }
  }

  function handleSelect(option: typeof options[0]) {
    if (option.disabled) return;
    value = option.value;
    open = false;
    searchTerm = '';
  }

  function handleKeyDown(event: KeyboardEvent) {
    if (!open) {
      if (event.key === 'ArrowDown' || event.key === 'ArrowUp' || event.key === 'Enter') {
        event.preventDefault();
        toggleOpen();
      }
      return;
    }

    switch (event.key) {
      case 'Escape':
        open = false;
        break;
      case 'Enter':
        event.preventDefault();
        if (activeIndex >= 0 && activeIndex < filteredOptions.length) {
          handleSelect(filteredOptions[activeIndex]);
        }
        break;
      case 'ArrowDown':
        event.preventDefault();
        activeIndex = (activeIndex + 1) % filteredOptions.length;
        scrollToActive();
        break;
      case 'ArrowUp':
        event.preventDefault();
        activeIndex = (activeIndex - 1 + filteredOptions.length) % filteredOptions.length;
        scrollToActive();
        break;
    }
  }

  function scrollToActive() {
    tick().then(() => {
      const activeEl = container.querySelector('.active-option');
      activeEl?.scrollIntoView({ block: 'nearest' });
    });
  }

  function handleClickOutside(event: MouseEvent) {
    if (open && container && !container.contains(event.target as Node)) {
      open = false;
      searchTerm = '';
    }
  }

  onMount(() => {
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  });
</script>

<div bind:this={container} class={['select relative', className].filter(Boolean).join(' ')} {...rest}>
  <button 
    type="button" 
    class="btn btn-outline w-full justify-between" 
    aria-expanded={open}
    aria-haspopup="listbox"
    onclick={(e) => { e.stopPropagation(); toggleOpen(); }}
    onkeydown={handleKeyDown}
  >
    <span class="truncate">{selectedLabel}</span>
    <svg class="opacity-50 shrink-0" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>
  </button>

  {#if open}
    <section 
      data-popover 
      class="absolute z-50 w-full mt-1 bg-popover border rounded-md shadow-md animate-in fade-in-0 zoom-in-95 overflow-hidden"
    >
      {#if searchable}
        <header class="flex items-center border-b px-3">
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="opacity-50 mr-2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
          <input 
            bind:this={filterInput}
            bind:value={searchTerm}
            type="text" 
            placeholder={searchPlaceholder}
            class="flex h-9 w-full bg-transparent py-2 text-sm outline-none placeholder:text-muted-foreground border-none focus:ring-0"
            onkeydown={handleKeyDown}
          />
        </header>
      {/if}

      <div role="listbox" class="p-1 max-h-48 overflow-y-auto scrollbar">
        {#if filteredOptions.length === 0}
          <div class="px-2 py-4 text-center text-sm text-muted-foreground">
            No results found.
          </div>
        {:else}
          {#each filteredOptions as option, i}
            <!-- svelte-ignore a11y_click_events_have_key_events -->
            <!-- svelte-ignore a11y_no_static_element_interactions -->
            <div 
              role="option" 
              tabindex="-1"
              data-value={option.value}
              aria-selected={value === option.value}
              aria-disabled={option.disabled}
              class={[
                'relative flex w-full cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none hover:bg-accent hover:text-accent-foreground data-[disabled=true]:opacity-50 data-[disabled=true]:pointer-events-none',
                activeIndex === i ? 'bg-accent text-accent-foreground active-option' : '',
                value === option.value ? 'bg-accent/50' : ''
              ].join(' ')}
              data-disabled={option.disabled}
              onclick={() => handleSelect(option)}
              onmouseenter={() => activeIndex = i}
            >
              {option.label}
              {#if value === option.value}
                <svg class="ml-auto size-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
              {/if}
            </div>
          {/each}
        {/if}
      </div>
    </section>
  {/if}
</div>

<style>
  @import "../../../../ultra/src/css/parts/components/select.css";
  @reference "../reference.css";
</style>