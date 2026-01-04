<script lang="ts">
  import Slider from '@lanrenbang/basecoat-ultra-svelte/components/Slider.svelte';
  let value = $state(50);
</script>

<Slider bind:value min={0} max={100} step={1} class="w-1/2" />
