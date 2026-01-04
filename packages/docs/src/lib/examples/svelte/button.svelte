<script lang="ts">
  import Button from '@lanrenbang/basecoat-ultra-svelte/components/Button.svelte';
</script>

<div class="flex flex-wrap gap-4 items-center">
  <Button>Default</Button>
  <Button variant="primary">Primary</Button>
  <Button variant="secondary">Secondary</Button>
  <Button variant="outline">Outline</Button>
  <Button variant="ghost">Ghost</Button>
  <Button variant="destructive">Destructive</Button>
  <Button variant="link">Link</Button>
</div>

<div class="flex flex-wrap gap-4 items-center mt-8">
  <Button size="sm">Small</Button>
  <Button size="lg">Large</Button>
  <Button size="icon" aria-label="Icon only">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m5 12 7-7 7 7"/><path d="M12 19V5"/></svg>
  </Button>
  <Button disabled>Disabled</Button>
</div>
