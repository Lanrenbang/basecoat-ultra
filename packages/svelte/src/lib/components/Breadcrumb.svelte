<script lang="ts">
  import type { Snippet } from 'svelte';

  let {
    items = [],
    separator = '/',
    class: className = '',
    ...rest
  }: {
    items: Array<{ label: string | Snippet; href?: string; active?: boolean }>;
    separator?: string | Snippet;
    class?: string;
    [key: string]: any;
  } = $props();

  const finalClass = $derived(['flex text-sm text-muted-foreground', className].filter(Boolean).join(' '));
</script>

<nav aria-label="Breadcrumb" class={finalClass} {...rest}>
  <ol class="flex items-center gap-2">
    {#each items as item, i}
      {#if i > 0}
        <li>
          <span class="opacity-50">
            {#if typeof separator === 'string'}
              {separator}
            {:else}
              {@render separator()}
            {/if}
          </span>
        </li>
      {/if}
      <li>
        {#if item.href && !item.active}
          <a href={item.href} class="hover:text-foreground transition-colors">
            {#if typeof item.label === 'string'}
              {item.label}
            {:else}
              {@render item.label()}
            {/if}
          </a>
        {:else}
          <span class={item.active ? 'text-foreground font-medium' : ''}>
            {#if typeof item.label === 'string'}
              {item.label}
            {:else}
              {@render item.label()}
            {/if}
          </span>
        {/if}
      </li>
    {/each}
  </ol>
</nav>
