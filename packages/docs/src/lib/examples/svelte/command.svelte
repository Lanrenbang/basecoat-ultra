<script lang="ts">
  import Command from '@lanrenbang/basecoat-ultra-svelte/components/Command.svelte';
</script>

<Command placeholder="Search..." class="max-w-sm bg-background border rounded-lg shadow-sm">
  {#snippet children()}
    <div role="group">
      <div role="heading" aria-level="3" class="px-2 py-1.5 text-xs font-medium text-muted-foreground">Links</div>
      <button role="menuitem" class="w-full text-left cursor-default flex items-center gap-2 rounded-sm px-2 py-1.5 text-sm hover:bg-accent hover:text-accent-foreground">Documentation</button>
      <button role="menuitem" class="w-full text-left cursor-default flex items-center gap-2 rounded-sm px-2 py-1.5 text-sm hover:bg-accent hover:text-accent-foreground">GitHub Repository</button>
    </div>
    <div role="group">
      <div role="heading" aria-level="3" class="px-2 py-1.5 text-xs font-medium text-muted-foreground">Settings</div>
      <button role="menuitem" class="w-full text-left cursor-default flex items-center gap-2 rounded-sm px-2 py-1.5 text-sm hover:bg-accent hover:text-accent-foreground">Profile</button>
      <button role="menuitem" class="w-full text-left cursor-default flex items-center gap-2 rounded-sm px-2 py-1.5 text-sm hover:bg-accent hover:text-accent-foreground">Preferences</button>
      <button role="menuitem" class="w-full text-left cursor-default flex items-center gap-2 rounded-sm px-2 py-1.5 text-sm hover:bg-accent hover:text-accent-foreground">Keyboard Shortcuts</button>
    </div>
  {/snippet}
</Command>
