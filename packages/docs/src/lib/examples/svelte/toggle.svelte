<script lang="ts">
  import Toggle from '@lanrenbang/basecoat-ultra-svelte/components/Toggle.svelte';
  let bold = $state(false);
  let italic = $state(true);
</script>

<div class="flex gap-4">
  <Toggle bind:pressed={bold} variant="outline" aria-label="Toggle Bold">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 12a4 4 0 0 0 0-8H6v8"/><path d="M15 20a4 4 0 0 0 0-8H6v8Z"/></svg>
  </Toggle>
  <Toggle bind:pressed={italic} variant="outline" aria-label="Toggle Italic">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="19" x2="10" y1="4" y2="4"/><line x1="14" x2="5" y1="20" y2="20"/><line x1="15" x2="9" y1="4" y2="20"/></svg>
  </Toggle>
</div>
