<script lang="ts">
  let {
    group = $bindable(),
    value,
    class: className = '',
    ...rest
  }: {
    group?: any;
    value?: any;
    class?: string;
    [key: string]: any;
  } = $props();

  const finalClass = $derived(['input', className].filter(Boolean).join(' '));
</script>

<input type="radio" class={finalClass} bind:group {value} {...rest} />

<style>
  @import "../../../../ultra/src/css/parts/components/radio.css";
  @reference "../reference.css";
</style>
