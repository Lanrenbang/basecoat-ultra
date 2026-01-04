<script lang="ts">
  import Button from '@lanrenbang/basecoat-ultra-svelte/components/Button.svelte';
  
  function showToast(category: string) {
    document.dispatchEvent(new CustomEvent('basecoat:toast', { 
      detail: { 
        config: { 
          title: category === 'success' ? 'Success!' : 'Warning', 
          description: category === 'success' ? 'Operation completed.' : 'Action restricted.', 
          category 
        } 
      } 
    }));
  }
</script>

<div class="flex gap-4">
  <Button variant="outline" onclick={() => showToast('success')}>Success Toast</Button>
  <Button variant="outline" onclick={() => showToast('warning')}>Warning Toast</Button>
</div>
