<script lang="ts">
  import Alert from '@lanrenbang/basecoat-ultra-svelte/components/Alert.svelte';
</script>

<div class="space-y-3 max-w-lg">
  <Alert title="Information">
    {#snippet icon()}
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>
    {/snippet}
    A new version of Basecoat is available.
  </Alert>
  <Alert variant="destructive" title="Error">
    {#snippet icon()}
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="m15 9-6 6"/><path d="m9 9 6 6"/></svg>
    {/snippet}
    Failed to sync data with the server.
  </Alert>
</div>
