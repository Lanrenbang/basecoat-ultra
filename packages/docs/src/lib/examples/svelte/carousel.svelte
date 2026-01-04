<script lang="ts">
  import Carousel from '@lanrenbang/basecoat-ultra-svelte/components/Carousel.svelte';
  
  const items = [1, 2, 3, 4, 5];
</script>

<div class="p-12 space-y-10">
  <div>
    <h4 class="text-sm font-medium mb-4">Horizontal</h4>
    <div class="w-full max-w-sm mx-auto">
      <Carousel>
        {#snippet children()}
          {#each items as n}
            <div class="carousel-item pl-4">
              <div class="p-1 h-48 rounded-lg bg-muted flex items-center justify-center text-4xl font-semibold">{n}</div>
            </div>
          {/each}
        {/snippet}
      </Carousel>
    </div>
  </div>

  <div>
    <h4 class="text-sm font-medium mb-4">Vertical</h4>
    <div class="w-full max-w-xs mx-auto">
      <Carousel orientation="vertical" style="--carousel-height: 200px;">
        {#snippet children()}
          {#each items as n}
            <div class="carousel-item pt-4">
              <div class="p-1 h-full rounded-lg bg-muted flex items-center justify-center text-4xl font-semibold">{n}</div>
            </div>
          {/each}
        {/snippet}
      </Carousel>
    </div>
  </div>
</div>