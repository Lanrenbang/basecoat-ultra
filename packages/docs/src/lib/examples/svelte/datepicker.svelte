<script lang="ts">
  import DatePicker from '@lanrenbang/basecoat-ultra-svelte/components/DatePicker.svelte';
  import Label from '@lanrenbang/basecoat-ultra-svelte/components/Label.svelte';
  
  let zhDate = $state('');
  let zhTwDate = $state('');
  let enFullDate = $state('');
  let enShortDate = $state('');
</script>

<div class="flex flex-col gap-6">
  <div class="max-w-xs">
    <Label>Simplified Chinese</Label>
    <DatePicker bind:value={zhDate} locale="zh" placeholder="选择日期" />
  </div>
  <div class="max-w-xs">
    <Label>Traditional Chinese</Label>
    <DatePicker bind:value={zhTwDate} locale="zh-tw" placeholder="選擇日期" />
  </div>
  <div class="max-w-xs">
    <Label>English (Full Names)</Label>
    <DatePicker bind:value={enFullDate} locale="en-full" placeholder="Select date" />
  </div>
  <div class="max-w-xs">
    <Label>English (Abbreviated)</Label>
    <DatePicker bind:value={enShortDate} locale="en-short" placeholder="Select date" />
  </div>
  <div class="max-w-xs">
    <Label>Inline Calendar</Label>
    <DatePicker inline locale="zh" />
  </div>
</div>
