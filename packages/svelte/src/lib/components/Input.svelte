<script lang="ts">
  let {
    value = $bindable(),
    type = 'text',
    class: className = '',
    ...rest
  }: {
    value?: any;
    type?: string;
    class?: string;
    [key: string]: any;
  } = $props();

  const finalClass = $derived(['input', className].filter(Boolean).join(' '));
</script>

<input {type} class={finalClass} bind:value {...rest} />

<style>
  @import "../../../../ultra/src/css/parts/components/input.css";
  @reference "../reference.css";
</style>
