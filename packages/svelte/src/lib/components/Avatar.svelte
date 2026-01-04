<script lang="ts">
  import type { Snippet } from 'svelte';

  let {
    src,
    alt = 'Avatar',
    fallback,
    class: className = '',
    size = 'md',
    rounded = 'full',
    ...rest
  }: {
    src?: string;
    alt?: string;
    fallback?: Snippet | string;
    class?: string;
    size?: 'sm' | 'md' | 'lg' | string;
    rounded?: 'full' | 'lg' | 'md' | 'sm' | 'none';
    [key: string]: any;
  } = $props();

  const sizeMap: Record<string, string> = {
    sm: 'size-8',
    md: 'size-10',
    lg: 'size-12'
  };

  const roundedMap: Record<string, string> = {
    full: 'rounded-full',
    lg: 'rounded-lg',
    md: 'rounded-md',
    sm: 'rounded-sm',
    none: 'rounded-none'
  };

  const sizeClass = $derived(sizeMap[size] || size);
  const roundedClass = $derived(roundedMap[rounded] || rounded);

  const finalClass = $derived([
    'avatar overflow-hidden bg-muted flex items-center justify-center shrink-0 object-cover',
    sizeClass,
    roundedClass,
    className
  ].filter(Boolean).join(' '));
</script>

<div class={finalClass} {...rest}>
  {#if src}
    <img {src} {alt} class="h-full w-full object-cover" />
  {:else if fallback}
    {#if typeof fallback === 'string'}
      <span class="text-xs font-medium uppercase">{fallback}</span>
    {:else}
      {@render fallback()}
    {/if}
  {/if}
</div>
