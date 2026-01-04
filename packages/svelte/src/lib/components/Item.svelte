<script lang="ts">
  import type { Snippet } from 'svelte';

  let {
    children,
    icon,
    title,
    description,
    actions,
    class: className = '',
    containerClass = '',
    ...rest
  }: {
    children?: Snippet;
    icon?: Snippet;
    title?: Snippet | string;
    description?: Snippet | string;
    actions?: Snippet;
    class?: string;
    containerClass?: string;
    [key: string]: any;
  } = $props();

  const finalClass = $derived([
    'flex items-center gap-3 p-3 hover:bg-muted cursor-pointer transition-colors border-b last:border-0',
    className
  ].filter(Boolean).join(' '));
</script>

<div class={finalClass} {...rest}>
  {#if icon}
    <div class="h-8 w-8 rounded-full bg-accent flex items-center justify-center shrink-0">
      {@render icon()}
    </div>
  {/if}

  <div class="flex-1 min-w-0">
    {#if title}
      <div class="text-sm font-medium truncate">
        {#if typeof title === 'string'}
          {title}
        {:else}
          {@render title()}
        {/if}
      </div>
    {/if}
    {#if description}
      <div class="text-xs text-muted-foreground truncate">
        {#if typeof description === 'string'}
          {description}
        {:else}
          {@render description()}
        {/if}
      </div>
    {/if}
    {@render children?.()}
  </div>

  {#if actions}
    <div class="flex items-center gap-2 shrink-0">
      {@render actions()}
    </div>
  {/if}
</div>
