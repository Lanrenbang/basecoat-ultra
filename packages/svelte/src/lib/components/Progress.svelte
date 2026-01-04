<script lang="ts">
  let {
    value = 0,
    max = 100,
    class: className = '',
    ...rest
  }: {
    value?: number;
    max?: number;
    class?: string;
    [key: string]: any;
  } = $props();

  const percentage = $derived(Math.min(Math.max((value / max) * 100, 0), 100));
</script>

<div class={['progress h-2 bg-muted rounded-full overflow-hidden w-full', className].filter(Boolean).join(' ')} {...rest}>
  <div 
    class="bg-primary h-full transition-all duration-300 ease-in-out" 
    role="progressbar" 
    aria-valuenow={value} 
    aria-valuemin="0" 
    aria-valuemax={max}
    style="width: {percentage}%"
  ></div>
</div>
