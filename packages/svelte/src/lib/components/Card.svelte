<script lang="ts">
  import type { Snippet } from 'svelte';

  let {
    children,
    header,
    footer,
    title,
    description,
    class: className = '',
    ...rest
  }: {
    children?: Snippet;
    header?: Snippet;
    footer?: Snippet;
    title?: Snippet | string;
    description?: Snippet | string;
    class?: string;
    [key: string]: any;
  } = $props();

  const finalClass = $derived(['card', className]
    .filter(Boolean)
    .join(' '));
</script>

<article class={finalClass} {...rest}>
  {#if header || title || description}
    <header>
      {#if header}
        {@render header()}
      {:else}
        {#if title}
          {#if typeof title === 'string'}
            <h2>{title}</h2>
          {:else}
            {@render title()}
          {/if}
        {/if}
        {#if description}
          {#if typeof description === 'string'}
            <p>{description}</p>
          {:else}
            {@render description()}
          {/if}
        {/if}
      {/if}
    </header>
  {/if}

  {#if children}
    <section>
      {@render children()}
    </section>
  {/if}

  {#if footer}
    <footer>
      {@render footer()}
    </footer>
  {/if}
</article>

<style>
  @import "../../../../ultra/src/css/parts/components/card.css";
  @reference "../reference.css";
</style>
