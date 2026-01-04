<script lang="ts">
  import Radio from '@lanrenbang/basecoat-ultra-svelte/components/Radio.svelte';
  import Label from '@lanrenbang/basecoat-ultra-svelte/components/Label.svelte';
</script>

<div class="flex flex-col gap-3">
  <div class="flex items-center gap-2">
    <Radio id="option-a" name="demo-radio" checked />
    <Label for="option-a">Option A</Label>
  </div>
  <div class="flex items-center gap-2">
    <Radio id="option-b" name="demo-radio" />
    <Label for="option-b">Option B</Label>
  </div>
</div>
