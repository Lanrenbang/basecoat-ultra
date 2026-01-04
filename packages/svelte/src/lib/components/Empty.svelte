<script lang="ts">
  import type { Snippet } from 'svelte';

  let {
    children,
    icon,
    title,
    description,
    class: className = '',
    ...rest
  }: {
    children?: Snippet;
    icon?: Snippet;
    title?: Snippet | string;
    description?: Snippet | string;
    class?: string;
    [key: string]: any;
  } = $props();

  const finalClass = $derived([
    'p-12 border border-dashed rounded-lg bg-card text-center flex flex-col items-center justify-center',
    className
  ].filter(Boolean).join(' '));
</script>

<div class={finalClass} {...rest}>
  {#if icon}
    <div class="h-10 w-10 rounded-full bg-muted flex items-center justify-center mb-3 text-muted-foreground">
      {@render icon()}
    </div>
  {/if}

  {#if title}
    <h4 class="font-medium">
      {#if typeof title === 'string'}
        {title}
      {:else}
        {@render title()}
      {/if}
    </h4>
  {/if}

  {#if description}
    <p class="text-sm text-muted-foreground">
      {#if typeof description === 'string'}
        {description}
      {:else}
        {@render description()}
      {/if}
    </p>
  {/if}

  {#if children}
    <div class="mt-4">
      {@render children()}
    </div>
  {/if}
</div>
