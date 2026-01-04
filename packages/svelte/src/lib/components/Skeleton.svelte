<script lang="ts">
  let {
    class: className = '',
    rounded = 'md',
    ...rest
  }: {
    class?: string;
    rounded?: 'full' | 'lg' | 'md' | 'sm' | 'none';
    [key: string]: any;
  } = $props();

  const roundedMap: Record<string, string> = {
    full: 'rounded-full',
    lg: 'rounded-lg',
    md: 'rounded-md',
    sm: 'rounded-sm',
    none: 'rounded-none'
  };

  const finalClass = $derived([
    'skeleton bg-muted animate-pulse',
    roundedMap[rounded] || rounded,
    className
  ].filter(Boolean).join(' '));
</script>

<div class={finalClass} {...rest}></div>
