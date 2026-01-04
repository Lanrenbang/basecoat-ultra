<script lang="ts">
  import type { Snippet } from 'svelte';
  import { setContext } from 'svelte';

  let {
    children,
    type = 'single',
    value = $bindable<string | string[] | null>(null),
    variant = 'default',
    class: className = '',
    ...rest
  }: {
    children?: Snippet;
    type?: 'single' | 'multiple';
    value?: string | string[] | null;
    variant?: 'default' | 'outline';
    class?: string;
    [key: string]: any;
  } = $props();

  // Initialize value based on type
  $effect(() => {
    if (value === null) {
      value = type === 'single' ? null : [];
    }
  });

  function handleToggle(toggleValue: string) {
    if (type === 'single') {
      value = value === toggleValue ? null : toggleValue;
    } else {
      const currentValues = Array.isArray(value) ? value : [];
      if (currentValues.includes(toggleValue)) {
        value = currentValues.filter(v => v !== toggleValue);
      } else {
        value = [...currentValues, toggleValue];
      }
    }
  }

  function isPressed(toggleValue: string): boolean {
    if (type === 'single') {
      return value === toggleValue;
    }
    return Array.isArray(value) && value.includes(toggleValue);
  }

  // Expose context for child Toggle components
  setContext('toggle-group', { 
    handleToggle, 
    isPressed, 
    getType: () => type 
  });
</script>

<div 
  class={['toggle-group', className].filter(Boolean).join(' ')} 
  role="group"
  data-type={type}
  data-variant={variant}
  {...rest}
>
  {@render children?.()}
</div>

<style>
  @import "../../../../ultra/src/css/parts/custom/toggle-group.css";
  @reference "../reference.css";
</style>
