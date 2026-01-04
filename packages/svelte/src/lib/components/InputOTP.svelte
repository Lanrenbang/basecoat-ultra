<script lang="ts">
  import type { Snippet } from 'svelte';
  
  let {
    length = 6,
    value = $bindable(''),
    separator,
    separatorIndices = [],
    class: className = '',
    ...rest
  }: {
    length?: number;
    value?: string;
    separator?: Snippet;
    separatorIndices?: number[];
    class?: string;
    [key: string]: any;
  } = $props();

  // Use a reactive object to store input refs to avoid binding_property_non_reactive warning
  let inputRefs = $state<Record<number, HTMLInputElement>>({});
  let values = $state<string[]>([]);
  
  // Helper to get input by index
  function getInput(index: number): HTMLInputElement | undefined {
    return inputRefs[index];
  }
  
  // Initialize values array when length changes
  $effect(() => {
    if (values.length !== length) {
      values = Array(length).fill('');
    }
  });

  // Sync external value to internal values
  $effect(() => {
    if (value) {
      const chars = value.split('');
      values = Array(length).fill('').map((_, i) => chars[i] || '');
    }
  });

  function updateValue() {
    value = values.join('');
  }

  function handleFocus(e: FocusEvent) {
    // Select content on focus to allow easy overwrite
    const input = e.target as HTMLInputElement;
    input.select();
  }

  function handleInput(e: Event, index: number) {
    const input = e.target as HTMLInputElement;
    const val = input.value;

    // Handle clearing (empty value)
    if (val === '') {
      values[index] = '';
      updateValue();
      return;
    }

    // If multiple chars (e.g. fast typing), take the last one
    if (val.length > 1) {
      values[index] = val.slice(-1);
      input.value = values[index];
    } else {
      values[index] = val;
    }

    updateValue();

    // Move to next if we have a value and not at the end
    if (values[index] && index < length - 1) {
      getInput(index + 1)?.focus();
    }
  }

  function handleKeyDown(e: KeyboardEvent, index: number) {
    const input = e.target as HTMLInputElement;

    if (e.key === 'Backspace') {
      e.preventDefault();
      
      if (values[index] !== '') {
        values[index] = '';
        input.value = '';
        updateValue();
      } else if (index > 0) {
        getInput(index - 1)?.focus();
      }
    } else if (e.key === 'ArrowLeft' && index > 0) {
      e.preventDefault();
      getInput(index - 1)?.focus();
    } else if (e.key === 'ArrowRight' && index < length - 1) {
      e.preventDefault();
      getInput(index + 1)?.focus();
    } else if (e.key.length === 1 && !e.ctrlKey && !e.metaKey && !e.altKey) {
      // If cursor is not selecting text and we have value, clear it first to ensure overwrite
      if (values[index] && input.selectionStart === input.selectionEnd) {
        values[index] = '';
        input.value = '';
      }
    }
  }

  function handlePaste(e: ClipboardEvent, startIndex: number) {
    e.preventDefault();
    const pasteData = e.clipboardData?.getData('text') || '';
    const chars = pasteData.split('');
    
    let currentIndex = startIndex;
    chars.forEach((char) => {
      if (currentIndex < length) {
        values[currentIndex] = char;
        const input = getInput(currentIndex);
        if (input) {
          input.value = char;
        }
        currentIndex++;
      }
    });
    
    updateValue();

    // Focus the input after the last pasted character
    if (currentIndex < length) {
      getInput(currentIndex)?.focus();
    } else {
      getInput(length - 1)?.focus();
    }
  }
  
  function getGroups(): number[][] {
    const groups: number[][] = [];
    let currentGroup: number[] = [];
    
    for (let i = 0; i < length; i++) {
      if (i > 0 && separatorIndices.includes(i)) {
        groups.push(currentGroup);
        currentGroup = [];
      }
      currentGroup.push(i);
    }
    
    if (currentGroup.length > 0) {
      groups.push(currentGroup);
    }
    
    return groups;
  }
</script>

<div 
  class={['input-otp flex items-center gap-2', className].filter(Boolean).join(' ')} 
  {...rest}
>
  {#each getGroups() as group, groupIndex}
    {#if groupIndex > 0}
      <div class="input-otp-separator text-muted-foreground">
        {#if separator}{@render separator()}{/if}
      </div>
    {/if}
    <div class="input-otp-group flex items-center">
      {#each group as inputIndex}
        <input 
          bind:this={inputRefs[inputIndex]}
          type="text" 
          inputmode="text"
          autocomplete="one-time-code"
          class="input w-10 h-10 text-center p-0" 
          maxlength="1"
          value={values[inputIndex]}
          onfocus={handleFocus}
          oninput={(e) => handleInput(e, inputIndex)}
          onkeydown={(e) => handleKeyDown(e, inputIndex)}
          onpaste={(e) => handlePaste(e, inputIndex)}
        />
      {/each}
    </div>
  {/each}
</div>

<style>
  @import "../../../../ultra/src/css/parts/custom/input-otp.css";
  @reference "../reference.css";
</style>
