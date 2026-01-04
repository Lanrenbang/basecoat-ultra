<script lang="ts">
  import Input from '@lanrenbang/basecoat-ultra-svelte/components/Input.svelte';
</script>

<div class="grid gap-4 max-w-sm">
  <Input type="text" placeholder="Text Input" />
  <Input type="email" placeholder="Email Address" />
  <Input type="password" value="password" />
  <Input type="text" placeholder="Disabled" disabled />
</div>
