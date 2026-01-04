<script lang="ts">
  import type { Snippet } from 'svelte';

  let {
    open = $bindable(false),
    trigger,
    children,
    class: className = '',
    ...rest
  }: {
    open?: boolean;
    trigger: Snippet<{ open: boolean }>;
    children: Snippet;
    class?: string;
    [key: string]: any;
  } = $props();
</script>

<div class={['collapsible', className].filter(Boolean).join(' ')} {...rest}>
  <div 
    role="button" 
    tabindex="0" 
    onclick={() => open = !open} 
    onkeydown={(e) => e.key === 'Enter' && (open = !open)}
  >
    {@render trigger({ open })}
  </div>
  
  {#if open}
    <div class="collapsible-content">
      {@render children()}
    </div>
  {/if}
</div>

<style>
  @import "../../../../ultra/src/css/parts/components/collapsible.css";
  @reference "../reference.css";
</style>
