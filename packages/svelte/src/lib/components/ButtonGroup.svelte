<script lang="ts">
  import type { Snippet } from 'svelte';

  let {
    children,
    orientation = 'horizontal',
    class: className = '',
    ...rest
  }: {
    children?: Snippet;
    orientation?: 'horizontal' | 'vertical';
    class?: string;
    [key: string]: any;
  } = $props();

  const finalClass = $derived(['button-group', className].filter(Boolean).join(' '));
</script>

<div class={finalClass} data-orientation={orientation} {...rest}>
  {@render children?.()}
</div>

<style>
  @import "../../../../ultra/src/css/parts/components/button-group.css";
  @reference "../reference.css";
</style>
