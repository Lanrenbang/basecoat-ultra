<script lang="ts">
  import Command from '@lanrenbang/basecoat-ultra-svelte/components/Command.svelte';
  import Popover from '@lanrenbang/basecoat-ultra-svelte/components/Popover.svelte';
  import Button from '@lanrenbang/basecoat-ultra-svelte/components/Button.svelte';

  let open = $state(false);
  let selected = $state('ny'); // 默认选中 New York
  let selectedLabel = $state('New York');
  let searchValue = $state('');

  function handleSelect(value: string, label: string) {
    selected = value;
    selectedLabel = label;
    open = false;
    searchValue = '';
  }
</script>

<div class="h-64">
  <div class="select w-56">
    <Popover bind:open align="start">
      {#snippet trigger()}
        <Button variant="outline" class="w-full justify-between" aria-expanded={open}>
          <span>{selectedLabel}</span>
          <svg class="opacity-50" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>
        </Button>
      {/snippet}
      
      {#snippet children()}
        <div class="w-full p-0">
          <Command bind:value={searchValue} placeholder="Search timezone..." class="border-0 shadow-none bg-transparent">
            {#snippet children()}
              <div role="group">
                <div role="heading" aria-level="3" class="px-2 py-1.5 text-xs font-medium text-muted-foreground">Americas</div>
                <button role="menuitem" class="w-full text-left cursor-default flex items-center gap-2 rounded-sm px-2 py-1.5 text-sm hover:bg-accent hover:text-accent-foreground" onclick={() => handleSelect('ny', 'New York')}>
                  New York
                  {#if selected === 'ny'}
                    <svg class="ml-auto size-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
                  {/if}
                </button>
                <button role="menuitem" class="w-full text-left cursor-default flex items-center gap-2 rounded-sm px-2 py-1.5 text-sm hover:bg-accent hover:text-accent-foreground" onclick={() => handleSelect('la', 'Los Angeles')}>
                  Los Angeles
                  {#if selected === 'la'}
                    <svg class="ml-auto size-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
                  {/if}
                </button>
              </div>
              <div role="group">
                <div role="heading" aria-level="3" class="px-2 py-1.5 text-xs font-medium text-muted-foreground">Europe</div>
                <button role="menuitem" class="w-full text-left cursor-default flex items-center gap-2 rounded-sm px-2 py-1.5 text-sm hover:bg-accent hover:text-accent-foreground" onclick={() => handleSelect('ldn', 'London')}>
                  London
                  {#if selected === 'ldn'}
                    <svg class="ml-auto size-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
                  {/if}
                </button>
                <button role="menuitem" class="w-full text-left cursor-default flex items-center gap-2 rounded-sm px-2 py-1.5 text-sm hover:bg-accent hover:text-accent-foreground" onclick={() => handleSelect('par', 'Paris')}>
                  Paris
                  {#if selected === 'par'}
                    <svg class="ml-auto size-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
                  {/if}
                </button>
              </div>
            {/snippet}
          </Command>
        </div>
      {/snippet}
    </Popover>
    <input type="hidden" name="timezone" value={selected} />
  </div>
</div>
