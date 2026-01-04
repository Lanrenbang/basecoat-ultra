<script lang="ts">
  import Switch from '@lanrenbang/basecoat-ultra-svelte/components/Switch.svelte';
  import Label from '@lanrenbang/basecoat-ultra-svelte/components/Label.svelte';
</script>

<div class="flex flex-col gap-3">
  <div class="flex items-center gap-2">
    <Switch id="airplane" checked />
    <Label for="airplane">Airplane Mode</Label>
  </div>
  <div class="flex items-center gap-2">
    <Switch id="darkmode" />
    <Label for="darkmode">Dark Mode</Label>
  </div>
</div>
