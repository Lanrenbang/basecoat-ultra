<script lang="ts">
  import type { Snippet } from 'svelte';

  let {
    header,
    children,
    footer,
    caption,
    class: className = '',
    containerClass = '',
    ...rest
  }: {
    header?: Snippet;
    children?: Snippet;
    footer?: Snippet;
    caption?: Snippet | string;
    class?: string;
    containerClass?: string;
    [key: string]: any;
  } = $props();

  const finalContainerClass = $derived(['border rounded-lg overflow-hidden bg-card w-full', containerClass].filter(Boolean).join(' '));
  const finalTableClass = $derived(['table w-full', className].filter(Boolean).join(' '));
</script>

<div class={finalContainerClass}>
  <table class={finalTableClass} {...rest}>
    {#if caption}
      <caption>
        {#if typeof caption === 'string'}
          {caption}
        {:else}
          {@render caption()}
        {/if}
      </caption>
    {/if}

    {#if header}
      <thead>
        {@render header()}
      </thead>
    {/if}

    {#if children}
      <tbody>
        {@render children()}
      </tbody>
    {/if}

    {#if footer}
      <tfoot>
        {@render footer()}
      </tfoot>
    {/if}
  </table>
</div>

<style>
  @import "../../../../ultra/src/css/parts/components/table.css";
  @reference "../reference.css";
</style>
