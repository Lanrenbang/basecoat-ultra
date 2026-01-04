<script lang="ts">
  import Tabs from '@lanrenbang/basecoat-ultra-svelte/components/Tabs.svelte';
  
  const items = [
    { id: 'general', label: 'General', content: 'General Content' },
    { id: 'settings', label: 'Settings', content: 'Settings Content' }
  ];
</script>

<Tabs {items} />
