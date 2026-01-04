<script lang="ts">
  import Input from '@lanrenbang/basecoat-ultra-svelte/components/Input.svelte';
  import Button from '@lanrenbang/basecoat-ultra-svelte/components/Button.svelte';
</script>

<div class="grid gap-6 max-w-sm">
  <!-- Icon Prefix -->
  <div class="relative">
    <Input class="pl-9" placeholder="Search..." />
    <div class="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none text-muted-foreground [&>svg]:size-4">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
    </div>
  </div>
  <!-- Text Suffix -->
  <div class="relative">
    <Input class="pr-12" placeholder="domain" />
    <div class="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-muted-foreground text-sm">.com</div>
  </div>
  <!-- Button Suffix -->
  <div class="relative">
    <Input class="pr-20" placeholder="Email" />
    <Button variant="secondary" size="sm" class="absolute right-1 top-1/2 -translate-y-1/2 h-7 px-2">Invite</Button>
  </div>
</div>
