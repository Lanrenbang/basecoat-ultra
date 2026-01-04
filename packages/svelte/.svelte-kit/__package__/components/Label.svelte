<script lang="ts">
  import type { Snippet } from 'svelte';

  let {
    children,
    for: forId,
    class: className = '',
    ...rest
  }: {
    children?: Snippet | string;
    for?: string;
    class?: string;
    [key: string]: any;
  } = $props();

  const finalClass = $derived(['label', className].filter(Boolean).join(' '));
</script>

<label class={finalClass} for={forId} {...rest}>
  {#if typeof children === 'string'}
    {children}
  {:else if children}
    {@render children()}
  {/if}
</label>

<style>
  @import "../../../../ultra/src/css/parts/components/label.css";
  @reference "../reference.css";
</style>
