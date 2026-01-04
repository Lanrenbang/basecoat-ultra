<script lang="ts">
  import Select from '@lanrenbang/basecoat-ultra-svelte/components/Select.svelte';

  const options = [
    { value: 'next', label: 'Next.js' },
    { value: 'svelte', label: 'SvelteKit' },
    { value: 'nuxt', label: 'Nuxt.js' }
  ];

  let selected = $state('next'); // 默认选中第一项
</script>

<div class="h-48">
  <Select 
    placeholder="Framework" 
    {options} 
    bind:value={selected}
    class="w-56"
  />
</div>
