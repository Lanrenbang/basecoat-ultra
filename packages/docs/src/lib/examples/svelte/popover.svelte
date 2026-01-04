<script lang="ts">
  import Popover from '@lanrenbang/basecoat-ultra-svelte/components/Popover.svelte';
  import Button from '@lanrenbang/basecoat-ultra-svelte/components/Button.svelte';
</script>

<div class="h-40">
  <Popover>
    {#snippet trigger()}
      <Button variant="outline">Popover</Button>
    {/snippet}
    <div class="p-4 w-64">
      <h4 class="font-medium mb-1">Popover Header</h4>
      <p class="text-sm text-muted-foreground">Basecoat popovers use vanilla JS to toggle aria-hidden.</p>
    </div>
  </Popover>
</div>
