<script lang="ts">
  import type { Snippet } from 'svelte';
  import { getContext } from 'svelte';

  let {
    children,
    pressed = $bindable(false),
    value = '',
    variant = 'outline',
    size = 'md',
    class: className = '',
    ...rest
  }: {
    children?: Snippet;
    pressed?: boolean;
    value?: string;
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'link' | 'destructive';
    size?: 'sm' | 'md' | 'lg' | 'icon';
    class?: string;
    [key: string]: any;
  } = $props();

  // Check if we're inside a ToggleGroup
  const groupContext = getContext<{
    handleToggle: (value: string) => void;
    isPressed: (value: string) => boolean;
    getType: () => 'single' | 'multiple';
  } | undefined>('toggle-group');

  const isInGroup = !!groupContext;

  // Determine pressed state - from group context or local state
  const isPressed = $derived(
    isInGroup && value ? groupContext!.isPressed(value) : pressed
  );

  function handleClick() {
    if (isInGroup && value) {
      groupContext!.handleToggle(value);
    } else {
      pressed = !pressed;
    }
  }

  const baseClass = 'btn toggle';
  const finalClass = $derived([
    baseClass, 
    variant !== 'primary' ? `btn-${variant}` : '',
    size !== 'md' ? `btn-${size}` : '',
    className
  ].filter(Boolean).join(' '));
</script>

<button 
  type="button" 
  class={finalClass} 
  aria-pressed={isPressed} 
  data-value={value || undefined}
  onclick={handleClick}
  {...rest}
>
  {@render children?.()}
</button>

<style>
  @import "../../../../ultra/src/css/parts/components/button.css";
  @import "../../../../ultra/src/css/parts/custom/toggle-group.css";
  @reference "../reference.css";
</style>
