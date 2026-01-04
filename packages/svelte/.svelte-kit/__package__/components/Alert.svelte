<script lang="ts">
  import type { Snippet } from 'svelte';

  let {
    children,
    icon,
    title,
    variant = 'default',
    class: className = '',
    ...rest
  }: {
    children?: Snippet;
    icon?: Snippet;
    title?: Snippet | string;
    variant?: 'default' | 'destructive';
    class?: string;
    [key: string]: any;
  } = $props();

  const baseClass = $derived(variant === 'destructive' ? 'alert-destructive' : 'alert');
  const finalClass = $derived([baseClass, className]
    .filter(Boolean)
    .join(' '));
</script>

<div role="alert" class={finalClass} {...rest}>
  {#if icon}
    {@render icon()}
  {/if}
  
  {#if title}
    {#if typeof title === 'string'}
      <strong data-title>{title}</strong>
    {:else}
      <div data-title>
        {@render title()}
      </div>
    {/if}
  {/if}

  {#if children}
    <section>
      {@render children()}
    </section>
  {/if}
</div>

<style>
  @import "../../../../ultra/src/css/parts/components/alert.css";
  @reference "../reference.css";
</style>
