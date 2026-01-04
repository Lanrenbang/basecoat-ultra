<script lang="ts">
  let {
    orientation = 'horizontal',
    class: className = '',
    ...rest
  }: {
    orientation?: 'horizontal' | 'vertical';
    class?: string;
    [key: string]: any;
  } = $props();

  const finalClass = $derived([
    'shrink-0 bg-border',
    orientation === 'horizontal' ? 'h-[1px] w-full' : 'h-full w-[1px]',
    className
  ].filter(Boolean).join(' '));
</script>

<hr class={finalClass} aria-orientation={orientation} {...rest} />
