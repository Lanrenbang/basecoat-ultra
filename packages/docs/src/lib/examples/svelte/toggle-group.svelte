<script lang="ts">
  import ToggleGroup from '@lanrenbang/basecoat-ultra-svelte/components/ToggleGroup.svelte';
  import Toggle from '@lanrenbang/basecoat-ultra-svelte/components/Toggle.svelte';
  
  let singleValue = $state<string | null>('B');
  let multipleValue = $state<string[]>(['Bold']);
</script>

<div class="space-y-6">
  <div>
    <h4 class="text-sm font-medium mb-2">Single (Merged)</h4>
    <ToggleGroup type="single" bind:value={singleValue} class="toggle-group-outline">
      {#snippet children()}
        <Toggle value="B">B</Toggle>
        <Toggle value="I">I</Toggle>
        <Toggle value="U">U</Toggle>
      {/snippet}
    </ToggleGroup>
  </div>
  <div>
    <h4 class="text-sm font-medium mb-2">Multiple (Merged)</h4>
    <ToggleGroup type="multiple" bind:value={multipleValue} class="toggle-group-outline">
      {#snippet children()}
        <Toggle value="Bold">Bold</Toggle>
        <Toggle value="Italic">Italic</Toggle>
        <Toggle value="Underline">Underline</Toggle>
      {/snippet}
    </ToggleGroup>
  </div>
</div>
