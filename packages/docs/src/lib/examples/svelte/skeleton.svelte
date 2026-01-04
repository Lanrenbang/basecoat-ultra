<script lang="ts">
  import Skeleton from '@lanrenbang/basecoat-ultra-svelte/components/Skeleton.svelte';
</script>

<div class="flex items-center gap-4">
  <Skeleton class="h-12 w-12" rounded="full" />
  <div class="space-y-2 flex-1">
    <Skeleton class="h-4 w-3/4" />
    <Skeleton class="h-4 w-1/2" />
  </div>
</div>
