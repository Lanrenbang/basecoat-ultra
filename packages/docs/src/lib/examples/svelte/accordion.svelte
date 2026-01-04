<script lang="ts">
  import Accordion from '@lanrenbang/basecoat-ultra-svelte/components/Accordion.svelte';
  
  const items = [
    { title: 'Is it accessible?', content: 'Yes. It adheres to the WAI-ARIA design pattern.', open: true },
    { title: 'Is it styled?', content: 'Yes. It comes with default styles.' }
  ];
</script>

<div class="max-w-md">
  <Accordion {items} />
</div>
