<script lang="ts">
  import InputOTP from '@lanrenbang/basecoat-ultra-svelte/components/InputOTP.svelte';
  let value1 = $state('');
  let value2 = $state('');
</script>

<div class="space-y-8">
  <div>
    <h4 class="text-sm font-medium mb-2">Default (Connected)</h4>
    <InputOTP length={6} bind:value={value1} />
  </div>
  <div>
    <h4 class="text-sm font-medium mb-2">Separated Groups</h4>
    <InputOTP length={6} bind:value={value2} separatorIndices={[3]}>
      {#snippet separator()}
        <span class="text-muted-foreground">-</span>
      {/snippet}
    </InputOTP>
  </div>
</div>
