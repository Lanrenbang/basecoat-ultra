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

<input type="checkbox" role="switch" class={finalClass} bind:checked {...rest} />

<style>
  @import "../../../../ultra/src/css/parts/components/switch.css";
  @reference "../reference.css";
</style>
