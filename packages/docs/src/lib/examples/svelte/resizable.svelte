<script lang="ts">
  import Resizable from '@lanrenbang/basecoat-ultra-svelte/components/Resizable.svelte';
</script>

<div class="border rounded-lg bg-card overflow-hidden h-[300px]">
  <Resizable direction="horizontal" class="h-full flex">
    <div class="bg-muted/30 p-4 flex items-center justify-center min-w-[100px]">
      <span class="font-semibold">Sidebar</span>
    </div>
    <div class="flex-1">
      <Resizable direction="vertical" class="flex flex-col h-full">
        <div class="bg-background p-4 flex items-center justify-center h-full">
          <span class="font-semibold">Top Panel</span>
        </div>
        <div class="bg-muted/30 p-4 flex items-center justify-center h-full">
          <span class="font-semibold">Bottom Panel</span>
        </div>
      </Resizable>
    </div>
  </Resizable>
</div>
