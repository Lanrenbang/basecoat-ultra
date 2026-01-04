<script lang="ts">
  let {
    value = $bindable(),
    class: className = '',
    rows = 3,
    ...rest
  }: {
    value?: any;
    class?: string;
    rows?: number;
    [key: string]: any;
  } = $props();

  const finalClass = $derived(['textarea', className].filter(Boolean).join(' '));
</script>

<textarea class={finalClass} bind:value {rows} {...rest}></textarea>

<style>
  @import "../../../../ultra/src/css/parts/components/textarea.css";
  @reference "../reference.css";
</style>
