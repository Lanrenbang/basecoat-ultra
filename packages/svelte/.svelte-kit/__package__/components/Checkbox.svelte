<script lang="ts">
  let {
    checked = $bindable(false),
    class: className = '',
    ...rest
  }: {
    checked?: boolean;
    class?: string;
    [key: string]: any;
  } = $props();

  const finalClass = $derived(['input', className].filter(Boolean).join(' '));
</script>

<input type="checkbox" class={finalClass} bind:checked {...rest} />

<style>
  @import "../../../../ultra/src/css/parts/components/checkbox.css";
  @reference "../reference.css";
</style>
