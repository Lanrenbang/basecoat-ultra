<script lang="ts">
  import type { Snippet } from 'svelte';

  let {
    children,
    class: className = '',
    ...rest
  }: {
    children?: Snippet | string;
    class?: string;
    [key: string]: any;
  } = $props();

  const finalClass = $derived(['kbd', className].filter(Boolean).join(' '));
</script>

<kbd class={finalClass} {...rest}>
  {#if typeof children === 'string'}
    {children}
  {:else if children}
    {@render children()}
  {/if}
</kbd>

<style>
  @import "../../../../ultra/src/css/parts/components/kbd.css";
  @reference "../reference.css";
</style>
