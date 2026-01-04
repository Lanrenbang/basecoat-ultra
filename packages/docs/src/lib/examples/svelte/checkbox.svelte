<script lang="ts">
  import Checkbox from '@lanrenbang/basecoat-ultra-svelte/components/Checkbox.svelte';
  import Label from '@lanrenbang/basecoat-ultra-svelte/components/Label.svelte';
</script>

<div class="flex flex-col gap-3">
  <div class="flex items-center gap-2">
    <Checkbox id="terms" />
    <Label for="terms">Accept terms and conditions</Label>
  </div>
  <div class="flex items-center gap-2">
    <Checkbox id="newsletter" checked />
    <Label for="newsletter">Subscribe to newsletter</Label>
  </div>
</div>
