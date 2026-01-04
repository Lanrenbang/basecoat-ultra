<script lang="ts">
  import type { Snippet } from 'svelte';

  let {
    children,
    variant = 'primary',
    class: className = '',
    ...rest
  }: {
    children?: Snippet;
    variant?: 'primary' | 'secondary' | 'destructive' | 'outline';
    class?: string;
    [key: string]: any;
  } = $props();

  const baseClass = 'badge';
  const variantClass = $derived(variant !== 'primary' ? `badge-${variant}` : '');
  const finalClass = $derived([baseClass, variantClass, className]
    .filter(Boolean)
    .join(' '));
</script>

<span class={finalClass} {...rest}>
  {@render children?.()}
</span>

<style>
  @import "../../../../ultra/src/css/parts/components/badge.css";
  @reference "../reference.css";
</style>
