<script lang="ts">
  import Tooltip from '@lanrenbang/basecoat-ultra-svelte/components/Tooltip.svelte';
  import Button from '@lanrenbang/basecoat-ultra-svelte/components/Button.svelte';
</script>

<div class="flex gap-4">
  <Tooltip content="Settings" side="top">
    <Button variant="outline" size="sm">Top</Button>
  </Tooltip>
  <Tooltip content="User profile" side="bottom">
    <Button variant="outline" size="sm">Bottom</Button>
  </Tooltip>
</div>
