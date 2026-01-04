<script lang="ts">
  import Item from '@lanrenbang/basecoat-ultra-svelte/components/Item.svelte';
</script>

<div class="max-w-sm border rounded-lg overflow-hidden">
  <Item title="Transactions" description="Manage your billing history.">
    {#snippet icon()}
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
    {/snippet}
  </Item>
  <Item title="Profile" description="Update your personal information.">
    {#snippet icon()}
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
    {/snippet}
  </Item>
</div>
