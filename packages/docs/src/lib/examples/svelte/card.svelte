<script lang="ts">
  import Card from '@lanrenbang/basecoat-ultra-svelte/components/Card.svelte';
  import Button from '@lanrenbang/basecoat-ultra-svelte/components/Button.svelte';
</script>

<Card class="max-w-md">
  {#snippet header()}
    <h2>Card Title</h2>
    <p>A short description of the card.</p>
  {/snippet}

  <p>Card content goes here. Basecoat cards use semantic HTML.</p>

  {#snippet footer()}
    <Button variant="primary" class="w-full">Get Started</Button>
  {/snippet}
</Card>
