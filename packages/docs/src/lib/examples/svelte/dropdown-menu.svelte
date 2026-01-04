<script lang="ts">
  import DropdownMenu from '@lanrenbang/basecoat-ultra-svelte/components/DropdownMenu.svelte';
  import Button from '@lanrenbang/basecoat-ultra-svelte/components/Button.svelte';
</script>

<div class="h-48">
  <DropdownMenu>
    {#snippet trigger({ open })}
      <Button variant="outline" aria-expanded={open}>Options</Button>
    {/snippet}
    {#snippet children()}
      <div role="heading" aria-level="2" class="px-2 py-1.5 text-sm font-semibold text-muted-foreground">Manage</div>
      <button role="menuitem" class="w-full text-left cursor-default flex items-center gap-2 rounded-sm px-2 py-1.5 text-sm hover:bg-accent hover:text-accent-foreground">Profile</button>
      <button role="menuitem" class="w-full text-left cursor-default flex items-center gap-2 rounded-sm px-2 py-1.5 text-sm hover:bg-accent hover:text-accent-foreground">Team</button>
      <hr class="my-1 border-muted">
      <button role="menuitem" class="w-full text-left cursor-default flex items-center gap-2 rounded-sm px-2 py-1.5 text-sm hover:bg-accent hover:text-accent-foreground text-destructive">Logout</button>
    {/snippet}
  </DropdownMenu>
</div>
