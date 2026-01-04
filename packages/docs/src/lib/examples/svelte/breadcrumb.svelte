<script lang="ts">
  import Breadcrumb from '@lanrenbang/basecoat-ultra-svelte/components/Breadcrumb.svelte';
  
  const items = [
    { label: 'Home', href: '#' },
    { label: 'Components', href: '#' },
    { label: 'Breadcrumb', current: true }
  ];
</script>

<Breadcrumb {items} />
