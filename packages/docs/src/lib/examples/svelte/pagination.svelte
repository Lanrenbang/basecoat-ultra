<script lang="ts">
  import Pagination from '@lanrenbang/basecoat-ultra-svelte/components/Pagination.svelte';
  let current = $state(1);
</script>

<Pagination total={5} bind:current />
